@extends('layouts.main')

@section('content')
    <section class="hero -blog resrc bg-img" style="background-image: url('/gym/img/help.jpg');">
        <div class="hero__inner">
            <h1 class="-peta caps text--white">FAQs</h1>
        </div>
    </section>

    <section class="site-section -blog-grey-bg">
    <div class="blog-categories">
        <ul class="blog-categories__list">
            <li class="blog-categories__item">
                <a href="/faqs" class="btn" data-category="all">Tất cả</a>
            </li>
            @foreach($categories as $key => $cat)
                <li class="blog-categories__item @if($category->id === $cat->id) -selected @endif">
                    <a href="/category/{{ $cat->slug }}" class="btn" data-category="news">{{ $cat->title }}</a>
                </li>
            @endforeach
        </ul>
    </div>
    <div class="blog-articles">
        <div class="site-container blog-articles__container" id="blog-articles">
            @foreach($category->articles as $key => $article)
            <div class="blog-index-article">
                <a class="blog-index-article__img" href="/article/{{ $article->slug }}">
                    <img src="{{ $article->image }}" alt="" width="380" height="267">
                </a>

                <div class="blog-index-article__inner">
                    <h2 class="heading h1 caps">
                        <a href="/article/{{ $article->slug }}">{{ $article->title }}</a>
                    </h2>

                    <time class="blog-index-article__date">{{ $article->created_at->format('d.m.Y') }}</time>
                </div>
            </div>
            @endforeach
        </div>
    </div>

    <ul class="faq__list"><li class="faq__item">
                    <div class="faq__title">What classes does it have?</div>
                    <div class="faq__content">  <p>easyGym offers PACK45 – A TEAM-BASED workout experience, designed to get results. Whether you are a beginner, a weekend athlete or an experienced gym junkie, you can work at your pace, while lead by experienced level 3 certified PTs. You’ll also stay motivated and challenged as part of the ‘pack’ as you train together through a series of exercises that mix MMA, cardio, athletics and gymnastics. Burn fat, get conditioned, build strength. With consistent effort, you’ll feel results in 30 days, and, over time, you’ll transform yourself. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">IS THERE PARKING AVAILABLE?</div>
                    <div class="faq__content">  <p>2 HOUR FREE PARKING AVAILABLE FOR ALL OUR MEMBERS in the Westgate Shopping Park. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">WHAT ARE THE PUBLIC TRANSPORT LINKS TO THE GYM?</div>
                    <div class="faq__content">  <p>We are in Westgate Shopping Park just two minutes walk from Basildon Rail and Bus Stations. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">CAN I USE OTHER EASYGYMS</div>
                    <div class="faq__content">  <p>AT THE MOMENT OUR SYSTEM DOES NOT ALLOW MULTI-SITE ACCESS, BUT WE ARE LOOKING AT OFFERING THIS SOON!</p></div>
                </li><li class="faq__item">
                    <div class="faq__title">CAN I BRING MY OWN PT?</div>
                    <div class="faq__content">  <p>WE HAVE LICENSE AGREEMENTS WITH OUR OWN PERSONAL TRAINERS ON A SELF-EMPLOYED BASIS AND THEREFORE WE DO NOT ALLOW EXTERNAL PERSONAL TRAINERS TO TRAIN CLIENTS IN OUR GYM.</p></div>
                </li><li class="faq__item">
                    <div class="faq__title">Do you offer corporate memberships? </div>
                    <div class="faq__content">  <p>The health and wellness of Basildon’s business community is important to us. If you would like to set up a corporate membership for your organisation, please email customerservices@easygym.co.uk to learn more. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">Do You partner with local businesses?</div>
                    <div class="faq__content">  <p>Yes! We are proud to partner with local businesses throughout Essex and Basildon. Email us at customerservices@easygym.co.uk, and we’ll see what we can do!</p></div>
                </li><li class="faq__item">
                    <div class="faq__title">Where should we direct media enquiries? </div>
                    <div class="faq__content">  <p>As Basildon’s local 24/7 gym, we are highly involved in supporting the health and wellness of our community. We are happy to participate in any local press, which promotes and inspires healthy choices. Contact customerservices@easygym.co.uk, and we’ll be happy to help. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">Do I have to have a gym induction?</div>
                    <div class="faq__content">  <p>Inductions are not mandatory for new members. However, if you would like an induction, we can arrange one of our unique personalised inductions to help you feel comfortable starting an exercise program. </p></div>
                </li><li class="faq__item">
                    <div class="faq__title">What do you offer to help me get started?</div>
                    <div class="faq__content">  <p>We offer unique personalised inductions, which are based around your individual needs and goals. Log-in to the easyGym member zone to book by appointment. </p></div>
                </li></ul>
</section>
@endsection

@section('css')
    @parent

    <style type="text/css">
        #blog-articles { margin-bottom: 100px; }
    </style>
@endsection
@section('js')
<script type="text/javascript">
    grid = $('#blog-articles').isotope({
        itemSelector: '.blog-index-article',
        layoutMode: 'fitRows',
    })
</script>
@endsection