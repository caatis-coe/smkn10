<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JurusanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
});

Route::prefix('/blog')->group(function () {
    Route::get('', function () {
        return Inertia::render('blog/Blog');
    });

    Route::get(':{id}', function ($id) {
        return Inertia::render('blog/BlogDetail', ['id' => $id]);
    });
});

Route::get('/daftar-guru', function () {
    return Inertia::render('profil/DaftarGuru');
});

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

Route::get('/fasilitas', function () {
    return Inertia::render('pembelajaran/Fasilitas');
});

Route::get('/kegiatan-mahasiswa', function () {
    return Inertia::render('pembelajaran/KegiatanMahasiswa');
});

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/jurusan-{titleJurusan}', [JurusanController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
