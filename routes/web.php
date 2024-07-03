<?php

use App\Http\Controllers\admin\AdminBeritaController;
use App\Http\Controllers\admin\AdminPembelajaranController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DaftarGuruController;
use App\Http\Controllers\FasilitasController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InfoPpdbController;
use App\Http\Controllers\KegiatanMahasiswaController;
use App\Http\Controllers\KonsentrasiKeahlianController;
use App\Http\Controllers\PrestasiSekolahController;
use App\Http\Controllers\SejarahController;
use App\Http\Controllers\TeachingFactoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'show']);

Route::get('/contact-us', [ContactController::class, 'show']);

Route::post('/send-email', [ContactController::class, 'sendEmail'])->name('send-email');

Route::prefix('/berita')->group(function () {
    Route::get('', [BeritaController::class, 'show']);

    Route::get('{id}', [BeritaController::class, 'showDetail']);
});

Route::get('/daftar-guru', [DaftarGuruController::class, 'show']);

Route::get('/daftar-karyawan', function () {
    return Inertia::render('profil/DaftarKaryawan');
});

Route::get('/sejarah', [SejarahController::class, 'show']);

Route::get('/struktur-organisasi', function () {
    return Inertia::render('profil/StrukturOrganisasi');
});

Route::get('/visi-misi', function () {
    return Inertia::render('profil/VisiMisi');
});

Route::get('/nilai-budaya', function () {
    return Inertia::render('profil/NilaiBudaya');
});

Route::get('/nilai-budaya', function () {
    return Inertia::render('profil/NilaiBudaya');
});

Route::get('/keterserapan-lulusan', function () {
    return Inertia::render('lulusan/KeterserapanLulusan');
});

Route::get('/industri-mitra', function () {
    return Inertia::render('lulusan/IndustriMitra');
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

// DASHBOARD ROUTES

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))
        ->name('dashboard');

    Route::resource('berita-db', AdminBeritaController::class);
    Route::resource('pembelajaran-db', AdminPembelajaranController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
