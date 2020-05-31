@extends('layouts.main')

@section('content')
<section class="site-section -blog-grey-bg">
    <div class="subTitle" id="below"> Đăng ký thành viên mới </div>
    <p class="intro">Chúng tôi cần thêm một số thông tin cơ bản để hoàn thành việc đăng ký thành viên mới</p>

    <form method="POST" class="vgForm" action="{{ route('register') }}">
        @csrf

        <span class="invalid-feedback message-error" role="alert"></span>

        <div class="flex-grid">
            <div class="col">
                <input id="last_name" type="last_name" class="egInput @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" required placeholder="Họ">
                @error('last_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col">
                <input id="first_name" type="first_name" class="egInput @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" required placeholder="Tên">
                @error('first_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="flex-grid">
            <div class="col">
                <input id="email" type="email" class="egInput @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required placeholder="Email">
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col">
                <input id="phone" type="phone" class="egInput @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required autofocus placeholder="Số điện thoại">
                @error('phone')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>
        
        <div class="flex-grid">
            <div class="col">
                <input id="birthdate" type="text" class="egInput @error('birthdate') is-invalid @enderror" name="birthdate" value="{{ old('birthdate') }}" required placeholder="Ngày sinh, điền theo định dạng ngày-tháng-năm" data-toggle="datepicker">
                @error('birthdate')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
                </div>
            <div class="col">
                <select name="gender" id="gender" class="select-box">
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
                @error('gender')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>
        
        <div class="flex-grid">
            <div class="col">
                <input id="password" type="password" class="egInput @error('password') is-invalid @enderror" name="password" required placeholder="Mật khẩu">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col">
                <input id="password-confirm" type="password" class="egInput @error('password_confirmation') is-invalid @enderror" name="password_confirmation" required placeholder="Nhập lại mật khẩu">
                @error('password_confirmation')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <input type="hidden" name="provider_user_id" value="{{ $providerUserId }}" />
        <input type="hidden" name="provider" value="{{ $provider }}" />

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
    <style type="text/css">
        .message-error { display: none }
        .invalid-feedback {
            background: #bb434f;
            padding: 10px;
            margin-bottom: 10px;
            color: #fff;
        }
        .intro {
            margin: 10px 0;
            text-align: center;
        }
    </style>
@endsection

@section('js')
    @parent
    <script type="text/javascript" src="{{ asset('gym/js/jquery.inputmask.min.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#birthdate").inputmask({alias:"datetime", inputFormat: "dd/mm/yyyy"});

            $('.vgForm').on('submit', function(e) {
                var email = $('#email').val();
                var first_name = $('#first_name').val();
                var last_name = $('#last_name').val();
                var phone = $('#phone').val();
                var birthdate = $('#birthdate').val();
                var password = $('#password').val();
                var password_confirm = $('#password-confirm').val();
                var error = false;

                if (email == '') {
                    error = true;
                    msg = 'Xin vui lòng điền email!';
                }

                if (first_name == '') {
                    error = true;
                    msg = 'Xin vui lòng điền tên!';
                }

                if (last_name == '') {
                    error = true;
                    msg = 'Xin vui lòng điền họ!';
                }

                if (phone == '') {
                    error = true;
                    msg = 'Xin vui lòng điền số điện thoại!';
                }

                if (birthdate == '') {
                    error = true;
                    msg = 'Xin vui lòng điền ngày sinh!';
                }

                if (password == '') {
                    error = true;
                    msg = 'Xin vui lòng điền mật khẩu!';
                }

                if (password.length < 8) {
                    error = true;
                    msg = 'Mật khẩu cần nhiều hơn 8 ký tự!';
                }

                if (password != password_confirm) {
                    error = true;
                    msg = 'Mật khẩu xác nhận không chính xác, vui lòng nhập lại';
                }

                if (error) {
                    e.preventDefault();
                    $('.message-error').html(msg).css({display: 'block'});
                } else {
                    $(this).submit();
                }
            })
        })


    </script>
@endsection