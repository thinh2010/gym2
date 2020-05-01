<?php

namespace App\Http\Controllers;

use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class ArticleController extends FController
{
    /**
     * Show the Article list
     *
     * @return \Illuminate\Http\Response
     */
    public function view($slug)
    {
        $article = Article::where('slug', $slug)->with('category')->get()->first();
        $categories = Category::all();
        return view(
            'content.article.' . $article->category->type, 
            [
                'article' => $article,
                'categories' => $categories,
            ]
        );
    }
}