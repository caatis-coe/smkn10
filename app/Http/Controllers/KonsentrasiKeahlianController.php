<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KonsentrasiKeahlianController extends Controller
{
    public $keahlianDatas = [
        [
            "title" => "Seni Karawitan",
            "endpoint" => "keahlian-seni-karawitan",
            "description" => "Seni Karawitan adalah sebuah seni tradisional Jawa yang berfokus pada penggunaan alat musik tradisional seperti gamelan dan kendang. Karawitan memiliki sejarah panjang dan menjadi bagian penting dari budaya Jawa, digunakan dalam berbagai upacara adat, pertunjukan seni, dan acara keagamaan. Para pemain karawitan tidak hanya menguasai teknik bermain alat musik, tetapi juga memahami struktur musik Jawa, ragam hias, dan improvisasi. Seni Karawitan merupakan warisan budaya yang kaya akan keindahan melodi, ritme, dan harmoni, yang terus dilestarikan dan dikembangkan oleh para seniman dan penggemarnya.",
            "image_path" => "seni_karawitan.jpg",
        ],
        [
            "title" => "Seni Tari",
            "endpoint" => "keahlian-seni-tari",
            "description" => "Seni Tari merupakan ekspresi budaya yang menggabungkan gerakan tubuh, musik, dan cerita untuk menyampaikan pesan atau emosi. Di setiap budaya, seni tari memiliki ciri khasnya sendiri yang mencerminkan sejarah, tradisi, dan nilai-nilai masyarakatnya. Tarian dapat bercerita tentang mitologi, sejarah, kehidupan sehari-hari, atau perasaan manusia. Selain sebagai hiburan, seni tari juga memiliki nilai artistik dan edukatif yang tinggi, memperkaya kehidupan budaya dan merajut hubungan antarmanusia melalui bahasa universal gerakan. Para penari tidak hanya membutuhkan keterampilan fisik dan teknis yang baik, tetapi juga kepekaan terhadap ekspresi, ritme, dan komunikasi nonverbal.",
            "image_path" => "seni_tari.jpg",
        ],
        [
            "title" => "Seni Musik",
            "endpoint" => "keahlian-seni-musik",
            "description" => "Seni Musik adalah bentuk seni yang menggunakan suara sebagai media ekspresi artistik. Musik memiliki beragam genre, gaya, dan teknik, dan menjadi bagian penting dari budaya manusia sejak zaman prasejarah. Musik tidak hanya menyediakan hiburan, tetapi juga memiliki kekuatan untuk menyatukan orang, menginspirasi perubahan sosial, dan menyampaikan pesan-pesan emosional dan spiritual. Dalam setiap budaya, seni musik memiliki ciri khasnya sendiri yang mencerminkan keunikan dan keindahan tradisi dan nilai-nilai masyarakatnya. Para musisi dan komposer mengembangkan keterampilan teknis dan artistik mereka untuk menciptakan karya-karya yang menginspirasi dan menggerakkan hati pendengar.",
            "image_path" => "seni_musik.jpg",
        ],
        [
            "title" => "Seni Teater",
            "endpoint" => "keahlian-seni-teater",
            "description" => "Seni Teater adalah bentuk seni pertunjukan yang menggunakan cerita, dialog, gerakan, dan visual untuk menyajikan pengalaman kehidupan yang diperankan oleh aktor di depan audiens. Teater memiliki sejarah yang panjang dan beragam, dari drama klasik Yunani kuno hingga teater eksperimental modern. Dalam setiap produksi teater, para aktor, sutradara, dan kru artistik bekerja sama untuk menciptakan suasana, karakter, dan narasi yang menghibur, menginspirasi, dan menggerakkan pemirsa. Melalui pertunjukan teater, manusia dapat menjelajahi berbagai tema, konflik, dan emosi yang menggambarkan kemanusiaan secara universal.",
            "image_path" => "seni_teater.jpg",
        ],
        [
            "title" => "Produksi dan Siaran Program Televisi",
            "endpoint" => "keahlian-produksi-dan-siaran-program-televisi",
            "description" => "Produksi dan Siaran Program Televisi adalah bidang yang berkaitan dengan pembuatan, pengeditan, dan penyiaran program-program televisi, mulai dari acara berita dan dokumenter hingga drama, komedi, dan reality show. Industri televisi memiliki peran penting dalam menyediakan hiburan, informasi, dan edukasi kepada pemirsa di seluruh dunia. Para profesional di bidang ini memiliki keterampilan teknis dan kreatif yang dibutuhkan untuk menghasilkan konten-konten yang menarik, berkualitas, dan relevan dengan pasar dan audiens target. Dalam era digital saat ini, produksi dan penyiaran program televisi terus berkembang dan beradaptasi dengan perubahan teknologi dan tren konsumen.",
            "image_path" => "produksi_dan_siaran_program_televisi.jpg",
        ],
        [
            "title" => "Produksi Film",
            "endpoint" => "keahlian-produksi-film",
            "description" => "Produksi Film adalah proses pembuatan film mulai dari perencanaan, pengambilan gambar, penyuntingan, hingga distribusi ke bioskop atau platform streaming. Film merupakan medium seni yang kuat dan serbaguna yang mampu menyampaikan cerita, emosi, dan pesan-pesan universal kepada penonton di seluruh dunia. Industri film melibatkan berbagai profesional seperti sutradara, produser, penulis skenario, sinematografer, dan pengarah seni yang bekerja sama untuk menciptakan karya-karya yang menginspirasi dan menghibur. Produksi film membutuhkan kreativitas, kerja tim, dan keterampilan teknis yang tinggi untuk menghasilkan film-film berkualitas yang dapat meraih penghargaan dan meraih hati penonton.",
            "image_path" => "produksi_film.jpg",
        ],
    ];
    
    public function show(String $titleKeahlian) : Response {

        $keahlian = null;
    
        foreach($this->keahlianDatas as $keahlianData){
            if ($keahlianData['endpoint'] == "keahlian-" . $titleKeahlian) {
                $keahlian = $keahlianData;
                break; 
            }
        }
    
        return Inertia::render('konsentrasi_keahlian/KonsentrasiKeahlian', [
            'datas' => $keahlian
        ]);
    }    
}
