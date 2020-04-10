<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlockContent extends Model
{
    protected $fillable = [
        'id',
        'title',
        'css_class',
        'other_text',
        'content',
        'description',
        'image',
        'is_enabled',
        'block_id',
        'sort'
    ];

    protected $attributes = [
        'is_enabled' => true
    ];

    public function getIsEnabledAttribute($value)
    {
        return (bool) $value;
    }

    public function blocks() {
    	return $this->belongsTo('App\Block');
    }
}
