@extends('layouts.main')

@section('content')
<section class="site-section -blog-grey-bg">
    <div class="subTitle" id="below"> Liên hệ thành công</div>

    <div class="btnDiv">
        <p>{{ $message }}</p>
    </div>

</section> <!--site-section -blog-grey-bg-->
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
@endsection