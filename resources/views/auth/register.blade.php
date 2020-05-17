@extends('layouts.main')

@section('content')
<section class="site-section -blog-grey-bg">
    <div class="subTitle" id="below"> Đăng ký thành viên mới </div>

    <form method="POST" class="vgForm" action="{{ route('register') }}">
        @csrf

        <input id="phone" type="phone" class="egInput @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required autocomplete="phone" autofocus placeholder="Số điện thoại">
        @error('phone')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input id="name" type="name" class="egInput @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" placeholder="Họ và tên">
        @error('name')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <input id="email" type="email" class="egInput @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email">
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <div class="flex-grid">
            <div class="col">
                <input id="birthdate" type="birthdate" class="egInput @error('birthdate') is-invalid @enderror" name="birthdate" value="{{ old('birthdate') }}" required autocomplete="birthdate" placeholder="Ngày sinh, điền theo định dạng năm-tháng-ngày" data-toggle="datepicker">
                @error('birthdate')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
                </div>
            <div class="col p10" style="padding-top: 10px;">
                <input type="radio" class="radioInput" id="male" name="gender" value="male">
                <label for="male" class="radioLabel">Nam</label>
                <input type="radio" class="radioInput" id="female" name="gender" value="female">
                <label for="female" class="radioLabel">Nữ</label>
                @error('gender')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>
        
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
                Đăng ký và mua gói tập
            </button>
        </div>
    </form>

</section> <!--site-section -blog-grey-bg-->
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('gym/datepicker/datepicker.min.css') }}" rel="stylesheet">

    <style type="text/css">
        .datepicker-panel > ul > li {
            width: 40px;
            height: 40px;
        }
        .datepicker-container {
            width: 280px;
        }
        .datepicker-panel > ul > li[data-view="month current"], 
        .datepicker-panel > ul > li[data-view="year current"], 
        .datepicker-panel > ul > li[data-view="years current"] {
            width: 200px;
        }

        .datepicker-container ul > li {
            color: #be202f;
        }
    </style>
@endsection

@section('js')
    @parent
    <script type="text/javascript" src="{{ asset('gym/datepicker/datepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('gym/datepicker/datepicker.vi-VN.js') }}"></script>
    <script type="text/javascript">
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd',
            language: 'vi-VN'
        });
    </script>
@endsection