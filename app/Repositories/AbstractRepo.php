<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class AbstractRepo implements IRepo {
	protected $model;

	public function __construct(Model $model) {
		$this->model = $model;
	}

	public function get($id) {
		$item = $this->model->find($id);

        return $item;
	}

	public function getAll($filter = [])
    {
        $query = $this->model->with(['children']);

        $query->where('course_id', $course_id)->whereNull('parent_id');

        $result = $query->get();

        return $result;
    }

    public function create($data = [])
    {
        return $this->model->create($data);
    }

    public function update($id, $data)
    {
        $item = $this->model->find($id);
        $item->update($data);

        return $item;
    }

    public function destroy($id)
    {
        try {
            $item = $this->model->find($id);
            $item->delete();
        } catch (Exception $ex) { }
    }
}