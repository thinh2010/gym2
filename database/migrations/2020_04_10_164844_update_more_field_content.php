<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMoreFieldContent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('block_contents', function (Blueprint $table) {
            $table->string('css_class')->nullable();
            $table->string('other_text')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('block_contents', function (Blueprint $table) {
            $table->dropColumn('css_class');
            $table->dropColumn('other_text');
        });
    }
}
