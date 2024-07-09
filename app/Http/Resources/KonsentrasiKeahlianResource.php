<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KonsentrasiKeahlianResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $images = ImageResource::collection($this->images)->toArray($request);
        
        // Define the placeholder object
        $placeholder = [
            "id" => null,
            "description" => null,
            "image_path" => null,
            "used_as" => null
        ];

        // Ensure there are at least 4 items in the images array
        while (count($images) < 4) {
            $images[] = $placeholder;
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'images' => $images, 
            'teaching_factory_products' => TeachingFactoryProductResource::collection($this->teachingFactoryProducts),
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-Y'),
        ];
    }
}
