<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PrestasiSekolah;
use App\Http\Requests\StorePrestasiSekolahRequest;
use App\Http\Requests\UpdatePrestasiSekolahRequest;
use App\Http\Resources\PrestasiSekolahResource;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminPrestasiSekolahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/PrestasiSekolah/Index', [
            'datas' => PrestasiSekolahResource::collection(PrestasiSekolah::paginate(10)),
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PrestasiSekolah/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrestasiSekolahRequest $request)
    {
        $data = $request->validated(); 
        $data["result"] = $data["achievement"];
        $data['achievement'] = $data['competition'];
        PrestasiSekolah::create($data);

        return Redirect::route('prestasi-sekolah-db.index')->with('success', 'Prestasi sekolah data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(PrestasiSekolah $prestasi_sekolah_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PrestasiSekolah $prestasi_sekolah_db)
    {
        return Inertia::render('Admin/PrestasiSekolah/Edit', [
            'prestasiSekolah' => new PrestasiSekolahResource($prestasi_sekolah_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrestasiSekolahRequest $request, PrestasiSekolah $prestasi_sekolah_db)
    {
        $data = $request->validated(); 
        $data["result"] = $data["achievement"];
        $data['achievement'] = $data['competition'];
        $prestasi_sekolah_db->update($data);

        return Redirect::route('prestasi-sekolah-db.index')->with('success', "\"$prestasi_sekolah_db->achievement\" with id:$prestasi_sekolah_db->id has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PrestasiSekolah $prestasi_sekolah_db)
    {

        $achievement = $prestasi_sekolah_db->achievement;
        $id = $prestasi_sekolah_db->id;
        $prestasi_sekolah_db->delete();
        return Redirect::route('prestasi-sekolah-db.index')->with('success', "\"$achievement\" with id:$id has been deleted");
    }
}
