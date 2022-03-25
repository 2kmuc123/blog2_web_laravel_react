<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/blog')->name('blog')->group(function () {
    //index
    Route::get('/', [BlogController::class, 'index'])->name('index');
    Route::get('/{id}', [BlogController::class, 'getblog'])->name('getblog');
    Route::post('/add', [BlogController::class, 'add'])->name('add');
    Route::patch('/update/{id}', [BlogController::class, 'update'])->name('update');
    Route::delete('/delete/{id}', [BlogController::class, 'delete'])->name('delete');
});
