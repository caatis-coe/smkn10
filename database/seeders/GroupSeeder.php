<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('groups')->insert([
            [
                'name' => 'Sarana Prasarana',
                'type' => 'fasilitas'
            ],
            [
                'name' => 'Ekstrakulikuler',
                'type' => 'kegiatan mahasiswa'
            ],
        ]);
    }
}
