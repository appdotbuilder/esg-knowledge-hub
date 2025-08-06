<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed all ESG Knowledge Hub data
        $this->call([
            CategorySeeder::class,
            TeamMemberSeeder::class,
            ProjectSeeder::class,
            ArticleSeeder::class,
        ]);
    }
}
