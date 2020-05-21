@extends('layouts.main')

@section('content')
    @include("join.Heading")
    <section class="site-section">
        <div class="site-container -mw-1240">
            <div class="panel-group" id="stepByStep">
                <!-- Step One -->
                <div class="panel panel-default">
                    <div class="panel-heading active">
                        <a data-toggle="collapse" data-parent="" href="javascript::void(0)"> <span class="num">1</span>
                            <ul>
                                <li>Chọn gói tập</li>
                            </ul>
                            <div class="clearfix"></div>
                        </a>
                    </div>
                    <div id="step1" class="panel-collapse collapse in">
                        <div class="panel-body panel-body1">
                            <form action="/tham-gia/step-2" method="POST">
                                @csrf
                                <div class="classes-intro__gym-selector">
                                    <div class="col -para"></div>
                                    <div class="col input select -location text--center">
                                        <span class="svg-chevron-down -stelios" style="background-image: none;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="149.58" height="86.665" viewBox="0 0 149.58 86.665">
                                                <path d="M0 11.873l11.771-11.873 63.017 63.019 63.021-63.019 11.771 11.873-74.792 74.792-74.788-74.792z"></path>
                                            </svg>
                                        </span>
                                        <select class="select-target select-theme-easygym js-location-dropdown caps" id="GymSelect">
                                            <option value="">Chọn địa điểm</option>
                                            @foreach ($clubs ?? '' as $key => $club)
                                                <option value="{{ $club['id'] }}">{{ $club['name'] }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                @foreach($clubs ?? '' as $key => $club)
                                    @php
                                        $count = 0
                                    @endphp
                                    <div class="plan{{$club['id']}} payment-plans"> 
                                        @foreach($club['availablePaymentPlans'] as $pkey => $plan)
                                            @if($plan['isActive'])
                                                @php
                                                    $count += 1
                                                @endphp
                                                <div class="plan-detail plan{{ $count }}" data-id="{{ $plan['id'] }}">
                                                    <div class="box">
                                                        <span class="name">{{ $plan['name']}}</span>
                                                        <span class="price">{{ number_format($plan['membershipFee']['gross'], 0) }} VNĐ</span>
                                                    </div>
                                                </div>
                                            @endif
                                        @endforeach
                                    </div>
                                @endforeach
                                <input type="hidden" name="paymentPlanId" id="paymentPlanId">
                                <input type="hidden" name="clubId" id="clubId">
                                    
                                <button class="nextStep step1-done" type="submit" disabled="">Tiếp theo</button>
                                <div class="clearfix"></div>
                            </form>
                        </div>
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
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <link href="{{ asset('gym/css/steps.css') }}" rel="stylesheet">
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
            $('#clubId').val($('#GymSelect').val());
        })
    </script>
@endsection