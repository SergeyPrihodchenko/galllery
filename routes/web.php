<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\EditPostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return \inertia('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
})->name('main');

Route::middleware(['auth', 'verified', 'superUser'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('users', [AdminUserController::class, 'index'])->name('admin.users');
    Route::post('users/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
    Route::delete('users/{id}', [AdminUserController::class, 'delete'])->name('admin.users.delete');

    Route::get('editPost', [EditPostController::class, 'index'])->name('admin.edit');
    Route::post('editPost/add', [EditPostController::class, 'add'])->name('admin.edit.add');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
