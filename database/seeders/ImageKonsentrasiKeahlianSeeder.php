<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageKonsentrasiKeahlianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $imageKonsentrasiKeahlians = [
            ['ImageID' => 1, 'KonsentrasiKeahlianID' => 1],
            ['ImageID' => 2, 'KonsentrasiKeahlianID' => 1],
            ['ImageID' => 3, 'KonsentrasiKeahlianID' => 1],
            ['ImageID' => 4, 'KonsentrasiKeahlianID' => 2],
            ['ImageID' => 5, 'KonsentrasiKeahlianID' => 2],
            ['ImageID' => 6, 'KonsentrasiKeahlianID' => 2],
            ['ImageID' => 7, 'KonsentrasiKeahlianID' => 3],
            ['ImageID' => 8, 'KonsentrasiKeahlianID' => 3],
            ['ImageID' => 9, 'KonsentrasiKeahlianID' => 4],
            ['ImageID' => 10, 'KonsentrasiKeahlianID' => 4],
            ['ImageID' => 11, 'KonsentrasiKeahlianID' => 4],
            ['ImageID' => 12, 'KonsentrasiKeahlianID' => 5],
            ['ImageID' => 13, 'KonsentrasiKeahlianID' => 5],
            ['ImageID' => 14, 'KonsentrasiKeahlianID' => 6],
            ['ImageID' => 15, 'KonsentrasiKeahlianID' => 6],
            ['ImageID' => 16, 'KonsentrasiKeahlianID' => 6],
        ];

        DB::table('image_konsentrasi_keahlians')->insert($imageKonsentrasiKeahlians);
    }
}
