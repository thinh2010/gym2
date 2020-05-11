<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Payment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->integer('plan_id');
            $table->string('plan_name');
            $table->integer('price');
            $table->string('vpc_MerchTxnRef')->nullable();
            $table->string('vpc_OrderInfo')->nullable();
            $table->string('vpc_TicketNo')->nullable();

            // response
            $table->string('vpc_TxnResponseCode')->nullable();
            $table->string('vpc_TransactionNo')->nullable();
            $table->string('vpc_Message')->nullable();
            $table->string('vpc_Card')->nullable();
            $table->string('vpc_CardUid')->nullable();


            // Relationship
            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::dropIfExists('payments');
    }
}
