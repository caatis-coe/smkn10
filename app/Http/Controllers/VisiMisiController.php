<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class VisiMisiController extends Controller
{
    public function show(): Response
    {
        return Inertia::Render('profil/VisiMisi', [
            'visi' => Storage::disk('public')->get('doc/visi.html'),
            'misi' => Storage::disk('public')->get('doc/misi.html')
        ] );
    }
}
