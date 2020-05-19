@extends('layouts.main')

@section('content')
	<div class="containerFullScreen">
    	<div class="subTitle" id="below"> Thông tin tài khoản </div>

    	<table>
            <tr>
                <th width="200px" align="left">Tên</th>
                <td>{{ Auth::user()->name }}</td>
            </tr>
            <tr>
                <th width="200px">Email</th>
                <td>{{ Auth::user()->email }}</td>
            </tr>
            <tr>
                <th width="200px">Số điện thoại</th>
                <td>{{ Auth::user()->phone }}</td>
            </tr>
            <tr>
                <th width="200px">Ngày sinh</th>
                <td>{{ Auth::user()->birthdate }}</td>
            </tr>
            <tr>
                <th width="200px">Giới tính</th>
                <td>@lang('messages.' . Auth::user()->gender)</td>
            </tr>
        </table>

        <h2>Lịch sử giao dịch</h2>
        <table>
            <tr>
                <th width="200px">Tên</th>
                <td>{{ Auth::user()->name }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ Auth::user()->email }}</td>
            </tr>
            <tr>
                <th>Số điện thoại</th>
                <td>{{ Auth::user()->phone }}</td>
            </tr>
            <tr>
                <th>Ngày sinh</th>
                <td>{{ Auth::user()->birthdate }}</td>
            </tr>
            <tr>
                <th>Giới tính</th>
                <td>@lang('messages.' . Auth::user()->gender)</td>
            </tr>
        </table>
    </div>
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">
    <style type="text/css">
    	table th {
    		text-align: left;
    	}
    </style>
@endsection