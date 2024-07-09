<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PrestasiSiswaResource;
use App\Models\PrestasiSiswa;
use App\Http\Requests\StorePrestasiSiswaRequest;
use App\Http\Requests\UpdatePrestasiSiswaRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminPrestasiSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/PrestasiSiswa/Index', [
            'datas' => PrestasiSiswaResource::collection(PrestasiSiswa::paginate(10)),
            'success' => session('success')
        ]);
    }

   /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PrestasiSiswa/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrestasiSiswaRequest $request)
    {
        $data = $request->validated(); 
        PrestasiSiswa::create($data);

        return Redirect::route('prestasi-siswa-db.index')->with('success', 'Prestasi siswa data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(PrestasiSiswa $prestasi_siswa_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PrestasiSiswa $prestasi_siswa_db)
    {
        return Inertia::render('Admin/PrestasiSiswa/Edit', [
            'prestasiSiswa' => new PrestasiSiswaResource($prestasi_siswa_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrestasiSiswaRequest $request, PrestasiSiswa $prestasi_siswa_db)
    {
        $data = $request->validated();
        $prestasi_siswa_db->update($data);

        return Redirect::route('prestasi-siswa-db.index')->with('success', "\"$prestasi_siswa_db->achievement\" with id:$prestasi_siswa_db->id has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PrestasiSiswa $prestasi_siswa_db)
    {

        $achievement = $prestasi_siswa_db->achievement;
        $id = $prestasi_siswa_db->id;
        $prestasi_siswa_db->delete();
        return Redirect::route('prestasi-siswa-db.index')->with('success', "\"$achievement\" with id:$id has been deleted");
    }
}
