<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BlockContent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('block_contents', function (Blueprint $table) {
            // basic information
            $table->increments('id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->longText('content')->nullable();
            $table->text('image')->nullable();
            $table->integer('sort')->nullable();

            // flags
            $table->boolean('is_enabled');

            // Relationship
            $table->integer('block_id')->unsigned()->index();
            $table->foreign('block_id')->references('id')->on('blocks')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('block_contents');
    }
}
