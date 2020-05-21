<section class="site-section home-map">
    <div id="js-google-map" class="home-map__container"></div>
    <div class="js-home-map-overlay home-map__overlay">
        <form class="home-map__search">
            <h2 class="-hecto caps text--white">Hãy chọn club</h2>
            <form class="careers-search__filters" id="CareerSearchIndexForm" method="post" accept-charset="utf-8">
                <div class="input select -location">
                    <span class="svg-chevron-down -grey" style="background-image: none;"><svg xmlns="http://www.w3.org/2000/svg" width="149.58" height="86.665" viewBox="0 0 149.58 86.665"><path d="M0 11.873l11.771-11.873 63.017 63.019 63.021-63.019 11.771 11.873-74.792 74.792-74.788-74.792z"></path></svg></span>
                    <span title="Loading your nearest gym" class="js-loading-geolocation svg-loading-spokes" data-grunticon-embed>Loading your nearest gym</span>
                    <select class="select-target select-theme-easygym js-location-dropdown" id="changeLocation">
                        <option value="">Chọn địa điểm</option>
                        @foreach ($clubs ?? '' as $key => $club)
                            <option value="{{ $club['id'] }}" 
                                data-lat="{{ $club['latitude'] }}" 
                                data-long="{{ $club['longitude'] }}"
                            >{{ $club['name'] }}</option>
                        @endforeach
                    </select>
                </div>
                <a href="javascript:;" class="js-close-home-map home-map__close"></a>
            </form>
        </form>
    </div>
    <a href="javascript:;" class="home-map__expand -hide js-home-map-expand">Mở bảng chọn club</a>
</section>

<style type="text/css">
    .mapInfo h3 {
        font-weight: bold;
    }
    .mapInfo p {
        font-size: 16px;
        text-transform: unset;
    }
</style>

@section('js')
    @parent
    <script type="text/javascript">
        var map;

        function initMap() {
            var vgym_map = {lat: 20.99346, lng: 105.80759};
            map = new google.maps.Map(document.getElementById('js-google-map'), {zoom: 15, center: vgym_map});
            @foreach ($clubs ?? '' as $key => $club)

                var infowindow{{ $key }} = new google.maps.InfoWindow({
                    content: '<div class="mapInfo"><h3>{{ $club['name'] }}</h3><p>{{ $club['address'] }}</p></div>'
                });

                var marker{{ $key }} = new google.maps.Marker({
                    position: {lat: {{ $club['latitude'] }}, lng: {{ $club['longitude'] }}},
                    map: map,
                    title: '{{ $club['name'] }}',
                });
                marker{{ $key }}.addListener('click', function() {
                    infowindow{{ $key }}.open(map, marker{{ $key }});
                });
            @endforeach
        }

        $('#changeLocation').change(function() {
            var value = $(this).val();
            var lat = parseFloat($(this).children("option:selected").attr('data-lat'));
            var long = parseFloat($(this).children("option:selected").attr('data-long'));
            map.panTo({
              lat: lat,
              lng: long
            });

            $('.home-map__close').trigger('click');
        })
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3J41raK9FgxbrvYeQYj2ET_dEI7xlKH0&callback=initMap"></script>
@endsection