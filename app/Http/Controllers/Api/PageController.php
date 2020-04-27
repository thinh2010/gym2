<?php

namespace App\Http\Controllers\Api;

use App\Page;
use App\Block;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\PageResource;
use App\Http\Resources\PageDetailResource;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PageResource::collection(Page::whereNull('parent_id')->get());
        // return response()->json(Page::orderBy('id')->get());
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
            'slug' => 'unique:pages'
        ]);

        $data = $request->only(
            'title',
            'slug'
        );

        if (empty($data['slug'])) {
            $data['slug'] = $this->make_slug($data['title']);
        }

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $page_image_path = config('constant.page_image_path');
            if (!File::isDirectory($page_image_path)) {
                File::makeDirectory($page_image_path, 0775, true);
            }
            $data['image']->move($page_image_path, $image_file_name);
            $page->image = '/' . $page_image_path . '/' . $image_file_name;
            $page->save();
        }

        $page = Page::create($data);

        return response()->json(['message' => 'success', 'data' => $page->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        return new PageDetailResource($page);
        // return response()->json($page->load('blocks')->load('items'));
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
        $this->validate($request, [
            'title' => 'required|max:255',
            'slug' => 'unique:pages,slug,'.$id
        ]);

        $data = $request->all();
        $page = Page::find($id);
        $oldImage = $page->image;

        $page->fill($data);

        if (isset($data['image'])) {

            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $page_image_path = config('constant.page_image_path');
            if (!File::isDirectory($page_image_path)) {
                File::makeDirectory($page_image_path, 0775, true);
            }
            $data['image']->move($page_image_path, $image_file_name);
            
            $page->image = '/' . $page_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }
        $page->save();

        return response()->json(['message' => 'success', 'data' => $page->jsonSerialize()]);
    }

    public function addBlock(Page $page, Block $block) 
    {
        $numberOfBlocks = $page->blocks()->count();
        $page->blocks()->attach($block, ['sort' => $numberOfBlocks + 1]);

        return response()->json(['message' => 'success']);
    }

    public function removeBlock(Page $page, Block $block) 
    {
        $block->pages()->detach($page->id);

        return response()->json(['message' => 'success']);
    }

    public function updateBlockOrder(Request $request, Page $page) {
        $data = $request->all();
        foreach ($data as $key => $value) {
            $block = $page->blocks()->wherePivot('block_id', $value['id'])->first();
            $page->blocks()->updateExistingPivot($block, ['sort' => $value['sort']]);
        }
        return response()->json(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $page->delete();

        return response()->json(['message' => 'success']);
    }
}
