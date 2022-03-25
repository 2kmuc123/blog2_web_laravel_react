<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminViewController extends Controller
{
    public function __invoke()
    {
        return view('admin');
    }
}
