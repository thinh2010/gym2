<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class MenuItem extends Model
{
    use NodeTrait;

    protected $fillable = [
        'id',
        'type',
        'title',
        'target',
        'link',
        'parent_id',
        'menu_id',
    ];

    public function menu() {
        return $this->belongsTo('App\Menu', 'menu_id');
    }
}
