<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KnowledgeHubController extends Controller
{
    /**
     * Display the knowledge hub with filtering and search.
     */
    public function index(Request $request)
    {
        $query = Article::published()->with(['category', 'author']);

        // Filter by type
        if ($request->filled('type')) {
            $query->ofType($request->type);
        }

        // Filter by category
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by industry
        if ($request->filled('industry')) {
            $query->where('industry', $request->industry);
        }

        // Search
        if ($request->filled('search')) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('excerpt', 'like', "%{$searchTerm}%")
                  ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }

        $articles = $query->latest('published_at')->paginate(12);

        $categories = Category::active()
            ->withCount(['articles' => function ($query) {
                $query->published();
            }])
            ->get();

        $industries = Article::published()
            ->whereNotNull('industry')
            ->distinct()
            ->pluck('industry')
            ->sort();

        return Inertia::render('knowledge-hub/index', [
            'articles' => $articles,
            'categories' => $categories,
            'industries' => $industries,
            'filters' => $request->only(['type', 'category', 'industry', 'search']),
        ]);
    }

    /**
     * Display a specific article.
     */
    public function show(Article $article)
    {
        // Increment view count
        $article->increment('views_count');

        // Load relationships
        $article->load(['category', 'author', 'comments.replies']);

        // Get related articles
        $relatedArticles = Article::published()
            ->where('id', '!=', $article->id)
            ->where('category_id', $article->category_id)
            ->limit(3)
            ->get();

        return Inertia::render('knowledge-hub/show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }
}