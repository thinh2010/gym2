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
                            <div class="payment-plan">{{ $club['name'] }} - {{ $plan['name'] }}</div>
                            <form action="/tham-gia/thanh-toan" method="POST">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <th width="60%">Nội dung thanh toán</th>
                                            <th width="10%">Số lượng</th>
                                            <th width="15%">Đơn giá</th>
                                            <th width="20%">Thành tiền</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        @if ($plan['membershipFee']['gross'] > 0)
                                        <tr>
                                            <td>Phí thành viên</td>
                                            <td>1</td>
                                            <td>{{ number_format($plan['membershipFee']['gross'], 0) }} VNĐ</td>
                                            <td>{{ number_format($plan['membershipFee']['gross'], 0) }} VNĐ</td>
                                        </tr>
                                        @endif
                                        @if ($plan['joiningFee']['gross'] > 0)
                                        <tr>
                                            <td>Phí đăng ký</td>
                                            <td>1</td>
                                            <td>{{ number_format($plan['joiningFee']['gross'], 0) }} VNĐ</td>
                                            <td>{{ number_format($plan['joiningFee']['gross'], 0) }} VNĐ</td>
                                        </tr>
                                        @endif
                                        @if ($plan['adminFee']['gross'] > 0)
                                        <tr>
                                            <td>Phí quản trị</td>
                                            <td>1</td>
                                            <td>{{ number_format($plan['adminFee']['gross'], 0) }} VNĐ</td>
                                            <td>{{ number_format($plan['adminFee']['gross'], 0) }} VNĐ</td>
                                        </tr>
                                        @endif
                                        <tr>
                                            <td>
                                                <b>Chương trình giảm giá</b> <br />
                                                @foreach ($discounts as $key => $discount)
                                                    <div class="discount-radio">
                                                        <input type="radio" name="discountId" id="discount{{ $discount['id'] }}" value="{{ $discount['id'] }}" checked="" />
                                                        <label for="discount{{ $discount['id'] }}">{{ $discount['name'] }}</label>
                                                    </div>
                                                @endforeach

                                                <div class="discount-box">
                                                    <p class="text">Bạn có mã giảm giá? Hãy điền vào đây để nhận giảm giá</p>
                                                    <input type="text" class="discount-code" /> <button type="button" class="check-discount">Thêm mã giảm giá</button>
                                                </div>
                                            </td>
                                            <td>1</td>
                                            <td><span class="discount">---</span></td>
                                            <td><span class="discount">---</span></td>
                                        </tr>
                                        <tr>
                                            <th colspan="3">Tổng tiền thanh toán</th>
                                            <td><span class="totalPrice">{{ number_format($totalPrice, 0) }} VNĐ</span></b></td>
                                        </tr>
                                    </tbody>
                                </table>

                                @csrf
                                <input type="hidden" name="paymentPlanId" value="{{ $plan['id'] }}">
                                <input type="hidden" name="clubId" value="{{ $club['id'] }}">
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
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link href="{{ asset('gym/css/steps.css') }}" rel="stylesheet">
    <style type="text/css">
        .panel-body table tr td,
        .panel-body table tr th { padding: 10px 0; }
        .panel-body table tr { border-bottom: 1px solid #ccc; }
        .panel-body table tr th { text-align: left; }
        .totalPrice {
            font-weight: bold;
            font-size: 24px;
        }
        .discount {
            font-style: italic;
        }
        .discount-box .text {
            text-transform: none;
            margin-bottom: 5px;
        }
        .check-discount {
            border: none;
            border-radius: 5px;
            background: #be202f;
            color: #fff;
            padding: 4px 15px;
        }
        .discount-radio {
            margin: 15px 0;
        }
        .payment-plan {
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            color: #be202f;
            margin-bottom: 15px;
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

        $('.check-discount').on('click', function() {
            var code = $('.discount-code').val();
            if (code == '' || code == null) {
                $('.message').html('Hãy điền mã giảm giá');
            }
            $('.message').html('Mã giảm giá không hợp lệ');
            // $.get("/api/other/discounts/{{ $club['id'] }}/{{ $plan['id'] }}/" + code, function(data, status) {

            // })
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