<?php

namespace App\Http\Controllers;

use App\Http\Requests\DrinkRequest;
use App\Models\Drink;
use Illuminate\Http\Request;

class EditPostController extends Controller
{
    public function index()
    {
        return inertia('Admin/EditPost');
    }

    public function add(DrinkRequest $request)
    {
        $drink = new Drink();
        $drink->add($request);
        return to_route('admin.edit');
    }

    public function editTitle(Request $request)
    {
        if (auth()->user()->isAdmin) {
            $drink = Drink::find($request->id);

            $drink->title = $request->title;

            $drink->save();
        }
    }

    public function editSubTitle(Request $request)
    {
        if (auth()->user()->isAdmin) {
            $drink = Drink::find($request->id);

            $drink->subtitle = $request->subtitle;

            $drink->save();
        }
    }
}
