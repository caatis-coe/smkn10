<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "username" =>  $this->username,
            "role" =>  $this->role,
            "email_verified_at" => (new Carbon($this->email_verified_at)) -> format('d-m-Y'),
            "status" => $this->status,
            "created_at" => (new Carbon($this->created_at)) -> format('d-m-Y'),
            "updated_at" => (new Carbon($this->updated_at)) -> format('d-m-Y'),
        ];
    }
}
