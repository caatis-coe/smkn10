<?php

namespace App\Http\Controllers;

use App\Models\Pembelajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KegiatanMahasiswaController extends Controller
{
    public function show(): Response {
        $data = Pembelajaran::where('type', 'kegiatan mahasiswa')->get();
        return Inertia::render('pembelajaran/KegiatanMahasiswa', ['kegiatanDatas' => $data]);
    }
}
