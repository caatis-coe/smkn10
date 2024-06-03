<?php

namespace Database\Seeders;

use App\Models\TeachingFactoryProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeachingFactoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TeachingFactoryProduct::factory()->count(50)->create();
    }
}
