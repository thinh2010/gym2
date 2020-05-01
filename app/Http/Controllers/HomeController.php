<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;
use Illuminate\Support\Facades\Http;

class HomeController extends FController
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::notHomepage()->active()->get();
        // $this->testApi();

        $homepage = Page::with('blocks.blockContents')->active()->homepage()->get()->first();

        $this->setMeta($homepage);

        if ($homepage == NULL) {
            return view('welcome');
        }

        return view('home', ['homepage' => $homepage, 'pages' => $pages]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $data = $request->all();
        $sendTo = config('constant.send_to');
        // Mail::to('thinhnl@geniee.vn')->send(new Contact());
        Mail::to($sendTo)->send(new Contact($data));

        return response()->json(['message' => 'Thank you for contact us, we will contact you soon!']);
    }

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
            'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
        ]);
    }

    public function testApi() {
        $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';

        $client = $this->getInstance();

        // $response = $client->get($baseUrl . 'odata/CLubs/1?$expand=availablePaymentPlans');
        $response = $client->get($baseUrl . 'odata/Classes?$filter=clubId eq 1');
        dd($response->json());

    }
}
