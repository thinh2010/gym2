<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\FController;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Butschster\Head\Contracts\MetaTags\MetaInterface;
use Carbon\Carbon;
use App\Services\SocialAccountService;
use App\Services\PerfectGymService;

class RegisterController extends FController
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/tham-gia';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(MetaInterface $meta, PerfectGymService $pg)
    {
        parent::__construct($meta, $pg);
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'phone' => ['required', 'string', 'max:255', 'unique:users'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'gender' => ['required', 'string', 'max:255'],
            'birthdate' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if (isset($data['provider_user_id']) && $data['provider_user_id'] != '') {
            return SocialAccountService::createAccountAndUser($data);
        } else {
            return User::create([
                'phone' => $data['phone'],
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'birthdate' => new Carbon($data['birthdate']),
                'gender' => $data['gender'],
                'password' => Hash::make($data['password']),
            ]);
        }
    }
}
