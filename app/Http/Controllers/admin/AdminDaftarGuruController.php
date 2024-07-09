<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\DaftarGuruResource;
use App\Models\DaftarGuru;
use App\Http\Requests\StoreDaftarGuruRequest;
use App\Http\Requests\UpdateDaftarGuruRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminDaftarGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/DaftarGuru/Index', [
            'datas' => DaftarGuruResource::collection(DaftarGuru::paginate(15)),
            'success' => session('success'),
            'session' => 0,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/DaftarGuru/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDaftarGuruRequest $request)
    {
        $data = $request->validated();
        DaftarGuru::create($data);
        return Redirect::route('daftar-guru-db.index')->with('success', 'Guru Data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(DaftarGuru $daftar_guru_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DaftarGuru $daftar_guru_db)
    {
        return Inertia::render('Admin/DaftarGuru/Edit', [
            'daftarGuru' => new DaftarGuruResource($daftar_guru_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDaftarGuruRequest $request, DaftarGuru $daftar_guru_db)
    {
        $data = $request->validated();
        $daftar_guru_db->update($data);
        return Redirect::route('daftar-guru-db.index')->with('success', "\"$daftar_guru_db->name\" data has been updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DaftarGuru $daftar_guru_db)
    {
        $daftar_guru_db->delete();
        return Redirect::route('daftar-guru-db.index')->with('success', "\"$daftar_guru_db->name\" data has been deleted");
    }
}
