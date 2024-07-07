<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\BuyerResource;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminBuyerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Buyer/Index',[
            'datas' => BuyerResource::collection(Buyer::paginate(10)),
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Buyer $buyer_db)
    {
        return Inertia::render('Admin/Buyer/Show', [
            'buyer' => new BuyerResource($buyer_db)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Buyer $buyer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Buyer $buyer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buyer $buyer_db)
    {
        $name=$buyer_db['name'];
        $buyer_db->delete();
        return Redirect::route('buyer-db.index')->with('success', "data from \"$name\" has been deleted");
    }
}
