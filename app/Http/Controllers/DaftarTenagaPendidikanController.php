<?php

namespace App\Http\Controllers;

use App\Models\DaftarTenagaPendidikan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DaftarTenagaPendidikanController extends Controller
{
    
    public function show(){
        $arrDaftarGuru = DaftarTenagaPendidikan::all()->map(function ($tenaga_pendidikan) {
            return [
                $tenaga_pendidikan->name,
                $tenaga_pendidikan->nik,
                $tenaga_pendidikan->position
            ];
        });

        return Inertia::render('profil/DaftarTenagaPendidikan',[
            'daftarTenagaPendidikan' => $arrDaftarGuru
        ]);
    }
}
