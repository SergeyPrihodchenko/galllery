<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'user_id',
        'drink_id'
    ];

    public function add($request)
    {
        Comment::create($request);
    }

    public function getComments($id)
    {
        $comments = DB::select("SELECT c.id, u.name, u.surname, c.text, c.created_at FROM comments c JOIN users u ON u.id = c.user_id WHERE c.drink_id = ? ORDER BY c.created_at DESC", [$id]);
        if(auth()->user() !== null && !\auth()->user()->isAdmin) {
            foreach ($comments as $key => $value) {
                $comments[$key]->name[0] = strtoupper($comments[$key]->name[0]);
                $comments[$key]->surname = strtoupper($comments[$key]->surname[0]); 
            }
        }
        return $comments;
    }
}
