<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InformasiKelulusanController extends Controller
{
    public function show(){
        return Inertia::render('pembelajaran/InformasiKelulusan', [
            'datetime' => '2026-05-04 15:00:00',
            'link' => "https://drive.google.com/drive/folders/1gmD0-hbgNo_FZ-FQVwpfp4J0BSOhI6_u?usp=sharing"
        ]);
    }
}
