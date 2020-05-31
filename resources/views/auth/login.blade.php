@extends('layouts.main')

@section('content')
<div class="containerFullScreen">
    <div class="subTitle" id="below"> Đăng nhập hệ thống </div>

    <form method="POST" class="egForm" action="{{ route('login') }}">
        @csrf

        <input id="email" type="text" class="egInput @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Số điện thoại hoặc Email">
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input id="password" type="password" class="egInput @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Mật khẩu">

        @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

        <label class="form-check-label" for="remember">
            Ghi nhớ đăng nhập
        </label>

        <div class="btnDiv">
            <button type="submit" class="btn btn-primary" id="btnPg00">
                Đăng nhập
            </button>

            <div class="line"></div>

            <a href="/redirect/facebook" class="btn btn-fb">
                Đăng nhập bằng Facebook
            </a>
        </div>
    </form>

  </div> <!--containerFullScreen-->
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
@endsection