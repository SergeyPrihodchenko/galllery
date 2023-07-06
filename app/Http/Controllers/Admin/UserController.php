<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {

        $id = Auth::user()->id;

        $users = User::where('id', '!=', $id)->latest()->get();
        return \inertia('Admin/UserShows', ['users' => $users]);
    }

    public function update($id)
    {
        $user = User::where('id', '=', $id)->update(['isActive' => true]);
        return redirect()->route('admin.users');
    }

    public function delete($id)
    {
        Comment::where('user_id', '=', $id)->delete();
        User::destroy($id);
        return redirect()->route('admin.users');
    }
}
