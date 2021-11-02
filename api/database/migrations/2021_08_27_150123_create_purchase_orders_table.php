<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->text('session_id')->default('');
            $table->string('name');
            $table->string('email');
            $table->string('address');
            $table->string('phone')->default('');
            $table->string('zone')->default('');
            $table->string('shippingMethod')->default('');
            $table->string('paymentMethod')->default('');
            $table->string('province')->default('');
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
        Schema::dropIfExists('purchase_orders');
    }
}
