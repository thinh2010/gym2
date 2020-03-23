<?php

namespace App\Http\Controllers\Api;

use App\Item;
use App\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Item::orderBy('id')->get());
    }
    
    /**
     * Display a listing of the enabled items.
     *
     * @return \Illuminate\Http\Response
     */
    public function enabledItems()
    {
        return response()->json(Item::orderBy('id')->where('is_enabled', true)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Page $page)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'slug' => 'unique:items'
        ]);

        $data = $request->all();

        $data['slug'] = $this->make_slug($data['title']);

        $item = Item::create($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $item_image_path = config('constant.item_image_path');
            if (!File::isDirectory($item_image_path)) {
                File::makeDirectory($item_image_path, 0775, true);
            }
            $data['image']->move($item_image_path, $image_file_name);
            $item->image = '/' . $item_image_path . '/' . $image_file_name;
            $item->save();
        }

        return response()->json(['message' => 'success', 'data' => $item->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($page, Item $item)
    {
        return response()->json($item);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($item)
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
    public function update(Request $request, $page, $id)
    {
        // $this->validate($request, [
        //     'title' => 'required|max:255',
        // ]);

        $data = $request->all();
        $item = Item::find($id);
        $oldImage = $item->image;
        
        $item->fill($data);

        if (isset($data['image'])) {
            $image_file_name = time().rand(11111,99999).$data['image']->getClientOriginalName();
            $item_image_path = config('constant.item_image_path');
            // die(var_dump($item_file_path));
            if (!File::isDirectory($item_image_path)) {
                File::makeDirectory($item_image_path, 0775, true);
            }
            $data['image']->move($item_image_path, $image_file_name);
            $item->image = '/' . $item_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        $item->save();
        return response()->json(['message' => 'success', 'data' => $item->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * re-order items
     *
     * @param  array  $data contains list of ItemContent
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request, Page $page) {
        $data = $request->all();
        // save the order of item contents
        if (count($data) > 0) {
            foreach ($data as $key => $item) {
                $entity = Item::find($item['id']);
                $entity->fill(['sort' => $item['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
