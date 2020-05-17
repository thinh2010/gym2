@extends('layouts.main')

@section('content')
<div class="containerFullScreen">
    <div class="subTitle" id="below"> Thanh toán thất bại </div>
    <p>@lang('onepay.' . $payment['vpc_TxnResponseCode'] )</p>
</div>
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
@endsection