<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlockContentDetailResource extends JsonResource
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
            'title' => $this->title,
            'css_class' => $this->css_class,
            'other_text' => $this->other_text,
            'description' => $this->description,
            'is_enabled' => $this->is_enabled,
            'image' => strval($this->image),
            'content' => $this->content,
            'sort' => $this->sort,
        ];
    }
}
