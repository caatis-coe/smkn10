<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PembelajaranResource extends JsonResource
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
            'type' => $this->type,
            'group' => $this->group,
            'image_path' => $this->image_path
                ? Storage::url($this->image_path) : '',
            'published_by' => new UserResource($this->publishedBy),
            'updated_by' => new UserResource($this->updatedBy),
            'created_at' => (new Carbon($this->created_at)) -> format('d-m-Y'),
            'updated_at' => (new Carbon($this->updated_at)) -> format('d-m-Y'),
        ];
    }
}
