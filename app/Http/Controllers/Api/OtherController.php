<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\BlockResource;
use App\Http\Resources\BlockDetailResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class OtherController extends Controller
{
    protected $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
            'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
        ]);
    }

    public function getClasses($clubId) {
        $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';
        $client = $this->getInstance();

        $now = Carbon::now();
        $startDate = clone $now;
        $startDate = $startDate->firstOfMonth();
        $endDate = clone $now;
        $endDate = $endDate->addMonths(2);

        // $clubId = 2;

        $timetables = $client->get($baseUrl . 'odata/Classes?$expand=classType&$filter=clubId eq ' . $clubId . ' and startDate ge ' . urlencode($startDate->toIso8601String()) . ' and endDate le ' . urlencode($endDate->toIso8601String()));

        $data = [];
        if (!empty($timetables->json()['value'])) {
            foreach($timetables->json()['value'] as $key => $value) {
                $data[] = (object) [
                    'title' => $value['classType']['name'],
                    'start' => $value['startDate'],
                    'end' => $value['endDate']
                ];
            }
        }

        // dd($data);

        return response()->json(['message' => 'success', 'data' => $data]);
        // die(var_dump($timetables->json()['value']));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchParams = $request->all();
        $blockQuery = Block::query();
        $limit = Arr::get($searchParams, 'limit', static::ITEM_PER_PAGE);
        $type = Arr::get($searchParams, 'type', '');
        $keyword = Arr::get($searchParams, 'keyword', '');

        if (!empty($type)) {
            $blockQuery->where('type', $type);
        }

        if (!empty($keyword)) {
            $blockQuery->where('title', 'LIKE', '%' . $keyword . '%');
        }

        return BlockResource::collection($blockQuery->paginate($limit));
    }
    
    /**
     * Display a listing of the enabled blocks.
     *
     * @return \Illuminate\Http\Response
     */
    public function enabledBlocks()
    {
        return BlockResource::collection(Block::orderBy('id')->where('is_enabled', true)->get());
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
    public function show(Block $block)
    {
        return new BlockDetailResource($block);
        // return response()->json(Block::with('blockContents')->findOrFail($id));
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
                $entity = Block::find($block['id']);
                $entity->fill(['sort' => $block['sort']]);
                $entity->save();
            }
        }

        return response()->json(['message' => 'success']);
    }
}
