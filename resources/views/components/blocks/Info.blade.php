<section class="site-section nav-blocks-container home-nav-blocks-container">
    <nav class="nav nav-blocks -four-blocks">
        @foreach($block->blockContents as $content)
        <div class="nav-blocks__block">
            <div class="nav-blocks__content -cta {{ $content->css_class }}">
                <h2 class="-beta">
                    <a href="{{ $content->description }}">{{ $content->title }}</a>
                </h2> 
                {!! $content->content !!}
                <a href="{{ $content->description }}" class="btn -medium -fill">
                    <span>{{ $content->other_text }}</span>
                    <span class="svg-chevron-right" style="background-image: none;"><svg xmlns="http://www.w3.org/2000/svg" width="7.844" height="11.993" viewBox="0 0 7.844 11.993"><path d="M7.844 5.997l-5.997 5.997-1.847-1.848 4.15-4.15-4.15-4.149 1.847-1.847 5.997 5.997z"></path></svg></span>
                </a>
            </div>
        </div>
        @endforeach
    </nav>
</section>