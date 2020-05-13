<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\FController;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Butschster\Head\Contracts\MetaTags\MetaInterface;

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
    public function __construct(MetaInterface $meta)
    {
        parent::__construct($meta);
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
            'name' => ['required', 'string', 'max:255'],
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
        return User::create([
            'phone' => $data['phone'],
            'name' => $data['name'],
            'email' => $data['email'],
            'birthdate' => $data['birthdate'],
            'gender' => $data['gender'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
