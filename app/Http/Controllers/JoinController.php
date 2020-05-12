<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Payment;
use Illuminate\Support\Facades\Auth;

class JoinController extends FController
{
    /**
     * Show the payment plan list
     *
     * @return view
     */
    public function index()
    {
        $clubs = $this->getClubs();
        return view('join.step1', ['clubs' => $clubs]);
    }

    public function step2(Request $request) {
        $planId = $request->input('paymentPlanId');
        $clubId = $request->input('clubId');
        $plan = $this->getPlan($planId);
        return view('join.step2', ['plan' => $plan, 'clubId' => $clubId]);
    }

    public function step3(Request $request) {
        $planId = $request->input('paymentPlanId');
        $clubId = $request->input('clubId');
        $plan = $this->getPlan($planId);
        return view('join.step3', ['plan' => $plan, 'clubId' => $clubId]);
    }

    public function payment(Request $request) {
        $planId = $request->input('paymentPlanId');
        $plan = $this->getPlan($planId);
        $price = $plan['membershipFee']['gross'];

        $payment = Payment::create([
            'plan_id' => $planId,
            'plan_name' => $plan['name'],
            'price' => $price,
            'vpc_TicketNo' => $this->getClientId(),
            'user_id' => Auth::user()->id,
        ]);

        // $payment->user()->associate(Auth::user());

        // $payment->save();

        $onePayUrl = 'https://mtf.onepay.vn/paygate/vpcpay.op';
        $params['vpc_AccessCode'] = config('onepay.access_code');
        $params['vpc_Amount'] = $price*100;
        $params['vpc_Command'] = 'pay';
        $params['vpc_Currency'] = 'VND';
        $params['vpc_Locale'] = 'vn';
        $params['vpc_MerchTxnRef'] = 'vgym1p' . $payment->id; // ma giao dich
        $params['vpc_Merchant'] = config('onepay.merchant');
        $params['vpc_OrderInfo'] = 'VGym'; // ma don hang
        $params['vpc_ReturnURL'] = env('APP_URL') . '/thanh-toan/' . $payment->id;
        $params['vpc_TicketNo'] = $this->getClientId();
        $params['vpc_Version'] = 2;

        $hashKey = config('onepay.hashkey');
        $hashString = $this->getSecureHash($params);
        
        // dd($hashString);
        $hashString .= '&vpc_SecureHash=' . strtoupper(hash_hmac('SHA256', $hashString, pack('H*',$hashKey)));

        // dd($onePayUrl . '?AgainLink=http://google.com/tham-gia&Title=VGym&' . $hashString);

        return redirect($onePayUrl . '?AgainLink=' . env('APP_URL') . '/tham-gia&Title=VGym&' . $hashString);
    }

    public function paymentResult(Request $request, Payment $payment) {
        $hashKey = config('onepay.hashkey');
        $secureHash = $request->input('vpc_SecureHash');
        $hashString = $this->getSecureHash($request->except('vpc_SecureHash'));

        $ownSecureHash = strtoupper(hash_hmac('SHA256', $hashString, pack('H*',$hashKey)));


        if ($secureHash === $ownSecureHash) {
            // check hash ok
            $data = $request->only([
                'vpc_MerchTxnRef', 
                'vpc_OrderInfo', 
                'vpc_TxnResponseCode', 
                'vpc_TransactionNo',
                'vpc_Message',
                'vpc_Card',
                'vpc_CardUid'
            ]);
            $payment->fill($data);
            $payment->save();
            return view('join.finish', ['payment' => $payment]);
        }
    }

    public function getSecureHash($params) {
        $hashString = '';
        foreach ($params as $key => $value) {
            $hashString .= $key . '=' . $value . '&';
        }
        $hashString = rtrim($hashString, "&");

        return $hashString;
    }

    function getClientId() {
        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP');
        else if(getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if(getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if(getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if(getenv('HTTP_FORWARDED'))
           $ipaddress = getenv('HTTP_FORWARDED');
        else if(getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
}