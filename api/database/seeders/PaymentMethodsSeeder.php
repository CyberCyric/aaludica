<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_methods')->insert(['id' => 1, 'name' => 'Efectivo']);
        DB::table('payment_methods')->insert(['id' => 2, 'name' => 'Transferencia bancaria']);
        DB::table('payment_methods')->insert(['id' => 3, 'name' => 'Mercado Pago']);
    }
}