<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeachingFactoryProduct>
 */
class TeachingFactoryProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $image_paths = [
            'images/teachingFactoryProduct/image1.jpeg',
            'images/teachingFactoryProduct/image2.jpeg',
            'images/teachingFactoryProduct/image3.jpeg',
            'images/teachingFactoryProduct/image4.jpeg',
            'images/teachingFactoryProduct/image5.jpeg',
            'images/teachingFactoryProduct/image6.jpeg',
            'images/teachingFactoryProduct/image7.jpg',
            'images/teachingFactoryProduct/image8.jpg',
            'images/teachingFactoryProduct/logo-smkn-10-bandung.png'
        ];
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'image_path' => $this->faker->randomElement($image_paths),
            'KonsentrasiKeahlianID' => $this->faker->numberBetween(1, 6),
        ];
    }
}
