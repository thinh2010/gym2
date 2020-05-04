<?php

namespace App\Http\Controllers\Api;

use App\Block;
use App\BlockContent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\BlockContentDetailResource;

class BlockContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(BlockContent::orderBy('id')->get());
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
    public function store(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
        ]);

        $data = $request->all();
        $block = Block::find($id);
        $data['sort'] = $block->blockContents()->count() + 1;

        // $blockContent = BlockContent::create($data);

        $blockContent = $block->blockContents()->create($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $block_content_image_path = config('constant.block_content_image_path');
            if (!File::isDirectory($block_content_image_path)) {
                File::makeDirectory($block_content_image_path, 0775, true);
            }
            $data['image']->move($block_content_image_path, $image_file_name);
            $blockContent->image = '/' . $block_content_image_path . '/' . $image_file_name;
            $blockContent->save();
        }

        return response()->json(['message' => 'success', 'data' => $blockContent->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(BlockContent $blockContent)
    {
        return new BlockContentDetailResource($blockContent);
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
        $blockContent = BlockContent::find($id);
        $oldImage = $blockContent->image;

        $blockContent->fill($data);

        if (isset($data['image']) && is_uploaded_file($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $block_content_image_path = config('constant.block_content_image_path');
            if (!File::isDirectory($block_content_image_path)) {
                File::makeDirectory($block_content_image_path, 0775, true);
            }
            $data['image']->move($block_content_image_path, $image_file_name);
            $blockContent->image = '/' . $block_content_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        $blockContent->save();
        return response()->json(['message' => 'success', 'data' => $blockContent->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  BlockContent  $blockContent
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlockContent $blockContent)
    {
        $blockContent->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  array  $data contains list of BlockContent
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request) {
        $data = $request->all();
        // save the order of block contents
        if (count($data) > 0) {
            foreach ($data as $key => $blockContent) {
                $entity = BlockContent::find($blockContent['id']);
                $entity->fill(['sort' => $blockContent['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
