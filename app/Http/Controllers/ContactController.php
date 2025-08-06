<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactFormRequest;
use App\Models\ContactForm;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        return Inertia::render('contact');
    }

    /**
     * Store a new contact form submission.
     */
    public function store(StoreContactFormRequest $request)
    {
        ContactForm::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return redirect()->route('contact.index')
            ->with('success', 'Thank you for your message! We will get back to you soon.');
    }
}