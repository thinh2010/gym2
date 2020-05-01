<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleDetailResource;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Builder;

class ArticleController extends Controller
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
        $articleQuery = Article::query();
        $limit = Arr::get($searchParams, 'limit', static::ITEM_PER_PAGE);
        $keyword = Arr::get($searchParams, 'keyword', '');
        $type = Arr::get($searchParams, 'type', '');

        if (!empty($keyword)) {
            $articleQuery->where('title', 'LIKE', '%' . $keyword . '%');
        }

        if (!empty($type)) {
            $articleQuery->whereHas('category', function (Builder $query) use ($type) {
                                    $query->where('type', $type);
                                });
        }

        // if ($display == 'tree') {
        //     return $articleQuery->get()->toTree();
        // }

        // return $articleQuery->whereNull('category_id')->with('children')->get();

        return ArticleResource::collection($articleQuery->paginate($limit));
    }
    
    /**
     * Display a listing of the enabled categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function enabledArticles()
    {
        return ArticleResource::collection(Article::orderBy('id')->where('is_enabled', true)->get());
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
                    $article_file_path = config('constant.article_file_path');
                    if (!File::isDirectory($article_file_path)) {
                        File::makeDirectory($article_file_path, 0775, true);
                    }
                    $option->move($article_file_path, $fileName);
                    $options->{$key} = '/' . $article_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }

        $article = Article::create($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $article_image_path = config('constant.article_image_path');
            if (!File::isDirectory($article_image_path)) {
                File::makeDirectory($article_image_path, 0775, true);
            }
            $data['image']->move($article_image_path, $image_file_name);
            $article->image = '/' . $article_image_path . '/' . $image_file_name;
            $article->save();
        }

        return response()->json(['message' => 'success', 'data' => $article->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return new ArticleDetailResource($article);
        // return response()->json(Article::with('articleContents')->findOrFail($id));
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
        $article = Article::find($id);
        $oldImage = $article->image;

        if (empty($data['slug'])) {
            $data['slug'] = $this->make_slug($data['title']);
        }

        if (isset($data['options']) && !empty($data['options'])) {
            $options = $article->options ? $article->options : (object)[];
            foreach ($data['options'] as $key => $option) {
                $tmp = [];
                if ($key == 'video' || $key == 'file' || $key == 'image') {
                    $fileName = time().rand(11111,99999).$option->getClientOriginalName();
                    $article_file_path = config('constant.article_file_path');
                    if (!File::isDirectory($article_file_path)) {
                        File::makeDirectory($article_file_path, 0775, true);
                    }
                    $option->move($article_file_path, $fileName);
                    $options->{$key} = '/' . $article_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }
        
        
        $article->fill($data);

        if (isset($data['image']) && is_uploaded_file($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $article_image_path = config('constant.article_image_path');
            if (!File::isDirectory($article_image_path)) {
                File::makeDirectory($article_image_path, 0775, true);
            }
            $data['image']->move($article_image_path, $image_file_name);
            $article->image = '/' . $article_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        $article->save();
        return response()->json(['message' => 'success', 'data' => $article->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * re-order categories
     *
     * @param  array  $data contains list of ArticleContent
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request) {
        $data = $request->all();
        // save the order of article contents
        if (count($data) > 0) {
            foreach ($data as $key => $article) {
                $entity = Article::find($article['id']);
                $entity->fill(['sort' => $article['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
