<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientViewController extends Controller
{
    public function __invoke()
    {
        return view('client');
    }
}
