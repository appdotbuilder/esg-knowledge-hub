<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Climate Change',
                'slug' => 'climate-change',
                'description' => 'Research and insights on climate risks, adaptation strategies, and mitigation approaches.',
                'color' => '#10B981',
                'sort_order' => 1,
            ],
            [
                'name' => 'Sustainability Reporting',
                'slug' => 'sustainability-reporting',
                'description' => 'Best practices, frameworks, and guidelines for ESG disclosure and reporting.',
                'color' => '#3B82F6',
                'sort_order' => 2,
            ],
            [
                'name' => 'Corporate Governance',
                'slug' => 'corporate-governance',
                'description' => 'Board oversight, executive compensation, and governance structures.',
                'color' => '#8B5CF6',
                'sort_order' => 3,
            ],
            [
                'name' => 'Social Impact',
                'slug' => 'social-impact',
                'description' => 'Community engagement, diversity & inclusion, and social responsibility initiatives.',
                'color' => '#F59E0B',
                'sort_order' => 4,
            ],
            [
                'name' => 'Regulatory Compliance',
                'slug' => 'regulatory-compliance',
                'description' => 'Latest regulatory requirements, policy changes, and compliance guidance.',
                'color' => '#EF4444',
                'sort_order' => 5,
            ],
            [
                'name' => 'Technology & Innovation',
                'slug' => 'technology-innovation',
                'description' => 'ESG technology solutions, data analytics, and innovation in sustainability.',
                'color' => '#06B6D4',
                'sort_order' => 6,
            ],
        ];

        foreach ($categories as $categoryData) {
            Category::create($categoryData);
        }
    }
}