<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $fillable = [
        'description',
        'image_path',
        'used_as',
    ];

    public static function getImagesByUsage($usage)
    {
        return self::where('used_as', $usage)->get();
    }

    // Method untuk mendapatkan satu data berdasarkan 'used_as'
    public static function getSingleImageByUsage($usage)
    {
        return self::where('used_as', $usage)->first();
    }
}
