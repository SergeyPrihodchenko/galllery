<?php

namespace App\Http\Controllers;

use App\Http\Requests\DrinkRequest;
use App\Models\Drink;

class EditPostController extends Controller
{
    public function index()
    {
        return inertia('Admin/EditPost');
    }

    public function add(DrinkRequest $request, Drink $drink)
    {
        $drink->add($request);
        return to_route('admin.edit');
    }
}
