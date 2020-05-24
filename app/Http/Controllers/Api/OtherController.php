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
    protected $urlV1 = 'https://vgym.perfectgym.com/Api/';

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
            'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
        ]);
    }

    public function getClassCategories() {
        $client = $this->getInstance();

        $response = $client->get($this->baseUrl . 'odata/ClassCategories');

        $data = [];
        if (!empty($response->json()['value'])) {
            foreach($response->json()['value'] as $key => $value) {
                $data[$value['id']] = $value['name'];
            }
        }

        return response()->json(['message' => 'success', 'data' => $data]);
    }

    public function getClasses(Request $request) {
        $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';
        $client = $this->getInstance();

        $clubId = $request->get('clubId');

        $now = Carbon::now();
        $startDate = clone $now;
        $startDate = $startDate->firstOfMonth();
        $endDate = clone $now;
        $endDate = $endDate->addMonths(2);

        $timetables = $client->get($baseUrl . 'odata/Classes?$expand=classType&$orderBy=startDate ASC&$filter=isDeleted eq false and clubId eq ' . $clubId . ' and startDate ge ' . urlencode($startDate->toIso8601String()) . ' and endDate le ' . urlencode($endDate->toIso8601String()));

        $data = [];
        if (!empty($timetables->json()['value'])) {
            foreach($timetables->json()['value'] as $key => $value) {
                $data[] = (object) [
                    'title' => $value['classType']['name'],
                    'start' => $value['startDate'],
                    'end' => $value['endDate'],
                    'studio' => $value['classType']['categoryId']
                ];
            }
        }

        return response()->json(['message' => 'success', 'data' => $data]);
    }

    public function getDiscounts($clubId, $planId, $code) {
        $client = $this->getInstance();

        $discounts = $client->get($this->urlV1 . 'Discounts/Discounts?paymentPlanId=' . $planId . '&clubId=' . $clubId);
        dd($discounts->json());
        return response()->json(['message' => 'success', 'data' => $discounts]);
        dd($discounts);
    }
}
