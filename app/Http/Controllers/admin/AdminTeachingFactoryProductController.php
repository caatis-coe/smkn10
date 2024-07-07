<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KonsentrasiKeahlian;
use App\Models\TeachingFactoryProduct;
use App\Http\Requests\StoreTeachingFactoryProductRequest;
use App\Http\Requests\UpdateTeachingFactoryProductRequest;

use App\Http\Resources\TeachingFactoryProductResource;
use App\Models\Buyer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminTeachingFactoryProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $type = $request->query('type');

        // Use the $type value to filter your data accordingly
        if ($type) {
            $teaching_factory_products = TeachingFactoryProduct::where('KonsentrasiKeahlianID', $type)->paginate(10);
        } else {
            $teaching_factory_products = TeachingFactoryProduct::where('KonsentrasiKeahlianID', KonsentrasiKeahlian::first()->id)->paginate(10);
        }

        return Inertia::render('Admin/TeachingFactoryProduct/Index', [
            'datas' => KonsentrasiKeahlian::all(),
            'teachingFactoryProducts' => TeachingFactoryProductResource::collection($teaching_factory_products),
            'session' => $type ?? KonsentrasiKeahlian::first()->id,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $konsentrasiKeahlian = KonsentrasiKeahlian::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title
            ];
        });


        return Inertia::render('Admin/TeachingFactoryProduct/Create', [
            'konsentrasiKeahlian' => $konsentrasiKeahlian,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeachingFactoryProductRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile  */
        $image = $data['image_path'] ?? null;
        if ($image) {
            $data['image_path'] = $image->store('images/teachingFactoryProduct', 'public');
        }
        $data['KonsentrasiKeahlianID'] = $data['konsentrasi_keahlian_id'];
        TeachingFactoryProduct::create($data);

        return Redirect::route('teaching-factory-product-db.index', ['type' => $data['konsentrasi_keahlian_id']])->with('success', 'Teaching Factory Product data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(TeachingFactoryProduct $teaching_factory_product_db)
    {
        $teachingFactoryProductId = $teaching_factory_product_db->id;
        $data = KonsentrasiKeahlian::whereHas('teachingFactoryProducts', function ($query) use ($teachingFactoryProductId) {
            $query->where('id', $teachingFactoryProductId);
        })
            ->with(['teachingFactoryProducts' => function ($query) use ($teachingFactoryProductId) {
                $query->where('id', $teachingFactoryProductId);
            }])
            ->first();

        return  Inertia::render('Admin/TeachingFactoryProduct/Show', [
            'data' =>  $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TeachingFactoryProduct $teaching_factory_product_db)
    {
        $konsentrasiKeahlian = KonsentrasiKeahlian::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title
            ];
            
        });

        return Inertia::render('Admin/TeachingFactoryProduct/Edit', [
            'konsentrasiKeahlian' => $konsentrasiKeahlian,
            'teachingFactoryProduct' => $teaching_factory_product_db
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeachingFactoryProductRequest $request, TeachingFactoryProduct $teaching_factory_product_db)
    {
        $data = $request->validated();
        $image = $data['image_path'] ?? null;
        if ($image) {
            if ($teaching_factory_product_db->image_path) {
                Storage::disk('public')->delete($teaching_factory_product_db->image_path);
            }
            $data['image_path'] = $image->store('images/teachingFactoryProduct', 'public');
        } else {
            unset($data['image_path']);
        }
        $data['KonsentrasiKeahlianID'] = $data['konsentrasi_keahlian_id'];
        $teaching_factory_product_db->update($data);

        return Redirect::route('teaching-factory-product-db.index', ['type' => $data['konsentrasi_keahlian_id']])->with('success', "\"$teaching_factory_product_db->title\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TeachingFactoryProduct $teaching_factory_product_db, Request $request)
    {
        $type = $request->input('type');
        $title = $teaching_factory_product_db->title;
        $buyers = Buyer::where('TeachingFactoryProductID', $teaching_factory_product_db->id)->get();

        foreach ($buyers as $buyer) {
            $buyer->delete();
        }

        if ($teaching_factory_product_db->image_path) {
            Storage::disk('public')->delete($teaching_factory_product_db->image_path);
        }

        $teaching_factory_product_db->delete();
        return Redirect::route('teaching-factory-product-db.index', ['type' => $type])->with('success', "\"$title\" has been deleted");
    }
}
