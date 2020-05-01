<?php

namespace App\Http\Controllers\Api;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryDetailResource;
use Illuminate\Support\Arr;

class CategoryController extends Controller
{
    const ITEM_PER_PAGE = 15;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchParams = $request->all();
        $categoryQuery = Category::query();
        $limit = Arr::get($searchParams, 'limit', static::ITEM_PER_PAGE);
        $type = Arr::get($searchParams, 'type', '');
        $keyword = Arr::get($searchParams, 'keyword', '');
        $display = Arr::get($searchParams, 'display', '');

        if (!empty($type)) {
            $categoryQuery->where('type', $type);
        }

        if (!empty($keyword)) {
            $categoryQuery->where('title', 'LIKE', '%' . $keyword . '%');
        }

        // if ($display == 'tree') {
        //     return $categoryQuery->get()->toTree();
        // }

        // return $categoryQuery->whereNull('parent_id')->with('children')->get();

        return CategoryResource::collection($categoryQuery->paginate($limit));
    }
    
    /**
     * Display a listing of the enabled categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function enabledCategorys()
    {
        return CategoryResource::collection(Category::orderBy('id')->where('is_enabled', true)->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
        ]);

        $data = $request->all();

        if (empty($data['slug'])) {
            $data['slug'] = $this->make_slug($data['title']);
        }

        if (isset($data['options']) && !empty($data['options'])) {
            $options = (object)[];
            foreach ($data['options'] as $key => $option) {
                $tmp = [];
                if ($key == 'video' || $key == 'file' || $key == 'image') {
                    $fileName = time().rand(11111,99999).$option->getClientOriginalName();
                    $category_file_path = config('constant.category_file_path');
                    if (!File::isDirectory($category_file_path)) {
                        File::makeDirectory($category_file_path, 0775, true);
                    }
                    $option->move($category_file_path, $fileName);
                    $options->{$key} = '/' . $category_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }

        $category = Category::create($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $category_image_path = config('constant.category_image_path');
            if (!File::isDirectory($category_image_path)) {
                File::makeDirectory($category_image_path, 0775, true);
            }
            $data['image']->move($category_image_path, $image_file_name);
            $category->image = '/' . $category_image_path . '/' . $image_file_name;
            $category->save();
        }

        if (isset($data['parent_id']) && $data['parent_id'] !== '') {
            $parent = Category::find($data['parent_id']);
            $parent->appendNode($category);
        }

        return response()->json(['message' => 'success', 'data' => $category->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryDetailResource($category);
        // return response()->json(Category::with('categoryContents')->findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $this->validate($request, [
        //     'title' => 'required|max:255',
        // ]);

        $data = $request->all();
        $category = Category::find($id);
        $oldImage = $category->image;

        if (empty($data['slug'])) {
            $data['slug'] = $this->make_slug($data['title']);
        }

        if (isset($data['options']) && !empty($data['options'])) {
            $options = $category->options ? $category->options : (object)[];
            foreach ($data['options'] as $key => $option) {
                $tmp = [];
                if ($key == 'video' || $key == 'file' || $key == 'image') {
                    $fileName = time().rand(11111,99999).$option->getClientOriginalName();
                    $category_file_path = config('constant.category_file_path');
                    if (!File::isDirectory($category_file_path)) {
                        File::makeDirectory($category_file_path, 0775, true);
                    }
                    $option->move($category_file_path, $fileName);
                    $options->{$key} = '/' . $category_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }
        
        
        $category->fill($data);

        if (isset($data['image']) && is_uploaded_file($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $category_image_path = config('constant.category_image_path');
            if (!File::isDirectory($category_image_path)) {
                File::makeDirectory($category_image_path, 0775, true);
            }
            $data['image']->move($category_image_path, $image_file_name);
            $category->image = '/' . $category_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        $category->save();

        if ($data['parent_id'] !== '') {
            $parent = Category::find($data['parent_id']);
            $parent->appendNode($category);
        }
        return response()->json(['message' => 'success', 'data' => $category->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * re-order categories
     *
     * @param  array  $data contains list of CategoryContent
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request) {
        $data = $request->all();
        // save the order of category contents
        if (count($data) > 0) {
            foreach ($data as $key => $category) {
                $entity = Category::find($category['id']);
                $entity->fill(['sort' => $category['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
