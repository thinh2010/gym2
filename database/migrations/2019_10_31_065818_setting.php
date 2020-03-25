<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Setting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sitename');
            $table->string('site_url')->nullable();
            $table->string('company_name');
            $table->string('logo');
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->string('address_hn');
            $table->string('address_hcm')->nullable();
            $table->string('footer_bg')->nullable();
            $table->string('footer_text')->nullable();
            $table->string('tel1');
            $table->string('tel2')->nullable();
            $table->string('social_fb')->nullable();
            $table->string('social_google')->nullable();
            $table->string('social_linkedin')->nullable();
            $table->string('social_instagram')->nullable();
            $table->string('social_other')->nullable();
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
        Schema::dropIfExists('settings');
    }
}
