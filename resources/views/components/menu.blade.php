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
                <li class="nav__item">
                    <a href="/tham-gia"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Tham gia</span>
                    </a>
                </li>
                @guest
                <li class="nav__item">
                    <a href="/login"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng nhập</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng ký</span>
                    </a>
                </li>
                @else
                <li class="nav__item">
                    <a href="/profile"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Hi {{ Auth::user()->name }}</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/logout"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Đăng xuất</span>
                    </a>
                </li>
                @endguest
            </ul>
        </nav>
        <input type="reset" value="" class="cbx-nav-reset" />
    </header>

    <nav class="nav nav-menu -locations -menu">
        <div class="nav-menu__inner">
            <div class="v-center">
                <h2 class="text--center caps -hecto">UK Gyms</h2>
                <ul class="nav-menu__list">
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>Basildon</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>Bradford</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>Camberwell</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>London Park Royal</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>Slough</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>East London (Coming soon)</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>Central London (Coming soon)</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>North East of London (Coming soon)</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>Bournemouth (Coming soon)</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>West Midlands (Coming soon)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-menu__inner">
            <div class="v-center">
                <h2 class="text--center caps -hecto">Rest of the World</h2>
                <ul class="nav-menu__list">
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Bordeaux Chartrons</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Bordeaux Mérignac</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Montimaron Beziers </span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Montpellier Perols</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Montpellier Trifontaine</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Périgueux-Boulazac</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Poitiers Universite</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Saint Gilles</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Saint-Jean-de-Maurienne</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Saint-Médard-en-Jalles</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>France Vauvert</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="#">
                            <span>Kenya Nairobi Thika Road Mall </span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>India (Coming Soon)</span>
                        </a>
                    </li>
                    <li class="nav__item -beta -menu">
                        <a href="javascript:;">
                            <span>Ireland (Coming soon)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <nav class="nav nav-menu -site">
        <ul class="nav-menu__inner">
            <li class="nav__item -hecto -menu">
                <a href="/page/hoi-vien" data-letters="Hội viên">
                    <span>Hội viên</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Locations">
                    <span>Locations</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="/page/classes" data-letters="Classes">
                    <span>Classes</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="/page/trang-thiet-bi" data-letters="Trang thiết bị">
                    <span>Trang thiết bị</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Social">
                    <span>Social</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="/blog" data-letters="Blog">
                    <span>Blog</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Careers">
                    <span>Careers</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="/faqs" data-letters="Help &amp; FAQ">
                    <span>Help &amp; FAQ</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Get in touch">
                    <span>Get in touch</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="/page/gym-rules" data-letters="Gym rules">
                    <span>Gym rules</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu -last">
                <a href="#" data-letters="Franchise">
                    <span>Franchise</span>
                </a>
            </li>
            <li class="nav-sub-menu -top">
                <ul class="nav-sub-menu__inner">
                    <li class="nav__item -hecto -sub-menu">
                        <a href="#">
                            <span class="icon svg-user svg--orange" data-grunticon-embed></span>
                            <span>Join Online</span>
                        </a>
                    </li>
                    <li class="nav__item -hecto -sub-menu">
                        <a href="#" target="_blank">
                            <span class="icon svg-users svg--orange" data-grunticon-embed></span>
                            <span>Member Zone</span>
                        </a>
                    </li>
                    <li class="nav__item -hecto -sub-menu">
                        <a href="#">
                            <span class="icon svg-ticket svg--orange" data-grunticon-embed></span>
                            <span>Buy Day Pass</span>
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