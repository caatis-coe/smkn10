<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use App\Models\Blog;
use App\Models\Image;
use App\Models\KonsentrasiKeahlian;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{

    public function __construct(){
        

        Inertia::share('keahlianDatas', KonsentrasiKeahlian::all()->map(function ($keahlian) {
            return [
                'title' => $keahlian->title,
                'endpoint' => "/{$keahlian->slug}",
            ];
        }));
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

        $home_analytics = json_decode(File::get(public_path('storage/doc/home_analytics.json')), true);
        $beritaDatas = Blog::getRecentBlogs();
        $homeSwipers = Image::getImagesByUsage('home_swiper');
        $headmaster = json_decode(File::get(public_path('storage/doc/headmaster.json')), true);
        $url_video_profile = trim(File::get(public_path('storage/doc/url_video_profile.txt')));

        return Inertia::Render('Home', [
            'blogDatas' => $beritaDatas,
            'headmaster' => $headmaster,
            'swiperImage' => $homeSwipers,
            'urlVideoProfile' => $url_video_profile,
            'homeAnalytics' => $home_analytics['data'],
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
