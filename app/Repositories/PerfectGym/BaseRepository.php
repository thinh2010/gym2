<?php

namespace App\Repositories\PerfectGym;

use Illuminate\Support\Facades\Http;

class BaseRepository {

	protected $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';

	protected $client;

	public function __construct() {
		$this->client = $this->getInstance();
	}

	public function getInstance() {
		return Http::withHeaders([
		    'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
		    'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
		])
	}
}