<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Models\KonsentrasiKeahlian;
use Exception;
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
        try {
            Buyer::create([
                'name' => $validatedData['namaPembeli'],
                'company_name' => $validatedData['namaPerusahaan'],
                'company_address' => $validatedData['alamatPerusahaan'],
                'contact' => $validatedData['noKontak'],
                'TeachingFactoryProductID' => $validatedData['idProduct'],
            ]);
            return redirect()->back()->with('success', 'your request is saved successfully!');
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Failed to save your request. Please try again later.'])->with(['error_detail' => $e->getMessage()]);
        }
        
    }

    public function show() : Response {

        $data = KonsentrasiKeahlian::with('teachingFactoryProducts')->get();

        return Inertia::Render('TeachingFactory',[
            'data' => $data,
            'success' => session('success'),
            'error' => session('error'),
            'errorDetail' => session('error_detail'),
        ]);
    }
}