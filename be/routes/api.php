<?php

// routes/api.php

use App\Http\Controllers\MangaController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [MangaController::class, 'login']);
Route::get('/create', [MangaController::class, 'create']);