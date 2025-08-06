<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeamMember>
 */
class TeamMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'position' => $this->faker->jobTitle(),
            'bio' => $this->faker->paragraph(),
            'email' => $this->faker->email(),
            'linkedin_url' => 'https://linkedin.com/in/' . $this->faker->userName(),
            'expertise' => $this->faker->words(4),
            'certifications' => $this->faker->words(2),
            'years_experience' => $this->faker->numberBetween(5, 20),
            'sort_order' => $this->faker->numberBetween(1, 10),
            'is_leadership' => $this->faker->boolean(20),
            'is_active' => true,
        ];
    }
}