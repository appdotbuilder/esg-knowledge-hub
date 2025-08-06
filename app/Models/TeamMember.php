<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\TeamMember
 *
 * @property int $id
 * @property string $name
 * @property string $position
 * @property string|null $bio
 * @property string|null $avatar
 * @property string|null $email
 * @property string|null $linkedin_url
 * @property string|null $twitter_url
 * @property array|null $expertise
 * @property array|null $certifications
 * @property int|null $years_experience
 * @property int $sort_order
 * @property bool $is_leadership
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember query()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereBio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereCertifications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereExpertise($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereIsLeadership($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereLinkedinUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereTwitterUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereYearsExperience($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember active()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember leadership()
 * @method static \Database\Factories\TeamMemberFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class TeamMember extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'position',
        'bio',
        'avatar',
        'email',
        'linkedin_url',
        'twitter_url',
        'expertise',
        'certifications',
        'years_experience',
        'sort_order',
        'is_leadership',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'expertise' => 'array',
        'certifications' => 'array',
        'years_experience' => 'integer',
        'sort_order' => 'integer',
        'is_leadership' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active team members.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }

    /**
     * Scope a query to only include leadership team members.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLeadership($query)
    {
        return $query->where('is_leadership', true);
    }
}