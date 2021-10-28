<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

Route::post('/info/{id}', [FormController::class, 'store']);
Route::get('/info', [FormController::class, 'index']);
Route::get('/info/{id}', [FormController::class, 'findBoxId']);
Route::put('/editinfo/{id}', [FormController::class, 'update']);
Route::get('/editinfo/{id}', [FormController::class, 'findBoxId']);

// Route::resource('info', FormController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
