<?php

namespace App\Services;

use App\Repositories\Irepo;

abstract class AbstractService {
    protected $repo;
    
    public function __construct(IRepo $repo) {
        $this->repo = $repo;
    }

    public function get($id) {
        return $this->repo->get($id);
    }

    public function create($data) {
        return $this->repo->create($data);
    }

    public function update($id, $data) {
        return $this->repo->update($id, $data);
    }

    public function destroy($id) {
        return $this->repo->destroy($id);
    }
}