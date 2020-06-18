<?php

namespace App\Http\Controllers\Api;

use App\MenuItem;
use App\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\MenuItemResource;
use App\Http\Resources\MenuItemDetailResource;
use Illuminate\Support\Arr;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Menu $menu)
    {
        return MenuItemResource::collection($menu->items()->withDepth()->defaultOrder()->get());
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
    public function store(Request $request, Menu $menu)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'type' => 'required|max:255',
            'link' => 'required|max:255',
        ]);

        $data = $request->all();
        $data['menu_id'] = $menu->id;

        $menuItem = MenuItem::create($data);

        if (isset($data['parent_id']) && $data['parent_id'] !== '') {
            $parent = MenuItem::find($data['parent_id']);
            $parent->appendNode($menuItem);
        }

        return response()->json(['message' => 'success', 'data' => $menuItem->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu, MenuItem $item)
    {
        return new MenuItemDetailResource($item);
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
    public function update(Request $request, Menu $menu, MenuItem $item)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'type' => 'required|max:255',
            'link' => 'required|max:255',
        ]);

        $data = $request->all();
        $item->fill($data);
        if ($item->save()) {
            $item->hasMoved();
        }

        if (isset($data['parent_id']) && $data['parent_id'] !== '') {
            $parent = MenuItem::find($data['parent_id']);
            $parent->appendNode($item);
        }
        return response()->json(['message' => 'success', 'data' => $item->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu, MenuItem $item)
    {
        $item->delete();

        return response()->json(['message' => 'success']);
    }

    /**
     * re-order categories
     *
     * @param  array  $data contains list of CategoryContent
     * @return \Illuminate\Http\Response
     */
    public function updateTree(Request $request, Menu $menu) {
        $data = $request->all();
        MenuItem::rebuildTree($data);

        return response()->json(['message' => 'success']);
    }
}
