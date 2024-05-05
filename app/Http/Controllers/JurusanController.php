<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JurusanController extends Controller
{
    public $jurusanDatas = [
        [
            "title" => "Seni dan Budaya",
            "endpoint" => "seni-budaya",
            "visi" => "jadi ayam",
            "misi" => "cari ayam"
        ],
        [
            "title" => "Multimedia",
            "endpoint" => "multimedia",
            "visi" => "gak tau",
            "misi" => "lebih gak tau"
        ],
        [
            "title" => "Digididaw Art",
            "endpoint" => "digidaw-art",
            "visi" => "desain",
            "misi" => "digidaw"
        ],
    ];

    public function show(String $titleJurusan) : Response {

        $jurusan = null;
    
        foreach($this->jurusanDatas as $jurusanData){
            if ($jurusanData['endpoint'] == $titleJurusan) {
                $jurusan = $jurusanData;
                break; 
            }
        }
    
        return Inertia::render('jurusan/Jurusan', [
            'jurusan' => $jurusan
        ]);
    }    
}
