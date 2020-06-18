<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'id',
        'title',
        'key',
    ];

    public function getRouteKeyName()
    {
        return 'key';
    }

    public function items()
    {
        return $this->hasMany('App\MenuItem');
    }
}
