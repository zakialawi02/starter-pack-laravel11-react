<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('dashboard')->as('admin.')->group(function () {
    Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
        Route::resource('users', UserController::class)->except('create', 'edit');
        Route::get('/user/{user:id}', [UserController::class, 'getUser'])->name('getUser');
    });

    Route::middleware(['auth', 'verified', 'role:admin,writer'])->group(function () {
        // Route::get
    });

    Route::middleware(['auth', 'verified', 'role:admin,writer,user'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/i/getInfo', [DashboardController::class, 'getInfo'])->name('dashboard.getInfo');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


        Route::get('/empty', function () {
            return Inertia::render('Front/EmptyPage');
        })->name('empty');
    });
});

Route::middleware(['auth', 'verified', 'role:admin,writer'])->group(function () {
    // Route::get
});

require __DIR__ . '/auth.php';
