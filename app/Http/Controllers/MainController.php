<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Drink;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

    public function show($id, Comment $comment)
    {
        $drink = Drink::all()->find($id);
        
        $comments = $comment->getComments($id);

        return \inertia('ShowCard', ['post' => $drink, 'comments' => $comments]);
    }

    public function addComment(CommentRequest $request, Comment $comment)
    {
        $validate = $request->validated();
        $comment->add($validate);
    }

    public function deleteComment(Comment $comment, $id, $messageId) {
        $comment->destroy($messageId);
    }
    public function deletePost(Drink $drink, $postId) {
        $drink->deletePost($postId);
        return to_route('main');
    }
}
