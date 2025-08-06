<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(4),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->paragraph(),
            'content' => $this->faker->paragraphs(3, true),
            'type' => $this->faker->randomElement(['private', 'government', 'ngo']),
            'status' => $this->faker->randomElement(['planning', 'ongoing', 'completed', 'paused']),
            'client_name' => $this->faker->company(),
            'start_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'budget' => $this->faker->randomFloat(2, 100000, 5000000),
            'technologies' => $this->faker->words(5),
            'team_members' => $this->faker->words(3),
            'sort_order' => $this->faker->numberBetween(1, 10),
            'is_featured' => $this->faker->boolean(30),
            'is_active' => true,
        ];
    }
}