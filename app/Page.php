<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    const TYPE_HOMEPAGE = 'homepage';
    const TYPE_PAGE = 'page';

    protected $fillable = [
        'id',
        'slug',
        'type',
        'title',
        'image',
        'content',
        'description',
        'footer_bg',
        'parent_id',
        'meta_title',
        'is_enabled',
        'footer_text',
        'meta_keywords',
        'meta_description',
    ];

    protected $attributes = [
        'is_enabled' => true,
        'type' => self::TYPE_PAGE
    ];

    // public function getIsEnabledAttribute($value)
    // {
    //     return (bool) $value;
    // }

    public function blocks()
    {
        return $this->belongsToMany('App\Block', 'page_block')->orderBy('sort');
    }

    public function items()
    {
        return $this->hasMany('App\Item')->orderBy('sort');
    }

    public function scopeActive($query)
    {
        return $query->where('is_enabled', '=', true);
    }

    public function scopeHomepage($query)
    {
        return $query->where('type', '=', self::TYPE_HOMEPAGE);
    }

    public function scopeNotHomepage($query)
    {
        return $query->where('type', '!=', self::TYPE_HOMEPAGE);
    }

    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function children(){
        return $this->hasMany(self::class, 'parent_id');
    }
}
