<?php

namespace App\Services;

use Laravel\Socialite\Contracts\User as ProviderUser;
use App\SocialAccount;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class SocialAccountService
{
    public static function getUser(ProviderUser $providerUser, $social)
    {
        $account = SocialAccount::whereProvider($social)
            ->whereProviderUserId($providerUser->getId())
            ->first();

        if ($account) {
            return $account->user;
        } else {
            $email = $providerUser->getEmail() ?? $providerUser->getNickname();
            
            $user = User::whereEmail($email)->first();

            if (!$user) {

                $user = [
                    'email' => $email,
                ];
            }

            return $user;
        }
    }

    public static function createAccountAndUser($data) {
		$account = new SocialAccount([
            'provider_user_id' => $data['provider_user_id'],
            'provider' => $data['provider']
        ]);

        $user = User::create([
            'phone' => $data['phone'],
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'birthdate' => new Carbon($data['birthdate']),
            'gender' => $data['gender'],
            'password' => Hash::make($data['password']),
        ]);

        $account->user()->associate($user);
        $account->save();

        return $user;
    }
}