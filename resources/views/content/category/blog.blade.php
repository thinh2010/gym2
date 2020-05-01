@extends('layouts.main')

@section('content')
    <section class="hero -blog resrc bg-img" style="background-image: url('/gym/img/blog.jpg');">
        <div class="hero__inner">
            <h1 class="-peta caps text--white">Blogs</h1>
        </div>
    </section>

    <section class="site-section -blog-grey-bg">
    <div class="blog-categories">
        <ul class="blog-categories__list">
            <li class="blog-categories__item">
                <a href="/blog" class="btn" data-category="all">Tất cả</a>
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