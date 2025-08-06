<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\NewsletterSubscription
 *
 * @property int $id
 * @property string $email
 * @property string|null $name
 * @property array|null $interests
 * @property string $status
 * @property \Illuminate\Support\Carbon $subscribed_at
 * @property \Illuminate\Support\Carbon|null $unsubscribed_at
 * @property string|null $verification_token
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string|null $ip_address
 * @property string|null $user_agent
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription query()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereInterests($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereIpAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereSubscribedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereUnsubscribedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereUserAgent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription whereVerificationToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsletterSubscription active()
 * @method static \Database\Factories\NewsletterSubscriptionFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class NewsletterSubscription extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'email',
        'name',
        'interests',
        'status',
        'subscribed_at',
        'unsubscribed_at',
        'verification_token',
        'email_verified_at',
        'ip_address',
        'user_agent',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'interests' => 'array',
        'subscribed_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
        'email_verified_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active subscriptions.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}