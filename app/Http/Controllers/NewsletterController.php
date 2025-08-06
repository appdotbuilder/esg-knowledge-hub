<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsletterSubscriptionRequest;
use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter.
     */
    public function store(StoreNewsletterSubscriptionRequest $request)
    {
        NewsletterSubscription::create([
            ...$request->validated(),
            'subscribed_at' => now(),
            'verification_token' => bin2hex(random_bytes(32)),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'message' => 'Successfully subscribed to our newsletter!'
        ]);
    }
}