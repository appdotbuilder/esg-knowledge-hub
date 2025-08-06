<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KnowledgeHubController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page - ESG Knowledge Hub landing
Route::get('/', [HomeController::class, 'index'])->name('home');

// Knowledge Hub routes
Route::prefix('knowledge-hub')->name('knowledge-hub.')->group(function () {
    Route::get('/', [KnowledgeHubController::class, 'index'])->name('index');
    Route::get('/articles/{article:slug}', [KnowledgeHubController::class, 'show'])->name('show');
});

// About Us routes
Route::prefix('about')->name('about.')->group(function () {
    Route::get('/', [AboutController::class, 'index'])->name('index');
    Route::get('/company', [AboutController::class, 'index'])->defaults('section', 'company')->name('company');
    Route::get('/people', [AboutController::class, 'index'])->defaults('section', 'people')->name('people');
    Route::get('/careers', [AboutController::class, 'index'])->defaults('section', 'careers')->name('careers');
});

// Projects routes
Route::prefix('projects')->name('projects.')->group(function () {
    Route::get('/', [ProjectController::class, 'index'])->name('index');
    Route::get('/{project:slug}', [ProjectController::class, 'show'])->name('show');
});

// Contact routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Newsletter subscription
Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

// GreengovernGPT solution page
Route::get('/solution/greengovern-gpt', function () {
    return Inertia::render('solution/greengovern-gpt');
})->name('solution.greengovern-gpt');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
