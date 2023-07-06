<?php

namespace App\Models;

use App\Http\Requests\DrinkRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Drink extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'img_drink'
    ];

    public function add($request)
    {
        $request->validated();
        $path = $request->file->store('public/img_drink');
        $arrPath = explode('/', $path);
        $name = end($arrPath);
        $title = $request->title;
        $subtitle = $request->subtitle;
        $data = ['title' => $title, 'subtitle' => $subtitle, 'img_drink' => $name];
        Drink::create($data);
    }

    public function deletePost($postId)
    {
        DB::table('comments')->where('drink_id', '=', $postId)->delete();
        Drink::destroy($postId);
    }
}
