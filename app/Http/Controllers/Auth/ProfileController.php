<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\FController;

class ProfileController extends FController {
	public function index() {
		return view('profile');
	}
}