<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Image;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    private $apiUrl = 'https://api-berita-indonesia.vercel.app/sindonews/edukasi/';

    private $beritaDatas = [];
    private $homeSwipers = [];
    private $headmaster = [];

    public function __construct(){
        $this->beritaDatas = Blog::getRecentBlogs();
        $this->homeSwipers = Image::getImagesByUsage('home_swiper');
        $this->headmaster = Image::getSingleImageByUsage('headmaster');
    }

    public function show(): Response
    {
        // $client = new Client();
        // $response = $client->get($this->apiUrl);
        // $beritaDatas = json_decode($response->getBody()->getContents(), true)['data']['posts'];

        // // Limit to 6 items
        // $limitedBeritaDatas = array_slice($beritaDatas, 0, 6);

        // $formattedBeritaDatas = array_map(function ($berita, $index) {
        //     return [
        //         'id' => $index + 1, // Auto-increment ID
        //         'title' => $berita['title'],
        //         'description' => $berita['description'],
        //         'image_path' => $berita['thumbnail'],
        //         'date_updated' => $berita['pubDate'],
        //     ];
        // }, $limitedBeritaDatas, array_keys($limitedBeritaDatas));

        return Inertia::Render('Home', [
            'blogDatas' => $this->beritaDatas,
            'headmaster' => $this->headmaster,
            'swiperImage' => $this->homeSwipers,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
