<?php

namespace App\Http\Controllers;

use App\Page;
use App\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class PageController extends FController
{
    /**
     * Show the Page list
     *
     * @return \Illuminate\Http\Response
     */
    public function view($slug)
    {
        $page = Page::where('slug', $slug)->with('blocks.blockContents')->get()->first();
        $pages = Page::notHomepage()->active()->get();
        $homepage = Page::with('blocks.blockContents')->active()->homepage()->get()->first();
        return view('page', ['page' => $page, 'homepage' => $homepage, 'pages' => $pages]);
    }

    public function viewItem($page_slug, $slug)
    {
        $page = Page::where('slug', $slug)->with('blocks.blockContents')->get()->first();
        $pages = Page::notHomepage()->active()->get();
        $homepage = Page::with('blocks.blockContents')->active()->homepage()->get()->first();
        return view('page', ['page' => $page, 'homepage' => $homepage, 'pages' => $pages]);
    }
}