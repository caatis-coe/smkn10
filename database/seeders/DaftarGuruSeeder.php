<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DaftarGuruSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
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

        foreach ($data as $item) {
            DB::table('daftar_gurus')->insert([
                'name' => $item[0],
                'nip' => $item[1],
                'pangkat' => $item[2],
                'jabatan' => $item[3],
                'pendidikan' => $item[4],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
