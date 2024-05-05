<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();

        Post::create([
            'id' => Str::uuid()->toString(),
            'title' => 'Post 1',
            'slug' => 'post-1',
            'content' => 'Content post 1',
            'thumbnail' => 'thumbnail-1.jpg',
            'status' => 'published',
            'user_id' => $user->id,
        ]);
    }
}
