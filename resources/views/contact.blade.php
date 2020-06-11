@extends('layouts.main')

@section('content')
<section class="site-section -blog-grey-bg">
    <div class="subTitle" id="below"> Liên hệ</div>

    <form method="POST" class="vgForm" action="{{ route('contact') }}">
        @csrf

        <div class="flex-grid">
            <div class="col">
                <input id="title" type="title" class="egInput @error('title') is-invalid @enderror" name="title" value="{{ old('title') }}" required placeholder="Tiêu đề">
                @error('title')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="col">
                <input id="name" type="name" class="egInput @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required placeholder="Tên">
                @error('name')
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
            	<textarea id="message" class="egInput @error('message') is-invalid @enderror" name="message" value="{{ old('message') }}" required placeholder="Nội dung liên hệ"></textarea>
                @error('message')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>
        
        <div class="btnDiv">
            <button type="submit" class="btn btn-primary" id="btnPg00">
                Gửi liên hệ
            </button>
        </div>

        @if($errors->any())
            {!! implode('', $errors->all('<div>:message</div>')) !!}
        @endif
    </form>

</section> <!--site-section -blog-grey-bg-->
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
    <style type="text/css">
    </style>
@endsection