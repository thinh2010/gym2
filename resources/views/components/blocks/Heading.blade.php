<section class="site-section home-hero-reduced-fees" style="background-image: url('{{ $block->image }}')">
    <div class="home-hero-reduced-fees__link" href="#">
        <h1 class="home-hero-reduced-fees__title">
            <span class="home-hero-reduced-fees__intro">{{ $block->options->slogan1 }}</span>
            <span class="home-hero-reduced-fees__tagline">{{ $block->options->slogan2 }}</span>
        </h1>
        <div class="home-hero-reduced-fees__footer">
            <p><b>{{ $block->description }}</b></p>
        </div>
        @if (isset($block->options->button))
        <div class="text--center">
            <a href="{{ isset($block->options->buttonLink) ? $block->options->buttonLink : '#' }}" class="btn -large -fill"><b>{{ isset($block->options->button) ? $block->options->button : 'Join Now' }}</b></a>
        </div>
        @endif
    </div>
</section>