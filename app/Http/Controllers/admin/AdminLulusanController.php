<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Http\Requests\StoreImageRequest;
use App\Http\Requests\StoreLulusanRequest;
use App\Http\Requests\UpdateImageRequest;
use App\Http\Requests\UpdateLulusanRequest;
use App\Http\Resources\ImageResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminLulusanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request )
    {
        $type = $request->query('type');
        $datas = [];

        if($type == 0) {
            $datas = Image::where('used_as', 'keterserapan_lulusan')->paginate(10);
        } else if ($type == 1) {
            $datas = Image::where('used_as', 'industri_mitra')->paginate(10);
        }

        return Inertia::render('Admin/Lulusan/Index', [
            'session' => $type ?? 0,
            'datas' => ImageResource::collection($datas),
            'success' => session('success')
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
    public function store(StoreLulusanRequest $request)
    {
        $data = $request->validated();
        $type = $data['used_as'] == 'keterserapan_lulusan' ? 0 : 1;
        $message = $data['used_as'] == 'keterserapan_lulusan' ? "Keterserapan lulusan" : "Industri mitra";
        $image =$data['file'] ?? null;
        if($image){
            $data["image_path"] = $image->store('images/lulusan', 'public');
        }

        if($data['used_as'] == 'keterserapan_lulusan'){
            unset($data['description']);
        }

        Image::create($data);

        return Redirect::route('lulusan-db.index', ['type' => $type])->with('success', "$message data has been created");
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $lulusan_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $lulusan_db)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLulusanRequest $request, Image $lulusan_db)
    {
        $data = $request->validated();
        $id = $lulusan_db->id;
        $type = $lulusan_db['used_as'] == 'keterserapan_lulusan' ? 0 : 1;
        if($data['file']){
            if($lulusan_db->image_path) {
                Storage::disk('public')->delete($lulusan_db->image_path);
            }
            $data["image_path"] = $data['file']->store('images/lulusan', 'public');
        }
        
        $lulusan_db->update($data);
        return Redirect::route('lulusan-db.index', ['type' => $type])->with('success', "Image id: \"$id\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $lulusan_db)
    {
        $id = $lulusan_db->id;
        $type = $lulusan_db['used_as'] == 'keterserapan_lulusan' ? 0 : 1;
        if($lulusan_db->image_path) {
            Storage::disk('public')->delete($lulusan_db->image_path);
        }
        $lulusan_db->delete();
        return Redirect::route('lulusan-db.index', ['type' => $type])->with('success', "Image id: \"$id\" has been deleted");
    }
}
