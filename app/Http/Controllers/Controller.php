<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function make_slug($string) {
    	$string = str_replace('(', '', $string);
    	$string = str_replace(')', '', $string);
    	$string = str_replace(',', '', $string);
    	$string = str_replace('.', '', $string);
	    return strtolower(preg_replace('/\s+/u', '-', trim($string)));
	}
}
