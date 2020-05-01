<?php

namespace App\Http\Controllers;

use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class CategoryController extends FController
{
    /**
     * Show the Category list
     *
     * @return \Illuminate\Http\Response
     */
    public function view($slug)
    {
        $category = Category::where('slug', $slug)->with('articles')->get()->first();
        $categories = Category::where('type', $category->type)->get();
        return view(
            'content.category.' . $category->type, 
            [
                'category' => $category,
                'categories' => $categories,
            ]
        );
    }

    public function view2($page_slug, $slug)
    {
        $category = Category::where('slug', $slug)->with('articles')->get()->first();
        $categories = Category::where('type', $category->type)->get();
        return view(
            'content.category.' . $category->type, 
            [
                'category' => $category,
                'categories' => $categories,
            ]
        );
    }
}