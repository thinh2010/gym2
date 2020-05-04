<section class="site-section classes-intro">
    <div class="site-container -mw-830">
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
						<option value="{{ $club["id"] }}">{{ $club['name'] }}</option>
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

		$('#GymSelect').change(function() {
			var clubId = $(this).val();
			$.get("/api/other/classes/" + clubId, function(data, status){
			    console.log(data, status);
			  });
		});
		
		$('#GymSelect').change(function() {
			var calendar = new FullCalendar.Calendar(calendarEl, {
	      plugins: [ 'interaction', 'dayGrid' ],
	      // defaultDate: '2020-02-12',
	      // editable: true,
	      eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2020-02-01'
	        },
	        {
	          title: 'Long Event',
	          start: '2020-02-07',
	          end: '2020-02-10'
	        },
	        {
	          groupId: 999,
	          title: 'Repeating Event',
	          start: '2020-02-09T16:00:00'
	        },
	        {
	          groupId: 999,
	          title: 'Repeating Event',
	          start: '2020-02-16T16:00:00'
	        },
	        {
	          title: 'Conference',
	          start: '2020-02-11',
	          end: '2020-02-13'
	        },
	        {
	          title: 'Meeting',
	          start: '2020-02-12T10:30:00',
	          end: '2020-02-12T12:30:00'
	        },
	        {
	          title: 'Lunch',
	          start: '2020-02-12T12:00:00'
	        },
	        {
	          title: 'Meeting',
	          start: '2020-02-12T14:30:00'
	        },
	        {
	          title: 'Happy Hour',
	          start: '2020-02-12T17:30:00'
	        },
	        {
	          title: 'Dinner',
	          start: '2020-02-12T20:00:00'
	        },
	        {
	          title: 'Birthday Party',
	          start: '2020-02-13T07:00:00'
	        },
	        {
	          title: 'Click for Google',
	          url: 'http://google.com/',
	          start: '2020-02-28'
	        }
	      ]
	    });

	    calendar.render();
		})
	</script>
@endsection