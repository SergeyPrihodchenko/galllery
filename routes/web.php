<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\EditPostController;
use App\Http\Controllers\MainController;
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

Route::get('/', [MainController::class, 'index'])->name('main');
Route::get('/showCard/{id}', [MainController::class, 'show'])->name('show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('comment/add', [MainController::class, 'addComment'])->name('add_comment');
});

Route::middleware(['auth', 'verified', 'superUser'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('users', [AdminUserController::class, 'index'])->name('admin.users');
    Route::post('users/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
    Route::delete('users/{id}', [AdminUserController::class, 'delete'])->name('admin.users.delete');

    Route::get('editPost', [EditPostController::class, 'index'])->name('admin.edit');
    Route::post('editPost/add', [EditPostController::class, 'add'])->name('admin.edit.add');
    Route::post('editPost/editTitle', [EditPostController::class, 'editTitle'])->name('admin.edit.editTitle');
    Route::post('editPost/editSubTitle', [EditPostController::class, 'editSubTitle'])->name('admin.edit.editSubTitle');

    Route::delete('showCard/{id}/message/delete/{messageId}', [MainController::class, 'deleteComment']);
    Route::delete('showCard/delete/post/{postId}', [MainController::class, 'deletePost']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
