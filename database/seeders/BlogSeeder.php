<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datas = [
            [
                "title" => "SMKN 10 Bandung Raih Akreditasi A",
                "description" => "SMKN 10 Bandung berhasil mempertahankan akreditasi A dengan nilai 96 dalam penilaian terbaru dari BAN-S/M.",
                "image_path" => "https://cdn-sekolah.annibuku.com/20219176/1.jpg",
                "date_updated" => "2024-05-30"
            ],
            [
                "title" => "Kepala Sekolah Baru di SMKN 10 Bandung",
                "description" => "Slamet Heryadi dilantik sebagai kepala sekolah baru SMKN 10 Bandung, menggantikan pejabat sebelumnya.",
                "image_path" => "https://majalahsora.com/wp-content/uploads/2023/06/IMG-20230609-WA0048.jpg",
                "date_updated" => "2024-05-30"
            ],
            [
                "title" => "Fasilitas Baru untuk Program Produksi Film",
                "description" => "SMKN 10 Bandung menambah fasilitas baru untuk mendukung program studi Produksi Film dan Program Televisi.",
                "image_path" => "https://sambasnews.id/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-17-at-21.36.17.jpeg",
                "date_updated" => "2024-05-30"
            ],
            [
                "title" => "Kerjasama dengan Industri Kreatif",
                "description" => "SMKN 10 Bandung menjalin kerjasama dengan beberapa industri kreatif lokal untuk meningkatkan kompetensi siswa.",
                "image_path" => "https://www.jabarsatu.com/wp-content/uploads/2023/08/IMG_20230809_131850.jpg",
                "date_updated" => "2024-05-30"
            ],
            [
                "title" => "Lomba Seni Antar SMK Se-Kota Bandung",
                "description" => "Siswa SMKN 10 Bandung meraih juara dalam lomba seni antar SMK se-Kota Bandung.",
                "image_path" => "https://jurnalmedia.com/wp-content/uploads/2023/07/attachment-1687868905780.jpeg",
                "date_updated" => "2024-05-30"
            ],
            [
                "title" => "Peningkatan Kualitas Guru di SMKN 10 Bandung",
                "description" => "SMKN 10 Bandung mengadakan pelatihan untuk meningkatkan kualitas guru dalam pengajaran berbasis teknologi.",
                "image_path" => "https://www.jarrakpos.com/wp-content/uploads/2024/05/template_web_blog_large.jpg",
                "date_updated" => "2024-05-30"
            ]
        ];

        foreach ($datas as $data) {
            DB::table('blogs')->insert([
                'title' => $data['title'],
                'description' => $data['description'],
                'thumbnail_image' => $data['image_path'],
                'updated_by' => 1,
                'published_by' => 1,
                'created_at' => $data['date_updated'],
                'updated_at' => $data['date_updated'],
            ]);
        }
    }
}
