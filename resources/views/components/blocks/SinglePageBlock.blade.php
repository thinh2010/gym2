<section class="site-section default-template">
    <div class="site-container -mw1000">
        <h1 class="h2 heading -main-title">{{ $block->title }}</h1>
        <div class="default-template__body">   
            <p>{{ $block->description }}</p>

            @foreach($block->blockContents as $key => $content)
                <h3>{{ $content->title }}</h3>
                {!! $content->content !!}
            @endforeach
        </div>
    </div>
</section>