<?php

namespace App\Http\Controllers;

use App\Models\KonsentrasiKeahlian;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KonsentrasiKeahlianController extends Controller
{
    private $keahlianDatas;

    public function __construct()
    {
        $this->keahlianDatas = KonsentrasiKeahlian::all();
    }

    public function show(String $titleKeahlian) : Response {

        $keahlian = null;
    
        foreach($this->keahlianDatas as $keahlianData){
            if ($keahlianData->endpoint == "keahlian-" . $titleKeahlian) {
                $keahlian = $keahlianData;
                break; 
            }
        }
    
        return Inertia::render('konsentrasi_keahlian/KonsentrasiKeahlian', [
            'data' => $keahlian
        ]);
    }    
}
