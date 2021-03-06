<section class="site-section hero -home-pack js-video-embed resrc bg-img"
    data-src="{{ $block->image }}">
    <div class="hero__inner">
        <h2 class="-peta caps text--white">{{ $block->title }}</h2>
        <p>{{ $block->description }}</p>
        <a href="{{ $block->options->link }}"
            class="btn -large -frosted">
            <b>{{ isset($block->options->button) ? $block->options->button : 'Find out more' }}</b>
            <span class="svg-chevron-right -orange" data-grunticon-embed></span>
        </a>
    </div>

    {{-- <video id="video" loop=""><source src="https://view.vzaar.com/14303414/video" type="video/mp4"></video> --}}
</section>