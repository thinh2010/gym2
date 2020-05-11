<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'id',
        'plan_id',
        'plan_name',
        'description',
        'price',
        'vpc_MerchTxnRef',
        'vpc_OrderInfo',
        'vpc_TicketNo',
        'vpc_TxnResponseCode',
        'vpc_TransactionNo',
        'vpc_Message',
        'vpc_Card',
        'vpc_CardUid',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo('App\User', 'user_id');
    }
}
