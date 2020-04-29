<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'id',
        'slug',
        'title',
        'image',
        'content',
        'description',
        'category_id',
        'meta_title',
        'is_enabled',
        'meta_keywords',
        'meta_description',
    ];

    protected $attributes = [
        'is_enabled' => true,
    ];

    // public function getIsEnabledAttribute($value)
    // {
    //     return (bool) $value;
    // }

    // public function blocks()
    // {
    //     return $this->belongsToMany('App\Block', 'page_block')->orderBy('sort');
    // }

    public function scopeActive($query)
    {
        return $query->where('is_enabled', '=', true);
    }

    public function category() {
        return $this->belongsTo('App\Category', 'category_id');
    }
}
