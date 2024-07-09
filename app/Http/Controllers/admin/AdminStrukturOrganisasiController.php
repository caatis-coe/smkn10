<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateStrukturOrganisasiRequest;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminStrukturOrganisasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/StrukturOrganisasi/Index', [
            'image' => new ImageResource(Image::where('used_as', 'struktur_organisasi')->first()),
            'success' => session('success'),
            'session' => 3,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $struktur_organisasi_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $struktur_organisasi_db)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStrukturOrganisasiRequest $request, Image $struktur_organisasi_db)
    {
        $data = $request->validated();
        $image = $data['file'] ?? null;
        if($image){
            Storage::disk('public')->delete($struktur_organisasi_db->image_path);
            $data['image_path'] = $image->store('images/StrukturOrganisasi', 'public');
            $data['used_as'] = 'struktur_organisasi';
            $struktur_organisasi_db->update($data);
            return Redirect::route('struktur-organisasi-db.index')->with('success', 'Struktur organisasi image data has been created');
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $struktur_organisasi_db)
    {
        //
    }
}
