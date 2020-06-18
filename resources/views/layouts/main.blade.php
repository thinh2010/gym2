<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    @meta_tags
    <script type="text/javascript">
        var base = '/'; var siteName = 'vGym';
    </script>
    <link rel="shortcut icon" href="/gym/img/icon.jpg" />

    <script type="text/javascript" src="/gym/js/jquery.js"></script>
    <script type="text/javascript" src="/gym/js/error.js"></script>
    <!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    @section('css')
      <link href="{{ asset('gym/css/main.css') }}" rel="stylesheet">
    @show
    
    <meta property="og:site_name" content="vGym" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Low Cost Gym | No Contract | Gyms Near Me - vGym" />
    <meta property="og:description"
        content="vGym - low cost no contract gym memberships, premium gym equipment & free gym classes. Pay as you go gyms throughout the UK. Join today!" />
    <script type="text/javascript" src="/gym/js/main.js"></script>
    <script type="text/javascript">

        var pageName = 'home';
        var isAdmin = false;
        var svgCSS = '/gym/css/svg.css';

        function loadJS(e, t) { "use strict"; var n = window.document.getElementsByTagName("script")[0], o = window.document.createElement("script"); return o.src = e, o.async = !0, n.parentNode.insertBefore(o, n), t && "function" == typeof t && (o.onload = t), o }

        function loadCSS(e, n, o, t) { "use strict"; var d = window.document.createElement("link"), i = n || window.document.getElementsByTagName("script")[0], r = window.document.styleSheets; return d.rel = "stylesheet", d.href = e, d.media = "only x", t && (d.onload = t), i.parentNode.insertBefore(d, i), d.onloadcssdefined = function (e) { for (var n, o = 0; o < r.length; o++)r[o].href && r[o].href === d.href && (n = !0); n ? e() : setTimeout(function () { d.onloadcssdefined(e) }) }, d.onloadcssdefined(function () { d.media = o || "all" }), d }

        window.addEventListener('load', function load(event) {

            // loadJS("/gym/js/main.js");

            loadJS("/gym/img/svg/embed/grunticon.loader.js", function () {
                var embeddedSVGdir = '/gym/img/svg/embed/';
                grunticon([
                    embeddedSVGdir + 'icons.data.svg.css',
                    embeddedSVGdir + 'icons.data.png.css',
                    embeddedSVGdir + 'icons.fallback.css'
                ], grunticon.svgLoadedCallback);
            });

            //loadCSS(mainCSS, document.getElementById('noscriptcss'));
            loadCSS(svgCSS, document.getElementById('noscriptcss'));
        });
    </script>
</head>

<body class="body js-body">
    <div id="body">

        @include("components.menu")

        <main class="site-main" id="main">
            @yield('content')
        </main>
    </div>

    @include("components.footer")

    @section('js')
    @show
</body>


</html>