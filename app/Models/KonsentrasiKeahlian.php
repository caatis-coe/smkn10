<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KonsentrasiKeahlian extends Model
{
    use HasFactory;

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_konsentrasi_keahlians', 'KonsentrasiKeahlianID', 'ImageID');
    }

    public function teachingFactoryProducts()
    {
        return $this->hasMany(TeachingFactoryProduct::class, 'KonsentrasiKeahlianID');
    }
    
}
