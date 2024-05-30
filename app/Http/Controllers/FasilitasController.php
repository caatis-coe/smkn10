<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FasilitasController extends Controller
{
    private $data = [
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

    public function show(): Response {
        return Inertia::render('pembelajaran/Fasilitas', ['fasilitasDatas' => $this->data]);
    }
}
