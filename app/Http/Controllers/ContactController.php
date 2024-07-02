<?php

namespace App\Http\Controllers;


use App\Mail\ContactFormMail;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function show(): Response {
        return Inertia::render('ContactUs');
    }

    public function sendEmail(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $data = $request->only(['name', 'email', 'subject', 'message']);

        try {
            Mail::to('fasyaraihan82@gmail.com')->send(new ContactFormMail($data));
            return redirect()->back()->with('success', 'Email sent successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to send email. Please try again.');
        }
    }
}
