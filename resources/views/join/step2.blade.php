@extends('layouts.main')

@section('content')
    @include("join.Heading")
    <section class="site-section">
        <div class="site-container -mw-1240">
            <div class="panel-group" id="stepByStep">
                <!-- Step One -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <a data-toggle="collapse" data-parent="" href="/tham-gia"> <span class="num">1</span>
                            <ul>
                                <li>Chọn gói tập</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                </div>
                <!-- End Step One -->
                <!-- Step Two -->
                <div class="panel panel-default">
                    <div class="panel-heading active">
                        <a data-toggle="collapse" data-parent="" href="javascript::void(0)" class="collapsed"> <span class="num">2</span>
                            <ul>
                                <li>Thông tin cá nhân</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div id="step1" class="panel-collapse collapse in">
                        <div class="panel-body panel-body1">
                            @guest
                                <p>Mời bạn <a href="/register">Đăng ký</a> hoặc <a href="/login">Đăng nhập</a> để tiếp tục</p>
                            @else
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
                                <form action="/tham-gia/step-3" method="POST">
                                    @csrf
                                    <input type="hidden" name="paymentPlanId" value="{{ $plan['id'] }}">
                                    <input type="hidden" name="clubId" value="{{ $clubId }}">
                                    <button class="nextStep step1-done available" type="submit">Tiếp theo</button>
                                </form>
                            @endguest
                        </div>
                    </div>
                </div>
                <!-- End Step Two -->
                <!-- Step Three -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <a data-toggle="collapse" data-parent="" href="javascript::void(0)" class="collapsed"> <span class="num">3</span>
                            <ul>
                                <li>Thanh toán</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                </div>
                <!-- End Step Three -->
            </div>
        </div>
    </section>
@endsection

@section('css')
    @parent
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link href="{{ asset('gym/css/steps.css') }}" rel="stylesheet">
    <style type="text/css">
        .panel-body table tr td { padding: 10px 0; }
        .panel-body table tr th { text-align: left; }
    </style>
@endsection

@section('js')
    @parent
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

    <script type="text/javascript">
        
        $('#GymSelect').change(function() {
            var clubId = $(this).val();
            $('.payment-plans').hide()
            if (clubId != '') {
                $(`.plan${clubId}`).show();
                $('.payment-plans').slick({
                    slidesToShow: 4,
                    slidesToScroll: 4
                });
            }
        })

        $('.plan-detail').on('click', function() {
            $('.plan-detail').removeClass('selected');
            $(this).addClass('selected');
            $('.nextStep').addClass('available');
            $('.nextStep').removeAttr('disabled');

            $('#paymentPlanId').val($(this).data('id'));
        })
    </script>
@endsection