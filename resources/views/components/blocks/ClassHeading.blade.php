<section class="site-section classes-intro">
    <div class="site-container -mw-1240">
        <div class="classes-into__heading -hecto">
            <p>{{ $block->description }}</p>
        </div>

        <form action="/classes" class="classes-intro__gym-selector" method="get" accept-charset="utf-8">
            <div style="display:none;">
                <input type="hidden" name="_method" value="POST">
            </div>
            <div class="col -para">
                <p class="lh--large">Chọn cơ sở</p>
            </div>

            <div class="col input select -location">
                <span class="svg-chevron-down -stelios" style="background-image: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="149.58" height="86.665" viewBox="0 0 149.58 86.665">
                        <path d="M0 11.873l11.771-11.873 63.017 63.019 63.021-63.019 11.771 11.873-74.792 74.792-74.788-74.792z"></path>
                    </svg>
                </span>

                <select class="select-target select-theme-easygym js-location-dropdown caps" id="GymSelect">
                    <option value="">Select gym</option>
                    @foreach ($clubs as $key => $club)
                        <option value="{{ $club['id'] }}">{{ $club['name'] }}</option>
                    @endforeach
                </select>
            </div>
        </form>

        <div class="schedule-list">
            <div class="container" style="position: relative;">
                <div class="row">
                    <div class="col">
                        T2
                        <p class="schedule-day monday"></p>
                    </div>
                    <div class="col">
                        T3
                        <p class="schedule-day tueday"></p>
                    </div>
                    <div class="col">
                        T4
                        <p class="schedule-day wednesday"></p>
                    </div>
                    <div class="col">
                        T5
                        <p class="schedule-day thuday"></p>
                    </div>
                    <div class="col">
                        T6
                        <p class="schedule-day friday"></p>
                    </div>
                    <div class="col">
                        T7
                        <p class="schedule-day saturday"></p>
                    </div>
                    <div class="col">
                        CN
                        <p class="schedule-day sunday"></p>
                    </div>
                </div>

                <img id="previous" src="{{ asset('gym/img/previous.png') }}" style="
                    width: 20px;
                    position: absolute;
                    top: 30px;
                    left: 0px;
                    cursor:pointer;
                ">

                <img id="next" src="{{ asset('gym/img/next.png') }}" style="
                    width: 20px;
                    position: absolute;
                    top: 30px;
                    right: 0;
                    cursor:pointer;
                ">
            </div>

            <div class="row">
                <div class="col" id="Monday"></div>
                <div class="col" id="Tuesday"></div>
                <div class="col" id="Wednesday"></div>
                <div class="col" id="Thursday"></div>
                <div class="col" id="Friday"></div>
                <div class="col" id="Saturday"></div>
                <div class="col" id="Sunday"></div>
            </div>
        </div>

        <div id="calendar"></div>
    </div>
</section>

@section('css')
    @parent
  <link href="{{ asset('gym/fullcalendar/packages/core/main.css') }}" rel="stylesheet">
  <link href="{{ asset('gym/fullcalendar/packages/daygrid/main.css') }}" rel="stylesheet">
  <style type="text/css">
    .row {
        text-align: center;
        font-weight: bold;
        font-size: 50px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        color: #be202f;
    }
    .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    p.schedule-day {
        font-weight: normal;
        color: #000;
    }
    .schedule-list {
        display: none;
    }
    .schedule {
        background: #fff;
        border-top: solid 3px #bb434f;
        border-bottom: solid 3px #bb434f;
        border-left: solid 1px #bb434f;
        border-right: solid 1px #bb434f;
        padding: 5px 0 5px 5px;
        height: 120px;
        cursor: pointer;
    }
    .schedule p {
        margin-bottom: 0px;
        font-weight: normal;
    }
    .schedule .class-name {
        font-size: 14px;
        color: #000;
        font-weight: bold
    }
    .class-name {
        margin-top: 10px;
        text-transform: uppercase;
    }
    .schedule .class-time {
        font-size: 15px;
        color: #333;
    }
    .schedule .trainer-name, .schedule .studio {
        font-size: 13px;
        color: #333;
    }
  </style>
@endsection

@section('js')
    @parent

<script src='{{ asset('gym/js/moment.min.js') }}'></script>
    
    <script type="text/javascript">
        var index = -1;
        var studios = [];
        var timetables = [];

        $.ajax({
            url: '/api/other/classCategories',
            type: 'GET',
            success: function (result) {
                studios = result.data;
            }
        });

        $('#previous').click(function () {
            index = index - 1;
            LoadData(index);
        });
        $('#next').click(function () {
            index = index + 1;
            LoadData(index);
        });

        $('#GymSelect').change(function() {
            if ($(this).val() != '') {
                LoadData(index);
                $('.schedule-list').show();
            } else {
                $('.schedule-list').hide();
            }
        });

        function LoadData(index) {
            var monday = moment().startOf('week').add(1 + (index * 7), 'days');
            var tueday = moment().startOf('week').add(2 + (index * 7), 'days');
            var wednesday = moment().startOf('week').add(3 + (index * 7), 'days');
            var thuday = moment().startOf('week').add(4 + (index * 7), 'days');
            var friday = moment().startOf('week').add(5 + (index * 7), 'days');
            var saturday = moment().startOf('week').add(6 + (index * 7), 'days');
            var sunday = moment().startOf('week').add(7 + (index * 7), 'days');
            var sunday1 = moment().startOf('week').add(8 + (index * 7), 'days');

            ResetDays();

            // if (timetables.length == 0) {
                $.ajax({
                    url: '/api/other/classes',
                    type: 'POST',
                    data: { clubId: $('#GymSelect').val()},
                    success: function (result) {
                        timetables = result.data;
                        
                        LoadSchedule(monday, sunday1);
                    }
                })
            // }
            

            $('.monday').html(monday.format("DD/MM/YYYY"));
            $('.tueday').html(tueday.format("DD/MM/YYYY"));
            $('.wednesday').html(wednesday.format("DD/MM/YYYY"));
            $('.thuday').html(thuday.format("DD/MM/YYYY"));
            $('.friday').html(friday.format("DD/MM/YYYY"));
            $('.saturday').html(saturday.format("DD/MM/YYYY"));
            $('.sunday').html(sunday.format("DD/MM/YYYY"));
        }

        function ResetDays() {
            $('#Monday').html('');
            $('#Tuesday').html('');
            $('#Wednesday').html('');
            $('#Thursday').html('');
            $('#Friday').html('');
            $('#Saturday').html('');
            $('#Sunday').html('');
        }

        function LoadSchedule(start, end) {
            for (var i = 0; i < timetables.length; i++) {
                var startDate = moment(timetables[i].start);
                var endDate = moment(timetables[i].end);

                if (start.diff(startDate) <= 0 && end.diff(endDate) >= 0) {
                    var html = `<div class="schedule">`;
                    html += `<p class="class-name">${timetables[i].title}</p>`;
                    html += `<p class="class-time">${startDate.format('HH:mm')} - ${endDate.format('HH:mm')}</p>`;
                    html += `<p class="studio">${studios[timetables[i].studio]}</p>`;
                    html += '</div>';

                    $(`#${startDate.format('dddd')}`).append(html);
                }
            }
        }
    </script>
@endsection