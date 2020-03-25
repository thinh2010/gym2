<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'id',
        'sitename',
        'site_url',
        'company_name',
        'logo',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'address_hn',
        'address_hcm',
        'tel1',
        'tel2',
        'social_fb',
        'social_google',
        'social_linkedin',
        'social_instagram',
        'social_other',
    ];
}
