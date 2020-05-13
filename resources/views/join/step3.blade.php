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
                    <div class="panel-heading">
                        <a data-toggle="collapse" data-parent="" href="javascript::void(0)" class="collapsed"> <span class="num">2</span>
                            <ul>
                                <li>Thông tin cá nhân</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                </div>
                <!-- End Step Two -->
                <!-- Step Three -->
                <div class="panel panel-default">
                    <div class="panel-heading active">
                        <a data-toggle="collapse" data-parent="" href="javascript::void(0)" class="collapsed"> <span class="num">3</span>
                            <ul>
                                <li>Thanh toán</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div id="step1" class="panel-collapse collapse in">
                        <div class="panel-body panel-body1">
                            <p>Tổng tiền thanh toán: <b>{{ number_format($plan['membershipFee']['gross'], 0) }} VNĐ</b></p>
                            <form action="/tham-gia/thanh-toan" method="POST">
                                @csrf
                                <input type="hidden" name="paymentPlanId" value="{{ $plan['id'] }}">
                                <input type="hidden" name="clubId" value="{{ $clubId }}">
                                <button class="nextStep step1-done available" type="submit">Thanh toán</button>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- End Step Three -->
            </div>
        </div>
    </section>
@endsection

@section('css')
    @parent
    {{-- <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"> --}}
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <style type="text/css">
        .panel-group {
            margin-bottom: 20px;
        }
        .panel-default {
            border-color: #be202f;
        }
        .panel {
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid transparent;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
            box-shadow: 0 1px 1px rgba(0,0,0,.05);
        }
        .panel-group .panel {
            margin-bottom: 20px;
            border-radius: 4px;
        }
        .panel-heading {
            padding: 0;
            background: none;
        }
        .panel-default>.panel-heading {
            color: #333;
            background-color: #bb434f;
            border-color: #ddd;
        }
        .panel-default>.panel-heading.active {
            background-color: #be202f;
        }
        .panel-group .panel-heading {
            border-bottom: 0;
        }
        .panel-heading {
            padding: 10px 15px;
            border-bottom: 1px solid transparent;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
        }
        .panel-heading a {
            color: #333;
            background: none;
            display: block;
            border-radius: 4px 4px 0 0;
        }
        .panel-heading a .num {
            background: #333;
            color: #fff;
        }
        .panel-heading a .num {
            display: block;
            float: left;
            margin-right: 10px;
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            background: #fff;
            border-radius: 50%;
            color: #333;
            font-size: 20px;
        }
        .panel-heading a ul {
            float: left;
            width: calc(100% - 75px);
            margin: 0;
            list-style: none;
        }
        .panel-heading.active a ul li {
            color: #fff;
        }
        .panel-heading a ul li {
            list-style: none;
            line-height: 45px;
        }
        .panel-heading a ul li strong {
            text-transform: uppercase;
        }
        .panel-default>.panel-heading+.panel-collapse>.panel-body {
            border-top-color: #ddd;
        }
        .panel-group .panel-heading+.panel-collapse>.panel-body {
            border-top: 1px solid #ddd;
        }
        .panel-body {
            border: 1px solid #bb434f;
        }
        .panel-body1 {
            padding: 30px 15px;
        }
        .clearfix {
            clear: both;
        }
        .classes-intro__gym-selector {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .panel-body .nextStep.available {
            background: #be202f;
            color: #fff;
        }
        .nextStep {
            margin: 30px 15px 0 15px;
            width: calc(100% - 30px);
            height: 56px;
            border-radius: 50px;
            border: none;
            background: #f1f1f1;
            color: #333;
            font-size: 25px;
            text-transform: uppercase;
        }
        .payment-plans {
            margin-top: 20px;
            /*visibility: hidden;*/
            display: none;
        }
        .plan-detail {
            margin: 20px 20px;
            transition: all 0.2s;
        }
        .plan-detail span {
            display: block;
            font-weight: bold;
            font-size: 28px;
            margin: 20px 0;
        }
        .plan-detail span.price {
            font-size: 34px;
        }
        .plan-detail .box {
            border: 1px solid #0ba8d8;
            background-color: #0ba8d8;
            display: block;
            color: #fff;
            text-align: center;
            padding: 25px 5px;
            border-radius: 10px;
            cursor: pointer;
        }
        .plan-detail:hover, .plan-detail.selected {
            margin-top: 0;
        }
        .plan1 .box {
            border: 1px solid #d8af0b;
            background-color: #d8af0b;
        }
        .plan2 .box {
            border: 1px solid #d8670b;
            background-color: #d8670b;
        }
        .plan3 .box {
            border: 1px solid #d8260b;
            background-color: #d8260b;
        }
        .plan4 .box {
            border: 1px solid #0ba5d8;
            background-color: #0ba5d8;
        }
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