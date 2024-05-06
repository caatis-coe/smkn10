<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FasilitasController extends Controller
{
    private $data = [
        [
            "title" => "The Magic of Deep Sea Diving",
            "description" => "Exploring the hidden wonders beneath the ocean's surface.",
            "image_path" => 'image1.jpg',
        ],
        [
            "title" => "The Art of Japanese Cuisine",
            "description" => "Discovering the exquisite flavors and traditions of Japanese food.",
            "image_path" => "image2.jpg",
        ],
        [
            "title" => "Hiking Adventures in the Swiss Alps",
            "description" => "Embarking on thrilling hikes amidst breathtaking mountain landscapes.",
            "image_path" => "image3.jpg",
        ],
        [
            "title" => "Exploring Ancient Egyptian Temples",
            "description" => "Uncovering the secrets of ancient pharaohs and their magnificent temples.",
            "image_path" => "image1.jpg",
        ],
        [
            "title" => "The Enchanting Beauty of Cherry Blossoms",
            "description" => "Witnessing the ephemeral beauty of cherry blossoms in full bloom.",
            "image_path" => "image2.jpg",
        ],
        [
            "title" => "Culinary Delights of Italy",
            "description" => "Savoring the delectable cuisine and fine wines of Italy.",
            "image_path" => "image3.jpg",
        ],
    ];

    public function show(): Response {
        return Inertia::render('pembelajaran/Fasilitas', ['fasilitasDatas' => $this->data]);
    }
}
