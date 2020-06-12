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
        'target_id',
        'link'
    ];
}
