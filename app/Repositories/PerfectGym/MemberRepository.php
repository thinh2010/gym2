<?php

namespace App\Repositories\PerfectGym;

class MemberRepository extends BaseRepository {
	public function getMembers() {
		return $this->client->get($this->baseUrl + 'odata/Members');
	}
}