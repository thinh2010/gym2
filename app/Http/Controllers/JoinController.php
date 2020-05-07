<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JoinController extends FController
{
    /**
     * Show the payment plan list
     *
     * @return view
     */
    public function index()
    {
        $clubs = $this->getClubs();
        return view('join.step1', ['clubs' => $clubs]);
    }
}