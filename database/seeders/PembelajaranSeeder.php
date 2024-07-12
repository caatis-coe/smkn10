<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PembelajaranSeeder extends Seeder
{
    private $dataKegiatanMahasiswa = [
        [
            "title" => "Ekskul Angklung",
            "image_path" => 'images/pembelajaran/ekskul-angklung.jpg',
        ],
        [
            "title" => "Ekskul Futsal",
            "image_path" => 'images/pembelajaran/ekskul-futsal.jpg',
        ],
        [
            "title" => "Ekskul Paduan Suara",
            "image_path" => 'images/pembelajaran/ekskul-paduan.jpg',
        ],
        [
            "title" => "Ekskul Taekwondo",
            "image_path" => 'images/pembelajaran/ekskul-taekwondo.jpg',
        ],
    ];

    private $dataFasilitas = [
        [
            "title" => "Kantor Pusat Manajemen",
            "image_path" => 'images/pembelajaran/kantor.jpg',
        ],
        [
            "title" => "Perpustakaan",
            "image_path" => 'images/pembelajaran/perpustakaan.jpg',
        ],
        [
            "title" => "RPS Broadcasting dan Perfilman",
            "image_path" => 'images/pembelajaran/broadcasting.jpg',
        ],
        [
            "title" => "Ruang Kelas",
            "image_path" => 'images/pembelajaran/kelas.jpg',
        ],
        [
            "title" => "Lapangan Basket",
            "image_path" => 'images/pembelajaran/lap-basket.jpg',
        ],
        [
            "title" => "Studio Televisi",
            "image_path" => 'images/pembelajaran/televisi.jpg',
        ],
        [
            "title" => "Taman Sekolah",
            "image_path" => 'images/pembelajaran/taman.jpg',
        ],
    ];

    public function run()
    {
        // Insert Kegiatan Mahasiswa data
        foreach ($this->dataKegiatanMahasiswa as $data) {
            DB::table('pembelajarans')->insert([
                'title' => $data['title'],
                'description' => $data['description'] ?? '',
                'GroupID' => 2,
                'image_path' => $data['image_path'] ?? '',
                'published_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Insert Fasilitas data
        foreach ($this->dataFasilitas as $data) {
            DB::table('pembelajarans')->insert([
                'title' => $data['title'],
                'description' => $data['description'] ?? '',
                'GroupID' => 1,
                'image_path' => $data['image_path'] ?? '',
                'published_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
