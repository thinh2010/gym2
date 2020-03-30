<?php

namespace App\Http\Controllers;

use App\Page;
use App\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class PageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
        parent::__construct();
    }

    /**
     * Show the Page list
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page_slug)
    {
        $page = Page::where('slug', $page_slug)->first();
        $pages = Page::notHomepage()->active()->get();
        $homepage = Page::with('blocks.blockContents')->active()->homepage()->get()->first();
        return view('page', ['page' => $page, 'homepage' => $homepage, 'pages' => $pages]);
    }

    public function viewItem($page_slug, $item_slug)
    {
        $page = Page::where('slug', $page_slug)->first();
        $pages = Page::notHomepage()->active()->get();
        $homepage = Page::with('blocks.blockContents')->active()->homepage()->get()->first();
        $item = Item::where('slug', $item_slug)->first();
        return view('item', ['page' => $page, 'homepage' => $homepage, 'pages' => $pages, 'item' => $item]);
    }
}