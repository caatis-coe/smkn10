<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembelajaran extends Model
{
    protected $fillable = [
        'image_path',
        'title',
        'description',
        'type',
        'group',
        'published_by',
        'updated_by'
    ];

    public function publishedBy()
    {
        return $this->belongsTo(User::class, 'published_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    use HasFactory;
}
