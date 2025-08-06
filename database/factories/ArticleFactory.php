<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'slug' => $this->faker->slug(),
            'excerpt' => $this->faker->paragraph(),
            'content' => $this->faker->paragraphs(5, true),
            'type' => $this->faker->randomElement(['blog', 'whitepaper', 'research', 'news', 'regulatory']),
            'status' => 'published',
            'tags' => $this->faker->words(3),
            'industry' => $this->faker->randomElement(['financial-services', 'technology', 'manufacturing', 'healthcare']),
            'category_id' => Category::factory(),
            'author_id' => User::factory(),
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'views_count' => $this->faker->numberBetween(50, 1000),
            'meta_description' => $this->faker->sentence(),
            'meta_keywords' => $this->faker->words(5),
        ];
    }
}