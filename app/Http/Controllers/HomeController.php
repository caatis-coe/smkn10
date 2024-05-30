<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use GuzzleHttp\Client;

class HomeController extends Controller
{
    private $apiUrl = 'https://api-berita-indonesia.vercel.app/sindonews/edukasi/';

    private $beritaDatas = [
        [
            "id" => "1",
            "title" => "SMKN 10 Bandung Raih Akreditasi A",
            "description" => "SMKN 10 Bandung berhasil mempertahankan akreditasi A dengan nilai 96 dalam penilaian terbaru dari BAN-S/M.",
            "image_path" => "https://cdn-sekolah.annibuku.com/20219176/1.jpg",
            "date_updated" => "2024-05-30"
        ],
        [
            "id" => "2",
            "title" => "Kepala Sekolah Baru di SMKN 10 Bandung",
            "description" => "Slamet Heryadi dilantik sebagai kepala sekolah baru SMKN 10 Bandung, menggantikan pejabat sebelumnya.",
            "image_path" => "https://majalahsora.com/wp-content/uploads/2023/06/IMG-20230609-WA0048.jpg",
            "date_updated" => "2024-05-30"
        ],
        [
            "id" => "3",
            "title" => "Fasilitas Baru untuk Program Produksi Film",
            "description" => "SMKN 10 Bandung menambah fasilitas baru untuk mendukung program studi Produksi Film dan Program Televisi.",
            "image_path" => "https://sambasnews.id/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-17-at-21.36.17.jpeg",
            "date_updated" => "2024-05-30"
        ],
        [
            "id" => "4",
            "title" => "Kerjasama dengan Industri Kreatif",
            "description" => "SMKN 10 Bandung menjalin kerjasama dengan beberapa industri kreatif lokal untuk meningkatkan kompetensi siswa.",
            "image_path" => "https://www.jabarsatu.com/wp-content/uploads/2023/08/IMG_20230809_131850.jpg",
            "date_updated" => "2024-05-30"
        ],
        [
            "id" => "5",
            "title" => "Lomba Seni Antar SMK Se-Kota Bandung",
            "description" => "Siswa SMKN 10 Bandung meraih juara dalam lomba seni antar SMK se-Kota Bandung.",
            "image_path" => "https://jurnalmedia.com/wp-content/uploads/2023/07/attachment-1687868905780.jpeg",
            "date_updated" => "2024-05-30"
        ],
        [
            "id" => "6",
            "title" => "Peningkatan Kualitas Guru di SMKN 10 Bandung",
            "description" => "SMKN 10 Bandung mengadakan pelatihan untuk meningkatkan kualitas guru dalam pengajaran berbasis teknologi.",
            "image_path" => "https://www.jarrakpos.com/wp-content/uploads/2024/05/template_web_blog_large.jpg",
            "date_updated" => "2024-05-30"
        ]    
    ];

    public function show(): Response
    {
        // $client = new Client();
        // $response = $client->get($this->apiUrl);
        // $beritaDatas = json_decode($response->getBody()->getContents(), true)['data']['posts'];

        // // Limit to 6 items
        // $limitedBeritaDatas = array_slice($beritaDatas, 0, 6);

        // $formattedBeritaDatas = array_map(function ($berita, $index) {
        //     return [
        //         'id' => $index + 1, // Auto-increment ID
        //         'title' => $berita['title'],
        //         'description' => $berita['description'],
        //         'image_path' => $berita['thumbnail'],
        //         'date_updated' => $berita['pubDate'],
        //     ];
        // }, $limitedBeritaDatas, array_keys($limitedBeritaDatas));

        return Inertia::Render('Home', ['blogDatas' => $this->beritaDatas] );
    }
}
