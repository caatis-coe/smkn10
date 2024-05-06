<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Inertia\Response;

class DaftarGuruController extends Controller
{
    private $daftarGuru = [
        ["Fasya Raihan Maulana", "196602141990032003", "Pembina Tk. I Gol. IV/b", "Kepala Sekolah", "Manajemen Pendidikan"],
        ["John Doe", "199001011234567890", "Pengajar", "Guru", "Pendidikan S1"],
        ["Jane Smith", "198512061234567891", "Pembina Tk. II Gol. III/c", "Wakil Kepala Sekolah", "Pendidikan S2"],
        ["Michael Johnson", "197704302345678912", "Pembina Gol. IV/d", "Guru", "Pendidikan D3"],
        ["Emily Brown", "198906151234567893", "Penata Gol. III/d", "Guru", "Pendidikan S1"],
        ["David Wilson", "197810251234567894", "Penata Tk. I Gol. IV/c", "Guru", "Pendidikan D4"],
        ["Sarah Lee", "198312101234567895", "Pengatur Gol. IV/e", "Guru", "Pendidikan S2"],
        ["Christopher Garcia", "198208081234567896", "Penyelia Gol. III/a", "Guru", "Pendidikan S1"],
        ["Jessica Martinez", "198912281234567897", "Pengawas Gol. III/b", "Guru", "Pendidikan S2"],
        ["Daniel Rodriguez", "198011302345678918", "Pembina Tk. I Gol. IV/a", "Guru", "Pendidikan D3"],
    ];

    public function show(): Response {
        return Inertia::render('profil/DaftarGuru', ['daftarGuru' => $this->daftarGuru]);
    }
}
