<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminVisiMisiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/VisiMisi/Index', [
            'visi' => Storage::disk('public')->get('doc/visi.html'),
            'misi' => Storage::disk('public')->get('doc/misi.html'),
            'tujuan' => Storage::disk('public')->get('doc/tujuan.html'),
            'success' => session('success'),
            'session' => 4,
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
        $request->validate([
            'visi' => 'required|string',
            'misi' => 'required|string',
            'tujuan' => 'required|string'
        ]);

        // Store the content to the file
        Storage::disk('public')->put('doc/visi.html', $request->input('visi'));
        Storage::disk('public')->put('doc/misi.html', $request->input('misi'));
        Storage::disk('public')->put('doc/tujuan.html', $request->input('tujuan'));
        
        // Redirect back with success message
        return Redirect::route('visi-misi-db.index')->with('success', 'Visi & Misi updated successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
