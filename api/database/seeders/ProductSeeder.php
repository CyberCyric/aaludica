<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 1: "Gobiernos y Conflictos"',
            'price' => '770',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de eventos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol1.png',
            'company' => 'AA Lúdica'

        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 2: "Economía y Sociedad"',
            'price' => '770',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de eventos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol2.png',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 3: "Ciencia y Cultura"',
            'price' => '770',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de eventos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol3.png',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 4: "Cambalache"',
            'price' => '770',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de eventos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'is_new' => 'Y',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol4.png',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Ars Domino',
            'price' => '1500',
            'is_last_units' => 'Y',
            'main_photo' => 'ars_domino.png',
            'short_description' => 'Usando las reglas del clásico dominó, este juego permite aprender sobre las obras más importantes de los distintos períodos artísticos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '30 min.',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Nom Noms',
            'price' => '550',
            'main_photo' => 'nom_noms.png',
            'short_description' => 'Un juego de riesgo, donde hay que comer la mayor cantidad de puntos... sin empacharse.',
            'stat_players' => '2-5 jugadores',
            'stat_age' => '6+ años',
            'stat_time' =>  '10 min.',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos: Combo Colección Completa',
            'price' => '2900',
            'is_combo' => 'Y',
            'main_photo' => 'sa_combo_completa.png',
            'short_description' => 'Llevate los volúmenes 1, 2, 3 y 4 más un mate de regalo.',
            'stat_players' => '2-6 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'company' => 'AA Lúdica'
        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos: Combo Amigos son los Amigos',
            'price' => '2900',
            'is_combo' => 'Y',
            'main_photo' => 'sa_combo_amigos.png',
            'short_description' => 'Juntate entre amigos que ya tengan los volumenes anteriores y llevate cuatro volúmenes 4 más un mate de regalo.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'company' => 'AA Lúdica'
        ]);
    }
}
