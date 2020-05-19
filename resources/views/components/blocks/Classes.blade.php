<section class="site-section hero -home-pack js-video-embed resrc bg-img"
    data-src="{{ $block->image }}">
    <div class="hero__inner">
        <h2 class="-peta caps text--white">{{ $block->title }}</h2>
        <p>{{ $block->description }}</p>
        <a href="{{ $block->options->link }}"
            class="btn -large -frosted">
            <span>{{ isset($block->options->button) ? $block->options->button : 'Find out more' }}</span>
            <span class="svg-chevron-right -orange" data-grunticon-embed></span>
        </a>
    </div>

    {{-- <video id="video" loop=""><source src="https://view.vzaar.com/14303414/video" type="video/mp4"></video> --}}
</section>


@section('js')
    @parent
    <script type="text/javascript">
        var t = !1, n = $('.js-video-embed'), i = n.offset().top, o = n.outerHeight();
        var s = '<video id="video" loop><source src="https://view.vzaar.com/14303414/video" type="video/mp4" /></video>'; 
        navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && (s = '<img src="' + base + 'easygym/img/easygym_30_second_pack_noaudio.gif" alt="Pack workout video" width="414" height="233" />', n.removeClass('js-video-embed')); var a, l, u = Helpers.debounce(function(){
          !t && $(document).scrollTop() > 400 && (t = !0, n.append(s), l = setInterval(function(){
            (a = document.getElementById('video')) !== null && void 0 !== a.pause && (clearInterval(l), l = !1, a.pause(), c(a, i, o), $(window).scroll(Helpers.debounce(function(){
              c(a, i, o);
            }, 200)));
          }, 100), setTimeout(function(){
            !1 !== l && (clearInterval(l), l = !1);
          }, 3e3));
        }, 300); $(window).scroll(u);

        function c(e, t, n){
            var i = e.charAt(0).toUpperCase() + e.slice(1), o = (e + ' ' + C.join(i + ' ') + i).split(' '); return r(t, 'string') || r(t, 'undefined') ? a(o, t) : (o = (e + ' ' + w.join(i + ' ') + i).split(' '), l(o, t, n));
        }
    </script>
@endsection