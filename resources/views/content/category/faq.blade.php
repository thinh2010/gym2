@extends('layouts.main')

@section('content')
    <section class="hero -blog resrc bg-img" style="background-image: url('/gym/img/help.jpg');">
        <div class="hero__inner">
            <h1 class="-peta caps text--white">FAQs</h1>
        </div>
    </section>

    <div class="cont">
        <article class="main-column">
            <header class="article-header">
                <h1>{{ $category->title }}</h1>
            </header>

            <div class="article-body markdown">
                <ul class="faq__list">
                    @foreach ($category->articles as $key => $article)
                        <li class="faq__item">
                            <div class="faq__title">{{ $article->title }}</div>
                            <div class="faq__content">{!! $article->content !!}</p></div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </article>

        <aside class="article-sidebar side-column">
            <section class="faqs-category-list">
                <h3 class="faq-section-title">Các chủ đề trợ giúp</h3>
                <ul>
                    @foreach ($categories as $key => $category)
                        <li><a href="/category/{{ $category->slug }}">{{ $category->title }}</a></li>
                    @endforeach
                    <li><a target="_blank" href="/lien-he">Gửi câu hỏi</a></li>
                </ul>
            </section>
          </aside>
    </div>    
</section>
@endsection

@section('css')
    @parent
    <link href="{{ asset('gym/css/faqs.css') }}" rel="stylesheet">
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