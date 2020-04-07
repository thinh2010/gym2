<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'sitename' => $this->sitename,
            'site_url' => $this->site_url,
            'company_name' => $this->company_name,
            'logo' => strval($this->logo),
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keyword' => $this->meta_keyword,
            'address_hn' => $this->address_hn,
            'tel1' => $this->tel1,
            'social_fb' => $this->social_fb,
            'social_linkedin' => $this->social_linkedin,
            'social_instagram' => $this->social_instagram,
        ];
    }
}
