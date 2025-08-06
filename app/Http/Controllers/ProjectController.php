<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display projects with filtering.
     */
    public function index(Request $request)
    {
        $query = Project::active();

        // Filter by type
        if ($request->filled('type')) {
            $query->ofType($request->type);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $projects = $query->latest('created_at')->paginate(9);

        return Inertia::render('projects/index', [
            'projects' => $projects,
            'filters' => $request->only(['type', 'status']),
        ]);
    }

    /**
     * Display a specific project.
     */
    public function show(Project $project)
    {
        // Get related projects
        $relatedProjects = Project::active()
            ->where('id', '!=', $project->id)
            ->where('type', $project->type)
            ->limit(3)
            ->get();

        return Inertia::render('projects/show', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}