<?php

namespace App\Http\Controllers\Admin;
use App\Http\Requests\UpdateHeadmasterRequest;
use App\Http\Requests\UpdateHomeAnalyticsRequest;
use App\Http\Requests\UpdateURLVideoProfileRequest;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use App\Http\Requests\StoreImageRequest;
use App\Http\Requests\UpdateImageRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminHomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $type = $request->query('type');
        $datas = [];

        if($type == 0) {
            $datas = ImageResource::collection(Image::where('used_as', 'home_swiper')->paginate(5));
        } else if ($type == 1) {
            $datas = json_decode(File::get(public_path('storage/doc/home_analytics.json')), true)['data'];
        } else if ($type == 2) {
            $datas = trim(File::get(public_path('storage/doc/url_video_profile.txt')));
        } else if ($type == 3) {
            $datas = json_decode(File::get(public_path('storage/doc/headmaster.json')), true);
        }

        return Inertia::render('Admin/Home/Index', [
            'session' => $type ?? 0,
            'datas' => $datas,
            'success' => session('success')
        ]);
    }

    public function editDocHomeAnalytics(UpdateHomeAnalyticsRequest $request)
    {
        $data = $request->validated();
        $data["data"] = $data["content"];
        unset($data["content"]);

        File::put(public_path('storage/doc/home_analytics.json'), json_encode($data,JSON_PRETTY_PRINT));

        return Redirect::route('home-db.index',['type'=>1])->with('success', 'Home analytics data has been updated');
    }

    public function editDocHeadmaster(UpdateHeadmasterRequest $request)
    {
        $data =$request->validated();
        $image = $data['file'] ?? null;
        if ($image) {
            if ($data['image_path']) {
                Storage::disk('public')->delete($data['image_path']);
            }
            $data['image_path'] = $image->store('images/headmaster', 'public');
        }
        unset($data['file']);
        File::put(public_path('storage/doc/headmaster.json'),  json_encode($data,JSON_PRETTY_PRINT));
        
        return Redirect::route('home-db.index',['type'=>3])->with('success', 'Heamaster data has been created');
    }

    public function editDocURLVideoProfile(UpdateURLVideoProfileRequest $request)
    {
        $data = $request->validated();

        File::put(public_path('storage/doc/url_video_profile.txt'), $data['url']);

        return Redirect::route('home-db.index',['type'=>2])->with('success', 'Url video profile data has been updated');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreImageRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile  */
        $image = $data['file'] ?? null;
        if ($image) {
            $data['image_path'] = $image->store('images/homeSwiper', 'public');
        }
        $data['used_as'] = "home_swiper";
        Image::create($data);
        
        return Redirect::route('home-db.index')->with('success', 'Home swiper image data has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $home_db)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $home_db)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateImageRequest $request, Image $home_db)
    {
        $data = $request->validated();
        $image = $data['file'] ?? null;
        if ($image) {
            if($home_db->image_path) {
                Storage::disk('public')->delete($home_db->image_path);
            }
            $data['image_path'] = $image->store('images/homeSwiper', 'public');
        } else {
            unset($data['image_path']);
        }
        $home_db->update($data);
        return Redirect::route('home-db.index')->with('success', "Home swiper image with id: \"$home_db->id\" has been updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $home_db)
    {
        $id = $home_db->id;
        if($home_db->image_path) {
            Storage::disk('public')->delete($home_db->image_path);
        }
        $home_db->delete();
        return Redirect::route('home-db.index')->with('success', "Home swiper image with id: \"$id\" has been deleted");
    }
}
