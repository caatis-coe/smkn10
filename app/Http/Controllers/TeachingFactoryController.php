<?php

namespace App\Http\Controllers;

use App\Models\KonsentrasiKeahlian;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeachingFactoryController extends Controller
{

    
    public function show() : Response {

        $data = KonsentrasiKeahlian::with('teachingFactoryProducts')->get();

        return Inertia::Render('TeachingFactory',['data' => $data]);
    }
}