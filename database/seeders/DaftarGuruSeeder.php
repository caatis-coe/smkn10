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
            ["Drs. H. SLAMET HERYADI, M.Pd.", "196409121993031005"],
            ["Dra. ENDEN WARLIAH, M.Pd.", "196407201990032004"],
            ["Dra. WATI SUSILWATI", "196410201989032003"],
            ["Dra. HJ. ENUNG SUPARYATI", "196504241989032003"],
            ["Drs. SUHERMAN", "196811031997021002"],
            ["NANDANG SUTARDI, M.Sn.", "196810131996011001"],
            ["YEYEP YUSUP, S.Sn.", "196906271999121006"],
            ["YAHYA WAHYUDIN, S.Sn.", "196902151998011006"],
            ["ELIS ROSLIANI, M.Sn.", "196710291991032004"],
            ["ELLY LAELASARI, S.Pd.", "196702041994122002"],
            ["NOVI HARYANI, S.Pd.", "197111091998022005"],
            ["GUNARA, S.Pd.", "196905291992011001"],
            ["TANTAN SUGANDI, S.Pd.I .", "196703091995011001"],
            ["Dr. POLA MARTIANA, Dra, M.Sn.", "196607031993032004"],
            ["TUTIN NURDIATIN, S.Pd.", "197411041999122003"],
            ["SITI AISYAH, S.Pd.", "196911281999032003"],
            ["NANI MARYANI, S.Pd.", "197401052000122002"],
            ["CHERI INDRAYANA, S.Pd.", "197905251001211001"],
            ["RAMDAN JUNIARSYAH, S.PdI, M. Ag.", "197501052000121002"],
            ["EDY HARTONO, S.Sn.", "196902121993021003"],
            ["ANNA MARIANA, S.Si, M.Pd.", "198003092014081002"],
            ["A. SOFYAN SAEFDIN, S.Pd.", "197005051995031001"],
            ["AMI RAHMI, S.Pd, M.Hum.", "198308302001012005"],
            ["RIDWAN, S.Pd., M.Si.", "196911291997021002"],
            ["QORI QONITA, S.Pd., M.T.", "198702222021041002"],
            ["ATI RISNAWATI, S.Pd.", "196702021992022002"],
            ["AWIT GENDING ADRIANI,S.Pd.", "194901091990021005"],
            ["JHEINTA AYU PRATAMI,S.Sn.", "199501102022122001"],
            ["ALFANDA ABYOR ARDANA,S.Mus.", "199203131201812003"],
            ["NENI RUHAENI , S.Pd.", "196410181991032004"],
            ["TTYAS NUR KARTIKA, S.Pd., M.Pd.", "198405251221112003"],
            ["DEDE RISNANDAR, S.Sn.", "198312051991032003"],
            ["WINDA PRADINI, S.Pd.", "199303132022211012"],
            ["AIDASARI FITRIANI, M.Sn.", "198808192022211012"],
            ["ERRY IRFAN, S.Pd.", "198901162022211077"],
            ["STEFANUS SETIYO ANGGORO,S.Sos.", "198907182022211015"],
            ["SHOLEHATUN,M.Kom.", "197912112022211004"],
            ["DIMAS KHAERUL UMAM, S.Pd.", "199603102022211002"],
            ["YULI DWI PURNAMA SARI, S.Pd.", "199607102022211003"],
            ["KRESTIN AMBAR PRAMESTI, S.Pd.", "199512302022211003"],
            ["YAYAT SUPRIYATNA, S.Pd.", "197801152022211001"],
            ["RISKA FITRIYANI, S.Pd.", "199502252022211004"],
            ["ALEK PERMANA, S.Sn.", "198804302023211006"],
            ["MAMAN SUDIRMAN, S.Sn.", "196707051995031003"],
            ["SUCIL APRILIANI, M.Sn.", "198503212023211003"],
            ["SRI DIAWATI, S.Pd.", "197207182023211003"],
            ["NANA RUKAMANA, S.Pd.", "199101132023211001"],
            ["SYARAGITA RIYANZANI, S.Pd.", "199512032023211006"],
            ["HARDIONO, S.Ag.", "197000408202311002"],
            ["NURILLAH K HAERANI, S.Pd.", "59567661661320345"],
            ["ASEP SUPRIADI, S.S.", "59567661661320421"],
            ["AKTRI UTAMI PUTRI, S.Pd.", "0244766676230203"],
            ["HERLINA, S.Ag.", "-"],
            ["MOHAMMAD ILMAN FAUZI S.Sn., S.Hum.", "-"],
            ["ANGGI MAULANA, S.Sn.", "-"],
            ["SRI MULYANI B, S.Pd.", "4038747650300003"],
            ["ADE SURYANI, S.Sn.", "-"],
            ["ATEP TAUFIK, S.I.Kom.", "-"],
            ["SONY RIZA W., S.Sn.", "-"],
            ["IMAN FATTURROHMAN, S.Pd.", "-"],
            ["ANDRIANTO, S.Sn.", "-"],
            ["FITRIA KURNIASARI, A.Md.Kes.", "-"],
            ["SITI AMALIA NURJANAH GANDI SAPUTRAS, S.Psi.", "-"],
            ["ZAHRA NUR ROBBANITYAH, S.Pd.", "-"],
            ["VIRGINA JUNIAR PUTRI, S.Sn.", "-"],
            ["CAHYA SUMIRAT, S.Sn.", "-"],
            ["AYSHA FARRELL, S.Sn.", "-"],
            ["DIKI SAHRIL SIDIK, S.Pd.", "-"],
            ["SOPIAN GUNAWAN, S.Sn.", "-"],
        ];

        foreach ($data as $item) {
            DB::table('daftar_gurus')->insert([
                'name' => $item[0],
                'nip_nuptk' => $item[1],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
