<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'image_path' => $this->image_path && Str::startsWith($this->image_path, 'https')
            ? $this->image_path
            : ($this->image_path ? Storage::url($this->image_path) : ''),
            'used_as' => $this->used_as,
        ];
    }
}
