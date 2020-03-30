<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class FController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct() 
    {
        // Fetch the Site Settings object
        $site_settings = Setting::first();
        \View::share('site_settings', $site_settings);
    }

    function make_slug($string) {
        $string = str_replace('(', '', $string);
        $string = str_replace(')', '', $string);
        $string = str_replace(',', '', $string);
        $string = str_replace('.', '', $string);
        return strtolower(preg_replace('/\s+/u', '-', trim($string)));
    }
}
