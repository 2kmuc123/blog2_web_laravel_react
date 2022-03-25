<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blog extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title',
        'catagory',
        'name',
        'content1',
        'content2',
        'content3',
        'image1',
        'image2',
        'image3',
        'create_at'
    ];
}
