@extends('layouts.main')

@section('content')
    @foreach ($page->blocks as $block)
        @include("components.blocks.{$block->type}", ['block' => $block])
    @endforeach
@endsection
