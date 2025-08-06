<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NewsletterSubscription>
 */
class NewsletterSubscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email' => $this->faker->unique()->email(),
            'name' => $this->faker->name(),
            'interests' => $this->faker->randomElements(['climate-change', 'sustainability', 'governance', 'reporting'], 2),
            'status' => 'active',
            'subscribed_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'verification_token' => bin2hex(random_bytes(32)),
            'email_verified_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'ip_address' => $this->faker->ipv4(),
            'user_agent' => $this->faker->userAgent(),
        ];
    }
}