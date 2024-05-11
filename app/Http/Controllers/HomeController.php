<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public $blogDatas = [
        [
            "id" => "1",
            "title" => "The Magic of Deep Sea Diving",
            "description" => "Exploring the hidden wonders beneath the ocean's surface.",
            "image_path" => 'image1.jpg',
            "date_updated" => "2022-01-01"
        ],
        [
            "id" => "2",
            "title" => "The Art of Japanese Cuisine",
            "description" => "Discovering the exquisite flavors and traditions of Japanese food.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-02"
        ],
        [
            "id" => "3",
            "title" => "Hiking Adventures in the Swiss Alps",
            "description" => "Embarking on thrilling hikes amidst breathtaking mountain landscapes.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-03"
        ],
        [
            "id" => "4",
            "title" => "Exploring Ancient Egyptian Temples",
            "description" => "Uncovering the secrets of ancient pharaohs and their magnificent temples.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-04"
        ],
        [
            "id" => "5",
            "title" => "The Enchanting Beauty of Cherry Blossoms",
            "description" => "Witnessing the ephemeral beauty of cherry blossoms in full bloom.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-05"
        ],
        [
            "id" => "6",
            "title" => "Culinary Delights of Italy",
            "description" => "Savoring the delectable cuisine and fine wines of Italy.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-06"
        ],
    ];

    public function show(): Response
    {
        return Inertia::Render('Home', ['blogDatas' => $this->blogDatas] );
    }
}
