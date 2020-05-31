<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Services\SocialAccountService;
use Illuminate\Support\Facades\Log;
use Socialite;

class SocialAuthController extends FController
{
    public function redirect($social)
    {
        return Socialite::driver($social)->redirect();
    }

    public function callback($social)
    {
        $providerUser = Socialite::driver($social)->user();
        $user = SocialAccountService::getUser($providerUser, $social);
        
        // if new user
        if (isset($user->phone) == null) {
            return view(
                'auth.social_register', 
                [
                    'user' => $user,
                    'providerUserId' => $providerUser->getId(),
                    'provider' => $social
                ]
            );
        } else {
            auth()->login($user);
            return redirect()->to('/');
        }
    }
}
