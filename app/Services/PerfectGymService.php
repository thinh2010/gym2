<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class PerfectGymService {
    protected $baseUrl;
    protected $urlV1;
    protected $clientId;
    protected $clientSecret;
    protected $username;
    protected $password;
    protected $client;

    const DEFAULT_CLUB_ID = 1;

    public function __construct() {
        $this->baseUrl = config('pg.baseUrl');
        $this->urlV1 = config('pg.v1Url');
        $this->clientId = config('pg.clientId');
        $this->clientSecret = config('pg.clientSecret');
        $this->username = config('pg.username');
        $this->password = config('pg.password');

        $this->client = $this->getInstance();
    }

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => $this->clientId,
            'X-Client-Secret' => $this->clientSecret,
        ]);
    }

    public function getToken() {
        $client = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded'
        ]);

        $response = $client->asForm()->post($this->urlV1 . 'oauth/authorize', [
            'password' => $this->password,
            'username' => $this->username,
            'grant_type' => 'password',
        ]);

        return $response->json()['access_token'];
    }

    public function createUser($user) {
        $client = Http::withToken($this->getToken())->withHeaders([
            'Content-Type' => 'application/json'
        ]);
        $user['isGuest'] = false;
        $response = $client->post($this->urlV1 . 'Users/User', $user);

        return $response->json();
    }

    public function getClubs() {
        $response = $this->client->get($this->baseUrl . 'odata/Clubs?$filter=isDeleted eq false&$expand=availablePaymentPlans');

        return $response->json()['value'];
    }

    public function getClub($id) {
        $response = $this->client->get($this->baseUrl . 'odata/Clubs('.$id.')');

        return $response->json();
    }

    public function getPlan($id) {
        $response = $this->client->get($this->baseUrl . 'odata/PaymentPlans('.$id.')');
        return $response->json();
    }

    public function checkDiscount($code, $planId, $clubId) {
        $discounts = $this->client->get($this->urlV1 . 'Discounts/Discounts?paymentPlanId=' . $planId . '&clubId=' . $clubId);
        dd($discounts);
    }

    public function getDiscounts($clubId, $planId) {
        $discounts = $this->client->get($this->urlV1 . 'Discounts/Discounts?paymentPlanId=' . $planId . '&clubId=' . $clubId);
        return $discounts->json()['elements'];
    }

    public function calcTotalPrice($planId, $discountId) {
        if ($discountId == null) {
            $plan = $this->getPlan($planId);
            $totalPrice = $plan['membershipFee']['gross'] + $plan['joiningFee']['gross'] + $plan['adminFee']['gross'];
        } else {
            $response = $this->client->get($this->urlV1 . 'Discounts/DiscountedFees?paymentPlanId=' . $planId . '&discountIds=' . $discountId);
            $prices = $response->json()['elements'][0];
            $totalPrice = $prices['membershipFee']['gross'] + $prices['joiningFee']['gross'] + $prices['administarationFee']['gross'];
        }

        return $totalPrice;
    }

}