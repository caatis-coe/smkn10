<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageKonsentrasiKeahlian extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'ImageID',
        'KonsentrasiKeahlianID',
    ];
}
