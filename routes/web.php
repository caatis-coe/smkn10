<?php

use App\Http\Controllers\admin\AdminBeritaController;
use App\Http\Controllers\admin\AdminBuyerController;
use App\Http\Controllers\admin\AdminDaftarTenagaPendidikanController;
use App\Http\Controllers\admin\AdminHomeController;
use App\Http\Controllers\admin\AdminKonsentrasiKeahlianController;
use App\Http\Controllers\admin\AdminPembelajaranController;
use App\Http\Controllers\admin\AdminPrestasiGuruController;
use App\Http\Controllers\admin\AdminPrestasiSekolahController;
use App\Http\Controllers\admin\AdminPrestasiSiswaController;
use App\Http\Controllers\admin\AdminProfilController;
use App\Http\Controllers\admin\AdminTeachingFactoryProductController;
use App\Http\Controllers\admin\AdminDaftarGuruController;
use App\Http\Controllers\admin\AdminLulusanController;
use App\Http\Controllers\admin\AdminSejarahController;
use App\Http\Controllers\admin\AdminStrukturOrganisasiController;
use App\Http\Controllers\admin\AdminVisiMisiController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DaftarGuruController;
use App\Http\Controllers\DaftarTenagaPendidikanController;
use App\Http\Controllers\FasilitasController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InfoPpdbController;
use App\Http\Controllers\KegiatanMahasiswaController;
use App\Http\Controllers\KonsentrasiKeahlianController;
use App\Http\Controllers\PrestasiSekolahController;
use App\Http\Controllers\SejarahController;
use App\Http\Controllers\TeachingFactoryController;
use App\Http\Controllers\VisiMisiController;
use App\Http\Middleware\ShareKeahlianData;
use App\Models\Image;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware([ShareKeahlianData::class])->group(function () {
    Route::get('/', [HomeController::class, 'show']);

    Route::get('/contact-us', [ContactController::class, 'show']);

    Route::post('/send-email', [ContactController::class, 'sendEmail'])->name('send-email');

    Route::prefix('/berita')->group(function () {
        Route::get('', [BeritaController::class, 'show']);

        Route::get('{id}', [BeritaController::class, 'showDetail']);
    });

    Route::get('/daftar-guru', [DaftarGuruController::class, 'show']);

    Route::get('/daftar-tenaga-pendidikan', [DaftarTenagaPendidikanController::class, 'show']);

    Route::get('/sejarah', [SejarahController::class, 'show']);

    Route::get('/struktur-organisasi', function () {
        return Inertia::render('profil/StrukturOrganisasi', [
            "image" => Image::where('used_as', 'struktur_organisasi')->first()
        ]);
    });

    Route::get('/visi-misi', [VisiMisiController::class, 'show']);

    Route::get('/nilai-budaya', function () {
        return Inertia::render('profil/NilaiBudaya');
    });

    Route::get('/nilai-budaya', function () {
        return Inertia::render('profil/NilaiBudaya');
    });

    Route::get('/keterserapan-lulusan', function () {
        return Inertia::render('lulusan/KeterserapanLulusan', [
            'datas' => Image::where('used_as', 'keterserapan_lulusan')->get()
        ]);
    });

    Route::get('/industri-mitra', function () {
        return Inertia::render('lulusan/IndustriMitra', [
            'datas' => Image::where('used_as', 'industri_mitra')->get()
        ]);
    });

    Route::get('/fasilitas', [FasilitasController::class, 'show']);

    Route::get('/kegiatan-mahasiswa', [KegiatanMahasiswaController::class, 'show']);

    Route::get('/kurikulum', function () {
        return Inertia::render('pembelajaran/Kurikulum');
    });

    Route::get('/prestasi-guru', function () {
        return Inertia::render('prestasi/PrestasiGuru');
    });

    Route::get('/prestasi-siswa', function () {
        return Inertia::render('prestasi/PrestasiSiswa');
    });

    Route::get('/prestasi-sekolah', [PrestasiSekolahController::class, 'show']);

    Route::get('/error404', function () {
        return Inertia::render('berita/Test');
    });

    Route::get('/keahlian-{titleKeahlian}', [KonsentrasiKeahlianController::class, 'show']);

    Route::get('/info-ppdb', [InfoPpdbController::class, 'show']);

    Route::get('/teaching-factory', [TeachingFactoryController::class, 'show']);

    Route::post('/send-data-buyer', [TeachingFactoryController::class, 'sendDataBuyer']);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn () =>  Redirect::route('home-db.index'))
        ->name('dashboard');

    Route::resource('home-db', AdminHomeController::class);
    Route::resource('lulusan-db', AdminLulusanController::class);
    Route::resource('sejarah-db', AdminSejarahController::class);
    Route::resource('struktur-organisasi-db',  AdminStrukturOrganisasiController::class);
    Route::resource('visi-misi-db', AdminVisiMisiController::class);
    Route::resource('daftar-guru-db',  AdminDaftarGuruController::class);
    Route::resource('daftar-tenaga-pendidikan-db', AdminDaftarTenagaPendidikanController::class);
    Route::resource('profil-db', AdminProfilController::class);
    Route::resource('buyer-db', AdminBuyerController::class);
    Route::resource('berita-db', AdminBeritaController::class);
    Route::resource('pembelajaran-db', AdminPembelajaranController::class);
    Route::resource('konsentrasi-keahlian-db', AdminKonsentrasiKeahlianController::class);
    Route::resource('teaching-factory-product-db', AdminTeachingFactoryProductController::class);
    Route::resource('prestasi-sekolah-db', AdminPrestasiSekolahController::class);
    Route::resource('prestasi-siswa-db', AdminPrestasiSiswaController::class);
    Route::resource('prestasi-guru-db', AdminPrestasiGuruController::class);

    //Additional route to edit noSQL database
    Route::post('home-db/edit-doc-home-analytics', [AdminHomeController::class, 'editDocHomeAnalytics'])->name('home-db.editDocHomeAnalytics');
    Route::post('home-db/edit-doc-headmaster', [AdminHomeController::class, 'editDocHeadmaster'])->name('home-db.editDocHeadmaster');
    Route::post('home-db/edit-doc-url-video-profile', [AdminHomeController::class, 'editDocURLVideoProfile'])->name('home-db.editDocURLVideoProfile');
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/preview-email', function () {
        $data = [
            'name' => 'FASYA RAIHAN MAM',
            'email' => 'johndoe@example.com',
            'message' => 'This is a sample message.'
        ];
    
        return view('emails.contact', compact('data'));
    });
    
});

require __DIR__ . '/auth.php';
