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
            "description" => "",
            "image_path" => 'ekskul-angklung.jpg',
        ],
        [
            "title" => "Ekskul Futsal",
            "description" => "",
            "image_path" => 'ekskul-futsal.jpg',
        ],
        [
            "title" => "Ekskul Paduan Suara",
            "description" => "",
            "image_path" => 'ekskul-paduan.jpg',
        ],
        [
            "title" => "Ekskul Taekwondo",
            "description" => "",
            "image_path" => 'ekskul-taekwondo.jpg',
        ],
    ];

    private $dataFasilitas = [
        [
            "title" => "Kantor Pusat Manajemen",
            "description" => "",
            "image_path" => 'kantor.jpg',
        ],
        [
            "title" => "Perpustakaan",
            "description" => "",
            "image_path" => 'perpustakaan.jpg',
        ],
        [
            "title" => "RPS Broadcasting dan Perfilman",
            "description" => "",
            "image_path" => 'broadcasting.jpg',
        ],
        [
            "title" => "Ruang Kelas",
            "description" => "",
            "image_path" => 'kelas.jpg',
        ],
        [
            "title" => "Lapangan Basket",
            "description" => "",
            "image_path" => 'lap-basket.jpg',
        ],
        [
            "title" => "Studio Televisi",
            "description" => "",
            "image_path" => 'televisi.jpg',
        ],
        [
            "title" => "Taman Sekolah",
            "description" => "",
            "image_path" => 'taman.jpg',
        ],
    ];

    public function run()
    {
        // Insert Kegiatan Mahasiswa data
        foreach ($this->dataKegiatanMahasiswa as $data) {
            DB::table('pembelajarans')->insert([
                'title' => $data['title'],
                'description' => $data['description'],
                'type' => 'kegiatan mahasiswa',
                'group' => 'Ekstrakulikuler',
                'image_path' => $data['image_path'],
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
                'description' => $data['description'],
                'type' => 'fasilitas',
                'group' => 'Sarana Prasarana',
                'image_path' => $data['image_path'],
                'published_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
