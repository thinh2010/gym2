<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    const TYPE_SLIDER = 'slider';
    const TYPE_FEATURE = 'feature';
    const TYPE_CUSTOMER_REVIEW = 'customer_review';
    const TYPE_TEAM = 'team';
    const TYPE_STATUS = 'status';
    const TYPE_CONTACT = 'contact';
    const TYPE_BLOCK = 'block';

    protected $fillable = [
        'id',
        'title',
        'content',
        'description',
        'image',
        'is_enabled',
        'sort',
        'type',
        'options'
    ];

    protected $attributes = [
        'is_enabled' => true,
        'type' => self::TYPE_BLOCK
    ];

    public function getIsEnabledAttribute($value)
    {
        return (bool) $value;
    }

    public function getOptionsAttribute($value)
    {
        return $value ? json_decode($value) : [];
    }

    public function pages() {
    	return $this->belongsToMany('App\Page', 'page_block');
    }

    public function blockContents() {
    	return $this->hasMany('App\BlockContent')->orderBy('sort');
    }
}
