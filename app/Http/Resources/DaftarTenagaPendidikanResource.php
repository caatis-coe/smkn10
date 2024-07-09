<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DaftarTenagaPendidikanResource extends JsonResource
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
            'nik' => $this->nik,
            'position' => $this->position,
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-Y')
        ];
    }
}
