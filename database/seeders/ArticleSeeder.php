<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a default author if no users exist
        $author = User::first();
        if (!$author) {
            $author = User::create([
                'name' => 'ESG Expert',
                'email' => 'expert@esgknowledgehub.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]);
        }

        $categories = Category::all();
        
        $articles = [
            [
                'title' => 'The Future of Climate Risk Management in Financial Services',
                'slug' => 'future-climate-risk-management-financial-services',
                'excerpt' => 'How financial institutions are adapting their risk management frameworks to address climate-related risks and opportunities.',
                'content' => 'Climate risk management has become a critical component of financial services operations. This comprehensive analysis explores the latest approaches, regulatory requirements, and best practices for integrating climate considerations into risk assessment processes. Financial institutions must now consider both physical and transition risks in their strategic planning and capital allocation decisions.',
                'type' => 'research',
                'status' => 'published',
                'tags' => ['Climate Risk', 'Financial Services', 'Risk Management', 'TCFD'],
                'industry' => 'financial-services',
                'category_id' => $categories->where('slug', 'climate-change')->first()->id ?? 1,
                'author_id' => $author->id,
                'published_at' => now()->subDays(2),
                'views_count' => random_int(150, 500),
                'meta_description' => 'Comprehensive guide to climate risk management in financial services industry.',
                'meta_keywords' => ['climate risk', 'financial services', 'risk management', 'TCFD'],
            ],
            [
                'title' => 'ESG Data Quality: Challenges and Solutions',
                'slug' => 'esg-data-quality-challenges-solutions',
                'excerpt' => 'Addressing the critical issue of data quality in ESG reporting and how technology can provide solutions.',
                'content' => 'Data quality remains one of the biggest challenges in ESG reporting. This whitepaper examines current data quality issues, their impact on decision-making, and emerging technological solutions including AI, machine learning, and blockchain that can improve data accuracy and reliability in ESG reporting.',
                'type' => 'whitepaper',
                'status' => 'published',
                'tags' => ['Data Quality', 'ESG Reporting', 'Technology', 'AI'],
                'industry' => 'technology',
                'category_id' => $categories->where('slug', 'sustainability-reporting')->first()->id ?? 2,
                'author_id' => $author->id,
                'published_at' => now()->subDays(5),
                'views_count' => random_int(200, 600),
                'meta_description' => 'Exploring data quality challenges in ESG reporting and technological solutions.',
                'meta_keywords' => ['ESG data', 'data quality', 'reporting', 'technology'],
            ],
            [
                'title' => 'Board Diversity and Corporate Performance: New Research Findings',
                'slug' => 'board-diversity-corporate-performance-research',
                'excerpt' => 'Latest research on the correlation between board diversity and financial performance across industries.',
                'content' => 'Recent studies have shown significant correlations between board diversity and corporate performance. This research analysis examines data from over 1,000 companies across different sectors, revealing insights about gender diversity, ethnic diversity, and cognitive diversity in boardrooms and their impact on financial and ESG performance metrics.',
                'type' => 'blog',
                'status' => 'published',
                'tags' => ['Board Diversity', 'Corporate Governance', 'Performance', 'Research'],
                'industry' => 'general',
                'category_id' => $categories->where('slug', 'corporate-governance')->first()->id ?? 3,
                'author_id' => $author->id,
                'published_at' => now()->subDays(7),
                'views_count' => random_int(180, 450),
                'meta_description' => 'New research on board diversity impact on corporate performance.',
                'meta_keywords' => ['board diversity', 'corporate governance', 'performance', 'research'],
            ],
            [
                'title' => 'EU CSRD Implementation Guide: What Companies Need to Know',
                'slug' => 'eu-csrd-implementation-guide',
                'excerpt' => 'Comprehensive guide to the EU Corporate Sustainability Reporting Directive and its implementation requirements.',
                'content' => 'The EU Corporate Sustainability Reporting Directive (CSRD) introduces significant changes to sustainability reporting requirements. This detailed guide covers timeline, scope, reporting standards, assurance requirements, and practical steps for compliance. Companies subject to CSRD must prepare for enhanced disclosure requirements and third-party assurance.',
                'type' => 'regulatory',
                'status' => 'published',
                'tags' => ['CSRD', 'EU Regulation', 'Sustainability Reporting', 'Compliance'],
                'industry' => 'general',
                'category_id' => $categories->where('slug', 'regulatory-compliance')->first()->id ?? 5,
                'author_id' => $author->id,
                'published_at' => now()->subDays(1),
                'views_count' => random_int(300, 750),
                'meta_description' => 'Complete implementation guide for EU CSRD compliance.',
                'meta_keywords' => ['CSRD', 'EU regulation', 'sustainability reporting', 'compliance'],
            ],
            [
                'title' => 'Social Impact Measurement: Beyond Traditional Metrics',
                'slug' => 'social-impact-measurement-beyond-traditional-metrics',
                'excerpt' => 'Innovative approaches to measuring and reporting social impact that go beyond conventional KPIs.',
                'content' => 'Traditional social impact metrics often fail to capture the full scope of organizational impact on communities and stakeholders. This article explores innovative measurement frameworks, including social return on investment (SROI), outcome harvesting, and participatory evaluation methods that provide deeper insights into social value creation.',
                'type' => 'blog',
                'status' => 'published',
                'tags' => ['Social Impact', 'Measurement', 'KPIs', 'SROI'],
                'industry' => 'nonprofit',
                'category_id' => $categories->where('slug', 'social-impact')->first()->id ?? 4,
                'author_id' => $author->id,
                'published_at' => now()->subDays(3),
                'views_count' => random_int(120, 380),
                'meta_description' => 'Innovative approaches to social impact measurement and reporting.',
                'meta_keywords' => ['social impact', 'measurement', 'SROI', 'evaluation'],
            ],
            [
                'title' => 'Breaking: New SEC Climate Disclosure Rules Finalized',
                'slug' => 'sec-climate-disclosure-rules-finalized',
                'excerpt' => 'The SEC has finalized new climate disclosure requirements for public companies. Here\'s what you need to know.',
                'content' => 'The Securities and Exchange Commission has adopted final rules requiring public companies to disclose climate-related risks and their financial impacts. The rules include requirements for disclosure in registration statements and annual reports, with phased implementation beginning in fiscal year 2025.',
                'type' => 'news',
                'status' => 'published',
                'tags' => ['SEC', 'Climate Disclosure', 'Regulation', 'Public Companies'],
                'industry' => 'financial-services',
                'category_id' => $categories->where('slug', 'regulatory-compliance')->first()->id ?? 5,
                'author_id' => $author->id,
                'published_at' => now()->subHours(6),
                'views_count' => random_int(400, 800),
                'meta_description' => 'SEC finalizes new climate disclosure rules for public companies.',
                'meta_keywords' => ['SEC', 'climate disclosure', 'regulation', 'public companies'],
            ],
        ];

        foreach ($articles as $articleData) {
            Article::create($articleData);
        }
    }
}