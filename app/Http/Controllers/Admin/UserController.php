<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() 
    {

        $id = Auth::user()->id;

        $users = User::all()->where('id', '!=', $id);
        return \inertia('Admin/UserShows', ['users' => $users]);
    }
}
