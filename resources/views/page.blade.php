@extends('layouts.main')

@section('content')
    @if (isset($page->blocks))
        @foreach ($page->blocks as $block)
            @include("components.blocks.{$block->type}", ['block' => $block])
        @endforeach
    @endif

    <section class="site-section">
        <a name="content" class="anchor-site-section">{{ $page->title }}</a>
        <div class="checkerboard -zones">
            @foreach($page->children as $key => $child)
            <div class="checkerboard__item -half -image-text resrc bg-img" data-src="{{ $child->image }}" style="background-image: url('{{ $child->image }}');">
                <div class="checkerboard__text">
                    <h2 class="-mega caps -white">{{ $child->title }}</h2>
                    <p class="caps text--white">{{ $child->description }}</p>
                    <a href="/page/{{ $page->slug }}/{{ $child->slug }}" class="btn -large -frosted">
                        <span>Xem thêm</span>
                        <span class="svg-chevron-right -orange" style="background-image: none;"><svg xmlns="http://www.w3.org/2000/svg" width="7.844" height="11.993" viewBox="0 0 7.844 11.993"><path d="M7.844 5.997l-5.997 5.997-1.847-1.848 4.15-4.15-4.15-4.149 1.847-1.847 5.997 5.997z"></path></svg></span>
                    </a>
                </div>
            </div>
            @if (($key+1) % 2 == 0)
                </div><div class="checkerboard -zones">
            @endif
            @endforeach
        </div>
    </section>
@endsection
