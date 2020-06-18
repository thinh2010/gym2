<footer class="site-footer" id="footer">
    <div class="site-container">
        <a href="/" class="icon-logo img--full">
            <img src="{{ $site_settings->logo }}" width="220" alt="{{ $site_settings->company_name }}" />
        </a>

        <form action="#" method="post"
            class="site-footer__newsletter">
            <h2 class="-gamma">Đăng ký nhận bản tin</h2>
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
                @foreach ($footerMenuLeft as $menu)
                    <li><a href="{{ $menu->link }}">{{ $menu->title }}</a></li>
                @endforeach
            </ul>
            <ul>
                @foreach ($footerMenuRight as $menu)
                    <li><a href="{{ $menu->link }}">{{ $menu->title }}</a></li>
                @endforeach
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
            <p>© 2020 VGym. <a href="/page/policy">Privacy Policy</a> | <a href="/page/gym-rules">Gym
                    Rules</a> | <a href="/page/terms-and-conditions">Terms and Conditions</a></p>
        </div>
    </div>
</footer>