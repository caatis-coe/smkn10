<?php

namespace App\Http\Controllers;

use App\Models\DaftarGuru;
use Inertia\Inertia;
use Inertia\Response;

class DaftarGuruController extends Controller
{

    public function show(): Response {

        $arrDaftarGuru = DaftarGuru::all()->map(function ($guru) {
            return [
                $guru->name,
                $guru->nip_nuptk,
            ];
        });

        return Inertia::render('profil/DaftarGuru', ['daftarGuru' => $arrDaftarGuru]);
    }
}
