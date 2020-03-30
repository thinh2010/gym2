<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlockDetailResource extends JsonResource
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
            'type' => $this->type,
            'description' => $this->description,
            'is_enabled' => $this->is_enabled,
            'image' => strval($this->image),
            'content' => $this->content,
            'options' => $this->options,
            'block_contents' => BlockContentResource::collection($this->blockContents),
        ];
    }
}
