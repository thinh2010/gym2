<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <link rel="dns-prefetch" href="assets.zendesk.html">
    <title>Low Cost Gym | No Contract | Gyms Near Me - easyGym</title>
    <meta name="description"
        content="easyGym - low cost no contract gym memberships, premium gym equipment &amp; free gym classes. Pay as you go gyms throughout the UK. Join today!" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript">
        var base = '/'; var siteName = 'easygym';
    </script>
    <link rel="shortcut icon" href="/favicon.ico" />

    <script type="text/javascript" src="/gym/js/jquery.js"></script>
    <script type="text/javascript" src="/gym/js/error.js"></script>
    <!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    @section('css')
      <link href="{{ asset('gym/css/main.css') }}" rel="stylesheet">
    @show
    
    <meta property="fb:admins" content="799377696" />
    <meta property="fb:app_id" content="1011327512217988" />
    <meta property="fb:pages" content="215168371844812" />
    <meta property="og:site_name" content="easyGym" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Low Cost Gym | No Contract | Gyms Near Me - easyGym" />
    <meta property="og:description"
        content="easyGym - low cost no contract gym memberships, premium gym equipment & free gym classes. Pay as you go gyms throughout the UK. Join today!" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:site" content="@easygym" />
    <meta property="twitter:title" content="Low Cost Gym | No Contract | Gyms Near Me - easyGym" />
    <meta property="twitter:description"
        content="easyGym - low cost no contract gym memberships, premium gym equipment & free gym classes. Pay as you go gyms throughout the UK. Join today!" />
    <meta property="twitter:image" content="https://www.easygym.co.uk/easygym/img/backgrounds/new_hero_home_600.jpg" />
    <meta property="twitter:url" content="//www.easygym.co.uk/" />
    <script type="text/javascript">

        var pageName = 'home';
        var isAdmin = false;
        var svgCSS = '/gym/css/svg.css';

        function loadJS(e, t) { "use strict"; var n = window.document.getElementsByTagName("script")[0], o = window.document.createElement("script"); return o.src = e, o.async = !0, n.parentNode.insertBefore(o, n), t && "function" == typeof t && (o.onload = t), o }

        function loadCSS(e, n, o, t) { "use strict"; var d = window.document.createElement("link"), i = n || window.document.getElementsByTagName("script")[0], r = window.document.styleSheets; return d.rel = "stylesheet", d.href = e, d.media = "only x", t && (d.onload = t), i.parentNode.insertBefore(d, i), d.onloadcssdefined = function (e) { for (var n, o = 0; o < r.length; o++)r[o].href && r[o].href === d.href && (n = !0); n ? e() : setTimeout(function () { d.onloadcssdefined(e) }) }, d.onloadcssdefined(function () { d.media = o || "all" }), d }

        window.addEventListener('load', function load(event) {

            loadJS("/gym/js/main.js");

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
        @yield('content')
</body>


</html>