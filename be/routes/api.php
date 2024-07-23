<?php

// routes/api.php

use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [WebController::class, 'login']);
Route::post('/subject', [WebController::class, 'subject']);
Route::get('/create', [WebController::class, 'create']);