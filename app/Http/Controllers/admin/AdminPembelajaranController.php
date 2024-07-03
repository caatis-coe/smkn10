<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PembelajaranResource;
use App\Models\Pembelajaran;
use App\Http\Requests\StorePembelajaranRequest;
use App\Http\Requests\UpdatePembelajaranRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminPembelajaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $type = $request->query('type');

        // Use the $type value to filter your data accordingly
        if ($type === 'kegiatanMahasiswa') {
            $datas = Pembelajaran::where('type', 'kegiatan mahasiswa')->paginate(10);
        } else {
            $datas = Pembelajaran::where('type', 'fasilitas')->paginate(10);
        }

        return Inertia::render('Admin/Pembelajaran/Index', [
            'datas' => PembelajaranResource::collection($datas),
            'session' => $type === 'fasilitas' || $type == '',
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $groups = Pembelajaran::all()->groupBy('type');


        $result = $groups->map(function ($item, $key) {
            return $item->pluck('group')->unique()->values()->all();
        });

        return Inertia::render('Admin/Pembelajaran/Create', [
            'groups' => $result
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePembelajaranRequest $request)
    {
        $data = $request->validated();
        $data['published_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        dd($data);
        Pembelajaran::create($data);
        

        return Redirect::route('pembelajaran-db.index')->with('success', 'Pembelajaran data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembelajaran $pembelajaran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembelajaran $pembelajaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePembelajaranRequest $request, Pembelajaran $pembelajaran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembelajaran $pembelajaran)
    {
        //
    }
}
