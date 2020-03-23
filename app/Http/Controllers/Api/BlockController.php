<?php

namespace App\Http\Controllers\Api;

use App\Block;
use App\BlockContent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class BlockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Block::orderBy('id')->get());
    }
    
    /**
     * Display a listing of the enabled blocks.
     *
     * @return \Illuminate\Http\Response
     */
    public function enabledBlocks()
    {
        return response()->json(Block::orderBy('id')->where('is_enabled', true)->get());
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

        if (isset($data['options']) && !empty($data['options'])) {
            $options = (object)[];
            foreach ($data['options'] as $key => $option) {
                $tmp = [];
                if ($key == 'video' || $key == 'file' || $key == 'image') {
                    $fileName = time().rand(11111,99999).$option->getClientOriginalName();
                    $block_file_path = config('constant.block_file_path');
                    if (!File::isDirectory($block_file_path)) {
                        File::makeDirectory($block_file_path, 0775, true);
                    }
                    $option->move($block_file_path, $fileName);
                    $options->{$key} = '/' . $block_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }

        $block = Block::create($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $block_image_path = config('constant.block_image_path');
            if (!File::isDirectory($block_image_path)) {
                File::makeDirectory($block_image_path, 0775, true);
            }
            $data['image']->move($block_image_path, $image_file_name);
            $block->image = '/' . $block_image_path . '/' . $image_file_name;
            $block->save();
        }

        return response()->json(['message' => 'success', 'data' => $block->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Block::with('blockContents')->findOrFail($id));
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
        $block = Block::find($id);
        $oldImage = $block->image;

        if (isset($data['options']) && !empty($data['options'])) {
            $options = $block->options ? $block->options : (object)[];
            foreach ($data['options'] as $key => $option) {
                $tmp = [];
                if ($key == 'video' || $key == 'file' || $key == 'image') {
                    $fileName = time().rand(11111,99999).$option->getClientOriginalName();
                    $block_file_path = config('constant.block_file_path');
                    if (!File::isDirectory($block_file_path)) {
                        File::makeDirectory($block_file_path, 0775, true);
                    }
                    $option->move($block_file_path, $fileName);
                    $options->{$key} = '/' . $block_file_path . '/' . $fileName;
                } else {
                    $options->{$key} = $option;
                }
            }
            $data['options'] = json_encode($options);
        }
        
        
        $block->fill($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $block_image_path = config('constant.block_image_path');
            if (!File::isDirectory($block_image_path)) {
                File::makeDirectory($block_image_path, 0775, true);
            }
            $data['image']->move($block_image_path, $image_file_name);
            $block->image = '/' . $block_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        $block->save();
        return response()->json(['message' => 'success', 'data' => $block->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Block  $block
     * @return \Illuminate\Http\Response
     */
    public function destroy(Block $block)
    {
        $block->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * re-order blocks
     *
     * @param  array  $data contains list of BlockContent
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request) {
        $data = $request->all();
        // save the order of block contents
        if (count($data) > 0) {
            foreach ($data as $key => $block) {
                $entity = BlockContent::find($block['id']);
                $entity->fill(['sort' => $block['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
