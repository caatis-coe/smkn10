<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BuyerResource extends JsonResource
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
            'name' => $this->name,
            'company_name' => $this->company_name, 
            'company_address' => $this->company_address,
            'contact' => $this->contact, 
            'teaching_factory_product' => new TeachingFactoryProductResource($this->teachingFactoryProduct),
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-Y'),
        ];
    }
}
