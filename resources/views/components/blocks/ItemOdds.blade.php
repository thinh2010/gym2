<section class="site-section">
    <a name="membership" class="anchor-site-section">{{ $block->title }}</a>

    @foreach($block->blockContents as $key => $content)
    <div class="checkerboard @if($key % 2 == 0) -odd @else --even @endif">
        <div class="checkerboard__item -half -image resrc bg-img" data-src="{{ $content->image }}" style="background-image: url('{{ $content->image }}');"></div>
        <div class="checkerboard__item -half bg--dark">
            <div class="checkerboard__text">
                <h2 class="-mega caps -white">{{ $content->title }}</h2>
                <div class="checkerboard__para -bordered">
                	<p>{{ $content->description }}</p>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</section>