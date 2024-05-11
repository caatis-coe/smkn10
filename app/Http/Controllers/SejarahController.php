<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SejarahController extends Controller
{

    public $sejarahDatas = [
        [
            "id" => "1",
            "description" => "Sekolah seni kami berdiri di awal tahun 1890, menjadi salah satu lembaga pendidikan seni tertua dan terkemuka di negara ini. Pada masa itu, sekolah kami telah membuka pintu bagi para seniman muda yang berbakat untuk mengeksplorasi dunia seni dengan lebih mendalam. Melalui program-program inovatif dan fasilitas-fasilitas yang lengkap, kami menginspirasi generasi demi generasi untuk mengejar impian mereka dalam menciptakan karya seni yang berani dan berpengaruh.",
            "image_path" => 'image1.jpg',
            "year" => "1890",
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
        return Inertia::Render('profil/Sejarah', ['data' => $this->sejarahDatas] );
    }
}
