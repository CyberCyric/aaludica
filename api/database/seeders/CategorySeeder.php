<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(['name' => 'Historia']);
        DB::table('categories')->insert(['name' => 'Arte']);
        DB::table('categories')->insert(['name' => 'Infantiles']);
        DB::table('categories')->insert(['name' => 'Ciencia']);
        DB::table('categories')->insert(['name' => 'Cooperativos']);
        DB::table('categories')->insert(['name' => 'Catequesis']);
        DB::table('categories')->insert(['name' => 'Literatura']);
    }
}
