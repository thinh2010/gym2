<?php

namespace App\Repositories;

interface IRepo {
    public function get($id);
    public function getAll();
    public function create($data);
    public function update($id, $data);
    public function destroy($id);
}