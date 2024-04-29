<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public $blogDatas = [
        [
            "title" => "The Magic of Deep Sea Diving",
            "description" => "Exploring the hidden wonders beneath the ocean's surface.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-01"
        ],
        [
            "title" => "The Art of Japanese Cuisine",
            "description" => "Discovering the exquisite flavors and traditions of Japanese food.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-02"
        ],
        [
            "title" => "Hiking Adventures in the Swiss Alps",
            "description" => "Embarking on thrilling hikes amidst breathtaking mountain landscapes.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-03"
        ],
        [
            "title" => "Exploring Ancient Egyptian Temples",
            "description" => "Uncovering the secrets of ancient pharaohs and their magnificent temples.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-04"
        ],
        [
            "title" => "The Enchanting Beauty of Cherry Blossoms",
            "description" => "Witnessing the ephemeral beauty of cherry blossoms in full bloom.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-05"
        ],
        [
            "title" => "Culinary Delights of Italy",
            "description" => "Savoring the delectable cuisine and fine wines of Italy.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-06"
        ],
        [
            "title" => "The Majesty of Machu Picchu",
            "description" => "Exploring the ancient ruins and breathtaking vistas of Machu Picchu.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-07"
        ],
        [
            "title" => "Captivating Wildlife of the Serengeti",
            "description" => "Encountering majestic lions, elephants, and other iconic African wildlife.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-08"
        ],
        [
            "title" => "Adventures in the Amazon Rainforest",
            "description" => "Navigating through dense jungles and encountering unique wildlife.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-09"
        ],
        [
            "title" => "Discovering the Grand Canyon",
            "description" => "Standing in awe of the vastness and beauty of the Grand Canyon.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-10"
        ],
        [
            "title" => "Exploring Ancient Greek Mythology",
            "description" => "Diving into the fascinating myths and legends of ancient Greece.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-11"
        ],
        [
            "title" => "The Romance of Parisian Streets",
            "description" => "Strolling through charming streets and experiencing the romance of Paris.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-12"
        ],
        [
            "title" => "Marvels of the Great Barrier Reef",
            "description" => "Exploring the world's largest coral reef system and its vibrant marine life.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-13"
        ],
        [
            "title" => "Cultural Wonders of India",
            "description" => "Immersing in the rich cultural heritage and diverse traditions of India.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-14"
        ],
        [
            "title" => "Tranquility of Japanese Zen Gardens",
            "description" => "Finding peace and serenity amidst meticulously designed Japanese gardens.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-15"
        ],
        [
            "title" => "Exploring the Scottish Highlands",
            "description" => "Venturing through rugged landscapes and historic castles of Scotland.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-16"
        ],
        [
            "title" => "The Elegance of Ballet Performances",
            "description" => "Witnessing graceful ballet performances and the beauty of classical dance.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-17"
        ],
        [
            "title" => "Sailing Across the Mediterranean",
            "description" => "Embarking on a journey across the azure waters of the Mediterranean Sea.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-18"
        ],
        [
            "title" => "Ancient Ruins of Petra",
            "description" => "Exploring the rose-red city carved into the cliffs of southern Jordan.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-19"

        ],
        [
            "title" => "The Beauty of Icelandic Landscapes",
            "description" => "Witnessing stunning waterfalls, glaciers, and volcanic landscapes of Iceland.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-20"
        ],
        [
            "title" => "The Spirit of Carnival in Rio de Janeiro",
            "description" => "Immersing in the vibrant colors, music, and dance of Rio's annual Carnival.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-21"
        ],
        [
            "title" => "Trekking to Everest Base Camp",
            "description" => "Embarking on a challenging trek to the base camp of the world's highest mountain.",
            "image_path" => "../../Assets/image1.jpg",
            "date_updated" => "2022-01-22"
        ],
        [
            "title" => "The Mystique of Stonehenge",
            "description" => "Contemplating the ancient stone circle and its enigmatic purpose.",
            "image_path" => "../../Assets/image2.jpg",
            "date_updated" => "2022-01-23"
        ],
        [
            "title" => "Exploring the Colosseum in Rome",
            "description" => "Stepping back in time to witness the grandeur of ancient Roman gladiatorial games.",
            "image_path" => "../../Assets/image3.jpg",
            "date_updated" => "2022-01-24"
        ],
    ];

    public function show(): Response
    {
        return Inertia::Render('blog/Blog', ['blogDatas' => $this->blogDatas] );
    }
}
