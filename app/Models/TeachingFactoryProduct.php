<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachingFactoryProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_path',
        'KonsentrasiKeahlianID'
    ];
    public function konsentrasiKeahlian()
    {
        return $this->belongsTo(KonsentrasiKeahlian::class, 'KonsentrasiKeahlianID');
    }
}
