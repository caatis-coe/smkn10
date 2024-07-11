<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PembelajaranResource;
use App\Models\Pembelajaran;
use App\Http\Requests\StorePembelajaranRequest;
use App\Http\Requests\UpdatePembelajaranRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
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
    public function store( StorePembelajaranRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile  */
        $data['published_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $image = $data['image_path'] ?? null;
        if ($image) {
            $data['image_path'] = $image->store('images/pembelajaran', 'public');
        }
        Pembelajaran::create($data);
        
        return Redirect::route('pembelajaran-db.index', ['type' => $request->type == 'kegiatan mahasiswa' ? 'kegiatanMahasiswa' : 'fasilitas'])->with('success', 'Pembelajaran data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembelajaran $pembelajaran_db)
    {
        return Inertia::render('Admin/Pembelajaran/Show', [
            'pembelajaran' => new PembelajaranResource($pembelajaran_db)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembelajaran $pembelajaran_db)
    {
        $groups = Pembelajaran::all()->groupBy('type');


        $result = $groups->map(function ($item, $key) {
            return $item->pluck('group')->unique()->values()->all();
        });

        return inertia::render('Admin/Pembelajaran/Edit', [
            'pembelajaran' => new PembelajaranResource($pembelajaran_db),
            'groups' => $result,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePembelajaranRequest $request, Pembelajaran $pembelajaran_db)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $image = $data['image_path'] ?? null;
        if ($image) {
            if($pembelajaran_db->image_path) {
                Storage::disk('public')->delete($pembelajaran_db->image_path);
            }
            $data['image_path'] = $image->store('images/pembelajaran', 'public');
        } else {
            unset($data['image_path']);
        }
        $pembelajaran_db->update($data);

        return Redirect::route('pembelajaran-db.index', ['type' => $request->type == 'kegiatan mahasiswa' ? 'kegiatanMahasiswa' : 'fasilitas'])->with('success', "\"$pembelajaran_db->title\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Pembelajaran $pembelajaran_db)
    {
        $title = $pembelajaran_db->title;
        if($pembelajaran_db->image_path) {
            Storage::disk('public')->delete($pembelajaran_db->image_path);
        }
        $pembelajaran_db->delete();
        return Redirect::route('pembelajaran-db.index', ['type' => $request->input('session') ? "fasilitas" : "kegiatanMahasiswa"])->with('success', "\"$title\" has been deleted");
    }
}
