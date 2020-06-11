<?php

namespace App\Repositories;

use App\Request;

class RequestRepository extends AbstractRepo {
    
    public function __construct() {
        $model = new Request();
        parent::__construct($model);
    }
}