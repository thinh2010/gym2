<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{
    use NodeTrait;
    
    const TYPE_BLOG = 'blog';
    const TYPE_FAQ = 'faq';

    protected $fillable = [
        'id',
        'slug',
        'type',
        'title',
        'image',
        'content',
        'description',
        'meta_title',
        'is_enabled',
        'meta_keywords',
        'meta_description',
    ];

    protected $attributes = [
        'is_enabled' => true,
        'type' => self::TYPE_BLOG
    ];
}
