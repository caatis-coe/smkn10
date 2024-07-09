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
            ["image_path" => "images/konsentrasiKeahlian/karawitan.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/karawitan2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/karawitan1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-tari.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-tari2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-tari3.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-musik.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-musik1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-teater.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-teater1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/seni-teater2.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/siaran.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/siaran1.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/produksi-film.jpg", "used_as" => "konsentrasi_keahlian"],
            ["image_path" => "images/konsentrasiKeahlian/produksi-film2.png", "used_as" => "konsentrasi_keahlian"],
        ];

        $headmaster = [
            [
                "description" => "Drs. H. Slamet Heryadi, M.Pd.#Salam sejahtera kepada seluruh warga SMKN! Kami dengan bangga menyambut Anda di website resmi Sekolah Menengah Kejuruan Negeri (SMKN) kami. Di sini, kami berkomitmen untuk memberikan pendidikan berkualitas, membuka peluang, dan menginspirasi para siswa untuk meraih impian mereka. Selamat datang di dunia belajar yang penuh dengan potensi dan peluang!",
                "image_path" => "images/kepsek/slamet-heryadi.jpg",
                "used_as" => "headmaster"
            ],
        ];

        $home_swiper = [
            ["image_path" => "images/homeSwiper/slide4.jpg", "used_as" => "home_swiper"],
            ["image_path" => "images/homeSwiper/slide5.jpg", "used_as" => "home_swiper"],
            ["image_path" => "images/homeSwiper/slide6.jpg", "used_as" => "home_swiper"],
        ];

        DB::table('images')->insert([...$kk_images, ...$home_swiper]);
        DB::table('images')->insert([...$headmaster]);
    }
}
