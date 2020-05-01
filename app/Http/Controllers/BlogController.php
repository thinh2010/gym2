<?php

namespace App\Http\Controllers;

use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class BlogController extends FController
{
    /**
     * Show the Page list
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        $articles = Article::all();
        return view('blog', ['categories' => $categories, 'articles' => $articles]);
    }
}