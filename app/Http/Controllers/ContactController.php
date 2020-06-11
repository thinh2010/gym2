<?php

namespace App\Http\Controllers;

use App\Request;
use App\Repositories\RequestRepository;
use App\Services\RequestService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Mail;

class ContactController extends FController
{
    /**
     * RequestService
     */
    protected $requestService;
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('contact');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact(HttpRequest $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email',
            'title' => 'required',
            'message' => 'required',
        ]);

        $this->requestService = new RequestService(new RequestRepository());

        $data = $request->all();
        $this->requestService->create($data);

        return view('contact_success', ['message' => 'Cảm ơn bạn đã góp ý, chúng tôi sẽ liên lạc với bạn sớm nhất có thể!!!']);
        // $sendTo = config('constant.send_to');
        // Mail::to('thinhnl@geniee.vn')->send(new Contact());
        // Mail::to($sendTo)->send(new Contact($data));


        return response()->json(['message' => 'Thank you for contact us, we will contact you soon!']);
    }
}
