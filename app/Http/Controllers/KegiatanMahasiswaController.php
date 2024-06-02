<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KegiatanMahasiswaController extends Controller
{
    private $data = [
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

    public function show(): Response {
        return Inertia::render('pembelajaran/KegiatanMahasiswa', ['kegiatanDatas' => $this->data]);
    }
}
