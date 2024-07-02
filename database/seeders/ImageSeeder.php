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
        $kk_images = [
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
            ["image_path" => "slide4.jpg.png", "used_as" => "home_swiper"],
            ["image_path" => "slide5.jpg.png", "used_as" => "home_swiper"],
            ["image_path" => "slide6.jpg.png", "used_as" => "home_swiper"],
            ["image_path" => "slamet-heryadi.jpg", "used_as" => "headmaster", "description" => "Salam sejahtera kepada seluruh warga SMKN! Kami dengan bangga menyambut Anda di website resmi
            Sekolah Menengah Kejuruan Negeri (SMKN) kami. Di sini, kami berkomitmen untuk
            memberikan pendidikan berkualitas, membuka peluang, dan menginspirasi para siswa
            untuk meraih impian mereka. Selamat datang di dunia belajar yang penuh dengan
            potensi dan peluang!"],
        ];

        $headmaster = [
            [
                "description" => "Drs. H. Slamet Heryadi, M.Pd.#Salam sejahtera kepada seluruh warga SMKN! Kami dengan bangga menyambut Anda di website resmi Sekolah Menengah Kejuruan Negeri (SMKN) kami. Di sini, kami berkomitmen untuk memberikan pendidikan berkualitas, membuka peluang, dan menginspirasi para siswa untuk meraih impian mereka. Selamat datang di dunia belajar yang penuh dengan potensi dan peluang!",
                "image_path" => "slamet-heryadi.jpg",
                "used_as" => "headmaster"
            ],
        ];

        $home_swiper = [
            ["image_path" => "slide4.jpg", "used_as" => "home_swiper", "description" => null],
            ["image_path" => "slide5.jpg", "used_as" => "home_swiper", "description" => null],
            ["image_path" => "slide6.jpg", "used_as" => "home_swiper", "description" => null],
        ];

        DB::table('images')->insert([]);
    }
}
