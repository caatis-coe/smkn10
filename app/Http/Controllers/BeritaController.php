<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Mail\Mailables\Content;
use Inertia\Inertia;
use Inertia\Response;
use PhpParser\Node\Stmt\Foreach_;

class BeritaController extends Controller
{
    private $beritaDatas = [
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
        [
            "id" => "7",
            "title" => "The Majesty of Machu Picchu",
            "description" => "Exploring the ancient ruins and breathtaking vistas of Machu Picchu.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-07"
        ],
        [
            "id" => "8",
            "title" => "Captivating Wildlife of the Serengeti",
            "description" => "Encountering majestic lions, elephants, and other iconic African wildlife.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-08"
        ],
        [
            "id" => "9",
            "title" => "Adventures in the Amazon Rainforest",
            "description" => "Navigating through dense jungles and encountering unique wildlife.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-09"
        ],
        [
            "id" => "10",
            "title" => "Discovering the Grand Canyon",
            "description" => "Standing in awe of the vastness and beauty of the Grand Canyon.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-10"
        ],
        [
            "id" => "11",
            "title" => "Exploring Ancient Greek Mythology",
            "description" => "Diving into the fascinating myths and legends of ancient Greece.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-11"
        ],
        [
            "id" => "12",
            "title" => "The Romance of Parisian Streets",
            "description" => "Strolling through charming streets and experiencing the romance of Paris.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-12"
        ],
        [
            "id" => "13",
            "title" => "Marvels of the Great Barrier Reef",
            "description" => "Exploring the world's largest coral reef system and its vibrant marine life.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-13"
        ],
        [
            "id" => "14",
            "title" => "Cultural Wonders of India",
            "description" => "Immersing in the rich cultural heritage and diverse traditions of India.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-14"
        ],
        [
            "id" => "15",
            "title" => "Tranquility of Japanese Zen Gardens",
            "description" => "Finding peace and serenity amidst meticulously designed Japanese gardens.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-15"
        ],
        [
            "id" => "16",
            "title" => "Exploring the Scottish Highlands",
            "description" => "Venturing through rugged landscapes and historic castles of Scotland.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-16"
        ],
        [
            "id" => "17",
            "title" => "The Elegance of Ballet Performances",
            "description" => "Witnessing graceful ballet performances and the beauty of classical dance.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-17"
        ],
        [
            "id" => "18",
            "title" => "Sailing Across the Mediterranean",
            "description" => "Embarking on a journey across the azure waters of the Mediterranean Sea.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-18"
        ],
        [
            "id" => "19",
            "title" => "Ancient Ruins of Petra",
            "description" => "Exploring the rose-red city carved into the cliffs of southern Jordan.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-19"

        ],
        [
            "id" => "20",
            "title" => "The Beauty of Icelandic Landscapes",
            "description" => "Witnessing stunning waterfalls, glaciers, and volcanic landscapes of Iceland.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-20"
        ],
        [
            "id" => "21",
            "title" => "The Spirit of Carnival in Rio de Janeiro",
            "description" => "Immersing in the vibrant colors, music, and dance of Rio's annual Carnival.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-21"
        ],
        [
            "id" => "22",
            "title" => "Trekking to Everest Base Camp",
            "description" => "Embarking on a challenging trek to the base camp of the world's highest mountain.",
            "image_path" => "image1.jpg",
            "date_updated" => "2022-01-22"
        ],
        [
            "id" => "23",
            "title" => "The Mystique of Stonehenge",
            "description" => "Contemplating the ancient stone circle and its enigmatic purpose.",
            "image_path" => "image2.jpg",
            "date_updated" => "2022-01-23"
        ],
        [
            "id" => "24",
            "title" => "Exploring the Colosseum in Rome",
            "description" => "Stepping back in time to witness the grandeur of ancient Roman gladiatorial games.",
            "image_path" => "image3.jpg",
            "date_updated" => "2022-01-24"
        ],
    ];

    public function show(): Response
    {
        return Inertia::Render('berita/Berita', ['beritaDatas' => $this->beritaDatas]);
    }

    public function showDetail(string $id): Response
    {
        $data = [];

        foreach($this->beritaDatas as $beritaData){
            if ($beritaData['id'] ==  $id) {
                $data = $beritaData;
                break; 
            }
        }
        $data['image_path'] = asset('images/' . $data['image_path']);
        return Inertia::Render('berita/BeritaDetail', ['data' => $data]);
    }
}
