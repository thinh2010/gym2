<section class="site-section hero -home-pack js-video-embed resrc bg-img"
    data-src="{{ $block->image }}">
    <div class="hero__inner">
        <h2 class="-peta caps text--white">{{ $block->title }}</h2>
        <p>{{ $block->description }}</p>
        <a href="{{ $block->options->link }}"
            class="btn -large -frosted">
            <span>{{ isset($block->options->button) ? $block->options->button : 'Find out more' }}</span>
            <span class="svg-chevron-right -orange" data-grunticon-embed></span>
        </a>
    </div>
</section>