<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShippingMethodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shipping_methods')->insert(['id' => 1, 'name' => 'Retiro personalmente']);
        DB::table('shipping_methods')->insert(['id' => 2, 'name' => 'Envío por Correo Argentino']);
    }
}