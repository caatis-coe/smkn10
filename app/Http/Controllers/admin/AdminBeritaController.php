<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\BeritaResource;
use App\Models\Blog;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminBeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Blog::query();

        $beritas = $query->paginate(10);

        return Inertia::render('Admin/Berita/Index', [
            "datas" => BeritaResource::collection($beritas),
            'success'=> session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Berita/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile  */
        $data['published_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $image = $data['thumbnail_image'] ?? null;
        if ($image) {
            $data['thumbnail_image'] = $image->store('images/berita', 'public');
        }
        Blog::create($data);

        return Redirect::route('berita-db.index')->with('success', 'berita data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $berita_db)
    {
        return Inertia::render('Admin/Berita/Show', [
            "berita" => new BeritaResource($berita_db),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $berita_db)
    {
        return Inertia::render('Admin/Berita/Edit', [
            "berita" => new BeritaResource($berita_db),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $berita_db)
    {
        $data = $request->validated();
        dd($data);
        $data['updated_by'] = Auth::id();
        $image = $data['thumbnail_image'] ?? null;
        if ($image) {
            if($berita_db->thumbnail_image) {
                Storage::disk('public')->delete($berita_db->thumbnail_image);
            }
            $data['thumbnail_image'] = $image->store('images/berita', 'public');
        } else {
            unset($data['thumbnail_image']);
        }
        $berita_db->update($data);

        return Redirect::route('berita-db.index')->with('success', "\"$berita_db->title\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $berita_db)
    {
        $title = $berita_db->title;
        if($berita_db->thumbnail_image) {
            Storage::disk('public')->delete($berita_db->thumbnail_image);
        }
        $berita_db->delete();
        return Redirect::route('berita-db.index')->with('success', "\"$title\" has been deleted");
    }
}
