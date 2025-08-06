<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display the about us page or specific about section.
     */
    public function index(Request $request)
    {
        $section = $request->get('section', 'index');
        
        switch ($section) {
            case 'company':
                return Inertia::render('about/company');
            case 'people':
                $leadership = TeamMember::active()
                    ->leadership()
                    ->get();

                $team = TeamMember::active()
                    ->where('is_leadership', false)
                    ->get();

                return Inertia::render('about/people', [
                    'leadership' => $leadership,
                    'team' => $team,
                ]);
            case 'careers':
                return Inertia::render('about/careers');
            default:
                return Inertia::render('about/index');
        }
    }
}