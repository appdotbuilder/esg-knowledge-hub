<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Climate Risk Assessment Platform',
                'slug' => 'climate-risk-assessment-platform',
                'description' => 'AI-powered platform helping Fortune 500 companies assess climate-related financial risks across their operations.',
                'content' => 'Comprehensive climate risk assessment solution that analyzes physical and transition risks using advanced machine learning algorithms and satellite data.',
                'type' => 'private',
                'status' => 'completed',
                'client_name' => 'Global Financial Services Corp',
                'start_date' => '2023-01-15',
                'end_date' => '2023-08-30',
                'budget' => 2500000.00,
                'technologies' => ['Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'React'],
                'team_members' => ['Sarah Chen', 'Michael Rodriguez', 'Dr. Emma Thompson'],
                'sort_order' => 1,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'title' => 'EU Taxonomy Compliance Dashboard',
                'slug' => 'eu-taxonomy-compliance-dashboard',
                'description' => 'Regulatory compliance tool for European companies to track and report EU Taxonomy alignment.',
                'content' => 'Automated compliance tracking system that helps organizations navigate complex EU Taxonomy requirements and generate regulatory reports.',
                'type' => 'government',
                'status' => 'ongoing',
                'client_name' => 'European Investment Bank',
                'start_date' => '2023-09-01',
                'end_date' => '2024-06-30',
                'budget' => 1800000.00,
                'technologies' => ['Vue.js', 'Node.js', 'MongoDB', 'Docker', 'Azure'],
                'team_members' => ['Sarah Chen', 'James Wilson'],
                'sort_order' => 2,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'title' => 'Supply Chain ESG Monitoring',
                'slug' => 'supply-chain-esg-monitoring',
                'description' => 'Real-time monitoring system for ESG risks across global supply chains using IoT and blockchain technology.',
                'content' => 'Innovative solution combining IoT sensors, satellite imagery, and blockchain to provide transparency in supply chain ESG performance.',
                'type' => 'ngo',
                'status' => 'ongoing',
                'client_name' => 'Global Supply Chain Transparency Initiative',
                'start_date' => '2023-06-01',
                'end_date' => '2024-03-31',
                'budget' => 950000.00,
                'technologies' => ['Blockchain', 'IoT', 'Satellite API', 'Angular', 'Express.js'],
                'team_members' => ['Michael Rodriguez', 'Dr. Emma Thompson'],
                'sort_order' => 3,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'title' => 'Carbon Footprint Calculator',
                'slug' => 'carbon-footprint-calculator',
                'description' => 'Advanced carbon accounting tool for small and medium enterprises with automated data collection.',
                'content' => 'User-friendly carbon footprint calculator that integrates with existing business systems to provide accurate GHG emissions tracking.',
                'type' => 'private',
                'status' => 'completed',
                'client_name' => 'SME Climate Coalition',
                'start_date' => '2022-10-01',
                'end_date' => '2023-04-15',
                'budget' => 480000.00,
                'technologies' => ['React', 'Django', 'Redis', 'Celery', 'Chart.js'],
                'team_members' => ['Dr. Emma Thompson', 'Michael Rodriguez'],
                'sort_order' => 4,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'title' => 'Biodiversity Impact Assessment Tool',
                'slug' => 'biodiversity-impact-assessment-tool',
                'description' => 'Comprehensive tool for assessing and monitoring biodiversity impacts of business operations.',
                'content' => 'Scientific assessment platform that uses ecological modeling to evaluate biodiversity risks and opportunities.',
                'type' => 'government',
                'status' => 'planning',
                'client_name' => 'Ministry of Environment',
                'start_date' => '2024-02-01',
                'end_date' => '2024-12-31',
                'budget' => 1200000.00,
                'technologies' => ['GIS', 'R', 'Shiny', 'PostGIS', 'Leaflet'],
                'team_members' => ['Dr. Emma Thompson', 'Sarah Chen'],
                'sort_order' => 5,
                'is_featured' => false,
                'is_active' => true,
            ],
        ];

        foreach ($projects as $projectData) {
            Project::create($projectData);
        }
    }
}