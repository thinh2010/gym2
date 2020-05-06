@extends('layouts.other')

@section('content')
<div class="containerFullScreen">
    <div class="subTitle" id="below"> Đăng ký thành viên mới </div>

    <form method="POST" class="egForm" action="{{ route('register') }}">
        @csrf

        <input id="phone" type="phone" class="egInput @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required autocomplete="phone" autofocus placeholder="Số điện thoại">
        @error('phone')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input id="name" type="name" class="egInput @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Họ và tên">
        @error('name')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input id="email" type="email" class="egInput @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email">
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

        <input id="password-confirm" type="password" class="egInput @error('password_confirmation') is-invalid @enderror" name="password_confirmation" required placeholder="Nhập lại mật khẩu">

        @error('password_confirmation')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <div class="btnDiv">
            <button type="submit" class="btn btn-primary" id="btnPg00">
                Đăng ký
            </button>
        </div>
    </form>

</div> <!--containerFullScreen-->
@endsection
