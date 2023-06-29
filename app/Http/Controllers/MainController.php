<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Drink;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class MainController extends Controller
{
    public function index()
    {
        return \inertia(
            'Main',
            [
                'posts' => Drink::all(),
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register')
            ]
        );
    }

    public function show($id)
    {
        $drink = Drink::all()->find($id);
        return \inertia('ShowCard', ['post' => $drink]);
    }

    public function addComment(Request $request)
    {
        $comment = new Comment;
        dd($request);
    }
}
