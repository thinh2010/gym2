<section class="site-section intro-area">
    <div class="bxslider"> 
    @foreach($block->blockContents as $key => $content)
        <div><img src="{{ $content->image }}" title="{{ $content->title }}"></div>
    @endforeach
    </div>
</section>

@section('js')
    @parent
    <script type="text/javascript">
        $(document).ready(function() {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: {{ isset($block->options->width) ? $block->options->width : '1200' }}
            })
        })
    </script>
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/bxslider.css') }}" rel="stylesheet">
@endsection