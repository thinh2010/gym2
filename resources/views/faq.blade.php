@extends('layouts.main')

@section('content')
    <section class="hero -blog resrc bg-img" style="background-image: url('/gym/img/help.jpg');">
        <div class="hero__inner">
            <h1 class="-peta caps text--white">FAQs</h1>
        </div>
    </section>

    <section class="site-section -blog-grey-bg">
        <div class="site-container">
            <h3 class="caps text--center">Vui lòng chọn chủ đề trợ giúp</h3>
            <div class="listQA">
                @foreach($categories as $key => $category)
                    <a class="titleQA" href="/category/{{ $category->slug }}">
                        <h3>{{ $category->title }}</h3>
                    </a>
                @endforeach
                <a class="titleQA" href="/lien-he">
                    <h3>Gửi câu hỏi</h3>
                </a>
            </div>
        </div>
    </section>
@endsection

@section('css')
    @parent

    <style type="text/css">
        #blog-articles { margin-bottom: 100px; }
        .listQA {
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding:50px 0;
        }
        .listQA .titleQA {
            margin: 10px;
            flex-basis: calc(25% - 20px);
            display: flex;
            border: 2px solid #be202f;
            flex-direction: column;
            justify-content: center;
            min-height: 150px;
            padding: 0 20px;
            border-radius: 3px;
            cursor: pointer;
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.2s;
            -ms-transition: all 0.2s;
            -o-transition: all 0.2s;
            transition: all 0.2s;
        }
        .listQA .titleQA h3 {
            font-size: 20px;
            line-height: 1.3;
        }
        .listQA .titleQA:hover {
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
            transform: translateY(-5px);
            background: #bb434f;
            border: 2px solid #bb434f;
            text-decoration: none;
        }
        .listQA .titleQA:hover h3 {
            color: #fff;
        }
        h3.caps {
            font-size: 30px;
            font-weight: bold;
            margin: 80px 0 30px 0;
        }
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