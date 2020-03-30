<section class="site-section intro-area">
    <div class="intro-area__inner">
        <div class="home-intro-body">
            <p>{!! $block->options->ads !!}</p>
        </div>
        <!-- Login -->
        <a href="#" class="btn -large -fill">
            <span>{{ isset($block->options->button) ? $block->options->button : 'Join Online' }}</span>
            <span class="svg-chevron-right -white" data-grunticon-embed></span>
        </a>
    </div>
</section>