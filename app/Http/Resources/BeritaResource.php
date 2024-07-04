<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BeritaResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'thumbnail_image' => $this->thumbnail_image && Str::startsWith($this->thumbnail_image, 'https')
                ? $this->thumbnail_image
                : ($this->thumbnail_image ? Storage::url($this->thumbnail_image) : ''),
            'published_by' => new UserResource($this->publishedBy),
            'updated_by' => new UserResource($this->updatedBy),
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-Y'),
        ];
    }
}
