<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\Project;
use App\Models\TeamMember;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page with ESG Knowledge Hub content.
     */
    public function index()
    {
        // Get latest featured content
        $featuredArticles = Article::published()
            ->with(['category', 'author'])
            ->latest('published_at')
            ->limit(6)
            ->get();

        // Get featured projects
        $featuredProjects = Project::active()
            ->featured()
            ->limit(3)
            ->get();

        // Get categories for navigation
        $categories = Category::active()
            ->withCount(['articles' => function ($query) {
                $query->published();
            }])
            ->get();

        // Get leadership team
        $leadership = TeamMember::active()
            ->leadership()
            ->limit(4)
            ->get();

        // Get latest news and regulatory updates
        $latestNews = Article::published()
            ->ofType('news')
            ->latest('published_at')
            ->limit(4)
            ->get();

        $regulatoryUpdates = Article::published()
            ->ofType('regulatory')
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('welcome', [
            'featuredArticles' => $featuredArticles,
            'featuredProjects' => $featuredProjects,
            'categories' => $categories,
            'leadership' => $leadership,
            'latestNews' => $latestNews,
            'regulatoryUpdates' => $regulatoryUpdates,
        ]);
    }
}