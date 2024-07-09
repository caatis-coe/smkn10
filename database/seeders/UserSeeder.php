<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{

    protected static ?string $password;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Aisha Putri Nuryan',
                'email' => 'aishaptrn@gmail.com',
                'email_verified_at' => now(),
                'password' => static::$password ??= Hash::make('aishaiueo'),
                'remember_token' => Str::random(10),
            ]
        ]);
    }
}
