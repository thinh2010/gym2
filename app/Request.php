<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{

    protected $fillable = [
        'id',
        'title',
        'name',
        'email',
        'phone',
        'message',
        'is_replied',
        'replied_message',
        'user_id',
    ];

    protected $attributes = [
        'is_replied' => false
    ];

    public function getIsRepliedAttribute($value)
    {
        return (bool) $value;
    }
}
