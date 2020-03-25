<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    protected $fillable = [
        'id',
        'title',
        'slug',
        'content',
        'description',
        'image',
        'is_enabled',
        'sort',
        'page_id',
    ];

    protected $attributes = [
        'is_enabled' => true
    ];

    public function getIsEnabledAttribute($value)
    {
        return (bool) $value;
    }
}
