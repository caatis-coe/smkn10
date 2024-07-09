<?php

namespace App\Http\Controllers;

use App\Models\KonsentrasiKeahlian;
use Inertia\Inertia;
use Inertia\Response;

class InfoPpdbController extends Controller
{
    public function show(): Response {
        return Inertia::render('InfoPpdb', [
            'konsentrasiData' => KonsentrasiKeahlian::with('images')->get()
        ]);
    }
}
