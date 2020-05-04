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

		<div id="calendar"></div>
	</div>
</section>

@section('css')
	@parent
  <link href="{{ asset('gym/fullcalendar/packages/core/main.css') }}" rel="stylesheet">
  <link href="{{ asset('gym/fullcalendar/packages/daygrid/main.css') }}" rel="stylesheet">
@endsection

@section('js')
	@parent

<script src='{{ asset('gym/fullcalendar/packages/core/main.js') }}'></script>
<script src='{{ asset('gym/fullcalendar/packages/interaction/main.js') }}'></script>
<script src='{{ asset('gym/fullcalendar/packages/daygrid/main.js') }}'></script>
	
	<script type="text/javascript">
		var calendarEl = document.getElementById('calendar');
		var calendar;

		$('#GymSelect').change(function() {
			var clubId = $(this).val();
			if (clubId != '') {
				$.get("/api/other/classes/" + clubId, function(data, status){
				    calendar = new FullCalendar.Calendar(calendarEl, {
				    	locale: 'vi',
						plugins: [ 'interaction', 'dayGrid' ],
						// defaultDate: '2020-02-12',
						// editable: true,
						eventLimit: true, // allow "more" link when too many events
						events: data.data
					});

					calendar.render();
				});
			} else {
				$('#calendar').html('');
			}
			console.log(clubId);
		});
	</script>
@endsection