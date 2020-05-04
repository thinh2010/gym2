<?php

namespace App\Http\Controllers;

use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class BlogController extends FController
{
    /**
     * Show the Page list
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::where('type', 'blog')->get();
        // $articles = Article::select(['articles.id', 'articles.title', 'articles.created_at', 'articles.image'])
        //         ->join('categories', 'categories.id', '=', 'articles.category_id')
        //         ->where('categories.type', 'blog')->get();

        $articles = Article::whereHas('category', function (Builder $query) {
                                    $query->where('type', 'blog');
                                })->get();
        return view('blog', ['categories' => $categories, 'articles' => $articles]);
    }
}