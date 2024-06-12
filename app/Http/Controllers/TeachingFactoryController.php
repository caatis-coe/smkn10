<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Models\KonsentrasiKeahlian;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeachingFactoryController extends Controller
{

    public function sendDataBuyer(Request $request) {
        // Validate incoming request data
        $validatedData = $request->validate([
            'namaPembeli' => 'required|string',
            'namaPerusahaan' => 'required|string',
            'alamatPerusahaan' => 'required|string',
            'noKontak' => 'required|string',
            'idProduct' => 'required|integer|exists:teaching_factory_products,id',
        ]);

        // Insert data into the buyers table
        Buyer::create([
            'name' => $validatedData['namaPembeli'],
            'company_name' => $validatedData['namaPerusahaan'],
            'company_address' => $validatedData['alamatPerusahaan'],
            'contact' => $validatedData['noKontak'],
            'TeachingFactoryProductID' => $validatedData['idProduct'],
        ]);
    }

    public function show() : Response {

        $data = KonsentrasiKeahlian::with('teachingFactoryProducts')->get();

        return Inertia::Render('TeachingFactory',['data' => $data]);
    }
}