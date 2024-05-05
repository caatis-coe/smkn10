<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'thumbnail',
        'title',
        'slug',
        'content',
        'user_id',
        'status'
    ];

    protected function casts(): array
    {
        return [
            'id' => 'string',
        ];
    }
}
