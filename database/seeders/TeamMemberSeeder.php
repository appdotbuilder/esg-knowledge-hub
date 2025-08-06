<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teamMembers = [
            [
                'name' => 'Sarah Chen',
                'position' => 'CEO & Founder',
                'bio' => 'Former Head of Sustainability at Goldman Sachs with 15+ years of experience in ESG strategy and implementation.',
                'email' => 'sarah.chen@esgknowledgehub.com',
                'linkedin_url' => 'https://linkedin.com/in/sarahchen',
                'expertise' => ['ESG Strategy', 'Climate Finance', 'Regulatory Compliance'],
                'certifications' => ['CFA', 'SASB', 'GRI'],
                'years_experience' => 15,
                'sort_order' => 1,
                'is_leadership' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Michael Rodriguez',
                'position' => 'Chief Technology Officer',
                'bio' => 'Technology leader with expertise in AI, data analytics, and sustainable technology solutions.',
                'email' => 'michael.rodriguez@esgknowledgehub.com',
                'linkedin_url' => 'https://linkedin.com/in/michaelrodriguez',
                'expertise' => ['AI/ML', 'Data Analytics', 'ESG Technology'],
                'certifications' => ['AWS Solutions Architect', 'Google Cloud Professional'],
                'years_experience' => 12,
                'sort_order' => 2,
                'is_leadership' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Dr. Emma Thompson',
                'position' => 'Head of Research',
                'bio' => 'Environmental scientist and former IPCC contributor with deep expertise in climate risk assessment.',
                'email' => 'emma.thompson@esgknowledgehub.com',
                'linkedin_url' => 'https://linkedin.com/in/emmathompson',
                'expertise' => ['Climate Science', 'Risk Assessment', 'Environmental Policy'],
                'certifications' => ['PhD Environmental Science', 'IPCC Contributor'],
                'years_experience' => 18,
                'sort_order' => 3,
                'is_leadership' => true,
                'is_active' => true,
            ],
            [
                'name' => 'James Wilson',
                'position' => 'Director of Partnerships',
                'bio' => 'Business development expert focused on building strategic partnerships with Fortune 500 companies.',
                'email' => 'james.wilson@esgknowledgehub.com',
                'linkedin_url' => 'https://linkedin.com/in/jameswilson',
                'expertise' => ['Business Development', 'Strategic Partnerships', 'Corporate Relations'],
                'certifications' => ['MBA Finance', 'CRM'],
                'years_experience' => 10,
                'sort_order' => 4,
                'is_leadership' => true,
                'is_active' => true,
            ],
        ];

        foreach ($teamMembers as $memberData) {
            TeamMember::create($memberData);
        }
    }
}