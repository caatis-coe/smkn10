<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\DaftarTenagaPendidikanResource;
use App\Models\DaftarTenagaPendidikan;
use App\Http\Requests\StoreDaftarTenagaPendidikanRequest;
use App\Http\Requests\UpdateDaftarTenagaPendidikanRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminDaftarTenagaPendidikanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/DaftarTenagaPendidikan/Index', [
            'datas' => DaftarTenagaPendidikanResource::collection(DaftarTenagaPendidikan::paginate(15)),
            'success' => session('success'),
            'session' => 1,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/DaftarTenagaPendidikan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDaftarTenagaPendidikanRequest $request)
    {
        $data = $request->validated();
        DaftarTenagaPendidikan::create($data);
        return Redirect::route('daftar-tenaga-pendidikan-db.index')->with('success', 'Guru Data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(DaftarTenagaPendidikan $daftar_tenaga_pendidikan_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DaftarTenagaPendidikan $daftar_tenaga_pendidikan_db)
    {
        return Inertia::render('Admin/DaftarTenagaPendidikan/Edit', [
            'daftarTenagaPendidikan' => new DaftarTenagaPendidikanResource($daftar_tenaga_pendidikan_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDaftarTenagaPendidikanRequest $request, DaftarTenagaPendidikan $daftar_tenaga_pendidikan_db)
    {
        $data = $request->validated();
        $daftar_tenaga_pendidikan_db->update($data);
        return Redirect::route('daftar-tenaga-pendidikan-db.index')->with('success', "\"$daftar_tenaga_pendidikan_db->name\" data has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DaftarTenagaPendidikan $daftar_tenaga_pendidikan_db)
    {
        $daftar_tenaga_pendidikan_db->delete();
        return Redirect::route('daftar-tenaga-pendidikan-db.index')->with('success', "\"$daftar_tenaga_pendidikan_db->name\" data has been deleted");
    }
}
