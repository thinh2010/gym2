<section class="site-section intro-area">
    <div class="intro-area__inner">
        <div class="home-intro-body">
            <p>{!! $block->options->ads !!}</p>
        </div>
        <!-- Login -->
        @if (isset($block->options->button))
        <a href="{{ isset($block->options->buttonLink) ? $block->options->buttonLink : '#' }}" class="btn -large -fill">
            <span>{{ isset($block->options->button) ? $block->options->button : 'Join Online' }}</span>
            <span class="svg-chevron-right -white" data-grunticon-embed></span>
        </a>
        @endif
    </div>
</section>