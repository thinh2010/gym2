<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <title>{{ config('app.name', 'Low Cost Gym | No Contract | Gyms Near Me - vGym') }}</title>
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
    <meta property="og:site_name" content="vGym" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Low Cost Gym | No Contract | Gyms Near Me - vGym" />
    <meta property="og:description"
        content="vGym - low cost no contract gym memberships, premium gym equipment & free gym classes. Pay as you go gyms throughout the UK. Join today!" />
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

        @include("components.menu")

        <main class="site-main" id="main">
            @yield('content')
        </main>
    </div>

    <footer class="site-footer" id="footer">
        <div class="site-container">
            <a href="/" class="icon-logo img--full">
                <img src="{{ $site_settings->logo }}" width="220" alt="{{ $site_settings->company_name }}" />
            </a>

            <form action="#" method="post"
                class="site-footer__newsletter">
                <h2 class="-gamma">Sign up for our Newsletter</h2>
                <div class="input">
                    <input name="cm-name" type="text" class="input--text" placeholder="Name" />
                </div>
                <div class="input">
                    <input name="cm-ulilthk-ulilthk" type="email" required class="input--text"
                        placeholder="Email" />
                </div>
                <div class="submit">
                    <input class="submit" type="submit" value="Sign Up" />
                </div>
            </form>
            <nav class="site-footer__nav">
                <ul>
                    <li><a href="#">Membership Info</a></li>
                    <li><a href="#">Our Gyms</a></li>
                    <li><a href="#">PACK45</a></li>
                    <li><a href="#">Classes</a></li>
                    <li><a href="#">Zones &amp; Gym Equipment</a></li>
                </ul>
                <ul>
                    <li><a href="#">Social</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Help &amp; FAQs</a></li>
                </ul>
            </nav>

            <!-- <ul class="site-footer__social">
                <li><a href="https://www.facebook.com/easyGym" target="_blank" class="svg-social_facebook"
                        data-grunticon-embed>Facebook</a></li>
                <li><a href="https://twitter.com/easygym" target="_blank" class="svg-social_twitter"
                        data-grunticon-embed>Twitter</a></li>
                <li><a href="https://instagram.com/easygym/" target="_blank" class="svg-social_instagram"
                        data-grunticon-embed>Instagram</a></li>
            </ul> -->
            <div class="site-footer__baseline">
                <hr class="hr" />
                <p>© 2020 easyGym. <a href="#">Privacy Policy</a> | <a href="gym-rules.html">Gym
                        Rules</a> | <a href="#">Terms and Conditions</a></p>
            </div>
        </div>
    </footer>
    <div class="overlay">
        <div class="opening-soon-video-overlay js-opening-soon-video"></div>
        <div class="newsletter-confirm">
            <i class="svg-tick">Tick icon</i>
            <hr class="hr" />
            <h2 class="heading -alpha">Great!</h2>
            <p>Thanks for registering your email.</p> <a href="javascript:;"
                class="js-close-modal newsletter-confirm__close"></a>
        </div>
    </div>
</body>


</html>