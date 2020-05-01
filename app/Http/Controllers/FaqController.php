<?php

namespace App\Http\Controllers;

use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;
use Illuminate\Database\Eloquent\Builder;

class FaqController extends FController
{
    /**
     * Show the Page list
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::where('type', 'faq')->get();
        $articles = Article::whereHas('category', function (Builder $query) {
                                    $query->where('type', 'faq');
                                })->get();
        return view('faq', ['categories' => $categories, 'articles' => $articles]);
    }
}