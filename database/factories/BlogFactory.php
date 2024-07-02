<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $thumbnail_images = [
            "images/ekskul-angklung.jpg",
            "images/ekskul-paduan.jpg",
            "images/ekskul-taekwondo.jpg",
            "images/ekskul-angklung.jpg",
            "https://cdn-sekolah.annibuku.com/20219176/1.jpg",
            "https://majalahsora.com/wp-content/uploads/2023/06/IMG-20230609-WA0048.jpg",
            "https://sambasnews.id/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-17-at-21.36.17.jpeg",
            "https://www.jabarsatu.com/wp-content/uploads/2023/08/IMG_20230809_131850.jpg",
            "https://jurnalmedia.com/wp-content/uploads/2023/07/attachment-1687868905780.jpeg",
            "https://www.jarrakpos.com/wp-content/uploads/2024/05/template_web_blog_large.jpg"
        ];

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'thumbnail_image' => $this->faker->randomElement($thumbnail_images),
            'updated_by' => $this->faker->numberBetween(1, 2),
            'published_by' => $this->faker->numberBetween(1, 2),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
