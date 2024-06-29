<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $images = [
            ["image_path" => "karawitan.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "karawitan1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "karawitan2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-tari.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-tari2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-tari3.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-musik.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-musik1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-teater.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-teater1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "seni-teater2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "siaran.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "siaran1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "produksi-film.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "produksi-film1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "produksi-film2.png", "used_as" => "konsentrasi_keahlian"],
        ];

        DB::table('images')->insert($images);
    }
}
