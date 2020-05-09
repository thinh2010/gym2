<?php

namespace App\Http\Controllers;

use App\Setting;
use Butschster\Head\Contracts\MetaTags\MetaInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class FController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected $meta;

    protected $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';

    public function __construct(MetaInterface $meta) 
    {
        // Fetch the Site Settings object
        $site_settings = Setting::first();
        \View::share('site_settings', $site_settings);
        $this->meta = $meta;
        $this->meta->setTitle($site_settings->meta_title)
                    ->setKeywords($site_settings->meta_keyword)
                    ->setDescription($site_settings->meta_description);

    }

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
            'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
        ]);
    }

    public function testApi() {
        $client = $this->getInstance();

        // $response = $client->get($baseUrl . 'odata/CLubs/1?$expand=availablePaymentPlans');
        $response = $client->get($this->baseUrl . 'odata/Classes?$filter=clubId eq 1');
        dd($response->json());

    }

    public function getClubs() {
        $client = $this->getInstance();
        $response = $client->get($this->baseUrl . 'odata/Clubs?$filter=isDeleted eq false&$expand=availablePaymentPlans');

        return $response->json()['value'];
    }

    public function getPlan($id) {
        $client = $this->getInstance();
        $response = $client->get($this->baseUrl . 'odata/PaymentPlans('.$id.')');
        return $response->json();
    }

    protected function setMeta($entity) {
        $this->meta->prependTitle($entity->meta_title)
                    ->setKeywords($entity->meta_keywords)
                    ->setDescription($entity->meta_description);
    }

    function make_slug($string) {
        // $string = str_replace('(', '', $string);
        // $string = str_replace(')', '', $string);
        // $string = str_replace(',', '', $string);
        // $string = str_replace('.', '', $string);
        // return strtolower(preg_replace('/\s+/u', '-', trim($string)));

        $replacement = '-';
        $map = array();
        $quotedReplacement = preg_quote($replacement, '/');
        $default = array(
            '/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|å/' => 'a',
            '/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|ë/' => 'e',
            '/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ|î/' => 'i',
            '/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|ø/' => 'o',
            '/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|ů|û/' => 'u',
            '/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/' => 'y',
            '/đ|Đ/' => 'd',
            '/ç/' => 'c',
            '/ñ/' => 'n',
            '/ä|æ/' => 'ae',
            '/ö/' => 'oe',
            '/ü/' => 'ue',
            '/Ä/' => 'Ae',
            '/Ü/' => 'Ue',
            '/Ö/' => 'Oe',
            '/ß/' => 'ss',
            '/[^\s\p{Ll}\p{Lm}\p{Lo}\p{Lt}\p{Lu}\p{Nd}]/mu' => ' ',
            '/\\s+/' => $replacement,
            sprintf('/^[%s]+|[%s]+$/', $quotedReplacement, $quotedReplacement) => '',
        );
        //Some URL was encode, decode first
        $title = urldecode($string);
        $map = array_merge($map, $default);
        return strtolower(preg_replace(array_keys($map), array_values($map), $title));
    }
}
