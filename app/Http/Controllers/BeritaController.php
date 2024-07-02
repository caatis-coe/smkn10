<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use Inertia\Response;

class BeritaController extends Controller
{
    private $apiUrl = 'https://api-berita-indonesia.vercel.app/sindonews/edukasi/';

    private $beritaDatas = [];

    public function __construct(){
        $this->beritaDatas = Blog::all();
    }

    public function show(): Response
    {
        // $client = new Client();
        // $response = $client->get($this->apiUrl);
        // $beritaDatas = json_decode($response->getBody()->getContents(), true)['data']['posts'];

        // $formattedBeritaDatas = array_map(function ($berita, $index) {
        //     return [
        //         'id' => $index + 1, // Auto-increment ID
        //         'title' => $berita['title'],
        //         'description' => $berita['description'],
        //         'image_path' => $berita['thumbnail'],
        //         'date_updated' => $berita['pubDate'],
        //     ];
        // }, $beritaDatas, array_keys($beritaDatas));

        

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

        // $data['image_path'] = asset('images/' . $data['image_path']);

        return Inertia::Render('berita/BeritaDetail', ['data' => $data]);
    }
}
