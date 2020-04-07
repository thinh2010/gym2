@extends('layouts.main')

@section('content')

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
                <li class="nav__item -locations">
                    <label for="cbx-locations-nav-menu" class="js-nav-link nav__link vertical-align-children">
                        <span class="svg-location"></span>
                        <span class="nav-header__title">Locations</span>
                    </label>
                </li>
                <li class="nav__item">
                    <a href="#"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Member Zone</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#"
                        class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Join Now</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link -desktop vertical-align-children">
                        <span class="nav-header__title">Franchise</span>
                    </a>
                </li>
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
                <a href="#" data-letters="Membership">
                    <span>Membership</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Locations">
                    <span>Locations</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Classes">
                    <span>Classes</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Zones &amp; equipment">
                    <span>Zones &amp; equipment</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Social">
                    <span>Social</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Blog">
                    <span>Blog</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Careers">
                    <span>Careers</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Help &amp; FAQ">
                    <span>Help &amp; FAQ</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Get in touch">
                    <span>Get in touch</span>
                </a>
            </li>
            <li class="nav__item -hecto -menu">
                <a href="#" data-letters="Gym rules">
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

<main class="site-main" id="main">
    @foreach ($homepage->blocks as $block)
        @include("components.blocks.{$block->type}", ['block' => $block])
    @endforeach

    <!-- <section class="site-section home-map">
        <div id="js-google-map" class="home-map__container"></div>
        <div class="js-home-map-overlay home-map__overlay">
            <form class="home-map__search">
                <h2 class="-hecto caps text--white">Choose a club</h2>
                <form action="https://www.easygym.co.uk/career_searches" class="careers-search__filters"
                    id="CareerSearchIndexForm" method="post" accept-charset="utf-8">
                    <div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>
                    <div class="input select -location"><span class="svg-chevron-down -grey"
                            data-grunticon-embed></span><a href="javascript:;" title="Find my nearest gym"
                            class="js-closest-location svg-geolocation -show" data-grunticon-embed>Nearest
                            Gym</a><span title="Loading your nearest gym"
                            class="js-loading-geolocation svg-loading-spokes" data-grunticon-embed>Loading your
                            nearest gym</span><select name="data[CareerSearch][location]"
                            class="select-target select-theme-easygym js-location-dropdown"
                            id="CareerSearchLocation">
                            <option value="">Select a location</option>
                            <option value="basildon">Basildon</option>
                            <option value="slough">Slough</option>
                        </select></div>
                    <div class="submit">
                        <a href="locations.html">See all locations &gt;</a>
                    </div>
                    <a href="javascript:;" class="js-close-home-map home-map__close"></a>
                </form>
            </form>
        </div>
        <a href="javascript:;" class="home-map__expand -hide js-home-map-expand">Reopen map options</a>
    </section> -->

    <!-- <section class="site-section home-blog">
        <div class="home-blog__block-container">
            <div class="home-blog__block -facebook">
                <i class="svg-social_facebook" data-grunticon-embed>Facebook icon</i>
                <div class="home-blog__text">
                    <h2 class="caps text--white">Every Friday we share our favourite ‪#‎easyGym‬ Instagram
                        photos! </h2>
                </div>
                <a href="https://facebook.com/easygym" target="_blank"
                    class="home-blog__link">facebook.com/easygym</a>
            </div>
        </div>
        <div class="home-blog__block-container">
            <div class="home-blog__block">
                <a href="blog/how-to-dress-for-your-goal-weight.html" class="home-blog__item -img resrc bg-img"
                    data-src="uploads/download/170126_EASYGYM_0561.jpeg_%3b"></a>
                <div class="home-blog__item -text">
                    <ul class="blog-article__categories">
                        <li class="blog-article__category">
                            <a href="index/category/hot-topics/page/1.html">Hot Topics</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/fat-loss/page/1.html">Fat Loss</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/news/page/1.html">News</a>
                        </li>
                    </ul>
                    <h2 class="caps">
                        <a href="blog/how-to-dress-for-your-goal-weight.html">How To Dress For Your Goal
                            Weight</a>
                    </h2>
                    <time>19 Feb, 2019</time>
                </div>
            </div>
        </div>
        <div class="home-blog__block-container">
            <div class="home-blog__block">
                <a href="blog/how-to-make-sure-your-running-does-not-hinder-your-strength-gain.html"
                    class="home-blog__item -img resrc bg-img" data-src="uploads/download/running.jpeg_%3b"></a>
                <div class="home-blog__item -text">
                    <ul class="blog-article__categories">
                        <li class="blog-article__category">
                            <a href="index/category/training/page/1.html">Training</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/strength/page/1.html">Strength</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/fat-loss/page/1.html">Fat Loss</a>
                        </li>
                    </ul>
                    <h2 class="caps">
                        <a href="blog/how-to-make-sure-your-running-does-not-hinder-your-strength-gain.html">How
                            to make sure your running doesn't hinder your strength gain</a>
                    </h2>
                    <time>10 Feb, 2019</time>
                </div>
            </div>
        </div>
        <div class="home-blog__block-container">
            <div class="home-blog__block">
                <a href="blog/5-daily-goals-to-lift-you-up-and-escape-depression.html"
                    class="home-blog__item -img resrc bg-img"
                    data-src="uploads/download/Spin_class_happy.jpeg_%3b"></a>
                <div class="home-blog__item -text">
                    <ul class="blog-article__categories">
                        <li class="blog-article__category">
                            <a href="index/category/health/page/1.html">Health</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/training/page/1.html">Training</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/hot-topics/page/1.html">Hot Topics</a>
                        </li>
                    </ul>
                    <h2 class="caps">
                        <a href="blog/5-daily-goals-to-lift-you-up-and-escape-depression.html">5 Daily Goals To
                            Lift You Up And Escape Depression</a>
                    </h2>
                    <time>08 Feb, 2019</time>
                </div>
            </div>
        </div>
        <div class="home-blog__block-container">
            <div class="home-blog__block">
                <a href="how-many-dips-can-you-do-feb-19.html" class="home-blog__item -img resrc bg-img"
                    data-src="uploads/download/dips_challenge.jpeg_%3b"></a>
                <div class="home-blog__item -text">
                    <ul class="blog-article__categories">
                        <li class="blog-article__category">
                            <a href="index/category/training/page/1.html">Training</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/strength/page/1.html">Strength</a>
                        </li>
                        <li class="blog-article__category">
                            <a href="index/category/members/page/1.html">Members</a>
                        </li>
                    </ul>
                    <h2 class="caps">
                        <a href="how-many-dips-can-you-do-feb-19.html">How many dips can you do?</a>
                    </h2>
                    <time>05 Feb, 2019</time>
                </div>
            </div>
        </div>
        <div class="home-blog__block-container">
            <div class="home-blog__block -twitter">
                <i class="svg-social_twitter" data-grunticon-embed>Twitter icon</i>
                <div class="home-blog__text">
                    <h2 class="caps text--white">Meet our latest Gym Hero Farhan. Last year he weighed 118kg,
                        but today he stands at 83kg, having lost 35kg! </h2>
                </div>
                <a href="https://twitter.com/easygym" target="_blank" class="home-blog__link">follow
                    @easygym</a>
            </div>
        </div>
    </section> -->

    <!-- <div class="hide js-gyms-json-container"></div> 
    <input class="flash-sale-checkbox" id="flash-sale-checkbox" type="checkbox" checked />
    <div class="flash-sale js-flash-sale">
        <a href="https://memberzone.easygym.co.uk/join.htm" class="flash-sale__mob-join-now"><span>Join now
                <span class="icon svg-chevron-right" data-grunticon-embed aria-hidden="true"></span></span></a>
        <div class="flash-sale__inner">
            <label class="flash-sale__close js-flash-sale-close" for="flash-sale-checkbox"><svg
                    xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                    <path
                        d="M198.413 158.098c.878 1.231 1.317 2.371 1.317 3.426s-.439 2.199-1.317 3.426l-33.464 33.464c-1.231.882-2.371 1.317-3.426 1.317s-2.199-.435-3.426-1.317l-58.233-58.233-58.233 58.233c-1.231.882-2.371 1.317-3.426 1.317s-2.199-.435-3.426-1.317L1.317 164.95C.435 163.723 0 162.578 0 161.524s.435-2.195 1.317-3.426L59.55 99.865 1.317 41.632C.435 40.405 0 39.261 0 38.207s.435-2.195 1.317-3.426L34.781 1.317C36.008.439 37.152 0 38.207 0s2.195.439 3.426 1.317L99.865 59.55l58.233-58.233C159.325.439 160.47 0 161.524 0s2.195.439 3.426 1.317l33.464 33.464c.878 1.231 1.317 2.371 1.317 3.426s-.439 2.199-1.317 3.426l-58.233 58.233 58.232 58.232z"
                        fill="#FFF" /></svg></label>
            <div class="flash-sale__content">
                <div class="flash-sale__logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356.9 131.7">
                        <path
                            d="M255.8 63.1c.3-.6.6-1 .8-1.9 0 .2.2-.1.1.1.5 2.5.8-.3 1.2-1 .3-.1.2.3.3 0v-.4.1c0-.6.2-.6.6-.8.6-1.3.7-1.6 1.1-3.3.2-.4.1-2.3.1-2.6.1-.7.1-1.5.2-2.1.3-2.9.5-5.8.7-8.3.1 0 .1-.2.2-.3.3-1.8.1-3.9 1.1-6.1v-.4c0-1 .5-1.8.6-2.8.2-.7.1-1.4.2-1.8v-.9c-.3 0-.5-.1-.5-.4.3 0 .4-.2.6-.4h.1l.1-.4c.1-.2.2-.5.2-.7.6-1.6.7-3.4 1.1-4.9l.5-1.6c.1-1.4.5-2.4.7-3.5.5-.7.7-1.8.7-2.6.5-1.7 1.2-3.4 1.6-5.3l.3-1.1c-.2 0-.4-.1-.6-.2 0-.2.4-.3.7-.2.1-.5.2-1 .2-1.6 0-.8.3-1.7.3-2.6-.1-.3-.2-.5-.2-.6-.1-1.1-.5-1.6-1.3-2.2-.6-.5-1.5-.6-2.1-.9-.3-.1-.7-.5-1.5-.3-.4.3-.4.5-.5.8-.5-.4-1.2-.4-1.8-.6-.2.1-.4-.1-.5-.2-.1 0-.2 0-.2.1-.1.2-.2.4-.5.6-.1-.2-.1-.4-.1-.7-.2 0-.4.1-.4 0l-.7.5c-.4.4-.7.7-.9 1.1-1.3 1.1-2 2.6-2.9 4-1.5 1.9-2.7 4.1-4.1 6.2-1.5 2.2-2.7 4.7-3.7 6.7-.9 1.6-1.7 3.2-2.5 4.8-.8 1.3-1.4 2.9-2.2 4.7-1.6 3.2-2.6 6.7-4 10-2.3.5-6.4 1.5-5.6 1.7 0 0-.8.4-.8.5.4 0 1 .4 1.4.3.2.2.5.2.6.3l-.1.2c.1 0 .1-.1.3 0-.3.1-1.6.9 1.6.6.1 0 .2.1.4.1.1.5.4 1 .4 1.6 0 .3-.4.6-.5.9 0 .3-.1.6-.3 1-.9 3.1-1.9 6.3-2.5 9.7-.5 1.7-.9 3.5-.7 5.3-.1.8-.1 1.7.2 2.6.2.4.2.7.4.8.3-.2.5-.7.9-.7.5-.5 1-.8 1.7-.9.1-.3.3-.3.6-.4l.3-.2c.2 0 .3.1.4.1.1-.2.3-.2.3-.4 0 0 .1.1.2.1-.1-.5.5-.5.7-.9.4.3.5-.2 1-.1.2-.4.3-.7.8-1 .6-2.4 1.7-4.6 2.1-7.1.2-.2.2-.5.5-.9.1-.2 0-.4 0-.5 0-.3.3-.5.3-.7v-.4c0-.5.5-.8.6-1.2.1-.4.3-.9.6-1.4.5-.9.8-2.2 1.1-3.3.3 0 .7-.1.9-.3.3 0 .5-.1.5-.2 1.1-.4 2.2-.2 3.5-.3.2 0 .4-.1.5-.1.2-.2.3 0 .5 0 .5 0 1.4-.3 1.9.1-.2 1.8-.4 3.6-.4 5.6-.3 3.6.1 6.8.5 9.9.4 1.6.6 5.3 1.7 4.2 0-.2.4-1.1.5-1.2-.2.3-.2.5-.1.6zm9.8-53.4c-.1.5-.5.7-.7 1.1-.5-.3.2-1.6.7-1.1zm-1.3 2.6c0 .5-.5.6-.6 1-.6-.3.1-1.5.6-1zm-3-2.3zm.2 2.7c0 .3-.5 0-.4-.2.3-.1.2.2.4.2zm-.6 26.6s0-.1.1-.1c0-.1 0-.1.1-.1-.1 0-.1.1-.2.2zM234.1 56c.2-.3.6-.2 1-.4-.1.6-.6.5-1 .4zm.3 1.8l1.7.4c-.2.6-1.7.2-1.7-.4zm3.5 1c-.2.1-.3-.1-.5-.1-.1-.4.3-.2.4-.5.3 0 .1.4.1.6zm6.7-19.3c-.5-.2.1-.9-.2-1.1.3-.3 1 0 1.2.1-.6.1-.7.7-1 1zm11.2-2.4c.1.1 0-.1 0 0zm1.8-22.2c-.1.6-.9.2-.8-.4.3-.1.6.3.8.4zm-2.3-.2c.2-.2.6-.1.8 0v.6c-.2.2-.5-.1-.8-.1v-.5zm-.8-1.9c.5-.1.5.7.4.8-.4 0-.4-.4-.4-.8zm-1.8-.4c-.3 0-.7 0-.8-.1 0-.6 1-.6.8.1zm-.8 16.3c-.1.4-.3-.2-.6 0l-.6-1.9c.7.3.7 1.4 1.2 1.9zm-1.8-6.1zM248.8 43c0-.7 1.1-.2 1.4-.5.1.1.1.4.1.7-.7-.1-1.3.3-1.5-.2zm5.1-4.3c-1.2-.3-2.1-.4-3.2-.5 0 .1-.3.1-.4 0h-1.8c.1-.4.1-.8.5-1.1.4-.7.6-1.4.9-2.2l.7-1.3c.5-.8.7-1.7 1.1-2.6.6-1.6 1.8-3.5 2.5-5.1l.3-.4c-.7-.3-1.3-.8-1.2-1.5.5.4 1.2.5 1.5 1.1.7-1.1 1.4-2.4 2.1-3.7-.2 1.5-.5 2.7-.8 4-.4 1.4-.5 2.9-.8 4.4-.5 3-.9 6-1.4 8.9zm-22.1 2.6c.4-.6.6-1.1.9-1.6.2-.3.2-.7.4-1.1l.5-.8c.1-.3 2-3.6 2.9-9l-.2-1.6v-.8c0-.6-.5-1.1-.9-1.6-.2-.2-.4-.4-.4-.6-.5-.5-.9-1.2-1.6-1.6l-2.6-1.2-1.7-.6c-.4.1-.6-.1-.9-.1l-2.3.1c-.3.1-1.6.1-1.8.1-1.2.3-2.6.7-3.6.7l-1.6.4c-.4.1-.8.5-1.4.5-.3.2-.7.5-1 .2 0-.5.4-.9.6-1.1.1-.2.2-.5.4-.6l.9-1.3c.2-.2.3-.5.5-.6.4-.3.6-.6.8-1 .5-.8 1.3-1.6 2.5-2.6-.5-.1-1.2-.1-1.4-.5.3 0 1 .2 1.5.4.8-.6 2.9-2.6 3.8-3-.1.7-1.2 2.6-1.3 3.4v.3c.2 0 .4.1.5.2 0 .1-.2.1-.4.1l.1.9c.3 0 .5.2.6.2.2 0 1.3.3 1.4.5.2.2.6.2.6.5.3-.2.2.2.3.2.2.1.4-.2.5-.2.3-.5.5-.6 1-1.5.6-.6 2.3-4.9 2.7-6.8l.5-1.6c.3-.5-.3-3.4-1.4-4.4-.5-.5-1.7-1.5-2.6-1.5h-.9c.2.6.2 1.3.2 2-.9.1-1.1-1-1-1.9h-.6l-1.1.2c.1 0 .2 0 .4-.1 0 .3 0 .7-.1.8-.5-.1-.9-.2-1.3-.3l-1 .5c-4 2.1-7.4 5.4-9.9 8.1 0 .3-.2.5-.4.5-.2.3-.5.5-.7.7-.5.6-.9.9-1.2 1.5l-.4.5c2.1-.2 4.2-.5 5.7-1.5l-.4-.6c1.1.1 2.8.1 3.5 1-3.2.1-6.2 1.5-9.4 2l-.1.2c-.5.8-1.1 2-1.7 3.1-.3.5-.5 1.3-.6 1.9-.3.7-.5 1.6-.5 2.2-.1.7.2 1.6.4 2.4.1.5.1.9.4 1.6l1.3 2c.5.4 4.5 2.5 7.5 1.7l1-.3c.1 0 .2.3.3.4.5-.1 1-.3 1.5-.3h.8c.5 0 1-.5 1.3-.7l1.3-.5c.3-.2.5-.3.6-.3.2-.2.4-.2.8-.3l.9-.4c.2-.1.4-.1.5-.1.1 0 .2 0 .3-.1.5 0 .5 0 .8-.2.1.4-.1.6-.3.9-.2.7-.5 1.4-.8 1.7l-.7 1.9c-.6 1.2-1.3 2.4-2 3.6-.7 1.1-1.4 2.3-2.1 3.3-1.3 2.2-2.9 4.3-4.4 6.2-.8 1-1.6 2.1-2.5 2.9-1.8 1.8-3.5 3.6-5.6 4.8-.2-1.6.1-3.2.3-4.7 0-.3.2-.5.2-.7.1-.4 0-.6.2-1l1.5-4.7c0-.2.2-.4.3-.5l.5-1.7c-.2.1-.3-.3-.5-.4-.1-.1-.3-.2-.3-.5v-1c1-.2.1-.1.2-.4 0-.5-.1-1 .3-1.5-.2-.1.1-.5-.1-.8l.2-.3c-.2-.1-.3-.5-.3-.7l.2-.4c.1-.5-.4-.6-.5-1-.3-.3-.7-.5-1-.6-.1.1-.2.1-.4.1-.5.7-1.1 1.4-1.6 1.9s-.9 1.4-1.4 2c-.9 1.6-1.9 3-2.6 4.5-.3.5-.4.9-.5 1.4-.1.5-.4.8-.5 1.2-.6 1.5-1.2 3.2-1.6 5 .4.1.1.8-.1.9l-.1-.1c-.2.9-.4 1.9-.4 2.9 0 1.5.2 2.9.2 4.3 0 .3.3.6.4 1 .2.6.4 1 .7 1.4 1-.4 3-.2 3.3-.2-.6.8-1.8.8-3 .7.3.3.4.6.5 1 .5.5 1 .7 1.3.9.5.4 1 .6 1.6.9.5.8 2 1.1 3.5.9l2.8-.9c1.4-.5 2.5-.9 3.5-1.7 1.6-.8 2.8-2.3 4-3.1 1.3-1 2.6-2.1 3.7-3.2.3-.5.7-.8 1-1.2.3-.3.5-.5.7-.9l.4-.5.5-.6c.5-.6 1.1-1.2 1.6-1.9 1.5-1.8 2.9-3.9 4.1-6.2.4-.2.3-.6.5-1l.3-.3c-.4 0-.3-.3-.2-.7zm-12.2-26.8c.1-.4.3.4 0 0zm-2.1-4.9c-.3-.4 0-1 .4-1.1.6.3 0 1-.4 1.1zm1.3-.9c.3-.5.2.4 0 0zm.3-.7l.1-.4c.2 0 .2.6-.1.4zM218 25.5l-.5-.5c.2-.3.5-.4 1-.5 0 .5-.2.8-.5 1zm.8-.3c-.1-.5-.1-.5.1-.8.4 0 .4 1-.1.8zm2.9-.7c-.2 0-.3-.2-.2-.5.3-.1.2.3.2.5zm-20.8 27.7c-.1-.4.3-.4.4-.6.2.1 0 .7-.4.6zm3 .2c.3-.4.2.4 0 0zm2.5-13.3c-.5-.2-1.3.4-1.7-.2.3-.4 1.2-.2 1.6-.5.4.1.2.5.1.7zm3.4 21.2c.2-.3 1.6-.9 1.6 0-.8.1-.8.3-1.6 0zm2.6-5.1c-.2 0-.1-.3-.1-.5.3 0 .3.3.1.5zm.7.3c-.4.1-.4-.2-.5-.5.1-.1.3-.1.5-.1v.6zm3.8-8.2c.3-3 2.2.6 0 0zm11-3.9c-.5.1-1.1-.3-.7-.7.6.5.3 0 1 .1.1.4-.2.4-.3.6zm1-21.8c.1.1-.1 0 0 0zM288 57.2c.3-.2-.3-.2-.4-.3l.2-.1c-.1-.1-.4-.1-.4-.4.4-.1.9-.5 1.2-.5h-.6.1v-.1c0-.2-.5-.5-.5-.6.3-.1.4.7.5-.3h-.3c.5 0 .5.2.8 0 .2 0 .4.2.5 0-.5-.2-.9-.3-1.4-.9.3-.3.8-.4 1.1-.4-.2-.1-.3-.2-.5-.2 0-.5-.5-.5-.6-.8-1.2-.8-3.4-.9-5.3-.9-2.9-.2-3.6.1-6.2.6-2 .2-1.6.5-3.6.9.4-.6.4-1.5.5-1.9.1-.4.4-.9.4-1.4l.2-1.2c0-.1.1-.2.1-.4.5-.9.5-1.9.6-2.6 1.4-4.2.3-1.8 3.3-10 .4-1.7 1.3-3 1.9-4.9.6-.8.9-2 1.3-2.9-.5-.2-.6-1-.7-1h.5c.1 0 .3.3.4.6v-.1c.6-1.5 1.3-3 1.7-4.3.3-.5.6-1.3.7-1.9.3-.2.5-.7.4-1 .7-.9 1.1-1.8 1.5-3 .5-.5.7-1.2 1.1-1.8l.7-1.6c.1-.5.2-.7.4-1.1l.4-.7.5-1.2.4-.9c.5-.6.6-1.2.9-1.6.2-.5.3-.6.3-1 .1-.7-.3-1.4-.6-2.1-.3 0-.4-.1-.6-.3-.6-.5-1.8-1.1-2.6-1.5-.6.1-1.2-.4-1.8-.4-.5.5-1.2 1.3-1.6 1.8l-.6 1c.5.5 1 1.1.8 1.9-.6-.1-1.1-.4-1.4-.9l-.5.7-4.1 6.6c-.4.9-1 1.9-1.4 2.6-1.6 2.8-3 5.9-4.3 8.7-.9 2.1-1.5 4.2-2.6 6.2l-1.2 3.1c-.1.4-.2.8-.4 1.3.2.1.4.3.5.6-.1 0-.2 0-.2.1-.1-.1-.2-.3-.3-.3l-.6 1.6c-.5 2-1.5 5.7-1.8 7.8l-.5 1.6c-.3.6-.3 1.3-.4 1.8-.4 1.2-.6 2.3-.9 3.6-.3 1.5-.5 2.8-.8 4.5 0 .3.1.6 0 1-.1.3-.3.5-.2.9.2 0 .1.3.2.5 0 .3.1.4.3.5.1.2.1.4.2.5.1.1.5.3.5.5l.2.5c.1.8.7 1.2 1.6 1.6.3.3.5.5.5.7.1.1.3.1.4.1.1.2.3.4.6.3.6-.1.9 0 1.5 0 .3.4.8.4 1.3.3 0-.2.1-.3.3-.3.1-.5.7-.7 1.2-.9l1.3-.5c.9-.4-.3-.3.5-.6.2-.2.5-.5.9-.5.1 0 .3 0 .4-.2.4-.1.8-.3 1.5-.5.5 0 .6-.4 1.2-.5l.9-.4c1.4-.4 1.6-.2 2.8-1.2h.7c.8 0 .5-.2 1.4-.2 1.7-.1 3.6.2 5.2 0-.2-.2-.3-.1-.5-.2.2-.3 0-.2 0-.2l1-.1c0-.3-.5-.1-.4-.4.5-.1.9.1 1.4-.2-.5-.3-.8-.5-1.1-.6zm-2.8-43.3c.1 0 0-.1 0 0zm-4.2-2.8c.2.2.3.5.7.5.1 0 .1-.2.1-.4.2.2.6.1.7.2-.3.2-.4.6-.5 1h-.8c0-.4-.4-.9-.2-1.3zm.3 3.7c-.4.1-.2-.3-.2-.5.1.1.2.2.2.5zm.1 4.3c.5.9.2 2.2-.7 2.5l.7-2.5zm-3.8 3.3c.3.2.5.4.5.8-.2.1-.3.3-.6.2 0-.3-.1-.8.1-1zm-.9-7.1h.4v.4c-.3 0-.4-.1-.4-.4zm-9.6 26.5c0-.3.5-.2.5-.6.2.2-.1.8-.5.6zm.8-5.2c0-.3.5.1 0 0zm2.7 24.9l-.6.1c-.3-.2-.2-.5 0-.8.3.2.2 0 .6.1v.6zm4.5-2.4c-.4-.2-.4-1 0-1.2.7 0 .5 1.2 0 1.2zm-98.4-9.6c1.4-4.7 2.8-9.5 4.4-14 .7-2.3 1.5-4.7 2.1-7 .5-1.4 1-2.6 1.6-4.1 0-.1 0-.2.1-.3.1-.8.5-1.6.8-2.5.8-2.1 1.2-3.5 2-5.2-1 .5-2.1 1.1-3 1.5.9-.9 2-1.5 3.3-2.1.7-1.6 1.4-4 1.8-5.8l.2-.5h-.9l.1-.5c.5.2.5-.1.8.2.1-.3.1-.7.1-1.1 0-.2.1-.4.1-.5-1.5 0-2.7 0-3.1-.2-.3-.2-.6-.6-.3-1.1 1.2.3 2.4.4 3.5.5l-.1-1.3c0-.2-.1-.5-.2-.6 0-.3 0-.6-.1-.9-.2 0-.3-.3-.3-.5 0 0 .1 0 .1-.1-.2-.6-.5-1.1-.8-1.5l-.5-.4c-.1-.1-.2-.1-.2-.2-.1 0-.1-.1-.2-.2-.2-.3-.3-.7-.5-.9-.2 0-.4-.2-.5-.2h-1c-.1 0-.2 0-.3.1-.2.1-.5.2-.7.1l-.1.1-.2.3s-.2.2-.2.3c-.1.3-.2.6-.4.9 0 .2-.2.4-.3.5-.1.2-.2.3-.3.4l-1.6 2.7c.4.1.9.1 1.1.1.6.8 2.5.1 2.7 1.2l-4.3-.4c-.1.4-.3.8-.5 1.2-.5 1.2-2.8 7.1-3 7.6-.2.4-.4.6-.4 1-.3.8-2.6 6.9-3.5 8.8l-1.7 3.6c-.5.6-.6 1.3-.8 2-1.1-.2-2.3-.5-3.6-.5-.3 0-.5-.1-.7 0-.2 0-.3 0-.5-.1s-.5-.1-.7-.1c-.1 0-.3-.1-.3-.1.1-.1.1-.2.1-.3.2-.6.4-1.3.5-1.8.3-.6.5-1.3.7-1.8.3-.4.4-.6.5-1 .1-.3.2-.5.3-.5l.1-.5c.5-.6 1.6-2.8 1.7-3.6.1-.5.5-.9.6-1.3.3-.7.5-1.4.7-2.1 0-.1.1-.2.2-.3 0 0 0-.1.1-.2 0-.5.7-2.4.7-2.7l.4-1.6.2-1.6.1-.4V7.5l.1-.6c0-.4-.2-.7-.2-1l-.2-.7c-2.2.4-4.2 1.5-5.4 3.4.2.1.7.1.4.6-1.7-1.4.3-3.2 1.7-3.6l-.2-1c.5-.1.6.3.7.6.7-.4 1.6-.8 2.5-1l-.1-.1-.3-.3c-.4-.3-.8-.5-1.2-.9l-.2-.1c0-.1-.1-.2-.2-.2.2-.3 0-.6-.4-.6h-.3s-.1.2-.2.2c-.3.1-.4 0-.5-.1-.3 0-.4-.1-.6 0l-.3.2-.1.1c0 .1-.2.1-.2.3-.2 0-.4.1-.5.2-.1.3-.2.5-.4.9l-.1.5c-.1.4-.3.7-.5 1-.1.2-.1.4-.1.5-.7 1.4-1.5 2.9-2 4.5-.2.3-.3.5-.3.9-.9 2.3-1.7 3.5-2.6 5.6-.2.5-.5 1.2-.8 1.9 0 .3-.2.6-.3.9-.3 1-.5 1.2-.7 2.1-.4.6-.5 1.2-.8 1.8-1 2.3-1.6 4.5-2.4 6.7 0 .2-.1.3-.1.4-.2.2-.2.5-.2.5h-.1c-1.4 0-2.5.8-3.7 1.3-.3.3-.5.4-.7.6-.2 0-.3.1-.5.2-.7 0-1.4.3-1.9.8-.1.1-.1.1-.2.1.5-1.4.8-3.2 1.1-5.3l-.5-1.6v-.8c0-.6-.2-1.1-.6-1.6v-.1c-.4 0-.6-.1-.7-.7h.2c-.4-.3-.6-.8-1-1.2-.8.1-1.5 0-2.3-.7.2-.1.4-.2.6-.2-.4-.2-.8-.4-1.3-.6l-1.7-.6c-.4.1-.6-.1-.9-.1l-2.3.1c-.3.1-1.6.1-1.8.1-1.2.3-2.6.7-3.6.7l-1.6.4c-.4.1-.8.5-1.4.5-.3.2-.7.5-1 .2 0-.5.4-.9.6-1.1.1-.2.2-.5.4-.6l.9-1.3c.2-.2.3-.5.5-.6.4-.3.6-.6.8-1 .5-.8 1.3-1.6 2.5-2.6.6-.5 3-2.6 3.9-3.1-.1.7-1.2 2.6-1.3 3.4l.2 1.6c.3 0 .5.2.6.2.2 0 1.3.3 1.4.5.2.2.6.2.6.5.3-.2.2.2.3.2.2.1.4-.2.5-.2.3-.5.5-.6 1-1.5.4-.4 1.3-2.5 2-4.4-.2-.3 0-.8.2-1.1h.1c.2-.5.3-1 .4-1.4l.5-1.6c.3-.5-.3-3.4-1.4-4.4-.5-.5-1.7-1.5-2.6-1.5l-2.2.1-3 1.3c-3.3 1.8-6.3 4.4-8.7 6.8 0 .3 0 .5-.1.6-.2 0-.3 0-.4-.1-.7.7-1.3 1.4-1.9 2-.5.6-.9.9-1.2 1.5l-1.1 1.6c-.5.8-1.1 2-1.7 3.1-.3.5-.5 1.3-.6 1.9-.3.7-.5 1.6-.5 2.2-.1.7.2 1.6.4 2.4.1.5.1.9.4 1.6l1.3 2c.5.4 4.5 2.5 7.5 1.7l1-.3c.1 0 .2.3.3.4.5-.1 1-.3 1.5-.3h.8c.5 0 1-.5 1.3-.7l.2-.2c-.7-.6-.4-2-.7-3.2.4.9 1.1 2.1 1 3.1l.8-.2c.3-.2.5-.3.6-.3.2-.2.4-.2.8-.3l.9-.4c.2-.1.4-.1.5-.1s.2 0 .3-.1c.5 0 .5 0 .8-.2.1.4-.1.6-.3.9-.2.7-.5 1.4-.8 1.7l-.7 1.9-.8 1.4c.4.6.9 1.2 1.4 1.7-.3.2-1.2.2-1.4 0 .1-.5 0-.9-.2-1.3-.2.4-.5.9-.8 1.3.4.1-.1.6-.1.8-.1 0-.2-.1-.2-.2-.7 1.1-1.3 2.2-2 3.2-1.3 2.2-2.9 4.3-4.4 6.2-.8 1-1.6 2.1-2.5 2.9-1.8 1.8-3.5 3.6-5.6 4.8-.1-1.2 0-2.4.1-3.5-.1.1-.3.1-.5 0 0-.1 0-.2-.1-.2-.1-.6.5-.5.7-.7v-.3c0-.3.2-.5.2-.7.1-.4 0-.6.2-1l1.5-4.7c0-.2.2-.4.3-.5l.5-1.7c-.2.1-.1-.3-.3-.4-.1-.1-.1-.2-.1-.5V39c-1 .1-2.9-.5-3.6-1 1.2 0 2.4.2 3.6.5v-.2c0-.5-.2-1 .2-1.5l-.2-.8.2-.3c-.2-.1-.3-.5-.3-.7l.2-.4c.1-.5-.4-.6-.5-1-.3-.3-.7-.5-1-.6-.1.1-.2.1-.4.1-.5.7-1.1 1.4-1.6 1.9s-.9 1.4-1.4 2c-.9 1.6-1.9 3-2.6 4.5-.3.5-.4.9-.5 1.4-.1.5-.4.8-.5 1.2-.9 2.6-2 5.4-2.3 8.8 0 1.5.2 2.9.2 4.3 0 .3.3.6.4 1 .3.8.6 1.4 1 1.9.3.3.4.6.5 1l.7.6v-.1c0-.4 1.5-.6 2.1-.5.2.6-1.2.8-1.8.8.1.1.2.1.2.1.5.4 1 .6 1.6.9.5.8 2 1.1 3.5.9l2.8-.9c1.4-.5 2.5-.9 3.5-1.7 1.6-.8 2.8-2.3 4-3.1 1.3-1 2.6-2.1 3.7-3.2.3-.5.7-.8 1-1.2.3-.3.5-.5.7-.9l.4-.5.5-.6c.5-.6 1.1-1.2 1.6-1.9 1.5-1.8 2.9-3.9 4.1-6.2.4-.2.3-.6.5-1l.3-.3c.4-.3.5-.5.5-1 .4-.6.6-1.1.9-1.6.2-.3.2-.7.4-1.1l.5-.8c0-.1.5-1 1-2.4l.1.1c.5.7 1.2 1.3 1.9 2 .1.1.1.2.2.4.2 0 .3.1.4.2.5.2 1 .4 1.4.5.2.1.5.2.7.2 0 0 .1-.1.2.1.1 0 .2 0 .2.1l.3.1-.5 1.4c0 .3-.1.5-.1.7l-1.6 6.9c-.1.5-.2 1-.3 1.6-.1.5-.3 1-.3 1.6-.3 1-.5 2.6-.5 3.6-.3 1.3-.2 2.4-.3 3.5l.1 1.6.2 1.4c.2.2.2.5.1.7.1.8-.1 1.6.2 2.3.1-.4.2-.6.3-.9 0 0 .1 0 .2.1.8.9.4 2.3 1.8-.8.1-.2.3 1.3.4 1.4.1 0 .1.1.2.2.7 1.6 1.3-2.1 2.1-1.6.1-.3.1-.5.4-.7.5 0 .3.6.4.9.1 0 .1.1.1.1v.1c0 .1.2.4.3.4h.4c.2-.2.3-.4.5-.4h-.2v-.4c0-.5.2-.9.3-1.3 0-.3.2-.5.3-.7.1-1.2.3-2.4.6-3.5.3-.9.6-1.8.8-2.7.1-.5.2-.9.3-1.3.2-.5.3-1.5.5-1.8.1-.9.3-1.8.4-2.8-.4-.4-.7-.7-.9-1.1l1.2.1c0-.1 0-.2.1-.3.5-1.1.7-2.4.9-3.6l.2-.6c0-.2.1-.5.3-.6.1-.6.3-1.3.5-1.8.3 0 .5 0 .7.1l.4.1s.3.2.5.2c.4-.1 1 0 1.4 0h.4c1.1 0 2.5-.1 3.6.1-1 3.6-1.9 7.1-2.7 10.9-.1.4-.3 1.2-.3 1.3 0 .3-.1.5-.2.8l-.2 1.4c-.1.5.1 1.1 0 1.7-.2 1.2-.4 2.3-.2 3.3.2 1.1 0 1.9.5 2.6 0 .3 0 .5.2.6.2.4.2.9.4 1.4.1.4.1.6.4.7.2-.2.2-.9.3-.9h.2c0 1 .8 1.5 1.7-.2.2-.3.2.6.4.7.2-1.1.9.1 1.2 0 .2-.1.2.3.3.1.2-.5.3-1.2.5-1.5.5.4.5 1 .8 1.4.1-.2.1-.6.2-.6h.2c.2-1 .3-1.3.5-2l.3-1.9c.2-.7.2-1.4.4-2 .1-.6.3-1.3.4-1.8-.3-2.6.6-5.5 1.3-7.8zm11.4-41.6c.1.6.7.7 1.1 1-.2.7.1.7.1 1.4-.4.1-.6-.1-.8-.2.7-.9-.5-1.2-1-1.1 0-.6 0-1.1.6-1.1zm-1 1.7v.6c-.2-.1-.6-.1-.5-.6h.5zm-1.8-1.5zm-.5-.1c.4-.4.2.4 0 0zm-2.1-1.1c.8.2 1.5.5 2.1.8.1.3-.2.2-.2.5-.2-.5-1.3-1-1.7-.6-.2-.1-.4-.5-.2-.7zm-1-.3c.7.1.2.6 0 0zm-1.2 11.1c1.4-.1 1.6-.1 2.6.6 0 .4.1 1-.1 1.2-.4.2-.8 0-1.2-.1.1-.6-.2-.7-.5-1l-.7.2c0-.2-.1-.5-.1-.9zm-2.4 5.5c-.9.4-1.6-.3-1.6-1.2.9-.4 1.7 0 1.6 1.2zm-7-9.6c.3 0 .5 0 .6.1.1.4-.3.4-.6.4v-.5zm-29 1.5h.5c.2.6.5 1 .1 1.6-.4-.4-.7-.8-.6-1.6zm-20.8 5.8c.1-.1.2-.2.4-.2 0 .2-.2.2-.4.2zm4-.4v.6c-.4 0-.2-.4-.4-.6h.4zm-2.7-.2c-.4-.4.3-1 .7-.6-.1.3-.2.7-.7.6zm1.4.3c-.1-.4.3-.6.5-.4 0 .3-.2.4-.5.4zm.7 7.6c-.4 0-.4-.4-.2-.6.2.1.2.3.2.6zm.6-6h-.2c0-.1 0-.1-.1-.1-.1-.2.5-.1.3.1zm.9-.9c-.4-.2-.7-.8-.4-1.1.1.1.2.1.4.1v1zm0-7c-.4-.1-.4-.6.1-.6.1.4-.1.4-.1.6zm2.8-4l.4.2c-.1.4-.2.7-.7.6-.2-.5.2-.5.3-.8zm-1.1 7.9c-.3-.5.3-1 .2-1.6l3.7.6c.2-.5.9-.6 1.2-.2-.3 2.3-3.6.6-5.1 1.2zM115 51.5c-.2-.9.8-1.7.8-2.8.6.8-.1 2.4-.8 2.8zm1.4 7.5c-.2-.4 0-.7.1-1.1h.4c0 .6 0 1.1-.5 1.1zm.6-8.8l-.5.1c-.1-.5 0-.4.1-.8.5-.1.4.3.4.7zm6.8-8c-.4.1-.4-.1-.7-.1 0-.6.9-.6.7.1zm-4.1-3.9c.6.4 1.4.6 1.6 1.4.5-.4 1-.3 1.6 0 .2 1-.7.8-.6 1.7-1.2-.4-1.6-1.7-2.7-2.2-.2-.4-.1-.7.1-.9zm-.8 11.1c.2 0 .3.2.4 0 .3.3 0 .9-.4 1-.1-.4-.3-.7 0-1zm4.3 13.4c-.6-.8-2.3-.6-2.4-1.9-.8-.1-1.3.5-1.9.2 0-1.1.8-.6 1.7-.8-.5-2.3 3.2-1.6 2.3 0-2.9-1.6-.8 1.9 1.1 1.8 0 .5-.6.5-.8.7zm2.7-4.7c-.8.3-.7-.9-.1-.8.1.1.1.4.1.8zm7.1-14.4c.2-.4.3.5 0 0zm1.3.6h.4c.1.1.1.4.1.7-.5.2-.7-.4-.5-.7zm3-4c.3-.4.2.4 0 0zm1.5-3.1c-.1 0-.1-.1 0 0-.1 0 0 .1 0 0zm5.3-15c.2 0 .3.2.2.5-.3.1-.1-.2-.2-.5zm-3.8 1.8c0-.3.5.2 0 0zm-2.5 2.3c.8 1.3 2.5-.5 3.5.4.3 0 .3-.3.2-.6-.5-.5-1.1.1-1.3-.4.1-.3.4-.4.6-.6.4.3 1.1.3 1.4-.1-.3-.2-.4-.6-.5-1 1.2-.9 3.8.2 5.5-.6-.1.2-.1.6-.6.5 0 .3.2.4.1.7-1.3.5-3 1.3-4.5 1.2-.3.8-.7 1.4-.8 2.3-.9.1-4.6.4-3.6-1.8zm4.9 1.3v.5c-.3 0-.3-.2-.4-.5h.4zm-2.2 7.5c0 .3.2.3.1.6-.3.1-.8.4-1.1.1 0-.7.5-.8 1-.7zm-.7 4c1.3.4 2.1 2.2 2.6 3.8-.8-1.2-1.6-2.5-2.6-3.8zm2.4-3.4V35h.4c0 .3 0 .7-.4.7zm.7 8.2c.2.1.4.4.4.7-.3-.1-.4-.3-.4-.7zm.2-12.9v-.4c1-.1 1 .6 0 .4zm.5 11.1c-.1 0-.1-.2-.1-.4.4 0 .2.3.1.4zm1.1-6.6c-.5.3-.9 0-1.3-.1v-.7c.4-.4.7-.1 1.3-.1.1.5.1.5 0 .9zm-3.2-6.2c1.2-1 4.2.4 5.4-1.1.9 0 1.2-.1 2.2 0v1c-3-.1-5.1 1.4-7.6.1zm15.8 18.2c-.3 0-.1-.4-.1-.6.5 0-.1.3.1.6zm0-6.1c-.3-.7.2-1.4.6-1.8.7.5.4 1.9-.6 1.8zm7.1-22c.3.9-.4.8-.5 1.3-1-.5-2.4-.3-3-1.4.7-.8 2.3 0 3.5.1zm-3.7 17.8c-.4.1-.4-.4-.4-.7.9 0 1-.9 1.7-1.1.2.7-.8 1.3-1.3 1.8zm1.3-7.5c-.6-.1-.8 0-1.4 0-.5-.6-.1-1.2-.1-1.8.3 0 .7-.1.6.4l.4-.7c.7-.4.8.5 1.4.1.1.1.1.4.1.7-.7 0-.7.8-1 1.3zm1.6 3.6c-.6.1-.5-.4-.6-.8.1-.1.4-.1.7-.1.1.2.1.6-.1.9zm1.2-5.4c-.2.2-.8.2-1 0 0-.5.3-.8.6-1.1.4.1.4.6.4 1.1zm2-18.9c-.4.1-.5-.2-.7-.2 0-.5.9-.4.7.2zm.6 28.7c-.1 0-.1-.2-.1-.4.4 0 .2.3.1.4zm-.1-.8c0-.3 0-.7.1-.8.7-.1.8.5.8 1.1-.4 0-.7-.2-.9-.3zm6.3-3c.4-.3-.3.4 0 0zM325 8.8c-1.7-.5.5-.7.2-1.4v-.1h-.2c-.2-.1-.8-.2-.3-.8.4 0 .3-.2.5-.2-.9-.5-.5-.3-.1-1.1.3-.1-.4-.8-.3-.8-.1-.4-.6-.5-.9-.8-1.6-.2-3.3-.4-5-.4-.5 0-.9 0-1.4.1-1.1 0-.7.1-2 .2l-2.9.5c-.1 0-.7.2-.6.2-.3.1-.9.2-.8.3-1.3.3-2.3.7-3.4 1-.3-.1-.5.2-.7.3-.5.1-1.4.2-1.4.5-.2-.1-.9.1-.5.1-.6.1-1 .5-1.5.5l-.2.2c-1.6.4-2.4 1.3-3.7 1.8 0 .3-.3.3-.5.5.7.7 1.2 1.3 1.6 2 .5.1.5.5.9.7l1.3.5 1.3.3c-2.6 6.9-4.3 9.1-6.9 16.2-.7 1.6-1.4 3.4-2 5.2l-1.8 5.3c-.5 1.8-2.4 7.3-2.8 9.2-.8 2.9-1.6 6.5-1.3 9.7-.3.1-.5.3-.7.5-.8 2.3 3.1 5.8 4.7 4.9.4 0 .8-.2 1.3-.2.4 0 .6.3.9.3.6-.1 1.1-.5 1.6-.4.4-.2.6-.1 1.2-.1.5-.1.7-.6 1.2-.6h.3c.5 0 1.2-.3 1.7-.4l1.5-.9.5.1c.5-.2 1.2-.6 1.7-.7s.7-.4 1.3-.4c1-.4 2.3-.4 3.4-.7.5-.3 1.3-.4 1.6-.7.5-.1 1.1-.1 1.8-.5-.3-.1-.5-.3-.8-.5 0-.3.5-.5.4-.6-.9-.3-1.6-.5-.5-.8.1-.1-.2-.3 0-.3.5-.1 1-.6 1.2-1-.2-.4-1 0-1.1-.5.1-.2.5-.1.6-.2-.4-.4-1.5-.5-.2-.9-.5-.5-1.3-.6-2-1-4-.7-8 .9-11.6 1.9.4-1.6 1-3.2 1.5-4.7 0-.2 0-.4.1-.5.7-2.2 3-7.8 3.6-10 .6-.3 1.4-.3 2.1-.5.5-.1.9-.4 1.5-.5.2.1.4.1.5 0l.4-.1c.1 0 .2 0 .5-.1.3-.2.7-.5 1.3-.5.6-.4 1.6-.4 2.3-.5l1.3-.3 1.3-.3c.2 0 .4-.2.5-.2l.6-.1c.5-.5 1.6-.5 2-.9-.2-.2-.4-.4-.3-.6 0-.2.4-.3.5-.5l.3-.5c.2-.1.4 0 .5-.2-.5-.1-.5-.5-.6-.7 0-.2.2-.4.3-.5-.3-.4-1-.3-1-.9.1-.2.3-.2.4-.3.1-.5.4-.5.4-.8-.5 0-1.5 0-1-.6l-1.4-.2c-.2 0-.3-.1-.4-.1-.9-.1-2.1 0-3.1.1-2.2 0-3.7.8-5.5.9.1-1 .9-2 1.1-3.1.1-.5 2.4-6.3 2.4-6.5.5-.5.4-1.4.7-1.9.2-.3.3-.5.3-.6.3-.5.3-1 .5-1.4.4-.6.7-1.3.7-2 .6-1.3 1.1-2.2 1.4-3.6.4-.5 2-.5 3.1-.6l1.4-.2c.5 0 .7 0 1.1-.1 1.4.2 2.5.1 3.7-.4.2-.5.9-.2 1.4-.6-.7 0-.6-.8-1-.9zm-29.8 40.9c.2-.4.3.4 0 0zm1 .3l-.4-.1c0-.2.7-.2.4.1zm.1.2c.3-.1.2.2.2.4-.1-.1-.2-.2-.2-.4zm1.8-6c-.3-.1-.5-.3-.6-.6.3-.4 1 .2.6.6zm-.5-4.7c-.3-.4.6-.6.5-1.3.6.3.3 1.4-.5 1.3zm6.5-7.4c0-.3.1-.4.4-.4-.2.1-.1.5-.4.4zm2.4-22.9c-.1-.5.7-.4.7 0-.5 0-.4-.1-.7 0zM49.6 37c.5-.1 1.1-.4 1.7-.4 1.2-.4 1.5-.3 2.6-.5.6-.1 1.1-.4 1.6-.7.9-.2 1.9-.3 2.6-.7-.2-.2-.5-.2-.5-.5 2-1 1.8-.8.7-2.2-.3-1 1.7-1.4.1-1.5l-.4-.3-.8.5c.1-.3.2-.5.5-.7l-.5-.4c0-.2.1-.3 0-.6-.4 0-.8.1-1.4 0-.6 0-1-.3-1.6-.4-2.2-.5-3.7.3-5.8.4.3-1.4 1.3-3.8 2.4-6.4-.1-.1-.3 0-.3-.2.1 0 .3-.1.5-.1 1.1-2.5 2.2-5 2.7-6.7.2-.5.2-1.1.5-1.6.2-.4.3-.8.5-1.4.5-.5 1.1-.4 1.7-.5.2 0 1.2-.4 2.1-.5-.1 0-.1 0-.1-.1.1-.4.5-.2.6 0 .3 0 .5 0 .6.1.7-.2 1.7.1 2.5-.1l.4-.3 1.6-.4c0-.3.4-.5.3-.8.2-.5.5-.6.9-.9.1-.2.1-.5.3-.6-.1-.5-.4-.6-.4-1 0-.1.1-.3.1-.5 0-.5 1.3-1.8 1.2-2.5-.5-1.6-.5-1.7-2-1.7-1.4-.3-2.3-.1-3.6 0-.4 0-.6.1-.7.1-.5.3-5.8.5-7.6 1-.3 0-.7-.1-.9 0l-1.3.1h.3-1.6c-.2 0-1.2.3-.6.3l-8.3 1.8c-.1.5 0 .8 0 1.1.3.4.5.7.6 1.2.1.4.1.6.2.8.3.6.7 1.2 1.2 1.5.1.1.2.1.4.2.3.1.5.5.8.5.2.2.5.3.7.4.6.2 1.1.2 1.6.4-.3.5-.8 1.5-1.3 2.9 0 .4-.1.6-.2.6-1.7 4.4-4.1 11.9-6.3 18.8.1.1.2.2.2.5-.1.1-.2.1-.4.1-2.3 7.4-4.2 14.1-4.5 15.7-.4 2.3-1.2 6-1.2 8.2 0 1.4.3 2.3.7 3.2.4 1.1.6 2 1 3 .1-.4.1-.9.4-1.2.3.2.3.4.5.4.1-.2.1-.5.1-.6v.1c.3-.1.9.2 1.1.2.2-.3.1-.5.2-.7.2.1.2.3.3.4.3-.2.5-.5.7-.4.1 0 .1.4.1.4-.1-3.3 1.1-.5 1.1-1.3.4 0 .5-1 .5-.8.1-.8.5-1.4 1.2-1.4.8-1.4 1.1-3.4 1.5-5.3l1.2-5.4c.3-.1.2-.5.2-.6l.2-.6.3-1 3-9.3c.3-.1.5-.2.7-.2.7-.1 1.3-.4 1.8-.5l.8-.4zm6.8-5.9c.3 0 .1.4.1.6-.2.1-.7.4-1 .1.3-.3.7-.4.9-.7zm-3.1-25c.1 0 .2 0 .2-.1.2 0 .1.3.1.5-.1-.1-.2-.1-.4-.1.1-.2.1-.2.1-.3zm-1.4 5.6c-.3-.1 0-.6 0-.8.4.1.4.7 0 .8zm-.2-1.9h.4c.1.3.2.8-.1 1-.5-.1-.4-.7-.3-1zm-1.3 2l1.2-.1c.3.8-1.4 1.1-1.2.1zm.3 1.7l-.1.5c-.2-.1-.4-.2-.4-.5h.5zm-.7 4.3c-.3 0-.1-.4-.1-.6l.4.1c0 .4-.3.3-.3.5zm-.2-8.4c.1.3-.2.2-.4.2.1-.1.2-.2.4-.2zm-7.1 1.2c-1.5.1.1-1.5 0 0zm-2.5 21.9c.2-.3.4-.1.8-.4-.2.3-.4.5-.8.4zm1.4 2.4c.1-.4.4-.5 1-.5 0 .8-.5.8-1 .5zm1.4-3.3c.1-.1.2-.2.4-.2 0 .2-.2.2-.4.2zm4.6-24.2c.5.1 1.1.6.7 1.2-.6-.1-.9-.7-.7-1.2zm-.8 6.9h-.7c0-.1 0-.2-.1-.2.2-.5.9-.4.8.2zm-1 13.3c.1.3-.2.2-.2.4-.4-.1-.1-.5.2-.4zm-1-8.1c0-.4.5.1 0 0zm.4 9.2c.2-.3.9 0 .8.4-.5.2-.6-.1-.8-.4zm.8-7.3c.7-.5 2-.4 2.7 0-.7.4-1.8.7-2.7 0zm1 8.5c0-.1 0-.2-.1-.2 0-.3.7-.3.8-.1-.1.2-.4.3-.7.3zm49 14.8c.3 0 .5-.1.5-.2 1.1-.4 2.2-.2 3.5-.3.2 0 .4-.1.5-.1.2-.2.3 0 .5 0 .5 0 1.4-.3 1.9.1-.1.8-.2 1.6-.2 2.5.1 0 .1 0 .1.1 0 .2 0 .3-.2.3-.1.9-.1 1.8-.1 2.7-.3 3.6.1 6.8.5 9.9.3 1.1.5 3.3 1 4.1l.9-.2c.1-.3.3-.8.4-.8.2.1.2.3.3.4.3-.6.6-1 .8-1.9 0 .2.2-.1.1.1.5 2.5.8-.3 1.2-1 .3-.1.4.3.5 0 0 0 .2-.2.2-.4 0-.6 0-.6.4-.8.6-1.3.6-1.6 1-3.3.2-.4.1-2.3.1-2.6.1-.7.1-1.5.2-2.1.3-2.9.4-5.8.7-8.3.1 0-.2-.2-.1-.3.3-1.8.8-3.9.8-6.1v-.4c1-1 .8-1.8.9-2.8.2-.7.3-1.4.4-1.8 0-.4.1-.5.1-1 .1-.1 0-.3 0-.3l.2-.6c-.6.2-1.1.2-1.5-.3-.5.2-.8 1-1.4.6 0-.6.8-.2 1.1-.5 0-.2 0-.4-.2-.4l2.5-.9c.4-1.2.5-2.4.8-3.5-1-.4-1.2-1.6-1.6-2.7.8.5 1.3 1.4 1.7 2.4l.1-.6.5-1.6c.1-1.3.4-2.3.7-3.4-.4-.3-.6-.7-.3-1.2.2.1.5.1.7.3.2-.6.3-1.3.3-1.8.2-.9.5-1.8.8-2.7h-.3c0-.6.3-.6.5-.5.2-.7.4-1.4.6-2.2l.3-1.2c-.4.1-.8.1-1.2-.1.3-.3.8-.7 1.4-.9l-.2-.7c-.1.1.3.2-.7.1V6.7h1s0 .2.1.2c0-.3.1-.6.1-1-.1-.2-.1-.5 0-.7v-.3c-.1-.3-.2-.5-.2-.6-.1-1.1-.5-1.6-1.3-2.2-.5-.4-1.1-.6-1.7-.8-.5.2-1 .4-1.5.3.2-.3.4-.5.7-.6-.3-.1-.6-.2-1-.1-.4.3-.4.5-.5.8-.1 0-.2-.1-.2-.1-.1.6-.4 1-1.2 1.1.4-.4.5-.8.6-1.3-.3-.1-.6-.2-1-.3-.2.1-.4-.1-.5-.2-.2 0-.3.2-.4.2-.1 0-.2-.1-.4-.2-.3 0-.5.1-.5 0l-.7.5c-.4.4-.7.7-.9 1.1-1.3 1.1-2 2.6-2.9 4-1.5 1.9-2.7 4.1-4.1 6.2-1.5 2.2-2.7 4.7-3.7 6.7-.9 1.6-1.7 3.2-2.5 4.8-.8 1.3-1.4 2.9-2.2 4.7l-1.2 2.7c.8-.1 1.4 0 1.5.5.1 1.2-1.3 0-1.8.4l-.2.5v.1H91c-.7 1.9-1.4 3.9-2.2 5.8-2.3.5-6.4 1.5-5.6 1.7 0 0-.8.4-.8.5.4 0 1 .4 1.4.3.2.2.5.2.6.3l-.1.2c.1 0 .1-.1.3 0-.3.1-1.6.9 1.6.6.1 0 .2.1.4.1.1.5.4 1 .4 1.6 0 .3-.4.6-.5.9 0 .3-.1.6-.3 1-.8 2.7-1.7 5.6-2.2 8.5-.5-.2-.8-.4-1.2-.9.3-.3.8-.5 1.1-.5-.2-.1-.3-.2-.5-.2 0-.5-.5-.5-.6-.8-1.2-.8-3.4-.9-5.3-.9-2.9-.2-3.6.1-6.2.6-2 .2-1.6.5-3.6.9.4-.6.4-1.5.5-1.9.1-.4.4-.9.4-1.4l.2-1.2c0-.1.1-.2.1-.4.5-.9.5-1.9.6-2.6 1-3.2.7-2.6 1.7-5.7-.3-.2-.1-.7.1-.9.1 0 .2 0 .2.1.3-.9.7-2 1.3-3.5.4-1.7 1.3-3 1.9-4.9.7-.9 1-2.7 1.5-3.6.6-1.5 1.3-2.9 1.7-4.3l.6-1.3c0-.5 0-.7.2-.9l.1.1c.1-.2.2-.5.2-.8.7-.9 1.1-1.8 1.5-3 .5-.5.7-1.2 1.1-1.8l.7-1.6c.1-.5.2-.7.4-1.1l.1-.2c-1.3-.5-2.5-1.1-3.1-2.1 1 .6 2.2 1 3.3 1.5l.5-1.1.4-.9c.5-.6.6-1.2.9-1.6.2-.5.3-.6.3-1 .1-.7-.3-1.4-.6-2.1-.3 0-.4-.1-.6-.3-.1-.1-.2-.2-.3-.2-.5.1-1 .2-1.4.3-.2-.4.1-.7.6-.8-.5-.3-1-.5-1.4-.7-.6.1-1.2-.4-1.8-.4-.5.5-1 1.1-1.4 1.6l.3.3c-.2-.1-.3-.1-.4-.1-.5.9-1 1.7-1.6 2.6l-.1.2c.9.6 1.8 1.2 2.6 2.2-1.1-.4-2-1-2.9-1.7L73.4 12c.2.1.4.2.4.6-.3.2-.6.1-.7-.2l-.7 1c-.4.9-1 1.9-1.4 2.6-1.6 2.8-3 5.9-4.3 8.7-.3.7-.6 1.5-.8 2.2.2 0 .1.6.1.6h-.3c-.5 1-.9 2.3-1.6 3.5l-1.2 3c-.3 1-.5 2.2-1.1 3.2-.5 2-1.5 5.7-1.8 7.8l-.5 1.6c-.3.6-.3 1.3-.4 1.8-.3 1-.6 1.9-.8 3 .8-.2 1.7-.2 2.3.4-.7.5-1.7 1-2.7 1.3-.2 1.1-.4 2.1-.6 3.3 0 .3.1.6 0 1-.1.3-.3.5-.2.9.2 0 .1.3.2.5 0 .3.1.4.3.5.1.2.1.4.2.5.1.1.5.3.5.5l.2.5c.1.8.7 1.2 1.6 1.6.3.3.5.5.5.7-.7.9-.6.9-.5.9.1.2.3.4.6.3.6-.1.9 0 1.5 0 .3.4.8.4 1.3.3 0-.2.1-.3.3-.3.1-.5.7-.7 1.2-.9l1.3-.5c.9-.4-.3-.3.5-.6.2-.2.5-.5.9-.5.1 0 .3 0 .4-.2.4-.1.8-.3 1.5-.5.5 0 .6-.4 1.2-.5l.9-.2c.3-.1.5-.2.7-.2.3-.9 1.4-1.5 1.7-.9.1 0 .3-.3.5-.3h.7c.8 0 .5-.2 1.4-.2l1.5.1c.2-.1.5 0 .6 0v.1c1.1 0 2.1 0 3-.1-.2-.2-.3-.2-.5-.3.2-.3 0-.2 0-.3l1-.1c0-.3-.5-.1-.4-.5.3-.1.6 0 .9 0-.3 1.2-.5 2.5-.3 3.8-.1.8-.1 1.7.2 2.6.2.4.2.7.4.8.3-.2.5-.7.9-.7.5-.5 1-.8 1.7-.9.1-.3.3-.3.6-.4l.3-.2c.2 0 .3.1.4.1.1-.2.3-.2.3-.4 0 0 .1.1.2.1-.1-.5.5-.5.7-.9.4.3.5-.2 1-.1.2-.4.3-.7.8-1 .6-2.4 1.7-4.6 2.1-7.1.2-.2.2-.5.5-.9.1-.2.2-.4.2-.5 0-.3.5-.5.5-.7v-.4c0-.5.3-.8.4-1.2.1-.4.2-.9.5-1.4.5-.9.8-2.2 1.1-3.3.1 0 .5-.1.7-.3zm14.7-3.5c-.2 0-.1-.3-.1-.5.4-.1.2.4.1.5zm6.2-33.6v.6c-.5 0-.8-.1-.7-.6.3-.1.4-.1.7 0zm-1.4 6.6c-.3 0-.4-.1-.4-.4h.4v.4zm.5-8.1c-.3-.1-.7-.1-.6-.6.4-.1.6.1.6.6zm-.9 1.7c-.3 0-.5-.2-.5-.5.3-.2.6 0 .5.5zm-3 12.4v-.5c.2.1.5.1.5.5h-.5zm1.2-3.7c.9.9-.4 2.4-1.4 1.6.3-.8.5-1.6 1.4-1.6zm-2.7-5.6c-.2-.5-.1-1.2.6-1.1.1.6-.1 1-.6 1.1zm.5-8.2c0 .1 0 .2.1.2-.2.2-.3.5-.7.4-.1-.4.2-.5.6-.6zm-.9 11.3h.6c.2 1-.8 1-.6 0zM97 39.7v-.5h.4c0 .4-.1.6-.4.5zm2.8-.4c.1-.2.2-.5.5-.2 0 .1-.2.2-.5.2zm3.1 15.3c.1-.4.5.1 0 0zm1.6-1.5c.2-.4.4.4 0 0zm0-5.2c-.3.1-.2-.2-.2-.4-.3.3-.9.6-1.2.1.1-.1.1-.2.1-.4.4.1.5-.2.8-.1-.1-.5-.2-.6.1-.8h.4c.2.5.6 1.3 0 1.6zm1.4 2.5c0-.9.2-1.4-.2-1.9.4-.4.5.3.8.5l-.4.2c.2.3.4.3.5.4.2.2-.2.7-.7.8zm3.6-17c.3 0 .1.5 0 .6-.4.1-.2-.3-.5-.4l.5-.2zm-4.3-14c-.2 0-.2-.3-.5-.2.1-.3.7-.2.5.2zm-1.2 4.5c0-.3.5.1 0 0zm-3.4.9c.4.1.5-.2.8-.1.2 1.3-1 1.2-1.7 1.7.1-.3-.2-.2-.4-.2.1-.9 1.3-.5 1.3-1.4zm-1.8-3.9c0 .3 0 .5-.1.6-.4 0-.4-.7.1-.6zm-.6 1.2c.5.4.4 1.1.2 1.7-.9-.1-.2-1-.2-1.7zm-1.3 2.5c.3 0 .4.2.6.2-.1.2-.2.4-.5.4-.2-.2-.3-.2-.1-.6zm.7 5c-.2.2-.4.4-.7.5 0-.5.2-.6.7-.5zm2 1c-.3.3 0 .7.4.7.5 0 .5-.6 1-.7.1.2.3.3.5.4l2.4-5c1-1.3 1.7-2.8 2.6-4.5-.2 1.5-.5 2.7-.8 4-.3 1.1-.5 2.2-.6 3.4.2.3.2 1-.1 1.1.9-.5 2.3-.3 3.6-.4-.1.4.4.3.2.7-1.4-.2-2.8.9-4.1 1l-1.1 7.3c-1.8-.5-3.1-.5-5.4-.5.1-.4.1-.8.5-1.1.4-.7.6-1.4.9-2.2l.7-1.3c.2-.3.3-.6.4-.9 0-.1 0-.3.1-.5h.1l.1-.3c-1.6.4-4.1.6-4.7-1.3.8.8 2.1.2 3.3.1zm-1.2 4l.1-.5c.1.1.2.1.4.1 0 .3-.3.3-.5.4zM77.6 18.5c.1.4 0 .7-.5.6.1-.3.1-.6.5-.6zm-.8-7.9c.1-.3.6.2 0 0zm-1.2 3.3c-.2 0-.3-.2-.2-.5.3-.1.4.3.2.5zm-.5-.5c.1.5-.3.5-.5.7-.2-.1-.4-.4-.4-.7.4-.1.6-.1.9 0zm-.8 11.2c0-.1 0-.1.1-.1h.2v.4h-.4c.2-.1.2-.2.1-.3zm-.2-.8c.1.4-.6.7-.6.1.3.1.2-.2.6-.1zm-1.4-12h.4v.6c-.5.1-.5-.2-.4-.6zm.4 13.3c-.3.2-.9.1-1.2 0-.2-1.2 1.6-.9 1.2 0zm-2.4 9.7c-.4.5.2.7-.2 1.1-.5-.2-.7-.8-1-1.3.5-.2.8-.1 1.2.2zm-5.2 3c.1-1.4 1.6 0 0 0zm-.4-.5c0-.3.5.2 0 0zM63 51.2c0-.3.5.1 0 0zm0-13.6c0-.3.4-.2.7-.2.1.4-.5.1-.7.2zm1 23c-.6-.9.3-1.6 1-.8-.1.4-.6.6-1 .8zm1.9-1.8c-.1-.3-.4-1.2-.7-1.6-.4.6-1 1-1.6 1.4C63 57.2 65 57 64.7 56h.4c.1 1 1.1 1.8.8 2.8zm.2-.1c.2.1.2.4.2.6-.3-.1-.3-.3-.2-.6zm1.2 1.6c-.2.1-.4.2-.7.2-.2-.5 0-.7-.1-1.2.1 0 .1.1.1.2.2.3.8.2.7.8zm15.8-4.1l-.3 1.2c-.2-.1-.4-.2-.6-.2.3-.2-.3-.2-.4-.3l.2-.1c-.1-.1-.4-.1-.4-.4.4-.1.9-.5 1.2-.5H82v-.1c0-.2-.3-.5-.4-.6.3-.1.5.7.7-.3H82c.5 0 .5.2.8 0 .1 0 .2.1.4.1 0 .5 0 .9-.1 1.2zm5.4-13.8c.1.5 0 .8-.2 1-.4-.3-1.1-.2-1.3-.7.4 0 1-.8 1.5-.3zm-.7 12.1c-1.5.2-2.6 1.5-3.6 0v-.6c0-.2.5-.3 1-.2 0-.4-.3-.4-.2-1 .5-.7 1.9-.2 1.8.8.8-.5 1.8.4 1 1zm.2-1.8c2.5.1 0 2.6 0 0zm1.9-17.4c-.1-.4.3-.6.5-.4-.1.2-.1.5-.5.4zm.4 4.9c.3-.1.2.2.2.4-.1-.1-.2-.2-.2-.4zm.2 15.9c.1-.2.2-.4.6-.4-.1.3-.3.7-.6.4zm1.2-20.6c-.4 0-.5.2-.8 0 .1-.3.3-.6.5-.8-.1-.2-.3-.2-.5-.2v-.6c.5 0 .7-.1 1.1.1-.5.4-.6.8-.3 1.5zm1.1 4.6c-.4-.1-.4-.5-.2-.8.4-.1.4.6.2.8zm.7-4.7c-.6 0-.9-.3-1-.8.4-.4.5.3 1.1.1.1.3.1.6-.1.7zm-.5-2.7c-.1-.6.6-.8.6-.1-.1 0-.3.1-.6.1zm.9 7.2c-.3 0-.3-.4-.1-.6.3 0 .1.3.1.6zm.3-7.8c.3-.1.4.3.4-.1.1.1.2.2.2.4-.2-.1-.7.1-.6-.3zM352.6 101.8c-5.3-1.7-10.6-3.2-15.8-4.7-5.3-1.4-10.6-2.8-15.9-4-2.7-.6-5.3-1.3-8-1.8l-8-1.7c-5.3-1-10.7-2-16-2.9-5.4-.9-10.7-1.6-16.1-2.4-4.6-.6-9.1-1.2-13.7-1.6l-1.2 1.8c-1.1.2-.5-1.3-.6-2l-.7-.1c-10.9-1.2-21.8-2-32.9-2.6-7.6 0-36.9-1-67.5 1.2-4.5.3-9.1.7-13.6 1.1.2.1-.1.2.1.2-.3.4.4 1.2-1.6.9v-1.1c-10 1-20.3 2.3-29.5 3.7-13.3 2-24.2 4.2-30.6 5.5-.8.2-1.4.4-2.2.5-1.7.4-3.5.8-5.3 1.2-1.8.4-3.6.9-5.5 1.4-1.9.5-3.7 1-5.6 1.4-1.9.5-3.7 1.1-5.5 1.6-3.7 1.1-7.3 2.1-10.6 3.3-3.3 1.2-6.5 2.3-9.3 3.4l-7.6 3.4c-2.6 1.1-5 2.5-7.6 3.7 2.6-.6 4.9-1.1 7-1.5-2.7 1-5.3 1.9-7.6 2.8-2.2.9-4 1.6-5 2.2-2.5 1.2-4 2.1-4.9 2.7l-.4 1.1c1.1.1 3.8-.4 6-.6 1.6-.3 1.5.1 1.6.5.1.4.4.6 2.9 0-1.8.6-3 1.1-4.3 1.7-1.3.5-2.6 1-4.3 1.7-.1.3 2.5-.8 4.9-1.8 2.4-1 4.6-1.8 3.5-.9-3.4 1.1-7 3-10.4 4.3.8.1 3.8-1 6.5-2.1 2.8-1.1 5.4-1.9 5.3-1.5-.5.2-1.3.5-2.3.8-1 .3-2.2.7-3.4 1.1-2.3.8-4.5 1.6-4.6 2.2-.1.2 3.4-1.1 5.1-1.8-2.6 1.1-4.9 2.2-6.7 3.1-1.8.9-3.1 1.7-3.8 2.2-1.4 1.1-.2 1 4.7-.5-3.3 1.4-8.1 3.1-11.5 4.8 1.7-.7 4.8-1.9 6.4-2.6l-5.9 2.6 1.2-.1c1.5-.5 3-1.1 4.6-1.8l-3.9 1.7c1.1-.2 2.4-.4 3.7-.7 4.9-1.6 9.7-2.5 12.3-3.5l3.9-1.5 3.9-1.4c2.6-.9 5.2-1.9 7.8-2.7l7.9-2.6c1.3-.4 2.6-.8 4-1.2l4-1.2c5.3-1.6 10.7-3 16-4.4 5.4-1.3 10.8-2.7 16.2-3.8 0-.4-1.3-.4.5-1 1.9-.5 3.6-.9 5.4-1.1l-.1-.1c.3-.6.5-.2.6.1 3.3-.4 6.6-.6 10.2-1.6l.3-.6 1.1-.1c-.1-.2-.2-.4-.3-.4.1-.7 1.3-.2 1.5 0 0 .1 0 .2-.1.3 1.5-.2 3.1-.3 4.7-.5 2.3-.2 4.7-.5 7.1-.7l6.5-1 3.2-.5 3.3-.4 6.5-.9 6.5-.8c-.2-.2-.4-.4.5-.5 1.8-.3 4-.5 6.3-.6 2.4-.1 4.9-.3 7.5-.4l2.3-.3c.6-.2.7-.4.8-.5 2.4-.1 4.5-.2 6.4-.2 25.5-2.5 51.8-3.5 80.2-2.3 6 0 12.1.1 17.9.5 2.1.2 4.4.5 6.8.8l3.6.5 3.6.6c2.4.4 4.8.8 7.1 1.2 2.3.4 4.5.8 6.6 1.2-.5-1.1 4.4-1.1 8.9-.9 2.8 0 5.4.1 6.6-.2 0-.4.1-.8.3-1 .3 0 .4.1.6.2 2.6.6 5.8 1.3 8.4 1.8 2.8.5 5 1 5.3.7 1.7-1.3 6.4-2.5 21.4.5 5.8 1.3 14.3 4.7 16.4 5 3-.1-7.3-3.9-4-3.5zM62.5 98.1c-1 .1-1.2-.7-1.8-.9-.2-.9.3-1.3.3-2.3h2.1c.8 2-.8 1.7-.6 3.2zm3.1 4c-.8-1 .9.8 0 0zm1.8 5.1c-.2-1 .3-1.3.6-1.8.2.2.5.3.9.3.1 1.4-.5 2-1.5 1.5zm18.8-3.9h-.6v-.6h.6v.6zm16.4-6.7h-1.5c.3-.8-.5-1.3 0-1.8.8 0 1.5-.2 1.8.2 0 .7-.5.8-.3 1.6zm35.1-5.8c.6-1 1 1 0 0zm17.3 2.8c-.4-.3-1-.5-.9-1.2 1.3-.9 1.9.4.9 1.2zm11.2-.3c-.8-.1-1.1-.7-.9-1.8.7 0 1.5 0 1.8.3.1.8-.9.7-.9 1.5zm17.9-7.3c-1.9-.2-.4-4 1.2-2.4 0 1.2-.7 1.6-1.2 2.4zm5.5-2.1v-.3c1.5-1.6-.7 2.1 0 .3zm1.8-.9c1-.8-.7 1 0 0zm13.7.3c.5-1.1.9 1 0 0zm5.7-.3c-.1-.2.2.2 0 0zm27 8.5c-.2-.1-.3-.3-.6-.3.1-.2.3-.3.3-.6.2.1.3.3.6.3-.1.2-.3.3-.3.6zm35.2 1.2c-.2-.3-.3-.7-.3-1.2.4-.3 1.1-.3 1.8-.3.1 1.1-.8 1.2-1.5 1.5zm3.9-7.8h1.5c.3 1-1.8 1-1.5 0zm2.7 9.9c-.8.1-1.3-.1-1.2-.9.8-.1 1.5-.1 1.2.9zm5.8-.9h-.6v-.6h.6v.6z"
                            fill="#fff" /></svg></div>
                <div class="flash-sale__text">
                    <p>Join today and <em>save £25</em> with our limited time no joining fee offer!</p>
                </div>
                <div class="flash-sale__btn"><a href="https://memberzone.easygym.co.uk/join.htm"
                        class="btn -large -fill">
                        <span>Join Now</span>
                        <span class="svg-chevron-right -white" data-grunticon-embed></span>
                    </a></div>
            </div><span class="flash-sale__smallprint">*at select gyms only</span>
        </div>
    </div> -->
</main>
@endsection