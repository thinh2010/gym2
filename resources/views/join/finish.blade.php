@extends('layouts.main')

@section('content')
<div class="containerFullScreen">
    <div class="subTitle" id="below"> Thanh toán thành công </div>
    <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
</div>
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
@endsection