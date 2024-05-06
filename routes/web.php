<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DaftarGuruController;
use App\Http\Controllers\FasilitasController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InfoPpdbController;
use App\Http\Controllers\KegiatanMahasiswaController;
use App\Http\Controllers\KonsentrasiKeahlianController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'show']);

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
});

Route::prefix('/berita')->group(function () {
    Route::get('', [BeritaController::class, 'show']);

    Route::get('{id}', [BeritaController::class, 'showDetail']);
});

Route::get('/daftar-guru', [DaftarGuruController::class, 'show']);

Route::get('/daftar-karyawan', function () {
    return Inertia::render('profil/DaftarKaryawan');
});

Route::get('/sejarah', function () {
    return Inertia::render('profil/Sejarah');
});

Route::get('/struktur-organisasi', function () {
    return Inertia::render('profil/StrukturOrganisasi');
});

Route::get('/visi-misi', function () {
    return Inertia::render('profil/VisiMisi');
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

Route::get('/prestasi-sekolah', function () {
    return Inertia::render('prestasi/PrestasiSekolah');
});

Route::get('/error404', function () {
    return Inertia::render('Error404');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/keahlian-{titleKeahlian}', [KonsentrasiKeahlianController::class, 'show']);

Route::get('/info-ppdb', [InfoPpdbController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
