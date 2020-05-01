@extends('layouts.main')

@section('content')
    <section class="hero -blog resrc bg-img" style="background-image: url('/gym/img/blog.jpg');">
        <div class="hero__inner">
            <h1 class="-peta caps text--white">Blogs</h1>
        </div>
    </section>

    <section class="site-section -blog-grey-bg">
        <div class="return-to-blog">
            <a href="/blog">Quay lại trang Blog</a>
        </div>
        <div class="site-container -mw1240">
            <article class="blog-article">

                <h1 class="blog-article__title caps">{{ $article->title }}</h1>

                <div class="blog-article__reorder">
                    <div class="blog-article__item blog-article__item--image">
                        <img src="{{ $article->image }}" alt="{{ $article->title }}">
                    </div>
                    <div class="blog-article__item blog-article__item--text">
                        {!! $article->content !!}
                    </div>
                </div>
            </article>
        </div>
    </section>
@endsection