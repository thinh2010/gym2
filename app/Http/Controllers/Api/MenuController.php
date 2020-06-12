<?php

namespace App\Http\Controllers\Api;

use App\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\MenuResource;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MenuResource::collection(Menu::orderBy('id')->get());
        // return response()->json(Menu::orderBy('id')->get());
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
            'key' => 'required|unique:menus'
        ]);

        $data = $request->all();
        $item = Menu::create($data);

        return response()->json(['message' => 'success', 'data' => $item->jsonSerialize()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        return response()->json($menu);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
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
        $item = Menu::find($id);
        
        $item->fill($data);

        $item->save();
        return response()->json(['message' => 'success', 'data' => $item->jsonSerialize()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Menu  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        try {
            $menu->delete();
        } catch(Exception $e) {
            dd($e->getMessages());
        }

        return response()->json(['message' => 'success']);
    }
}
