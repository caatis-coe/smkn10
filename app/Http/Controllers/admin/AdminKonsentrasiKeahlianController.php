<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KonsentrasiKeahlian;
use App\Http\Requests\StoreKonsentrasiKeahlianRequest;
use App\Http\Requests\UpdateKonsentrasiKeahlianRequest;
use App\Http\Resources\KonsentrasiKeahlianResource;
use App\Models\Image;
use App\Models\ImageKonsentrasiKeahlian;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminKonsentrasiKeahlianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/KonsentrasiKeahlian/Index', [
            "datas" => KonsentrasiKeahlianResource::collection(KonsentrasiKeahlian::paginate(10)),
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/KonsentrasiKeahlian/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKonsentrasiKeahlianRequest $request)
    {
        $data = $request->validated();
        $data['endpoint'] = "keahlian-" . implode("-", (explode(" ", strtolower($data['title']))));

        KonsentrasiKeahlian::create($data);
        return Redirect::route('konsentrasi-keahlian-db.index')->with('success', 'Konsentrasi Keahlian data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(KonsentrasiKeahlian $konsentrasi_keahlian_db)
    {
        return Inertia::render('Admin/KonsentrasiKeahlian/Show', [
            'konsentrasiKeahlian' => new KonsentrasiKeahlianResource($konsentrasi_keahlian_db)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KonsentrasiKeahlian $konsentrasi_keahlian_db)
    {
        return Inertia::render('Admin/KonsentrasiKeahlian/Edit', [
            'konsentrasiKeahlian' => new KonsentrasiKeahlianResource($konsentrasi_keahlian_db)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKonsentrasiKeahlianRequest $request, KonsentrasiKeahlian $konsentrasi_keahlian_db)
    {
        $data = $request->validated();
        $data['endpoint'] = "keahlian-" . implode("-", (explode(" ", strtolower($data['title']))));
        foreach ($data['images'] as $image) {
            if ($image['init_status'] == "1") {
                if ($image['status_state'] == "post") {
                    if ($image['file']) {
                        if (isset($image['image_path'])) {
                            Storage::disk('public')->delete(str_replace('/storage/', '', $image['image_path']));
                        }
                        $image['image_path'] = $image['file']->store('images/konsentrasiKeahlian', 'public');
                        unset($image['file']);
                    }
                    Image::find($image['id'])->update($image);
                } else if ($image['status_state'] == "available_delete") {
                    if ($image['image_path']) {
                        Storage::disk('public')->delete(str_replace('/storage/', '', $image['image_path']));
                    }

                    ImageKonsentrasiKeahlian::where('imageID', $image['id'])
                        ->where('KonsentrasiKeahlianID', $konsentrasi_keahlian_db->id)
                        ->delete();
                    Image::find($image['id'])->delete();
                }
            } else {
                if ($image['status_state'] == "post") {
                    if (isset($image['file'])) {
                        $image['image_path'] = $image['file']->store('images/konsentrasiKeahlian', 'public');
                    }
                    $newImage = Image::create($image);
                    ImageKonsentrasiKeahlian::create([
                        'ImageID' => $newImage->id,
                        'KonsentrasiKeahlianID' => $konsentrasi_keahlian_db->id,
                    ]);
                }
            }
        }
        $konsentrasi_keahlian_db->update($data);
        return Redirect::route('konsentrasi-keahlian-db.index')->with('success', "\"$konsentrasi_keahlian_db->title\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KonsentrasiKeahlian $konsentrasi_keahlian_db)
    {
        $data = new KonsentrasiKeahlianResource($konsentrasi_keahlian_db);
        $title = $data['title'];

        // Delete each image
        foreach ($konsentrasi_keahlian_db->images as $image) {
            // Remove image file from storage
            if ($image->image_path) {
                Storage::disk('public')->delete($image->image_path);
            }

            // Delete image record from database
            ImageKonsentrasiKeahlian::where('imageID', $image['id'])
                ->where('KonsentrasiKeahlianID', $konsentrasi_keahlian_db->id)
                ->delete();
            Image::find($image['id'])->delete();
        }

        // Delete the KonsentrasiKeahlian record
        $konsentrasi_keahlian_db->delete();

        return Redirect::route('konsentrasi-keahlian-db.index')->with('success', "\"$title\" has been deleted");
    }
}
