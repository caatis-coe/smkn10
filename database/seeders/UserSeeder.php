<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'id' => Str::uuid()->toString(),
            'name' => 'admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com', 
            'password' => bcrypt('password'), 
            'role' => 'administrator',
        ]);

        // User::create([
        //     'id' => Str::uuid()->toString(),
        //     'name' => 'test',
        //     'username' => 'test',
        //     'email' => 'test@gmail.com', 
        //     'password' => bcrypt('password'), 
        //     'role' => 'administrator',
        // ]);
    }
}