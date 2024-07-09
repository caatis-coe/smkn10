<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PrestasiGuru;
use App\Http\Requests\StorePrestasiGuruRequest;
use App\Http\Requests\UpdatePrestasiGuruRequest;
use App\Http\Resources\PrestasiGuruResource;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminPrestasiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/PrestasiGuru/Index', [
            'datas' => PrestasiGuruResource::collection(PrestasiGuru::paginate(10)),
            'success' => session('success')
        ]);
    }

   /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PrestasiGuru/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrestasiGuruRequest $request)
    {
        $data = $request->validated(); 
        PrestasiGuru::create($data);

        return Redirect::route('prestasi-guru-db.index')->with('success', 'Prestasi guru data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(PrestasiGuru $prestasi_guru_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PrestasiGuru $prestasi_guru_db)
    {
        return Inertia::render('Admin/PrestasiGuru/Edit', [
            'prestasiGuru' => new PrestasiGuruResource($prestasi_guru_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrestasiGuruRequest $request, PrestasiGuru $prestasi_guru_db)
    {
        $data = $request->validated();
        $prestasi_guru_db->update($data);

        return Redirect::route('prestasi-guru-db.index')->with('success', "\"$prestasi_guru_db->achievement\" with id:$prestasi_guru_db->id has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PrestasiGuru $prestasi_guru_db)
    {

        $achievement = $prestasi_guru_db->achievement;
        $id = $prestasi_guru_db->id;
        $prestasi_guru_db->delete();
        return Redirect::route('prestasi-guru-db.index')->with('success', "\"$achievement\" with id:$id has been deleted");
    }
}
