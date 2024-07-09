<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SejarahController extends Controller
{

    public $sejarahDatas = [
        [
            "id" => "1",
            "description" => " 
            <p>Sekolah ini didirikan pada tanggal 01 Oktober 1958 dengan nama Konservatori Karawitan Indonesia yang disingkat menjadi KOKAR. Pendiriannya dikukuhkan dengan Surat Keputusan Menteri Pendidikan, Pengajaran, dan Kebudayaan (PPPK) No: 90527 tanggal 12 September 1958. Pengelolaannya di bawah naungan Direktorat Pendidikan Kesenian. Nama KOKAR mulai 01 Januari 1977 secara resmi diganti dengan nama SMKI yang merupakan singkatan dari Sekolah Menengah Karawitan Indonesia sesuai dengan Surat Keputusan Menteri Pendidikan dan Kebudayaan RI No. 0292/O/76 tanggal 09 Desember 1976.</p>
            <p>Kemudian sebagai tindak lanjut dari keputusan Menteri Pendidikan dan Kebudayaan nomor 080/U/1993 dan dimulainya berlaku penggunaan kurikulum 1994 maka SMKI mulai tahun pelajaran 1996/1997 berubah namanya seperti sekarang ini, yaitu Sekolah Menengah Kejuruan Negeri (SMKN) 10 Bandung. Baik pada saat bernama KOKAR, SMKI ataupun SMKN 10 Bandung, status sekolah adalah Negeri.</p>
            
            <h2>Dasar Titimangsa Berdirinya SMK Negeri 10 Bandung</h2>
            <p>Dasar titimangsa berdirinya SMK Negeri 10 Bandung adalah pada saat terjadinya pemindahan jurusan Sunda dari KOKAR Surakarta ke KOKAR Bandung pada tanggal 01 Oktober 1958. Pendirian KOKAR Bandung didampingi oleh suatu Dewan Penyantun yang ditetapkan dengan Surat Keputusan Menteri PPPK No. 69/1962 tanggal 16 Juli 1962.</p>
            
            <h3>Susunan Dewan Penyantun</h3>
            <ul>
                <li>RTA. Sunarya: Ketua</li>
                <li>Daeng Sutigna: Sekretaris</li>
                <li>RI. Adiwidjaya: Anggota</li>
                <li>RH. Moch Koerdi: Anggota</li>
                <li>RH. Ijos Wiraatmadja: Anggota</li>
                <li>RA. Darja Mandalakusumah: Anggota</li>
                <li>Prof. Soemardja: Anggota</li>
            </ul>
            
            <h2>Pimpinan Sekolah</h2>
            <p>Selama kurun waktu 62 tahun, tercatat beberapa nama yang menjadi pimpinan (Direktur/Kepala Sekolah) di lembaga ini, yaitu:</p>
            <ol>
                <li>R. Machyar Angga Koesoemadinata (1958-1960)</li>
                <li>Daeng Sutigna (1960-1964)</li>
                <li>Tatang Sastrahadiprawira (1964-1965)</li>
                <li>H. Koko Koswara (1965-1972)</li>
                <li>Drs. H. Yaya Sukarya (1972-1996)</li>
                <li>Drs. Supriadi (April 1996 - Oktober 1996)</li>
                <li>Risman Suratman, S. Sn (Oktober 1996 - 2000)</li>
                <li>Dra. Epi Sufiah (2000-2002)</li>
                <li>Drs. Nanang Yusuf Nurdin (2002-2006)</li>
                <li>Dra. Wiwi Siti Zawiyah (2008-2011)</li>
                <li>Drs. Ontahari (2012-2015)</li>
                <li>Hj. Yani Heryani, M. M. Pd (April 2015 - April 2018)</li>
                <li>Bambang Satriadi, M. Sn (April 2018 - 2019)</li>
                <li>Drs. H. Slamet Heryadi, M.Pd (Desember 2019 - sekarang)</li>
            </ol>
            
            <h2>Kurikulum dan Program Studi</h2>
            <p>Pada saat masih merupakan cabang Kokar Surakarta, kurikulum yang digunakan adalah kurikulum yang ditetapkan dalam SK Menteri PPPK tanggal 21 Desember 1956, No. 99883/S dengan penekanan pada pendalaman Karawitan Sunda dan Bahasa Sunda. Tahun 1964/1965 digunakan kurikulum yang telah diperbaiki yaitu yang menekankan perbedaan seni karawitan masing-masing daerah, menyeragamkan ilmu pengetahuan umum serta menetapkan mata pelajaran olah raga dan agama sebagai mata pelajaran fakultatif. Kurikulum ini berisi 29 mata pelajaran yang terbagi atas kelompok pokok, penting, pelengkap, dan fakultatif. Dengan kurikulum ini, lama pendidikan di KOKAR adalah 3 (tiga) tahun dan para siswa dipersiapkan untuk menjadi guru karawitan.</p>
            <p>Dalam proses penyempurnaan pendidikan pada KOKAR maka lahirlah kurikulum dengan SK Menteri Pendidikan dan Kebudayaan No: 005/1974 yang lama pendidikannya 4 (empat) tahun di mana di dalamnya terdapat 2 (dua) jalur studi, yaitu:
                <ul>
                    <li>Jalur Studi Vokasional yang mempersiapkan seniman-seniman untuk berkiprah di tengah-tengah masyarakat.</li>
                    <li>Jalur Studi Akademis yang mempersiapkan calon-calon mahasiswa di Perguruan Tinggi Kesenian.</li>
                </ul>
            </p>
            <p>Kedua jalur ini masing-masing dimulai pada semester ketujuh. Menyertai perubahan nama KOKAR menjadi SMKI maka ditetapkanlah kurikulum 1977 sesuai dengan SK Menteri PDK No: 0294/U/1976 tanggal 09 Desember 1976.</p>
            <p>Selanjutnya dengan mulai diberlakukannya Kurikulum 1994 sesuai dengan Kepmen Dikbud Nomor: 080/U/1993 tanggal 27 Februari 1993 disertai pula penggantian nama dari SMKI menjadi SMK Negeri 10 Kelompok Seni dan Kerajinan jurusan Seni Pertunjukan Musik/Karawitan, Tari, dan Teater/Padalangan. Sistem semester berubah menjadi sistem caturwulan dan lama pendidikan menjadi 3 (tiga) tahun.</p>
            <p>Kurikulum 1994 mempunyai kekhususan, yaitu:
                <ul>
                    <li>Mengacu kepada upaya menyiapkan siswa untuk menjadi tenaga kerja yang lebih sesuai dengan tuntutan kebutuhan dunia kerja.</li>
                    <li>Memuat kerangka umum program pembelajaran berdasarkan kompetensi standar minimal yang harus dikuasai tamatan.</li>
                    <li>Memberikan peluang kepada guru-guru di SMK untuk mengembangkan pola dan strategi pembelajaran yang inovatif.</li>
                </ul>
            </p>
            <p>Perubahan kurikulum disertai pula pengelompokan sekolah, di mana SMK Negeri 10 Bandung termasuk kelompok: Seni dan Kerajinan dengan jurusan seni pertunjukan dan di dalamnya terdapat 3 (tiga) program studi yaitu seni musik, seni tari, dan seni teater. Di samping itu mulai dilaksanakannya Pendidikan Sistem Ganda (PSG) baik dari mulai penerimaan, pelaksanaan belajar sampai masalah lulusan. Di dalam sekolah ini dibentuk pula lembaga yang sifatnya independen yaitu Unit Produksi serta adanya Majelis Sekolah.</p>
            
            <h2>Lokasi dan Fasilitas</h2>
            <p>Dari permulaan Kokar dibuka sampai dengan tahun 1960 kegiatan persekolahan dilaksanakan pada siang hari mulai pukul 14.00 sampai dengan pukul 18.00. Hal ini disebabkan pada waktu itu kegiatan belajar masih menumpang pada sekolah lain ataupun tempat lain. Sekolah/tempat yang pernah ditumpangi selama itu antara lain; SGB di Jln. H. Samsudin, SKKP di Jln. Kautamaan Istri, Pendopo Kabupaten Bandung di Jln. Dalem Kaum, dan Kantor Inspeksi Daerah kebudayaan (Idakeb) Jawa Barat di Jln. Naripan, Bandung. Mulai tahun 1961 sampai dengan tahun 1987 Kokar mulai menempati bangunan sendiri yang terletak di jalan Buahbatu No. 212 Bandung (sekarang ISBI Bandung). Kegiatan persekolahan dimulai pagi hari meskipun awalnya bangunan-bangunan belum selesai semua. Pada tanggal 08 Juni 1987 sampai sekarang secara resmi SMK Negeri 10 Bandung bersama dengan SMK Negeri 14 Bandung menempati bangunan yang terletak di kompleks Sekolah Menengah Kesenian dan Industri Kerajinan yang dibangun atas bantuan ADB di atas tanah seluas 55.085 m<sup>2</sup>. Kompleks ini terletak di jalan Cijawura Hilir No 339, Kelurahan Cijawura, Kecamatan Buahbatu, Kota Bandung.</p>
            
            <h2>Program Studi</h2>
            <p>Ketika masih Kokar, di sekolah ini belum ada program studi/jurusan. Pada saat itu sebutan jurusan hanya untuk menunjukkan jenis karawitan daerah, misalnya jurusan Bali untuk Kokar Bali, jurusan Jawa untuk Kokar Surakarta, jurusan Sunda untuk Kokar Bandung, jurusan Minang untuk Kokar di Padangpanjang. Adapun jurusan-jurusan baru setelah menjadi SMKI, adalah:
                <ul>
                    <li>Seni Karawitan yang sudah ada sejak Kokar</li>
                    <li>Seni Tari dibuka tahun 1975</li>
                    <li>Seni Padalangan dibuka tahun 1977</li>
                    <li>Grafis Komunikasi (cikal bakal SMSR) dibuka tahun 1987, yang kemudian berdiri sendiri dengan nama SMKN 14 Bandung</li>
                    <li>Seni Teater Daerah pada tahun 1992</li>
                    <li>Seni Musik Diatonis pada tahun 1995</li>
                </ul>
            </p>
            <p>Kemudian seiring dengan berlakunya kurikulum 1994 maka di sekolah ini hanya mengenal satu jurusan yaitu jurusan Seni Pertunjukan dengan 3 (tiga) program studi, yaitu:
                <ul>
                    <li>Seni Musik/Karawitan</li>
                    <li>Seni Tari</li>
                    <li>Seni Teater/ Padalangan</li>
                </ul>
            </p>
            <p>Sebagai salah satu SMK Bidang Seni dan Ekonomi Kreatif yang mengimplementasikan Kurikulum Merdeka, maka program keahlian SMKN 10 Bandung saat ini terdiri dari:</p>
            <h3>A. Program Keahlian Seni Pertunjukan</h3>
            <ul>
                <li>Konsentrasi Keahlian Seni Karawitan</li>
                <li>Konsentrasi Keahlian Seni Tari</li>
                <li>Konsentrasi Keahlian Seni Pedalangan</li>
                <li>Konsentrasi Keahlian Seni Teater</li>
                <li>Konsentrasi Keahlian Seni Musik Populer</li>
            </ul>
            <h3>B. Program Keahlian Seni Broadcasting dan Perfilman</h3>
            <ul>
                <li>Konsentrasi Keahlian Produksi Film</li>
                <li>Konsentrasi Keahlian Produksi Siaran dan Program Televisi</li>
            </ul>

            ",
            "image_path" => 'image1.jpg',
            "year" => "1958",
        ],
        [
            "id" => "2",
            "description" => "Pada tahun 1970-an, sekolah seni kami menjadi pusat kegiatan kreatif yang bersemangat dan dinamis. Dengan berkembangnya teknologi dan tren seni kontemporer, kami terus berupaya menghadirkan pendidikan seni yang relevan dan berorientasi masa depan. Para siswa kami diberikan kesempatan untuk mengeksplorasi berbagai media dan teknik, mulai dari lukisan tradisional hingga seni digital, memperluas cakrawala kreativitas mereka dan mempersiapkan mereka untuk berkembang dalam industri seni yang terus berubah.",
            "image_path" => "image2.jpg",
            "year" => "1970",
        ],
        [
            "id" => "3",
            "description" => "Sebagai sekolah seni yang progresif dan adaptif, kami terus mengembangkan kurikulum dan program-program pendidikan kami untuk memenuhi tuntutan zaman. Pada era modern ini, kami menawarkan beragam peluang untuk siswa-siswa kami untuk mengembangkan keterampilan mereka dalam seni dan desain. Dengan fasilitas-fasilitas terbaru dan dukungan dari para pengajar yang berpengalaman, kami membimbing siswa-siswa kami dalam menjelajahi berbagai genre seni, dari seni rupa hingga teater, dari fotografi hingga animasi. Kami percaya bahwa setiap siswa memiliki potensi kreatif yang unik, dan kami berkomitmen untuk membantu mereka mengekspresikan diri dan mencapai keunggulan seni mereka.",
            "image_path" => "image3.jpg",
            "year" => "2016-now",
        ],
    ];


    public function show(): Response
    {
        return Inertia::Render('profil/Sejarah', ['data' => Storage::disk('public')->get('doc/sejarah.html')] );
    }
}
