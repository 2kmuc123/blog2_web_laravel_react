<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ClientViewController;
use App\Http\Controllers\AdminViewController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
//admin
Route::get('admin/{path?}', AdminViewController::class)->middleware('role')->where('path', '[a-zA-Z0-9-/]+')->name('admin');
//client
Route::get('{path?}', ClientViewController::class)->where('path', '[a-zA-Z0-9-/]+');
