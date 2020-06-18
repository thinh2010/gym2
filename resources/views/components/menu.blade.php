<!-- Menu -->
<a href="#main" style="display: none;">Skip to content</a>
<form class="site-header-container">
    <input id="cbx-locations-nav-menu" class="cbx-nav-menu -locations" type="radio" name="sitenav" />
    <input id="cbx-site-nav-menu" class="cbx-nav-menu -site" type="radio" name="sitenav" />
    <header class="site-header">
        <a href="/" class="site-logo">
        </a>
        <nav class="nav nav-header caps">
            <ul class="nav-header__list">
                <li class="nav__item -site">
                    <label for="cbx-site-nav-menu" class="js-nav-link nav__link vertical-align-children">
                        <span class="nav-header__title">Menu</span>
                        <span class="span-menu">
                            <span class="span-menu__bar span-menu__top"></span>
                            <span class="span-menu__bar span-menu__middle"></span>
                            <span class="span-menu__bar span-menu__bottom"></span>
                        </span>
                    </label>
                </li>
                @guest
                <li class="nav__item">
                    <a href="/login"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng nhập</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/register"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng ký</span>
                    </a>
                </li>
                @else
                <li class="nav__item">
                    <a href="/profile"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Hi {{ Auth::user()->getNameAttribute() }}</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/logout"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng xuất</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/tham-gia"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Tham gia</span>
                    </a>
                </li>
                @endguest
            </ul>
        </nav>
        <input type="reset" value="" class="cbx-nav-reset" />
    </header>
    <nav class="nav nav-menu -site">
        <ul class="nav-menu__inner">
            @foreach ($mainMenu as $menu)
            <li class="nav__item -hecto -menu">
                <a href="{{ $menu->link }}" data-letters="{{ $menu->title }}">
                    <span>{{ $menu->title }}</span>
                </a>
            </li>
            @endforeach
            <li class="nav-sub-menu -top">
                <ul class="nav-sub-menu__inner">
                    <li class="nav__item -hecto -sub-menu">
                        <a href="/page/hoi-vien">
                            <span class="icon svg-user svg--orange" data-grunticon-embed></span>
                            <span>Quyền lợi hội viên</span>
                        </a>
                    </li>
                    <li class="nav__item -hecto -sub-menu">
                        <a href="/page/about-us" target="_blank">
                            <span class="icon svg-users svg--orange" data-grunticon-embed></span>
                            <span>Về chúng tôi</span>
                        </a>
                    </li>
                    <li class="nav__item -hecto -sub-menu">
                        <a href="#">
                            <span class="icon svg-ticket svg--orange" data-grunticon-embed></span>
                            <span>Vé tập ngày</span>
                        </a>
                    </li>
                </ul>
            </li>
            <!-- <li class="nav-sub-menu -bottom">
                <ul class="nav-sub-menu__inner">
                    <li class="nav__item -sub-menu -social">
                        <a href="https://www.facebook.com/easyGym" target="_blank" class="svg-social_facebook"
                            data-grunticon-embed>Facebook</a>
                    </li>
                    <li class="nav__item -sub-menu -social">
                        <a href="https://twitter.com/easygym" target="_blank" class="svg-social_twitter"
                            data-grunticon-embed>Twitter</a>
                    </li>
                    <li class="nav__item -sub-menu -social">
                        <a href="https://instagram.com/easygym/" target="_blank" class="svg-social_instagram"
                            data-grunticon-embed>Instagram</a>
                    </li>
                </ul>
            </li> -->
        </ul>
    </nav>
</form>
<!-- End Menu -->
