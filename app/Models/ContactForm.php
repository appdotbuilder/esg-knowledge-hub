<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ContactForm
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $company
 * @property string|null $phone
 * @property string $subject
 * @property string $message
 * @property string $inquiry_type
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $replied_at
 * @property string|null $internal_notes
 * @property string|null $ip_address
 * @property string|null $user_agent
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereInquiryType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereInternalNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereIpAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereRepliedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm whereUserAgent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContactForm newInquiries()
 * @method static \Database\Factories\ContactFormFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class ContactForm extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'company',
        'phone',
        'subject',
        'message',
        'inquiry_type',
        'status',
        'replied_at',
        'internal_notes',
        'ip_address',
        'user_agent',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'replied_at' => 'datetime',
    ];

    /**
     * Scope a query to only include new inquiries.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNewInquiries($query)
    {
        return $query->where('status', 'new')->orderBy('created_at', 'desc');
    }
}