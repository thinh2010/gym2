<?php
/**
 * File LaravelController.php
 *
 * @author Ray Nguyen <thinh1011@gmail.com>
 * @package Gym
 * @version 1.0
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

/**
 * Class LaravueController
 *
 * @package App\Http\Controllers\Admin
 */
class IndexController extends Controller
{
    /**
     * Entry point for Laravue Dashboard
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('admin');
    }
}
