/* =====================================================
   NIHONGOKU
   Japanese Learning App
===================================================== */


/* =====================================================
   DATA HIRAGANA
===================================================== */

const hiragana = [
    { char: "あ", romaji: "a", example: "あさ — asa" },
    { char: "い", romaji: "i", example: "いえ — ie" },
    { char: "う", romaji: "u", example: "うみ — umi" },
    { char: "え", romaji: "e", example: "えき — eki" },
    { char: "お", romaji: "o", example: "おちゃ — ocha" },

    { char: "か", romaji: "ka", example: "かさ — kasa" },
    { char: "き", romaji: "ki", example: "き — ki" },
    { char: "く", romaji: "ku", example: "くるま — kuruma" },
    { char: "け", romaji: "ke", example: "けさ — kesa" },
    { char: "こ", romaji: "ko", example: "ここ — koko" },

    { char: "さ", romaji: "sa", example: "さかな — sakana" },
    { char: "し", romaji: "shi", example: "しお — shio" },
    { char: "す", romaji: "su", example: "すし — sushi" },
    { char: "せ", romaji: "se", example: "せんせい — sensei" },
    { char: "そ", romaji: "so", example: "そら — sora" },

    { char: "た", romaji: "ta", example: "たまご — tamago" },
    { char: "ち", romaji: "chi", example: "ちず — chizu" },
    { char: "つ", romaji: "tsu", example: "つき — tsuki" },
    { char: "て", romaji: "te", example: "て — te" },
    { char: "と", romaji: "to", example: "とけい — tokei" },

    { char: "な", romaji: "na", example: "なまえ — namae" },
    { char: "に", romaji: "ni", example: "にほん — nihon" },
    { char: "ぬ", romaji: "nu", example: "ぬの — nuno" },
    { char: "ね", romaji: "ne", example: "ねこ — neko" },
    { char: "の", romaji: "no", example: "のみもの — nomimono" },

    { char: "は", romaji: "ha", example: "はな — hana" },
    { char: "ひ", romaji: "hi", example: "ひ — hi" },
    { char: "ふ", romaji: "fu", example: "ふね — fune" },
    { char: "へ", romaji: "he", example: "へや — heya" },
    { char: "ほ", romaji: "ho", example: "ほん — hon" },

    { char: "ま", romaji: "ma", example: "まち — machi" },
    { char: "み", romaji: "mi", example: "みず — mizu" },
    { char: "む", romaji: "mu", example: "むし — mushi" },
    { char: "め", romaji: "me", example: "め — me" },
    { char: "も", romaji: "mo", example: "もも — momo" },

    { char: "や", romaji: "ya", example: "やま — yama" },
    { char: "ゆ", romaji: "yu", example: "ゆき — yuki" },
    { char: "よ", romaji: "yo", example: "よる — yoru" },

    { char: "ら", romaji: "ra", example: "らいねん — rainen" },
    { char: "り", romaji: "ri", example: "りんご — ringo" },
    { char: "る", romaji: "ru", example: "るす — rusu" },
    { char: "れ", romaji: "re", example: "れい — rei" },
    { char: "ろ", romaji: "ro", example: "ろく — roku" },

    { char: "わ", romaji: "wa", example: "わたし — watashi" },
    { char: "を", romaji: "wo", example: "を — wo" },

    { char: "ん", romaji: "n", example: "ほん — hon" }
];


/* =====================================================
   DATA KATAKANA
===================================================== */

const katakana = [
    { char: "ア", romaji: "a" },
    { char: "イ", romaji: "i" },
    { char: "ウ", romaji: "u" },
    { char: "エ", romaji: "e" },
    { char: "オ", romaji: "o" },

    { char: "カ", romaji: "ka" },
    { char: "キ", romaji: "ki" },
    { char: "ク", romaji: "ku" },
    { char: "ケ", romaji: "ke" },
    { char: "コ", romaji: "ko" },

    { char: "サ", romaji: "sa" },
    { char: "シ", romaji: "shi" },
    { char: "ス", romaji: "su" },
    { char: "セ", romaji: "se" },
    { char: "ソ", romaji: "so" },

    { char: "タ", romaji: "ta" },
    { char: "チ", romaji: "chi" },
    { char: "ツ", romaji: "tsu" },
    { char: "テ", romaji: "te" },
    { char: "ト", romaji: "to" },

    { char: "ナ", romaji: "na" },
    { char: "ニ", romaji: "ni" },
    { char: "ヌ", romaji: "nu" },
    { char: "ネ", romaji: "ne" },
    { char: "ノ", romaji: "no" },

    { char: "ハ", romaji: "ha" },
    { char: "ヒ", romaji: "hi" },
    { char: "フ", romaji: "fu" },
    { char: "ヘ", romaji: "he" },
    { char: "ホ", romaji: "ho" },

    { char: "マ", romaji: "ma" },
    { char: "ミ", romaji: "mi" },
    { char: "ム", romaji: "mu" },
    { char: "メ", romaji: "me" },
    { char: "モ", romaji: "mo" },

    { char: "ヤ", romaji: "ya" },
    { char: "ユ", romaji: "yu" },
    { char: "ヨ", romaji: "yo" },

    { char: "ラ", romaji: "ra" },
    { char: "リ", romaji: "ri" },
    { char: "ル", romaji: "ru" },
    { char: "レ", romaji: "re" },
    { char: "ロ", romaji: "ro" },

    { char: "ワ", romaji: "wa" },
    { char: "ヲ", romaji: "wo" },

    { char: "ン", romaji: "n" }
];








/* =====================================================
   DATA KOSAKATA
===================================================== */

const vocabulary = [
    {
        japanese: "こんにちは",
        romaji: "Konnichiwa",
        meaning: "Halo / Selamat siang"
    },

    {
        japanese: "ありがとう",
        romaji: "Arigatou",
        meaning: "Terima kasih"
    },

    {
        japanese: "おはよう",
        romaji: "Ohayou",
        meaning: "Selamat pagi"
    },

    {
        japanese: "こんばんは",
        romaji: "Konbanwa",
        meaning: "Selamat malam"
    },

    {
        japanese: "さようなら",
        romaji: "Sayounara",
        meaning: "Selamat tinggal"
    },

    {
        japanese: "すみません",
        romaji: "Sumimasen",
        meaning: "Permisi / Maaf"
    },

    {
        japanese: "はい",
        romaji: "Hai",
        meaning: "Ya"
    },

    {
        japanese: "いいえ",
        romaji: "Iie",
        meaning: "Tidak"
    },

    {
        japanese: "みず",
        romaji: "Mizu",
        meaning: "Air"
    },

    {
        japanese: "ごはん",
        romaji: "Gohan",
        meaning: "Nasi / Makanan"
    },

    {
        japanese: "ねこ",
        romaji: "Neko",
        meaning: "Kucing"
    },

    {
        japanese: "いぬ",
        romaji: "Inu",
        meaning: "Anjing"
    },

    {
        japanese: "友達",
        romaji: "Tomodachi",
        meaning: "Teman"
    },

    {
        japanese: "先生",
        romaji: "Sensei",
        meaning: "Guru"
    },

    {
        japanese: "学生",
        romaji: "Gakusei",
        meaning: "Pelajar"
    },

    ...Array.from({ length: 500 }, (_, index) => {
        const vocabPool = [
            ["あめ", "ame", "hujan"],
            ["いえ", "ie", "rumah"],
            ["うえ", "ue", "atas"],
            ["えき", "eki", "stasiun"],
            ["おかし", "okashi", "camilan"],
            ["かさ", "kasa", "payung"],
            ["きれい", "kirei", "indah / bersih"],
            ["くつ", "kutsu", "sepatu"],
            ["けさ", "kesa", "pagi hari"],
            ["ここ", "koko", "sini"],
            ["さくら", "sakura", "bunga sakura"],
            ["した", "shita", "bawah"],
            ["しずか", "shizuka", "tenang"],
            ["すし", "sushi", "sushi"],
            ["せんせい", "sensei", "guru"],
            ["そと", "soto", "luar"],
            ["たいくつ", "taikutsu", "bosan"],
            ["ちず", "chizu", "peta"],
            ["つくえ", "tsukue", "meja"],
            ["てがみ", "tegami", "surat"],
            ["としょかん", "tosho-kan", "perpustakaan"],
            ["なつ", "natsu", "musim panas"],
            ["にほん", "nihon", "Jepang"],
            ["ぬの", "nuno", "kain"],
            ["ねこ", "neko", "kucing"],
            ["はたらく", "hataraku", "bekerja"],
            ["ひと", "hito", "orang"],
            ["ふね", "fune", "kapal"],
            ["へや", "heya", "ruangan"],
            ["ほし", "hoshi", "bintang"],
            ["まち", "machi", "kota"],
            ["みず", "mizu", "air"],
            ["むし", "mushi", "serangga"],
            ["めがね", "megane", "kacamata"],
            ["もも", "momo", "peach"],
            ["やま", "yama", "gunung"],
            ["ゆき", "yuki", "salju"],
            ["よる", "yoru", "malam"],
            ["らいおん", "raion", "singa"],
            ["りんご", "ringo", "apel"],
            ["るす", "rusu", "kosong / tidak ada"],
            ["れいぞうこ", "reizouko", "lemari es"],
            ["ろく", "roku", "enam"],
            ["わたし", "watashi", "saya"],
            ["あお", "ao", "biru"],
            ["あか", "aka", "merah"],
            ["あかるい", "akarui", "terang"],
            ["あき", "aki", "musim gugur"],
            ["あめ", "ame", "hujan"],
            ["あやしい", "ayashii", "mencurigakan"],
            ["いち", "ichi", "satu"],
            ["いぬ", "inu", "anjing"],
            ["かえり", "kaeri", "pulang"],
            ["かたかな", "katakana", "katakana"],
            ["かんたん", "kantan", "mudah"],
            ["きもち", "kimochi", "perasaan"],
            ["くるま", "kuruma", "mobil"],
            ["けいたい", "keitai", "ponsel"],
            ["ごみ", "gomi", "sampah"],
            ["さかな", "sakana", "ikan"],
            ["しお", "shio", "garam"],
            ["しんかんせん", "shinkansen", "kereta api cepat"],
            ["すき", "suki", "suka"],
            ["せいかつ", "seikatsu", "kehidupan"],
            ["そら", "sora", "langit"],
            ["たべる", "taberu", "makan"],
            ["ちかてつ", "chikatetsu", "kereta bawah tanah"],
            ["つき", "tsuki", "bulan"],
            ["てんき", "tenki", "cuaca"],
            ["とけい", "tokei", "jam / arloji"],
            ["とまる", "tomaru", "berhenti"],
            ["ながい", "nagai", "panjang"],
            ["なまえ", "namae", "nama"],
            ["はじめる", "hajimeru", "mulai"],
            ["ひこうき", "hikouki", "pesawat"],
            ["ふく", "fuku", "pakaian"],
            ["ほうそう", "housou", "penyiaran"],
            ["まど", "mado", "jendela"],
            ["みち", "michi", "jalan"],
            ["むかし", "mukashi", "dulu"],
            ["め", "me", "mata"],
            ["もっていく", "motteiku", "membawa"],
            ["やすむ", "yasumu", "istirahat"],
            ["ゆめ", "yume", "mimpi"],
            ["よむ", "yomu", "membaca"],
            ["らくがき", "rakugaki", "coretan"],
            ["りょうり", "ryouri", "masak"],
            ["れんしゅう", "renshuu", "latihan"],
            ["ろうか", "rouka", "koridor"],
            ["わらう", "warau", "tertawa"],
            ["えいが", "eiga", "film"],
            ["おふろ", "ofuro", "mandi"],
            ["けっこん", "kekkon", "pernikahan"],
            ["さくら", "sakura", "cokelat"],
            ["しゅくだい", "shukudai", "pekerjaan rumah"],
            ["せがわ", "segawa", "arah"],
            ["たんじょうび", "tanjoubi", "ulang tahun"],
            ["ちょうし", "choushi", "keadaan"],
            ["つうきん", "tsuukin", "perjalanan"],
            ["でんしゃ", "densha", "kereta listrik"],
            ["とびら", "tobira", "pintu"],
            ["はな", "hana", "bunga"],
            ["ひる", "hiru", "siang hari"],
            ["ふくろう", "fukurou", "burung hantu"],
            ["へいき", "heiki", "tenang"],
            ["ほっとする", "hotto suru", "lega"],
            ["まじめ", "majime", "serius"],
            ["みんな", "minna", "semua"],
            ["むずかしい", "muzukashii", "sulit"],
            ["めいわく", "meiwaku", "gangguan"],
            ["もしかしたら", "moshika shita ra", "mungkin"],
            ["やさしい", "yasashii", "lembut"],
            ["ゆっくり", "yukkuri", "pelan-pelan"],
            ["よく", "yoku", "sering"],
            ["らいねん", "rainen", "tahun depan"],
            ["りんかん", "rinkan", "halaman"],
            ["れい", "rei", "nol"],
            ["ろうそく", "rousoku", "lilin"],
            ["わかる", "wakaru", "mengerti"],
            ["ぎんこう", "ginkou", "bank"],
            ["きっぷ", "kippu", "tiket"],
            ["くうき", "kuki", "udara"],
            ["こえ", "koe", "suara"],
            ["しょくどう", "shokudo", "kantin"],
            ["じてんしゃ", "jitensha", "sepeda"],
            ["しゃしん", "shashin", "foto"],
            ["ちて", "chite", "kartu"],
            ["つくる", "tsukuru", "membuat"],
            ["てんらんかい", "tenranka-i", "galeri"],
            ["とらえる", "traeru", "menangkap"],
            ["ばしょ", "basho", "tempat"],
            ["はたらき", "hataraki", "kerja"],
            ["ひみつ", "himitsu", "rahasia"],
            ["ふたり", "futari", "dua orang"],
            ["ほか", "hoka", "lainnya"],
            ["まえ", "mae", "depan"],
            ["みせ", "mise", "toko"],
            ["むり", "muri", "terlalu berat"],
            ["めざす", "mezasu", "bertujuan"],
            ["もくひょう", "mokuhyou", "target"],
            ["やくそく", "yakusoku", "janji"],
            ["ゆだん", "yudan", "santai"],
            ["よし", "yoshi", "setuju"],
            ["らく", "raku", "nyaman"],
            ["りそう", "risou", "impian"],
            ["れんらく", "renraku", "hubungi"],
            ["ろうじん", "roujin", "lansia"],
            ["わすれる", "wasureru", "lupa"],
            ["いちばん", "ichiban", "terbaik"],
            ["うんどう", "undou", "olahraga"],
            ["えんぴつ", "enpitsu", "pensil"],
            ["おやつ", "oyatsu", "camilan sore"],
            ["かぎ", "kagi", "kunci"],
            ["きょう", "kyou", "hari ini"],
            ["くしゃみ", "kushami", "bersin"],
            ["けいけん", "keiken", "pengalaman"],
            ["こたえ", "kotae", "jawaban"],
            ["さくぶん", "sakubun", "karangan"],
            ["しゅみ", "shumi", "hobi"],
            ["せいり", "seiri", "penataan"],
            ["そうだん", "soudan", "konsultasi"],
            ["たしかめる", "tashikameru", "memastikan"],
            ["ちゅうしゃ", "chuusha", "parkir"],
            ["つづく", "tsuzuku", "berlanjut"],
            ["でかける", "dekakeru", "berangkat"],
            ["ときどき", "tokidoki", "kadang-kadang"],
            ["ながれる", "nagareru", "mengalir"],
            ["にんき", "ninki", "populer"],
            ["ねむい", "nemui", "mengantuk"],
            ["はなす", "hanasu", "berbicara"],
            ["ひかる", "hikaru", "bersinar"],
            ["ふとる", "futoru", "gemuk"],
            ["ほめる", "homeru", "memuji"],
            ["まいにち", "mainichi", "setiap hari"],
            ["みらい", "mirai", "masa depan"],
            ["むね", "mune", "dada"],
            ["めざまし", "mezamashi", "alarm"],
            ["もらう", "morau", "menerima"],
            ["やくにたつ", "yakuni tatsu", "berguna"],
            ["ゆび", "yubi", "jari"],
            ["よい", "yoi", "baik"],
            ["らい", "rai", "terlambat"],
            ["りかい", "rikai", "pemahaman"],
            ["れんあい", "renai", "cinta"],
            ["ろくおん", "rokuon", "rekaman"],
            ["わけ", "wake", "alasan"],
            ["きれい", "kirei", "bersih / cantik"],
            ["おいしい", "oishii", "enak"],
            ["さびしい", "sabishii", "sepi"],
            ["うれしい", "ureshii", "senang"],
            ["かなしい", "kanashii", "sedih"],
            ["こわい", "kowai", "takut"],
            ["かっこいい", "kakkoii", "keren"],
            ["あたらしい", "atarashii", "baru"],
            ["ふゆ", "fuyu", "musim dingin"],
            ["はる", "haru", "musim semi"],
            ["あさ", "asa", "pagi"],
            ["あした", "ashita", "besok"],
            ["きょう", "kyou", "hari ini"],
            ["きのう", "kinou", "kemarin"],
            ["げんき", "genki", "semangat"],
            ["しずか", "shizuka", "sunyi"],
            ["おもしろい", "omoshiroi", "menarik"],
            ["ちいさい", "chiisai", "kecil"],
            ["おおきい", "ookii", "besar"],
            ["はやい", "hayai", "cepat"],
            ["おそい", "osoi", "lambat"],
            ["たのしい", "tanoshii", "menyenangkan"],
            ["つかれる", "tsukareru", "lelah"],
            ["しんぱい", "shinpai", "khawatir"],
            ["きんちょう", "kinchou", "tegang"],
            ["ゆうめい", "yuumei", "terkenal"],
            ["さくら", "sakura", "bunga sakura"],
            ["すきやき", "sukiyaki", "masakan khas Jepang"],
            ["きゅうしょ", "kyuushou", "emergency"],
            ["じゅうたん", "juutan", "karpet"],
            ["はしる", "hashiru", "berlari"],
            ["きれい", "kirei", "bersih"],
            ["あたま", "atama", "kepala"],
            ["かぜ", "kaze", "angin"],
            ["ふゆ", "fuyu", "dingin"],
            ["しゅくはく", "shuku haku", "menginap"],
            ["じゅう", "juu", "sepuluh"],
            ["はんぶん", "hanbun", "setengah"],
            ["いりぐち", "iriguchi", "pintu masuk"],
            ["でぐち", "deguchi", "pintu keluar"],
            ["しゅうり", "shuuri", "perbaikan"],
            ["きょうつう", "kyoutsuu", "umum"],
            ["しゅうちゅう", "shuuchuu", "konsentrasi"],
            ["はいけい", "haikei", "latar belakang"],
            ["めもり", "memori", "catatan"],
            ["げんば", "genba", "lapangan"],
            ["うつくしい", "utsukushii", "indah"],
            ["かんそう", "kansou", "pengamatan"],
            ["おどる", "odoru", "menari"],
            ["しゅうかん", "shuukan", "mingguan"],
            ["たいいく", "taiiku", "olahraga"],
            ["ちょっと", "chotto", "sedikit"],
            ["やっと", "yatto", "akhirnya"],
            ["ぐらい", "gurai", "sekitar"],
            ["きょうみ", "kyoumi", "minat"],
            ["あんぜん", "anzen", "aman"],
            ["がっこう", "gakkou", "sekolah"],
            ["かれ", "kare", "dia (laki-laki)"],
            ["かのじょ", "kanojo", "dia (perempuan)"],
            ["しゅくだい", "shukudai", "PR"],
            ["よてい", "yotei", "rencana"],
            ["おさけ", "osake", "minuman beralkohol"],
            ["しっかり", "shikkari", "tekun"],
            ["しゅっちょう", "shucchou", "keberangkatan"],
            ["てんきよほう", "tenkiyohou", "ramalan cuaca"],
            ["まじめ", "majime", "jujur"],
            ["きょうしつ", "kyoushitsu", "kelas"],
            ["つねに", "tsune ni", "selalu"],
            ["とき", "toki", "waktu"],
            ["いっしょ", "issho", "bersama"],
            ["かいわ", "kaiwa", "percakapan"],
            ["ひとり", "hitori", "sendiri"],
            ["ふつう", "futsuu", "biasa"],
            ["よそう", "yosou", "prediksi"],
            ["はじめまして", "hajimemashite", "senang bertemu"],
            ["もうしわけありません", "moushiwake arimasen", "maaf"],
            ["おつかれさま", "otsukaresama", "terima kasih atas kerja kerasmu"]
        ];

        const item = vocabPool[index % vocabPool.length];

        return {
            japanese: item[0],
            romaji: item[1],
            meaning: item[2]
        };
    })
];

const angkaVocabulary = [
    { japanese: "0", romaji: "zero", meaning: "nol" },
    { japanese: "1", romaji: "ichi", meaning: "satu" },
    { japanese: "2", romaji: "ni", meaning: "dua" },
    { japanese: "3", romaji: "san", meaning: "tiga" },
    { japanese: "4", romaji: "shi / yon", meaning: "empat" },
    { japanese: "5", romaji: "go", meaning: "lima" },
    { japanese: "6", romaji: "roku", meaning: "enam" },
    { japanese: "7", romaji: "shichi / nana", meaning: "tujuh" },
    { japanese: "8", romaji: "hachi", meaning: "delapan" },
    { japanese: "9", romaji: "kyuu / ku", meaning: "sembilan" },
    { japanese: "10", romaji: "juu", meaning: "sepuluh" },
    { japanese: "20", romaji: "nijuu", meaning: "dua puluh" },
    { japanese: "30", romaji: "sanjuu", meaning: "tiga puluh" },
    { japanese: "100", romaji: "hyaku", meaning: "seratus" },
    { japanese: "1000", romaji: "sen", meaning: "seribu" }
];

const bulanVocabulary = [
    { japanese: "1月", romaji: "ichigatsu", meaning: "Januari" },
    { japanese: "2月", romaji: "nigatsu", meaning: "Februari" },
    { japanese: "3月", romaji: "sangatsu", meaning: "Maret" },
    { japanese: "4月", romaji: "shigatsu", meaning: "April" },
    { japanese: "5月", romaji: "gogatsu", meaning: "Mei" },
    { japanese: "6月", romaji: "rokugatsu", meaning: "Juni" },
    { japanese: "7月", romaji: "shichigatsu", meaning: "Juli" },
    { japanese: "8月", romaji: "hachigatsu", meaning: "Agustus" },
    { japanese: "9月", romaji: "kugatsu", meaning: "September" },
    { japanese: "10月", romaji: "jugatsu", meaning: "Oktober" },
    { japanese: "11月", romaji: "juichigatsu", meaning: "November" },
    { japanese: "12月", romaji: "junigatsu", meaning: "Desember" }
];

const tahunVocabulary = [
    { japanese: "2024年", romaji: "nisen nijūyon nen", meaning: "tahun 2024" },
    { japanese: "2025年", romaji: "nisen nijūgo nen", meaning: "tahun 2025" },
    { japanese: "2026年", romaji: "nisen nijūroku nen", meaning: "tahun 2026" },
    { japanese: "2027年", romaji: "nisen nijūnana nen", meaning: "tahun 2027" },
    { japanese: "2028年", romaji: "nisen nijūhachi nen", meaning: "tahun 2028" },
    { japanese: "2029年", romaji: "nisen nijūkyuu nen", meaning: "tahun 2029" },
    { japanese: "2030年", romaji: "nisen sanjū nen", meaning: "tahun 2030" },
    { japanese: "今年", romaji: "kotoshi", meaning: "tahun ini" },
    { japanese: "来年", romaji: "rainen", meaning: "tahun depan" },
    { japanese: "去年", romaji: "kyonen", meaning: "tahun lalu" }
];

const transportasiVocabulary = [
    { japanese: "交通", romaji: "koutsuu", meaning: "transportasi" },
    { japanese: "車", romaji: "kuruma", meaning: "mobil" },
    { japanese: "自動車", romaji: "jidousha", meaning: "mobil" },
    { japanese: "バス", romaji: "basu", meaning: "bus" },
    { japanese: "電車", romaji: "densha", meaning: "kereta listrik" },
    { japanese: "新幹線", romaji: "shinkansen", meaning: "kereta api cepat" },
    { japanese: "電車", romaji: "densha", meaning: "kereta api" },
    { japanese: "地下鉄", romaji: "chikatetsu", meaning: "kereta bawah tanah" },
    { japanese: "タクシー", romaji: "takushii", meaning: "taksi" },
    { japanese: "飛行機", romaji: "hikouki", meaning: "pesawat" },
    { japanese: "船", romaji: "fune", meaning: "kapal" },
    { japanese: "自転車", romaji: "jitensha", meaning: "sepeda" },
    { japanese: "バイク", romaji: "baiku", meaning: "sepeda motor" },
    { japanese: "オートバイ", romaji: "outebai", meaning: "sepeda motor" },
    { japanese: "歩く", romaji: "aruku", meaning: "berjalan kaki" },
    { japanese: "乗る", romaji: "noru", meaning: "naik / menaiki" },
    { japanese: "降りる", romaji: "oriru", meaning: "turun / turun dari kendaraan" },
    { japanese: "運転する", romaji: "unten suru", meaning: "mengemudi" },
    { japanese: "運転手", romaji: "untenshu", meaning: "supir" },
    { japanese: "ドライバー", romaji: "doraibaa", meaning: "pengemudi" },
    { japanese: "駐車場", romaji: "chuushajou", meaning: "tempat parkir" },
    { japanese: "停車", romaji: "teisha", meaning: "berhenti" },
    { japanese: "道路", romaji: "douro", meaning: "jalan raya" },
    { japanese: "駅", romaji: "eki", meaning: "stasiun" },
    { japanese: "駅員", romaji: "ekiin", meaning: "petugas stasiun" },
    { japanese: "バス停", romaji: "basutei", meaning: "halte bus" },
    { japanese: "駅舎", romaji: "ekisha", meaning: "gedung stasiun" },
    { japanese: "乗り換え", romaji: "norikae", meaning: "berpindah kendaraan" },
    { japanese: "乗り場", romaji: "noriba", meaning: "tempat naik" },
    { japanese: "降り場", romaji: "oriba", meaning: "tempat turun" },
    { japanese: "切符", romaji: "kippu", meaning: "tiket" },
    { japanese: "定期券", romaji: "teikiken", meaning: "kartu langganan / tiket rutin" },
    { japanese: "料金", romaji: "ryoukin", meaning: "biaya / tarif" },
    { japanese: "運賃", romaji: "unchin", meaning: "ongkos transportasi" },
    { japanese: "時間", romaji: "jikan", meaning: "waktu" },
    { japanese: "遅れる", romaji: "okureru", meaning: "terlambat" },
    { japanese: "急ぐ", romaji: "isogu", meaning: "tergesa-gesa" },
    { japanese: "道", romaji: "michi", meaning: "jalan" },
    { japanese: "渋滞", romaji: "joutai", meaning: "kemacetan" },
    { japanese: "交通ルール", romaji: "koutsuu ruuru", meaning: "aturan lalu lintas" },
    { japanese: "安全", romaji: "anzen", meaning: "aman" },
    { japanese: "信号", romaji: "shingou", meaning: "lampu lalu lintas" },
    { japanese: "空港", romaji: "kuukou", meaning: "bandara" },
    { japanese: "港", romaji: "minato", meaning: "pelabuhan" },
    { japanese: "ターミナル", romaji: "taaminaru", meaning: "terminal" },
    { japanese: "公共交通機関", romaji: "koukyou koutsuu kikan", meaning: "transportasi umum" },
    { japanese: "私の車", romaji: "watashi no kuruma", meaning: "mobil pribadi saya" },
    { japanese: "自家用車", romaji: "jikayousha", meaning: "kendaraan pribadi" },
    { japanese: "送迎", romaji: "sougei", meaning: "antar-jemput" },
    { japanese: "通勤", romaji: "tsuukin", meaning: "pergi kerja" },
    { japanese: "通学", romaji: "tsuugaku", meaning: "pergi sekolah" },
    { japanese: "帰宅", romaji: "kitaku", meaning: "pulang ke rumah" },
    { japanese: "徒歩", romaji: "toho", meaning: "jalan kaki" }
];

const n4N5Vocabulary = [
    { japanese: "学校", romaji: "gakkou", meaning: "sekolah" },
    { japanese: "教室", romaji: "kyoushitsu", meaning: "ruang kelas" },
    { japanese: "先生", romaji: "sensei", meaning: "guru / dosen" },
    { japanese: "学生", romaji: "gakusei", meaning: "pelajar" },
    { japanese: "授業", romaji: "jugyou", meaning: "pelajaran" },
    { japanese: "宿題", romaji: "shukudai", meaning: "pekerjaan rumah" },
    { japanese: "試験", romaji: "shiken", meaning: "ujian" },
    { japanese: "結果", romaji: "kekka", meaning: "hasil" },
    { japanese: "発表", romaji: "happyou", meaning: "presentasi" },
    { japanese: "質問", romaji: "shitsumon", meaning: "pertanyaan" },
    { japanese: "回答", romaji: "kaitou", meaning: "jawaban" },
    { japanese: "説明", romaji: "setsumei", meaning: "penjelasan" },
    { japanese: "注意", romaji: "chui", meaning: "perhatian" },
    { japanese: "安全", romaji: "anzen", meaning: "aman" },
    { japanese: "危険", romaji: "kiken", meaning: "bahaya" },
    { japanese: "問題", romaji: "mondai", meaning: "soal / masalah" },
    { japanese: "準備", romaji: "junbi", meaning: "persiapan" },
    { japanese: "開始", romaji: "kaishi", meaning: "mulai" },
    { japanese: "終了", romaji: "shuuryou", meaning: "selesai" },
    { japanese: "報告", romaji: "houkoku", meaning: "laporan" },
    { japanese: "連絡", romaji: "renraku", meaning: "kontak / hubungi" },
    { japanese: "相談", romaji: "soudan", meaning: "konsultasi" },
    { japanese: "経験", romaji: "keiken", meaning: "pengalaman" },
    { japanese: "研究", romaji: "kenkyuu", meaning: "penelitian" },
    { japanese: "地図", romaji: "chizu", meaning: "peta" },
    { japanese: "天気", romaji: "tenki", meaning: "cuaca" },
    { japanese: "晴れ", romaji: "hare", meaning: "cerah" },
    { japanese: "曇り", romaji: "kumori", meaning: "berawan" },
    { japanese: "海岸", romaji: "kaigan", meaning: "pantai" },
    { japanese: "道路", romaji: "douro", meaning: "jalan raya" },
    { japanese: "信号", romaji: "shingou", meaning: "lampu lalu lintas" },
    { japanese: "会社", romaji: "kaisha", meaning: "perusahaan" },
    { japanese: "出勤", romaji: "shukkin", meaning: "masuk kerja" },
    { japanese: "退勤", romaji: "taikin", meaning: "pulang kerja" },
    { japanese: "遅刻", romaji: "chikoku", meaning: "terlambat" },
    { japanese: "欠席", romaji: "kesseki", meaning: "absen" },
    { japanese: "会議", romaji: "kaigi", meaning: "rapat" },
    { japanese: "給料", romaji: "kyuuryou", meaning: "gaji" },
    { japanese: "収入", romaji: "shuunyuu", meaning: "pendapatan" },
    { japanese: "支出", romaji: "shishutsu", meaning: "pengeluaran" },
    { japanese: "貯金", romaji: "chokin", meaning: "menabung" },
    { japanese: "生活", romaji: "seikatsu", meaning: "kehidupan sehari-hari" },
    { japanese: "健康", romaji: "kenkou", meaning: "kesehatan" },
    { japanese: "病気", romaji: "byouki", meaning: "sakit" },
    { japanese: "気持ち", romaji: "kimochi", meaning: "perasaan" },
    { japanese: "感謝", romaji: "kansha", meaning: "syukur" },
    { japanese: "ありがとう", romaji: "arigatou", meaning: "terima kasih" },
    { japanese: "ごめんなさい", romaji: "gomen nasai", meaning: "maaf" },
    { japanese: "お願い", romaji: "onegai", meaning: "permohonan" },
    { japanese: "家族", romaji: "kazoku", meaning: "keluarga" },
    { japanese: "子供", romaji: "kodomo", meaning: "anak" },
    { japanese: "大人", romaji: "otona", meaning: "dewasa" },
    { japanese: "兄弟", romaji: "kyoudai", meaning: "saudara" },
    { japanese: "両親", romaji: "ryoushin", meaning: "orang tua" },
    { japanese: "料理", romaji: "ryouri", meaning: "memasak" },
    { japanese: "野菜", romaji: "yasai", meaning: "sayur" },
    { japanese: "果物", romaji: "kudamono", meaning: "buah" },
    { japanese: "牛乳", romaji: "gyuunyuu", meaning: "susu" },
    { japanese: "お菓子", romaji: "okashi", meaning: "camilan" },
    { japanese: "写真", romaji: "shashin", meaning: "foto" },
    { japanese: "鍵", romaji: "kagi", meaning: "kunci" },
    { japanese: "財布", romaji: "saifu", meaning: "dompet" },
    { japanese: "掃除", romaji: "souji", meaning: "membersihkan" },
    { japanese: "洗濯", romaji: "sentaku", meaning: "mencuci" },
    { japanese: "電気", romaji: "denki", meaning: "listrik" },
    { japanese: "新聞", romaji: "shinbun", meaning: "koran" },
    { japanese: "便利", romaji: "benri", meaning: "praktis / nyaman" },
    { japanese: "不便", romaji: "fuben", meaning: "tidak nyaman" },
    { japanese: "部屋", romaji: "heya", meaning: "ruangan" },
    { japanese: "机", romaji: "tsukue", meaning: "meja" },
    { japanese: "椅子", romaji: "isu", meaning: "kursi" },
    { japanese: "窓", romaji: "mado", meaning: "jendela" },
    { japanese: "ドア", romaji: "doa", meaning: "pintu" },
    { japanese: "音楽", romaji: "ongaku", meaning: "musik" },
    { japanese: "映画", romaji: "eiga", meaning: "film" },
    { japanese: "旅行", romaji: "ryokou", meaning: "perjalanan" },
    { japanese: "新しい", romaji: "atarashii", meaning: "baru" },
    { japanese: "古い", romaji: "furui", meaning: "lama" },
    { japanese: "大切", romaji: "taisetsu", meaning: "penting" },
    { japanese: "大変", romaji: "taihen", meaning: "sulit / berat" },
    { japanese: "元気", romaji: "genki", meaning: "semangat / sehat" },
    { japanese: "忙しい", romaji: "isogashii", meaning: "sibuk" },
    { japanese: "楽しい", romaji: "tanoshii", meaning: "menyenangkan" }
];

const bonusVocabulary = [
    { japanese: "勉強", romaji: "benkyou", meaning: "belajar" },
    { japanese: "忙しい", romaji: "isogashii", meaning: "sibuk" },
    { japanese: "楽しい", romaji: "tanoshii", meaning: "menyenangkan" },
    { japanese: "大切", romaji: "taisetsu", meaning: "penting" },
    { japanese: "安心", romaji: "anshin", meaning: "tenang / aman" },
    { japanese: "元気", romaji: "genki", meaning: "semangat / sehat" },
    { japanese: "失敗", romaji: "shippai", meaning: "gagal" },
    { japanese: "成功", romaji: "seikou", meaning: "berhasil" },
    { japanese: "整理", romaji: "seiri", meaning: "merapikan" },
    { japanese: "計画", romaji: "keikaku", meaning: "rencana" },
    { japanese: "映画", romaji: "eiga", meaning: "film" },
    { japanese: "音楽", romaji: "ongaku", meaning: "musik" },
    { japanese: "写真", romaji: "shashin", meaning: "foto" },
    { japanese: "旅行", romaji: "ryokou", meaning: "perjalanan" },
    { japanese: "美味しい", romaji: "oishii", meaning: "enak" },
    { japanese: "新しい", romaji: "atarashii", meaning: "baru" },
    { japanese: "古い", romaji: "furui", meaning: "lama" },
    { japanese: "朝ご飯", romaji: "asagohan", meaning: "sarapan" },
    { japanese: "晩ご飯", romaji: "bangohan", meaning: "makan malam" },
    { japanese: "手伝う", romaji: "tetsudau", meaning: "membantu" },
    { japanese: "忘れる", romaji: "wasureru", meaning: "lupa" },
    { japanese: "覚える", romaji: "oboeru", meaning: "mengingat" },
    { japanese: "話す", romaji: "hanasu", meaning: "berbicara" },
    { japanese: "聞く", romaji: "kiku", meaning: "mendengar" },
    { japanese: "読む", romaji: "yomu", meaning: "membaca" },
    { japanese: "書く", romaji: "kaku", meaning: "menulis" },
    { japanese: "待つ", romaji: "matsu", meaning: "menunggu" },
    { japanese: "歩く", romaji: "aruku", meaning: "berjalan" },
    { japanese: "走る", romaji: "hashiru", meaning: "berlari" },
    { japanese: "寝る", romaji: "neru", meaning: "tidur" },
    { japanese: "起きる", romaji: "okiru", meaning: "bangun" },
    { japanese: "洗う", romaji: "arau", meaning: "mencuci" },
    { japanese: "着る", romaji: "kiru", meaning: "memakai" },
    { japanese: "買う", romaji: "kau", meaning: "membeli" },
    { japanese: "売る", romaji: "uru", meaning: "menjual" },
    { japanese: "教える", romaji: "oshieru", meaning: "mengajar" },
    { japanese: "笑う", romaji: "warau", meaning: "tertawa" },
    { japanese: "泣く", romaji: "naku", meaning: "menangis" },
    { japanese: "親", romaji: "oya", meaning: "orang tua" },
    { japanese: "父", romaji: "chichi / otousan", meaning: "ayah" },
    { japanese: "母", romaji: "haha / okaasan", meaning: "ibu" },
    { japanese: "両親", romaji: "ryoushin", meaning: "orang tua" },
    { japanese: "お父さん", romaji: "otousan", meaning: "ayah" },
    { japanese: "お母さん", romaji: "okaasan", meaning: "ibu" },
    { japanese: "家族", romaji: "kazoku", meaning: "keluarga" },
    { japanese: "兄", romaji: "ani", meaning: "kakak laki-laki" },
    { japanese: "姉", romaji: "ane", meaning: "kakak perempuan" },
    { japanese: "弟", romaji: "otouto", meaning: "adik laki-laki" },
    { japanese: "妹", romaji: "imouto", meaning: "adik perempuan" },
    { japanese: "兄弟", romaji: "kyoudai", meaning: "saudara" },
    { japanese: "姉妹", romaji: "shimai", meaning: "saudara perempuan" },
    { japanese: "祖父", romaji: "sofu", meaning: "kakek" },
    { japanese: "祖母", romaji: "sobo", meaning: "nenek" },
    { japanese: "叔父", romaji: "oji", meaning: "paman" },
    { japanese: "叔母", romaji: "oba", meaning: "bibi" },
    { japanese: "おじさん", romaji: "ojisan", meaning: "paman" },
    { japanese: "おばさん", romaji: "obasan", meaning: "bibi" },
    { japanese: "子供", romaji: "kodomo", meaning: "anak" },
    { japanese: "息子", romaji: "musuko", meaning: "putra" },
    { japanese: "娘", romaji: "musume", meaning: "putri" },
    { japanese: "夫", romaji: "otto", meaning: "suami" },
    { japanese: "妻", romaji: "tsuma", meaning: "istri" },
    { japanese: "配偶者", romaji: "haigousha", meaning: "pasangan" },
    { japanese: "親戚", romaji: "shinseki", meaning: "kerabat" },
    { japanese: "いとこ", romaji: "itoko", meaning: "sepupu" },
    { japanese: "近所", romaji: "kinjo", meaning: "lingkungan sekitar / tetangga" },
    { japanese: "隣人", romaji: "rinjin", meaning: "tetangga" },
    { japanese: "同居人", romaji: "doukyonin", meaning: "penghuni rumah" },
    { japanese: "家", romaji: "ie", meaning: "rumah" },
    { japanese: "部屋", romaji: "heya", meaning: "ruangan" },
    { japanese: "住む", romaji: "sumu", meaning: "tinggal" },
    { japanese: "育つ", romaji: "sodatsu", meaning: "tumbuh / dibesarkan" },
    { japanese: "面倒を見る", romaji: "mentouru miru", meaning: "mengurus" },
    { japanese: "大人", romaji: "otona", meaning: "orang dewasa" },
    { japanese: "子ども", romaji: "kodomo", meaning: "anak-anak" },
    { japanese: "家族旅行", romaji: "kazoku ryokou", meaning: "liburan keluarga" },
    { japanese: "お祝い", romaji: "iwai", meaning: "selamat / perayaan" },
    { japanese: "感謝", romaji: "kansha", meaning: "syukur" },
    { japanese: "支える", romaji: "sasaeru", meaning: "menopang / mendukung" },
    { japanese: "守る", romaji: "mamoru", meaning: "melindungi" },
    { japanese: "職業", romaji: "shokugyou", meaning: "pekerjaan / profesi" },
    { japanese: "仕事", romaji: "shigoto", meaning: "pekerjaan" },
    { japanese: "会社", romaji: "kaisha", meaning: "perusahaan" },
    { japanese: "会社員", romaji: "kaishain", meaning: "karyawan perusahaan" },
    { japanese: "先生", romaji: "sensei", meaning: "guru / dosen" },
    { japanese: "医者", romaji: "isha", meaning: "dokter" },
    { japanese: "看護師", romaji: "kangoshi", meaning: "perawat" },
    { japanese: "先生", romaji: "sensei", meaning: "guru / dosen" },
    { japanese: "教師", romaji: "kyoushi", meaning: "pengajar" },
    { japanese: "学生", romaji: "gakusei", meaning: "pelajar" },
    { japanese: "営業", romaji: "eigyou", meaning: "penjualan / pemasaran" },
    { japanese: "店員", romaji: "tenin", meaning: "pegawai toko" },
    { japanese: "料理人", romaji: "ryourinin", meaning: "koki" },
    { japanese: "運転手", romaji: "untenshu", meaning: "supir" },
    { japanese: "警察官", romaji: "keisatsukan", meaning: "polisi" },
    { japanese: "消防士", romaji: "shouboushi", meaning: "petugas pemadam kebakaran" },
    { japanese: "技術者", romaji: "gijutsusha", meaning: "teknisi / teknisi profesional" },
    { japanese: "設計者", romaji: "sekkeisha", meaning: "desainer / perancang" },
    { japanese: "プログラマー", romaji: "pureguramaa", meaning: "programmer" },
    { japanese: "エンジニア", romaji: "enjinia", meaning: "insinyur" },
    { japanese: "デザイナー", romaji: "dezainaa", meaning: "desainer" },
    { japanese: "事務員", romaji: "jimuin", meaning: "staf administrasi" },
    { japanese: "秘書", romaji: "hisho", meaning: "sekretaris" },
    { japanese: "経営者", romaji: "keieisha", meaning: "pemilik usaha / pengusaha" },
    { japanese: "会社員", romaji: "kaishain", meaning: "karyawan perusahaan" },
    { japanese: "職員", romaji: "shokuin", meaning: "pegawai" },
    { japanese: "主任", romaji: "shunin", meaning: "kepala / supervisor" },
    { japanese: "部長", romaji: "buchou", meaning: "kepala bagian" },
    { japanese: "課長", romaji: "kachou", meaning: "kepala seksi" },
    { japanese: "社長", romaji: "shachou", meaning: "direktur utama" },
    { japanese: "会議", romaji: "kaigi", meaning: "rapat" },
    { japanese: "ミーティング", romaji: "miitingu", meaning: "pertemuan" },
    { japanese: "報告", romaji: "houkoku", meaning: "laporan" },
    { japanese: "連絡", romaji: "renraku", meaning: "hubungan / kontak" },
    { japanese: "相談", romaji: "soudan", meaning: "konsultasi" },
    { japanese: "質問", romaji: "shitsumon", meaning: "pertanyaan" },
    { japanese: "回答", romaji: "kaitou", meaning: "jawaban" },
    { japanese: "申請", romaji: "shinsei", meaning: "permohonan" },
    { japanese: "承認", romaji: "shounin", meaning: "persetujuan" },
    { japanese: "更新", romaji: "koushin", meaning: "pembaruan" },
    { japanese: "準備", romaji: "junbi", meaning: "persiapan" },
    { japanese: "開始", romaji: "kaishi", meaning: "mulai" },
    { japanese: "終了", romaji: "shuuryou", meaning: "selesai" },
    { japanese: "休憩", romaji: "kyukei", meaning: "istirahat" },
    { japanese: "出勤", romaji: "shukkin", meaning: "masuk kerja" },
    { japanese: "退勤", romaji: "taikin", meaning: "pulang kerja" },
    { japanese: "残業", romaji: "zangyou", meaning: "lembur" },
    { japanese: "給料", romaji: "kyuuryou", meaning: "gaji" },
    { japanese: "手当", romaji: "teate", meaning: "tunjangan" },
    { japanese: "ボーナス", romaji: "boonasu", meaning: "bonus" },
    { japanese: "契約", romaji: "keiyaku", meaning: "kontrak" },
    { japanese: "雇用", romaji: "koyou", meaning: "pekerjaan / tenaga kerja" },
    { japanese: "職場", romaji: "shokuba", meaning: "tempat kerja" },
    { japanese: "オフィス", romaji: "ofisu", meaning: "kantor" },
    { japanese: "事務所", romaji: "jimusho", meaning: "kantor / biro" },
    { japanese: "工場", romaji: "koujou", meaning: "pabrik" },
    { japanese: "倉庫", romaji: "souko", meaning: "gudang" },
    { japanese: "販売", romaji: "hanbai", meaning: "penjualan" },
    { japanese: "仕入れ", romaji: "shiire", meaning: "pembelian / pembelian stok" },
    { japanese: "在庫", romaji: "zaiko", meaning: "stok" },
    { japanese: "配送", romaji: "haisou", meaning: "pengiriman" },
    { japanese: "業務", romaji: "gyoumu", meaning: "tugas kerja" },
    { japanese: "作業", romaji: "sagyou", meaning: "pekerjaan / aktivitas kerja" },
    { japanese: "仕事場", romaji: "shigoto ba", meaning: "tempat kerja" },
    { japanese: "ハンドル", romaji: "handoru", meaning: "pegangan / menangani" },
    { japanese: "スケジュール", romaji: "sukejuuru", meaning: "jadwal" },
    { japanese: "進む", romaji: "susumu", meaning: "maju / berjalan" },
    { japanese: "遅れる", romaji: "okureru", meaning: "terlambat" },
    { japanese: "効率", romaji: "kouritsu", meaning: "efisiensi" },
    { japanese: "時間管理", romaji: "jikan kanri", meaning: "manajemen waktu" },
    { japanese: "集中", romaji: "shuuchuu", meaning: "konsentrasi" },
    { japanese: "努力", romaji: "doryoku", meaning: "usaha" },
    { japanese: "責任", romaji: "sekinin", meaning: "tanggung jawab" },
    { japanese: "義務", romaji: "gimu", meaning: "kewajiban" },
    { japanese: "経験", romaji: "keiken", meaning: "pengalaman" },
    { japanese: "技能", romaji: "ginou", meaning: "keterampilan" },
    { japanese: "専門家", romaji: "senmonka", meaning: "ahli" },
    { japanese: "研修", romaji: "kenshuu", meaning: "pelatihan" },
    { japanese: "教育", romaji: "kyouiku", meaning: "pendidikan" },
    { japanese: "資格", romaji: "shikaku", meaning: "sertifikat / kualifikasi" },
    { japanese: "面接", romaji: "mensetsu", meaning: "wawancara" },
    { japanese: "採用", romaji: "saiyou", meaning: "rekrutmen" },
    { japanese: "転職", romaji: "tenshoku", meaning: "berpindah kerja" },
    { japanese: "退職", romaji: "taishoku", meaning: "mengundurkan diri / pensiun" },
    { japanese: "労働", romaji: "roudou", meaning: "pekerjaan / tenaga kerja" },
    { japanese: "幸福", romaji: "koufuku", meaning: "kebahagiaan" },
    { japanese: "キャリア", romaji: "kyaria", meaning: "karier" },
    { japanese: "目標", romaji: "mokuhyou", meaning: "target" },
    { japanese: "達成", romaji: "tassei", meaning: "pencapaian" }
];

function normalizeVocabularyKey(item) {
    return `${String(item.japanese || "").trim().toLowerCase()}|${String(item.romaji || "").trim().toLowerCase()}|${String(item.meaning || "").trim().toLowerCase()}`;
}

function deduplicateVocabularyEntries(items) {
    const seen = new Set();

    return items.filter(item => {
        const key = normalizeVocabularyKey(item);

        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;
    });
}

function normalizeKanjiKey(item) {
    return `${String(item.char || "").trim().toLowerCase()}|${String(item.read || "").trim().toLowerCase()}|${String(item.meaning || "").trim().toLowerCase()}|${String(item.level || "").trim().toLowerCase()}`;
}

function deduplicateKanjiEntries(items) {
    const seen = new Set();

    return items.filter(item => {
        if (!item || !item.char) {
            return false;
        }

        const key = normalizeKanjiKey(item);

        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;
    });
}

const uniqueAngkaVocabulary = deduplicateVocabularyEntries(angkaVocabulary);
const uniqueBulanVocabulary = deduplicateVocabularyEntries(bulanVocabulary);
const uniqueTahunVocabulary = deduplicateVocabularyEntries(tahunVocabulary);
const uniqueTransportasiVocabulary = deduplicateVocabularyEntries(transportasiVocabulary);
const uniqueVocabulary = deduplicateVocabularyEntries(vocabulary);
const uniqueN4N5Vocabulary = deduplicateVocabularyEntries(n4N5Vocabulary);
const uniqueBonusVocabulary = deduplicateVocabularyEntries(bonusVocabulary);

const vocabularySections = [
    { title: "Angka", items: uniqueAngkaVocabulary },
    { title: "Bulan", items: uniqueBulanVocabulary },
    { title: "Tahun", items: uniqueTahunVocabulary },
    { title: "Transportasi Umum & Pribadi", items: uniqueTransportasiVocabulary },
    { title: "Kosakata N4 / N5", items: uniqueN4N5Vocabulary },
    { title: "Kosakata Umum", items: uniqueVocabulary },
    { title: "Kosakata Tambahan", items: uniqueBonusVocabulary }
];

const kanjiData = [
    { char: "日", read: "ni / hi", meaning: "hari, matahari", level: "N5" },
    { char: "人", read: "jin / hito", meaning: "orang", level: "N5" },
    { char: "山", read: "san / yama", meaning: "gunung", level: "N5" },
    { char: "川", read: "sen / kawa", meaning: "sungai", level: "N5" },
    { char: "木", read: "boku / ki", meaning: "pohon", level: "N5" },
    { char: "水", read: "sui / mizu", meaning: "air", level: "N5" },
    { char: "火", read: "ka / hi", meaning: "api", level: "N5" },
    { char: "土", read: "do / tsuchi", meaning: "tanah", level: "N5" },
    { char: "大", read: "dai / oo", meaning: "besar", level: "N5" },
    { char: "小", read: "shou / chii", meaning: "kecil", level: "N5" },
    { char: "上", read: "joo / ue", meaning: "atas", level: "N5" },
    { char: "下", read: "ka / shita", meaning: "bawah", level: "N5" },
    { char: "中", read: "chuu / naka", meaning: "tengah", level: "N5" },
    { char: "学", read: "gaku / manabu", meaning: "belajar", level: "N5" },
    { char: "校", read: "kou / ko", meaning: "sekolah", level: "N5" },
    { char: "先", read: "sen / saki", meaning: "sebelum", level: "N4" },
    { char: "生", read: "sei / nama", meaning: "hidup / lahir", level: "N4" },
    { char: "食", read: "shoku / taberu", meaning: "makan", level: "N4" },
    { char: "車", read: "sha / kuruma", meaning: "mobil", level: "N4" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N4" },
    { char: "雨", read: "u / ame", meaning: "hujan", level: "N4" },
    { char: "空", read: "kuu / sora", meaning: "langit", level: "N4" },
    { char: "休", read: "kyuu / yasumu", meaning: "istirahat", level: "N4" },
    { char: "田", read: "den / ta", meaning: "sawah", level: "N4" },
    { char: "男", read: "dan / otoko", meaning: "laki-laki", level: "N4" },
    { char: "女", read: "jo / onna", meaning: "perempuan", level: "N4" },
    { char: "友", read: "yuu / tomo", meaning: "teman", level: "N5" },
    { char: "早", read: "sou / haya", meaning: "cepat, pagi", level: "N5" },
    { char: "朝", read: "chou / asa", meaning: "pagi", level: "N5" },
    { char: "午", read: "go / uma", meaning: "siang", level: "N5" },
    { char: "前", read: "zen / mae", meaning: "depan, sebelum", level: "N5" },
    { char: "後", read: "go / ato", meaning: "setelah", level: "N5" },
    { char: "明", read: "mei / ake", meaning: "terang", level: "N4" },
    { char: "夜", read: "ya / yoru", meaning: "malam", level: "N4" },
    { char: "国", read: "koku / kuni", meaning: "negara", level: "N4" },
    { char: "名", read: "mei / na", meaning: "nama", level: "N4" },
    { char: "語", read: "go / kata", meaning: "bahasa", level: "N4" },
    { char: "文", read: "bun / fumi", meaning: "tulisan", level: "N4" },
    { char: "字", read: "ji / aza", meaning: "huruf", level: "N4" },
    { char: "話", read: "wa / hanasu", meaning: "berbicara", level: "N4" },
    { char: "聞", read: "bun / kiku", meaning: "mendengar", level: "N4" },
    { char: "見", read: "ken / miru", meaning: "melihat", level: "N4" },
    { char: "行", read: "kou / iku", meaning: "pergi", level: "N4" },
    { char: "来", read: "rai / kuru", meaning: "datang", level: "N4" },
    { char: "帰", read: "ki / kaeru", meaning: "pulang", level: "N4" },
    { char: "店", read: "ten / mise", meaning: "toko", level: "N4" },
    { char: "家", read: "ka / ie", meaning: "rumah", level: "N4" },
    { char: "電", read: "den", meaning: "listrik", level: "N4" },
    { char: "車", read: "sha / kuruma", meaning: "kendaraan", level: "N4" },
    { char: "門", read: "mon / kado", meaning: "pintu", level: "N4" },
    { char: "開", read: "kai / hiraku", meaning: "membuka", level: "N4" },
    { char: "閉", read: "hei / tojiru", meaning: "menutup", level: "N4" },
    { char: "書", read: "sho / kaku", meaning: "menulis", level: "N4" },
    { char: "読", read: "doku / yomu", meaning: "membaca", level: "N4" },
    { char: "道", read: "dou / michi", meaning: "jalan", level: "N4" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N4" },
    { char: "花", read: "ka / hana", meaning: "bunga", level: "N5" },
    { char: "草", read: "sou / kusa", meaning: "rumput", level: "N5" },
    { char: "音", read: "on / oto", meaning: "suara", level: "N4" },
    { char: "天", read: "ten / ama", meaning: "langit", level: "N4" },
    { char: "地", read: "chi / ji", meaning: "tanah", level: "N4" },
    { char: "海", read: "kai / umi", meaning: "laut", level: "N4" },
    { char: "空", read: "kuu / sora", meaning: "langit", level: "N4" },
    { char: "白", read: "haku / shiro", meaning: "putih", level: "N5" },
    { char: "黒", read: "koku / kuro", meaning: "hitam", level: "N5" },
    { char: "赤", read: "seki / aka", meaning: "merah", level: "N5" },
    { char: "青", read: "sei / ao", meaning: "biru", level: "N5" },
    { char: "黄", read: "ou / ki", meaning: "kuning", level: "N4" },
    { char: "色", read: "shiki / iro", meaning: "warna", level: "N4" },
    { char: "紙", read: "shi / kami", meaning: "kertas", level: "N4" },
    { char: "本", read: "hon / moto", meaning: "buku, asal", level: "N5" },
    { char: "間", read: "kan / ma", meaning: "ruang, interval", level: "N4" },
    { char: "時", read: "ji / toki", meaning: "waktu", level: "N5" },
    { char: "分", read: "bun / wa", meaning: "menit, bagian", level: "N5" },
    { char: "年", read: "nen / toshi", meaning: "tahun", level: "N5" },
    { char: "月", read: "getsu / tsuki", meaning: "bulan", level: "N5" },
    { char: "日", read: "nichi / hi", meaning: "hari", level: "N5" },
    { char: "曜", read: "you / yo", meaning: "hari", level: "N4" },
    { char: "金", read: "kin / kane", meaning: "uang, emas", level: "N5" },
    { char: "銀", read: "gin / shirogane", meaning: "perak", level: "N4" },
    { char: "曜", read: "you / yo", meaning: "hari", level: "N4" },
    { char: "話", read: "wa / hanasu", meaning: "pembicaraan", level: "N4" },
    { char: "店", read: "ten / mise", meaning: "toko", level: "N4" },
    { char: "食", read: "shoku / taberu", meaning: "makan", level: "N4" },
    { char: "飲", read: "in / nomu", meaning: "minum", level: "N4" },
    { char: "休", read: "kyuu / yasumu", meaning: "beristirahat", level: "N4" },
    { char: "宿", read: "shuku / yado", meaning: "penginapan", level: "N4" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N4" },
    { char: "電", read: "den", meaning: "listrik", level: "N4" },
    { char: "車", read: "sha / kuruma", meaning: "kendaraan", level: "N4" },
    { char: "船", read: "sen / fune", meaning: "kapal", level: "N4" },
    { char: "飛", read: "hi / tobu", meaning: "terbang", level: "N4" },
    { char: "走", read: "sou / hashiru", meaning: "berlari", level: "N4" },
    { char: "休", read: "kyuu / yasumu", meaning: "istirahat", level: "N4" },
    { char: "起", read: "ki / okiru", meaning: "bangun", level: "N4" },
    { char: "寝", read: "shin / neru", meaning: "tidur", level: "N4" },
    { char: "学", read: "gaku / manabu", meaning: "belajar", level: "N5" },
    { char: "校", read: "kou / ko", meaning: "sekolah", level: "N5" },
    { char: "生", read: "sei / nama", meaning: "hidup, lahir", level: "N4" },
    { char: "先", read: "sen / saki", meaning: "sebelum", level: "N4" },
    { char: "友", read: "yuu / tomo", meaning: "teman", level: "N5" },
    { char: "親", read: "shin / oyaka", meaning: "orang tua", level: "N4" },
    { char: "手", read: "shu / te", meaning: "tangan", level: "N5" },
    { char: "足", read: "soku / ashi", meaning: "kaki", level: "N4" },
    { char: "目", read: "moku / me", meaning: "mata", level: "N5" },
    { char: "耳", read: "ji / mimi", meaning: "telinga", level: "N4" },
    { char: "口", read: "kou / kuchi", meaning: "mulut", level: "N5" },
    { char: "体", read: "tai / karada", meaning: "tubuh", level: "N4" },
    { char: "頭", read: "tou / atama", meaning: "kepala", level: "N4" },
    { char: "心", read: "shin / kokoro", meaning: "hati", level: "N4" },
    { char: "思", read: "shi / omou", meaning: "berpikir", level: "N4" },
    { char: "考", read: "kou / kangaeru", meaning: "berpikir", level: "N4" },
    { char: "知", read: "chi / shiru", meaning: "mengetahui", level: "N4" },
    { char: "信", read: "shin / shinjiru", meaning: "percaya", level: "N3" },
    { char: "愛", read: "ai / ai", meaning: "cinta", level: "N3" },
    { char: "安", read: "an / yasui", meaning: "aman, tenang", level: "N4" },
    { char: "完", read: "kan / kan", meaning: "selesai", level: "N3" },
    { char: "危", read: "ki / abunai", meaning: "berbahaya", level: "N3" },
    { char: "成", read: "sei / naru", meaning: "menjadi", level: "N3" },
    { char: "進", read: "shin / susumu", meaning: "maju", level: "N3" },
    { char: "美", read: "bi / utsukushii", meaning: "indah", level: "N3" },
    { char: "強", read: "kyou / tsuyoi", meaning: "kuat", level: "N3" },
    { char: "弱", read: "jaku / yowai", meaning: "lemah", level: "N3" },
    { char: "長", read: "chou / nagai", meaning: "panjang", level: "N3" },
    { char: "短", read: "tan / mijikai", meaning: "pendek", level: "N3" },
    { char: "高", read: "kou / takai", meaning: "tinggi", level: "N3" },
    { char: "低", read: "tei / hikui", meaning: "rendah", level: "N3" },
    { char: "速", read: "soku / hayai", meaning: "cepat", level: "N3" },
    { char: "遅", read: "chi / osoi", meaning: "lambat", level: "N3" },
    { char: "近", read: "kin / chikai", meaning: "dekat", level: "N3" },
    { char: "遠", read: "en / tooi", meaning: "jauh", level: "N3" },
    { char: "多", read: "ta / ooi", meaning: "banyak", level: "N3" },
    { char: "少", read: "shou / sukunai", meaning: "sedikit", level: "N3" },
    { char: "新", read: "shin / atarashii", meaning: "baru", level: "N3" },
    { char: "旧", read: "kyuu / furui", meaning: "lama", level: "N3" },
    { char: "冷", read: "rei / tsumetai", meaning: "dingin", level: "N3" },
    { char: "熱", read: "netsu / atsui", meaning: "panas", level: "N3" },
    { char: "空", read: "kuu / sora", meaning: "kosong", level: "N4" },
    { char: "昼", read: "chuu / hiru", meaning: "siang", level: "N3" },
    { char: "夜", read: "ya / yoru", meaning: "malam", level: "N3" },
    { char: "春", read: "shun / haru", meaning: "musim semi", level: "N3" },
    { char: "夏", read: "ka / natsu", meaning: "musim panas", level: "N3" },
    { char: "秋", read: "shuu / aki", meaning: "musim gugur", level: "N3" },
    { char: "冬", read: "tou / fuyu", meaning: "musim dingin", level: "N3" },
    { char: "風", read: "fuu / kaze", meaning: "angin", level: "N3" },
    { char: "雲", read: "un / kumo", meaning: "awan", level: "N3" },
    { char: "雪", read: "setsu / yuki", meaning: "salju", level: "N3" },
    { char: "山", read: "san / yama", meaning: "gunung", level: "N5" },
    { char: "川", read: "sen / kawa", meaning: "sungai", level: "N5" },
    { char: "海", read: "kai / umi", meaning: "laut", level: "N4" },
    { char: "田", read: "den / ta", meaning: "sawah", level: "N4" },
    { char: "森", read: "shin / mori", meaning: "hutan", level: "N3" },
    { char: "公", read: "kou / ou", meaning: "publik", level: "N3" },
    { char: "園", read: "en / sono", meaning: "taman", level: "N3" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N4" },
    { char: "茶", read: "cha / cha", meaning: "teh", level: "N4" },
    { char: "飯", read: "han / meshi", meaning: "nasi, makanan", level: "N3" },
    { char: "肉", read: "niku / niku", meaning: "daging", level: "N4" },
    { char: "魚", read: "gyo / sakana", meaning: "ikan", level: "N4" },
    { char: "野", read: "ya / no", meaning: "lapangan", level: "N3" },
    { char: "村", read: "son / mura", meaning: "desa", level: "N3" },
    { char: "町", read: "chou / machi", meaning: "kota", level: "N3" },
    { char: "都", read: "to / miyako", meaning: "ibu kota", level: "N3" },
    { char: "京", read: "kyou / kyo", meaning: "kota", level: "N3" },
    { char: "市", read: "shi / ichi", meaning: "kota", level: "N3" },
    { char: "室", read: "shitsu / muro", meaning: "ruangan", level: "N3" },
    { char: "机", read: "ki / tsukue", meaning: "meja", level: "N3" },
    { char: "椅", read: "i / isu", meaning: "kursi", level: "N3" },
    { char: "灯", read: "tou / hi", meaning: "lampu", level: "N3" },
    { char: "雨", read: "u / ame", meaning: "hujan", level: "N4" },
    { char: "雪", read: "setsu / yuki", meaning: "salju", level: "N3" },
    { char: "雲", read: "un / kumo", meaning: "awan", level: "N3" },
    { char: "星", read: "sei / hoshi", meaning: "bintang", level: "N3" },
    { char: "光", read: "kou / hikari", meaning: "cahaya", level: "N3" },
    { char: "日", read: "nichi / hi", meaning: "hari", level: "N5" },
    { char: "会", read: "kai / au", meaning: "bertemu", level: "N3" },
    { char: "社", read: "sha / yashiro", meaning: "tempat ibadah", level: "N3" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N4" },
    { char: "道", read: "dou / michi", meaning: "jalan", level: "N4" },
    { char: "案", read: "an / an", meaning: "rencana", level: "N3" },
    { char: "問", read: "mon / tou", meaning: "bertanya", level: "N3" }
];

const bonusKanjiData = [
    { char: "会", read: "kai / au", meaning: "bertemu", level: "N3" },
    { char: "社", read: "sha / yashiro", meaning: "perusahaan / kuil", level: "N3" },
    { char: "神", read: "shin / kami", meaning: "dewa / roh", level: "N3" },
    { char: "話", read: "wa / hanasu", meaning: "percakapan", level: "N4" },
    { char: "読", read: "doku / yomu", meaning: "membaca", level: "N4" },
    { char: "書", read: "sho / kaku", meaning: "menulis", level: "N4" },
    { char: "計", read: "kei / hakaru", meaning: "menghitung", level: "N3" },
    { char: "画", read: "ga / egaku", meaning: "gambar", level: "N3" },
    { char: "紙", read: "shi / kami", meaning: "kertas", level: "N4" },
    { char: "箱", read: "kou / hako", meaning: "kotak", level: "N3" },
    { char: "音", read: "on / oto", meaning: "suara", level: "N4" },
    { char: "楽", read: "raku / tanoshii", meaning: "nyaman / menyenangkan", level: "N3" },
    { char: "練", read: "ren / neru", meaning: "latihan", level: "N3" },
    { char: "習", read: "shuu / narau", meaning: "belajar", level: "N3" },
    { char: "宿", read: "shuku / yado", meaning: "penginapan", level: "N4" },
    { char: "借", read: "sha / kariru", meaning: "meminjam", level: "N3" },
    { char: "返", read: "hen / kaesu", meaning: "mengembalikan", level: "N3" },
    { char: "送", read: "sou / okuru", meaning: "mengirim", level: "N3" },
    { char: "迎", read: "gei / mukaeru", meaning: "menyambut", level: "N3" },
    { char: "祝", read: "shuku / iwau", meaning: "merayakan", level: "N3" }
];

kanjiData.push(...bonusKanjiData);

const extraKanjiVocabulary = [
    ["学校", "gakkou", "sekolah", "N5"],
    ["学生", "gakusei", "pelajar", "N5"],
    ["先生", "sensei", "guru", "N5"],
    ["友達", "tomodachi", "teman", "N5"],
    ["自転車", "jitensha", "sepeda", "N5"],
    ["電車", "densha", "kereta listrik", "N5"],
    ["駅前", "ekimae", "depan stasiun", "N5"],
    ["教室", "kyoushitsu", "kelas", "N5"],
    ["図書館", "toshokan", "perpustakaan", "N4"],
    ["先生", "sensei", "guru", "N5"],
    ["質問", "shitsumon", "pertanyaan", "N4"],
    ["回答", "kaitou", "jawaban", "N4"],
    ["説明", "setsumei", "penjelasan", "N4"],
    ["注意", "chui", "perhatian", "N4"],
    ["安全", "anzen", "aman", "N4"],
    ["危険", "kiken", "bahaya", "N4"],
    ["問題", "mondai", "soal", "N4"],
    ["準備", "junbi", "persiapan", "N4"],
    ["開始", "kaishi", "mulai", "N4"],
    ["終了", "shuuryou", "selesai", "N4"],
    ["報告", "houkoku", "laporan", "N4"],
    ["連絡", "renraku", "kontak", "N4"],
    ["相談", "soudan", "konsultasi", "N4"],
    ["経験", "keiken", "pengalaman", "N4"],
    ["研究", "kenkyuu", "penelitian", "N4"],
    ["発表", "happyou", "presentasi", "N4"],
    ["地図", "chizu", "peta", "N4"],
    ["天気", "tenki", "cuaca", "N5"],
    ["晴れ", "hare", "cerah", "N5"],
    ["曇り", "kumori", "berawan", "N5"],
    ["海岸", "kaigan", "pantai", "N4"],
    ["道路", "douro", "jalan raya", "N4"],
    ["信号", "shingou", "lampu lalu lintas", "N4"],
    ["交通", "koutsuu", "transportasi", "N4"],
    ["買う", "kau", "membeli", "N5"],
    ["売る", "uru", "menjual", "N5"],
    ["値段", "nedan", "harga", "N4"],
    ["代金", "daikin", "biaya", "N4"],
    ["給料", "kyuuryou", "gaji", "N4"],
    ["収入", "shuunyuu", "pendapatan", "N4"],
    ["支出", "shishutsu", "pengeluaran", "N4"],
    ["貯金", "chokin", "menabung", "N4"],
    ["会社", "kaisha", "perusahaan", "N5"],
    ["出勤", "shukkin", "masuk kerja", "N4"],
    ["遅刻", "chikoku", "terlambat", "N4"],
    ["欠席", "kesseki", "absen", "N4"],
    ["休憩", "kyukei", "istirahat", "N4"],
    ["昼休み", "hiruyasumi", "istirahat siang", "N4"],
    ["会議", "kaigi", "rapat", "N4"],
    ["写真", "shashin", "foto", "N5"],
    ["机", "tsukue", "meja", "N5"],
    ["椅子", "isu", "kursi", "N5"],
    ["鍵", "kagi", "kunci", "N5"],
    ["財布", "saifu", "dompet", "N5"],
    ["掃除", "souji", "membersihkan", "N4"],
    ["洗濯", "sentaku", "mencuci", "N4"],
    ["料理", "ryouri", "memasak", "N4"],
    ["野菜", "yasai", "sayur", "N4"],
    ["果物", "kudamono", "buah", "N4"],
    ["牛乳", "gyuunyuu", "susu", "N4"],
    ["生活", "seikatsu", "kehidupan", "N4"],
    ["仕事", "shigoto", "pekerjaan", "N4"],
    ["労働", "roudou", "kerja", "N4"],
    ["病気", "byouki", "sakit", "N4"],
    ["健康", "kenkou", "sehat", "N4"],
    ["元気", "genki", "semangat", "N5"],
    ["体調", "taichou", "kondisi tubuh", "N4"],
    ["気持ち", "kimochi", "perasaan", "N4"],
    ["感謝", "kansha", "syukur", "N4"],
    ["ありがとう", "arigatou", "terima kasih", "N5"],
    ["ごめんなさい", "gomen nasai", "maaf", "N5"],
    ["お願い", "onegai", "permohonan", "N5"],
    ["家族", "kazoku", "keluarga", "N5"],
    ["子供", "kodomo", "anak", "N5"],
    ["親", "oya", "orang tua", "N4"],
    ["男女", "danjo", "laki-laki perempuan", "N4"],
    ["結婚", "kekkon", "nikah", "N4"],
    ["離婚", "rikon", "cerai", "N4"],
    ["育児", "ikuji", "mengasuh anak", "N4"],
    ["教育", "kyouiku", "pendidikan", "N4"],
    ["学生", "gakusei", "pelajar", "N5"],
    ["卒業", "sotsugyou", "wisuda", "N4"],
    ["受験", "juken", "ujian masuk", "N4"],
    ["試験", "shiken", "ujian", "N4"],
    ["合格", "goukaku", "lulus", "N4"],
    ["成績", "seiseki", "nilai", "N4"],
    ["進歩", "shinpo", "kemajuan", "N4"],
    ["改善", "kaizen", "perbaikan", "N4"],
    ["更新", "koushin", "pembaruan", "N4"],
    ["申請", "shinsei", "permohonan", "N4"],
    ["承認", "shounin", "persetujuan", "N4"],
    ["利用", "riyou", "penggunaan", "N4"],
    ["保存", "hozon", "penyimpanan", "N4"],
    ["変更", "henkou", "perubahan", "N4"],
    ["確認", "kakunin", "konfirmasi", "N4"],
    ["判断", "handan", "keputusan", "N4"],
    ["商品", "shouhin", "produk", "N4"],
    ["販売", "hanbai", "penjualan", "N4"],
    ["予約", "yoyaku", "reservasi", "N4"],
    ["案内", "annai", "petunjuk", "N4"],
    ["旅行", "ryokou", "travel", "N4"],
    ["出発", "shuppatsu", "berangkat", "N4"],
    ["到着", "touchaku", "tiba", "N4"],
    ["乗換", "norikae", "berpindah kereta", "N4"],
    ["新幹線", "shinkansen", "kereta cepat", "N4"],
    ["電車", "densha", "kereta listrik", "N5"],
    ["特急", "tokkyuu", "kereta ekspres", "N4"],
    ["急行", "kyuukou", "kereta cepat", "N4"],
    ["改札", "kaisatsu", "gerbang masuk", "N5"],
    ["ホーム", "houmu", "peron", "N4"],
    ["切符", "kippu", "tiket", "N5"],
    ["定期券", "teikiken", "kartu langganan", "N4"],
    ["観光", "kankou", "wisata", "N4"],
    ["観光客", "kankoukyaku", "wisatawan", "N4"],
    ["宿泊", "shukuhaku", "penginapan", "N4"],
    ["温泉", "onsen", "air panas", "N4"],
    ["食堂", "shokudou", "kantin", "N5"],
    ["コンビニ", "konbini", "mini market", "N5"],
    ["郵便局", "yuubinkyoku", "kantor pos", "N5"],
    ["銀行", "ginkou", "bank", "N5"],
    ["病院", "byouin", "rumah sakit", "N5"],
    ["美容院", "biyouin", "salon", "N4"],
    ["医院", "iin", "klinik", "N4"],
    ["薬局", "yakkyoku", "apotek", "N4"],
    ["看護師", "kangoshi", "perawat", "N4"],
    ["医者", "isha", "dokter", "N4"],
    ["診察", "shinsatsu", "pemeriksaan", "N4"],
    ["治療", "chiryou", "pengobatan", "N4"],
    ["薬", "kusuri", "obat", "N5"],
    ["注射", "chusha", "suntik", "N4"],
    ["入院", "nyuuin", "rawat inap", "N4"],
    ["退院", "taiin", "pulang rawat", "N4"],
    ["事故", "jiko", "kecelakaan", "N4"],
    ["防止", "bouji", "pencegahan", "N4"],
    ["安全対策", "anzen taisaku", "langkah keamanan", "N4"],
    ["救急", "kyuu-kyuu", "darurat", "N4"],
    ["避難", "hinan", "evakuasi", "N4"],
    ["過去", "kakou", "masa lalu", "N4"],
    ["現在", "genzai", "masa kini", "N4"],
    ["未来", "mirai", "masa depan", "N4"],
    ["日常", "nichijou", "kehidupan sehari-hari", "N4"],
    ["今日", "kyou", "hari ini", "N5"],
    ["明日", "ashita", "besok", "N5"],
    ["昨日", "kinou", "kemarin", "N5"],
    ["今年", "kotoshi", "tahun ini", "N5"],
    ["来年", "rainen", "tahun depan", "N5"],
    ["去年", "kyonen", "tahun lalu", "N5"],
    ["朝食", "asagohan", "sarapan", "N5"],
    ["昼食", "hirugohan", "makan siang", "N5"],
    ["夕食", "yuushoku", "makan malam", "N5"],
    ["飲み物", "nomimono", "minuman", "N5"],
    ["食事", "shokuji", "makanan", "N5"],
    ["料理人", "ryourinin", "koki", "N4"],
    ["注文", "chuumon", "pesanan", "N4"],
    ["支払い", "shiharai", "pembayaran", "N4"],
    ["返金", "henkin", "pengembalian uang", "N4"],
    ["割引", "waribiki", "diskon", "N4"],
    ["証明", "shoumei", "bukti", "N4"],
    ["登録", "touroku", "pendaftaran", "N4"],
    ["申込", "moushikomi", "pendaftaran", "N4"],
    ["利用者", "riyousha", "pengguna", "N4"],
    ["管理", "kanri", "manajemen", "N4"],
    ["情報", "jouhou", "informasi", "N4"],
    ["個人情報", "kojin jouhou", "data pribadi", "N4"],
    ["受付", "uketsuke", "resepsionis", "N4"],
    ["地震", "jishin", "gempa bumi", "N4"],
    ["台風", "taifuu", "angin topan", "N4"],
    ["火災", "kasai", "kebakaran", "N4"],
    ["水害", "suigai", "banjir", "N4"],
    ["天候", "tenkou", "cuaca", "N4"],
    ["気温", "kion", "suhu udara", "N4"],
    ["湿度", "shitsudo", "kelembaban", "N4"],
    ["気圧", "kiatsu", "tekanan udara", "N4"],
    ["雲", "kumo", "awan", "N5"],
    ["雨", "ame", "hujan", "N5"],
    ["雪", "yuki", "salju", "N5"],
    ["風", "kaze", "angin", "N5"],
    ["春", "haru", "musim semi", "N5"],
    ["夏", "natsu", "musim panas", "N5"],
    ["秋", "aki", "musim gugur", "N5"],
    ["冬", "fuyu", "musim dingin", "N5"],
    ["空", "sora", "langit", "N5"],
    ["海", "umi", "laut", "N5"],
    ["山", "yama", "gunung", "N5"],
    ["川", "kawa", "sungai", "N5"],
    ["木", "ki", "pohon", "N5"],
    ["花", "hana", "bunga", "N5"],
    ["草", "kusa", "rumput", "N5"],
    ["森", "mori", "hutan", "N4"],
    ["星", "hoshi", "bintang", "N4"],
    ["光", "hikari", "cahaya", "N4"],
    ["音", "oto", "suara", "N4"],
    ["声", "koe", "suara", "N4"],
    ["会話", "kaiwa", "percakapan", "N4"],
    ["語学", "gogaku", "bahasa", "N4"],
    ["文書", "bunsho", "dokumen", "N4"],
    ["文章", "bunshou", "kalimat", "N4"],
    ["作文", "sakubun", "karangan", "N4"],
    ["辞書", "jisho", "kamus", "N4"],
    ["文法", "bunpou", "tata bahasa", "N4"],
    ["発音", "hatsuon", "pengucapan", "N4"],
    ["意味", "imi", "arti", "N4"],
    ["表現", "hyougen", "ekspresi", "N4"],
    ["設定", "settei", "pengaturan", "N4"],
    ["動作", "dousa", "gerakan", "N4"],
    ["操作", "sousa", "operasi", "N4"],
    ["経験", "keiken", "pengalaman", "N4"],
    ["準備", "junbi", "persiapan", "N4"],
    ["説明", "setsumei", "penjelasan", "N4"],
    ["質問", "shitsumon", "pertanyaan", "N4"],
    ["返事", "henji", "balasan", "N4"],
    ["興味", "kyoumi", "minat", "N4"],
    ["趣味", "shumi", "hobi", "N4"],
    ["運動", "undou", "olahraga", "N5"],
    ["勉強", "benkyou", "belajar", "N5"],
    ["読書", "dokusho", "membaca buku", "N4"],
    ["映画", "eiga", "film", "N4"],
    ["音楽", "ongaku", "musik", "N4"],
    ["新聞", "shinbun", "koran", "N5"],
    ["雑誌", "zasshi", "majalah", "N4"],
    ["本棚", "hondana", "rak buku", "N4"],
    ["日記", "nikki", "catatan harian", "N4"],
    ["手帳", "techou", "buku catatan", "N4"],
    ["ノート", "nooto", "buku tulis", "N5"],
    ["ペン", "pen", "pena", "N5"],
    ["鉛筆", "enpitsu", "pensil", "N5"],
    ["消しゴム", "keshi gomu", "penghapus", "N5"],
    ["紙", "kami", "kertas", "N5"],
    ["教科書", "kyoukasho", "buku pelajaran", "N4"],
    ["辞典", "jiten", "ensiklopedia", "N4"],
    ["漢字", "kanji", "huruf kanji", "N5"],
    ["ひらがな", "hiragana", "hiragana", "N5"],
    ["カタカナ", "katakana", "katakana", "N5"],
    ["発展", "hatten", "perkembangan", "N4"],
    ["成功", "seikou", "sukses", "N4"],
    ["失敗", "shippai", "gagal", "N4"],
    ["可能", "kanou", "mungkin", "N4"],
    ["不可能", "fukanou", "mustahil", "N4"],
    ["理由", "riyuu", "alasan", "N4"],
    ["結果", "kekka", "hasil", "N4"],
    ["状態", "joutai", "keadaan", "N4"],
    ["関係", "kankei", "hubungan", "N4"]
];

const generatedKanjiExpansion = [];
const seenKanji = new Set();
const kanjiPatternPrefixes = [
    { char: "学", read: "gaku", meaning: "belajar", level: "N5" },
    { char: "校", read: "kou", meaning: "sekolah", level: "N5" },
    { char: "教", read: "kyou", meaning: "mengajar", level: "N5" },
    { char: "文", read: "bun", meaning: "tulisan", level: "N5" },
    { char: "理", read: "ri", meaning: "logika", level: "N5" },
    { char: "社", read: "sha", meaning: "perusahaan", level: "N4" },
    { char: "会", read: "kai", meaning: "pertemuan", level: "N4" },
    { char: "旅", read: "ryo", meaning: "perjalanan", level: "N4" },
    { char: "食", read: "shoku", meaning: "makanan", level: "N5" },
    { char: "休", read: "kyuu", meaning: "istirahat", level: "N5" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N5" },
    { char: "電", read: "den", meaning: "listrik", level: "N5" },
    { char: "車", read: "sha", meaning: "kendaraan", level: "N5" },
    { char: "海", read: "kai", meaning: "laut", level: "N4" },
    { char: "山", read: "san", meaning: "gunung", level: "N5" },
    { char: "雨", read: "u", meaning: "hujan", level: "N5" },
    { char: "雪", read: "setsu", meaning: "salju", level: "N5" },
    { char: "友", read: "yuu", meaning: "teman", level: "N5" },
    { char: "家", read: "ka", meaning: "rumah", level: "N5" },
    { char: "国", read: "koku", meaning: "negara", level: "N4" },
    { char: "都", read: "to", meaning: "kota", level: "N4" },
    { char: "市", read: "shi", meaning: "kota", level: "N4" },
    { char: "村", read: "son", meaning: "desa", level: "N4" },
    { char: "室", read: "shitsu", meaning: "ruangan", level: "N4" },
    { char: "店", read: "ten", meaning: "toko", level: "N5" },
    { char: "園", read: "en", meaning: "taman", level: "N4" },
    { char: "病", read: "byou", meaning: "sakit", level: "N4" },
    { char: "医", read: "i", meaning: "dokter", level: "N4" },
    { char: "薬", read: "yaku", meaning: "obat", level: "N4" },
    { char: "金", read: "kin", meaning: "uang", level: "N5" },
    { char: "銀", read: "gin", meaning: "perak", level: "N4" },
    { char: "運", read: "un", meaning: "angkutan", level: "N4" },
    { char: "動", read: "dou", meaning: "gerak", level: "N4" },
    { char: "開", read: "kai", meaning: "buka", level: "N4" },
    { char: "閉", read: "hei", meaning: "tutup", level: "N4" },
    { char: "見", read: "ken", meaning: "lihat", level: "N5" },
    { char: "聞", read: "bun", meaning: "dengar", level: "N4" },
    { char: "話", read: "wa", meaning: "bicara", level: "N4" },
    { char: "読", read: "doku", meaning: "baca", level: "N5" },
    { char: "書", read: "sho", meaning: "tulis", level: "N5" },
    { char: "送", read: "sou", meaning: "kirim", level: "N4" },
    { char: "受", read: "ju", meaning: "terima", level: "N4" },
    { char: "明", read: "mei", meaning: "terang", level: "N4" },
    { char: "朝", read: "chou", meaning: "pagi", level: "N5" },
    { char: "夜", read: "ya", meaning: "malam", level: "N5" },
    { char: "昼", read: "chuu", meaning: "siang", level: "N5" },
    { char: "春", read: "shun", meaning: "semi", level: "N4" },
    { char: "夏", read: "ka", meaning: "panas", level: "N4" },
    { char: "秋", read: "shuu", meaning: "gugur", level: "N4" },
    { char: "冬", read: "tou", meaning: "dingin", level: "N4" },
    { char: "風", read: "fuu", meaning: "angin", level: "N4" },
    { char: "空", read: "kuu", meaning: "langit", level: "N5" },
    { char: "地", read: "chi", meaning: "tanah", level: "N4" },
    { char: "体", read: "tai", meaning: "tubuh", level: "N4" },
    { char: "手", read: "shu", meaning: "tangan", level: "N5" },
    { char: "足", read: "soku", meaning: "kaki", level: "N4" },
    { char: "目", read: "moku", meaning: "mata", level: "N5" },
    { char: "耳", read: "ji", meaning: "telinga", level: "N4" },
    { char: "口", read: "kou", meaning: "mulut", level: "N5" },
    { char: "心", read: "shin", meaning: "hati", level: "N4" },
    { char: "考", read: "kou", meaning: "pikir", level: "N4" },
    { char: "知", read: "chi", meaning: "tahu", level: "N4" },
    { char: "美", read: "bi", meaning: "indah", level: "N4" },
    { char: "強", read: "kyou", meaning: "kuat", level: "N4" },
    { char: "弱", read: "jaku", meaning: "lemah", level: "N4" },
    { char: "長", read: "chou", meaning: "panjang", level: "N4" },
    { char: "短", read: "tan", meaning: "pendek", level: "N4" },
    { char: "速", read: "soku", meaning: "cepat", level: "N4" },
    { char: "近", read: "kin", meaning: "dekat", level: "N4" },
    { char: "遠", read: "en", meaning: "jauh", level: "N4" },
    { char: "多", read: "ta", meaning: "banyak", level: "N4" },
    { char: "少", read: "shou", meaning: "sedikit", level: "N4" }
];

const kanjiPatternSuffixes = [
    { char: "生", read: "sei", meaning: "hidup", level: "N5" },
    { char: "校", read: "kou", meaning: "sekolah", level: "N5" },
    { char: "室", read: "shitsu", meaning: "ruangan", level: "N4" },
    { char: "館", read: "kan", meaning: "gedung", level: "N4" },
    { char: "所", read: "sho", meaning: "tempat", level: "N4" },
    { char: "場", read: "jou", meaning: "tempat", level: "N4" },
    { char: "車", read: "sha", meaning: "kendaraan", level: "N5" },
    { char: "店", read: "ten", meaning: "toko", level: "N5" },
    { char: "会", read: "kai", meaning: "pertemuan", level: "N4" },
    { char: "前", read: "mae", meaning: "depan", level: "N5" },
    { char: "後", read: "go", meaning: "belakang", level: "N5" },
    { char: "上", read: "jyou", meaning: "atas", level: "N5" },
    { char: "下", read: "ka", meaning: "bawah", level: "N5" },
    { char: "中", read: "chuu", meaning: "tengah", level: "N5" },
    { char: "外", read: "soto", meaning: "luar", level: "N5" },
    { char: "内", read: "uchi", meaning: "dalam", level: "N5" },
    { char: "人", read: "jin", meaning: "orang", level: "N5" },
    { char: "語", read: "go", meaning: "bahasa", level: "N4" },
    { char: "法", read: "hou", meaning: "aturan", level: "N4" },
    { char: "科", read: "ka", meaning: "ilmu", level: "N4" },
    { char: "気", read: "ki", meaning: "udara", level: "N4" },
    { char: "力", read: "ryoku", meaning: "kekuatan", level: "N4" },
    { char: "園", read: "en", meaning: "taman", level: "N4" },
    { char: "山", read: "san", meaning: "gunung", level: "N5" },
    { char: "川", read: "kawa", meaning: "sungai", level: "N5" },
    { char: "海", read: "kai", meaning: "laut", level: "N5" },
    { char: "雨", read: "ame", meaning: "hujan", level: "N5" },
    { char: "雪", read: "yuki", meaning: "salju", level: "N5" },
    { char: "日", read: "hi", meaning: "hari", level: "N5" },
    { char: "年", read: "nen", meaning: "tahun", level: "N5" },
    { char: "月", read: "tsuki", meaning: "bulan", level: "N5" },
    { char: "門", read: "mon", meaning: "gerbang", level: "N4" },
    { char: "路", read: "ro", meaning: "jalan", level: "N4" },
    { char: "道", read: "dou", meaning: "jalan", level: "N4" },
    { char: "駅", read: "eki", meaning: "stasiun", level: "N5" },
    { char: "線", read: "sen", meaning: "jalur", level: "N4" },
    { char: "船", read: "sen", meaning: "kapal", level: "N4" },
    { char: "計", read: "kei", meaning: "perhitungan", level: "N4" },
    { char: "表", read: "hyou", meaning: "tabel", level: "N4" },
    { char: "報", read: "hou", meaning: "laporan", level: "N4" },
    { char: "案", read: "an", meaning: "rencana", level: "N4" },
    { char: "問", read: "mon", meaning: "pertanyaan", level: "N4" },
    { char: "感", read: "kan", meaning: "perasaan", level: "N4" },
    { char: "想", read: "sou", meaning: "pikiran", level: "N4" },
    { char: "現", read: "gen", meaning: "sekarang", level: "N4" },
    { char: "状", read: "jou", meaning: "keadaan", level: "N4" },
    { char: "機", read: "ki", meaning: "mesin", level: "N4" },
    { char: "能", read: "nou", meaning: "kemampuan", level: "N4" },
    { char: "公", read: "kou", meaning: "publik", level: "N4" },
    { char: "育", read: "iku", meaning: "pendidikan", level: "N4" },
    { char: "習", read: "shuu", meaning: "latihan", level: "N4" },
    { char: "係", read: "kakari", meaning: "tugas", level: "N4" },
    { char: "関", read: "kan", meaning: "hubungan", level: "N4" },
    { char: "港", read: "kou", meaning: "pelabuhan", level: "N4" },
    { char: "宿", read: "shuku", meaning: "penginapan", level: "N4" },
    { char: "客", read: "kyaku", meaning: "penumpang", level: "N4" },
    { char: "観", read: "kan", meaning: "pengamatan", level: "N4" },
    { char: "光", read: "kou", meaning: "cahaya", level: "N4" }
];

for (const prefix of kanjiPatternPrefixes) {
    for (const suffix of kanjiPatternSuffixes) {
        const word = `${prefix.char}${suffix.char}`;
        if (word.length > 4 || word.length < 2 || seenKanji.has(word)) {
            continue;
        }
        seenKanji.add(word);
        generatedKanjiExpansion.push({
            char: word,
            read: `${prefix.read} / ${suffix.read}`,
            meaning: `${prefix.meaning} / ${suffix.meaning}`,
            level: prefix.level === "N4" || suffix.level === "N4" ? "N4" : "N5"
        });
        if (generatedKanjiExpansion.length >= 520) {
            break;
        }
    }
    if (generatedKanjiExpansion.length >= 520) {
        break;
    }
}

const mergedKanjiData = [...kanjiData, ...extraKanjiVocabulary.map(([char, read, meaning, level]) => ({
    char,
    read,
    meaning,
    level
})), ...generatedKanjiExpansion];

kanjiData.push(...mergedKanjiData.slice(kanjiData.length));

function deduplicateKanjiData() {
    const cleaned = deduplicateKanjiEntries(kanjiData);
    const unique = new Map();
    const levelPriority = { N5: 3, N4: 2, N3: 1 };

    cleaned.forEach(item => {
        if (!item || !item.char) {
            return;
        }

        const normalized = {
            char: item.char.trim(),
            read: item.read || "",
            meaning: item.meaning || "Kanji",
            level: ["N5", "N4", "N3"].includes(item.level) ? item.level : "N4"
        };

        const existing = unique.get(normalized.char);

        if (!existing) {
            unique.set(normalized.char, normalized);
            return;
        }

        const currentPriority = levelPriority[normalized.level] || 0;
        const existingPriority = levelPriority[existing.level] || 0;

        if (currentPriority > existingPriority) {
            unique.set(normalized.char, normalized);
        } else if (currentPriority === existingPriority && (!existing.meaning || existing.meaning.length < normalized.meaning.length)) {
            unique.set(normalized.char, normalized);
        }
    });

    kanjiData.length = 0;
    kanjiData.push(...Array.from(unique.values()).sort((a, b) => a.char.localeCompare(b.char, "ja")));
}

deduplicateKanjiData();

/* =====================================================
   STATE
===================================================== */

const STORAGE_KEY = "nihongoKu";
const LEGACY_STORAGE_KEY = "nihongoMaster";

let appData = {
    xp: 0,
    lessons: 0,
    correct: 0,
    streak: 1,
    progress: {
        hiragana: 0,
        katakana: 0,
        kanji: 0,
        vocabulary: 0,
        quiz: 0
    },
    account: {
        loggedIn: false,
        name: "Pelajar",
        email: "",
        provider: "Gmail"
    }
};


const QUIZ_PER_DAY = 20;

let quizState = {
    current: 0,
    score: 0,
    questions: [],
    answered: false,
    totalQuestions: QUIZ_PER_DAY
};


let selectedCharacter = null;


/* =====================================================
   LOAD DATA
===================================================== */

function normalizeProgressState() {
    appData.progress = {
        hiragana: 0,
        katakana: 0,
        kanji: 0,
        vocabulary: 0,
        quiz: 0,
        ...(appData.progress || {})
    };
}

function normalizeAccountState() {
    appData.account = {
        loggedIn: false,
        name: "Pelajar",
        email: "",
        provider: "Gmail",
        ...(appData.account || {})
    };
}

function loadData() {
    const saved =
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem(LEGACY_STORAGE_KEY);

    if (saved) {
        const parsed = JSON.parse(saved);
        appData = {
            ...appData,
            ...parsed,
            progress: {
                ...appData.progress,
                ...(parsed.progress || {})
            },
            account: {
                ...appData.account,
                ...(parsed.account || {})
            }
        };
    }

    normalizeProgressState();
    normalizeAccountState();
    syncAccountState();
    updateStats();
}

/* =====================================================
   SAVE DATA
===================================================== */

function saveData() {
    normalizeProgressState();
    normalizeAccountState();

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(appData)
    );

    localStorage.setItem(
        LEGACY_STORAGE_KEY,
        JSON.stringify(appData)
    );
}


/* =====================================================
   UPDATE STATISTICS
===================================================== */

function updateProgressVisuals() {
    const progressMap = {
        hiragana: ["hiraganaProgressBar", "hiraganaProgressText"],
        katakana: ["katakanaProgressBar", "katakanaProgressText"],
        kanji: ["kanjiProgressBar", "kanjiProgressText"],
        vocabulary: [null, null],
        quiz: ["quizProgressBar", null]
    };

    Object.entries(progressMap).forEach(([key, [barId, textId]]) => {
        const percent = Math.min(100, Math.max(0, Number(appData.progress?.[key] || 0)));

        if (barId) {
            const bar = document.getElementById(barId);
            if (bar) {
                bar.style.width = `${percent}%`;
            }
        }

        if (textId) {
            const text = document.getElementById(textId);
            if (text) {
                text.textContent = `${percent}%`;
            }
        }
    });

    const quizProgress = document.getElementById("quizProgressBar");
    if (quizProgress && !quizState.questions.length) {
        quizProgress.style.width = `${Math.min(100, Number(appData.progress?.quiz || 0))}%`;
    }
}

function updateStats() {

    document.getElementById("xpCount").textContent =
        appData.xp;

    document.getElementById("dashboardXP").textContent =
        appData.xp;

    appData.lessons = Math.max(
        appData.lessons,
        Object.values(appData.progress || {}).filter(value => Number(value) >= 100).length
    );

    document.getElementById("lessonCount").textContent =
        appData.lessons;

    document.getElementById("correctCount").textContent =
        appData.correct;

    document.getElementById("streakCount").textContent =
        appData.streak;

    document.getElementById("dashboardStreak").textContent =
        appData.streak + " hari";

    document.getElementById("quizXP").textContent =
        quizState.score;

    const profileXP = document.getElementById("profileXP");
    if (profileXP) {
        profileXP.textContent = appData.xp;
    }

    const profileStreak = document.getElementById("profileStreak");
    if (profileStreak) {
        profileStreak.textContent = appData.streak + " hari";
    }

    const profileCorrect = document.getElementById("profileCorrect");
    if (profileCorrect) {
        profileCorrect.textContent = appData.correct;
    }

    updateProgressVisuals();
}


/* =====================================================
   LOGIN PROFILE
===================================================== */

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const freeSignupButton = document.getElementById("openSignupButton");
const backToLoginButton = document.getElementById("backToLoginButton");
const providerButtons = document.querySelectorAll(".provider-button");
const logoutButton = document.getElementById("logoutButton");
const signupPrevButton = document.getElementById("signupPrevButton");
const signupNextButton = document.getElementById("signupNextButton");
const signupSubmitButton = document.getElementById("signupSubmitButton");
const signupSteps = document.querySelectorAll(".signup-step");
const signupIndicators = document.querySelectorAll(".signup-step-indicator");
const signupProgressFill = document.getElementById("signupProgressFill");
let signupCurrentStep = 0;

function updateSignupStepUI() {
    const totalSteps = signupSteps.length;
    signupSteps.forEach((step, index) => {
        const isActive = index === signupCurrentStep;
        step.classList.toggle("is-active", isActive);
        step.style.animation = isActive ? "fadeIn 0.28s ease" : "none";
    });

    signupIndicators.forEach((indicator, index) => {
        indicator.classList.toggle("is-active", index === signupCurrentStep);
    });

    if (signupProgressFill) {
        const progress = ((signupCurrentStep + 1) / totalSteps) * 100;
        signupProgressFill.style.width = `${progress}%`;
    }

    if (signupPrevButton) {
        signupPrevButton.classList.toggle("hidden", signupCurrentStep === 0);
    }

    if (signupNextButton) {
        signupNextButton.classList.toggle("hidden", signupCurrentStep === totalSteps - 1);
    }

    if (signupSubmitButton) {
        signupSubmitButton.classList.toggle("hidden", signupCurrentStep !== totalSteps - 1);
    }

    const summaryName = document.getElementById("signupSummaryName");
    const summaryEmail = document.getElementById("signupSummaryEmail");
    const summaryPhone = document.getElementById("signupSummaryPhone");

    if (summaryName) {
        const name = document.getElementById("signupName")?.value.trim() || "-";
        summaryName.textContent = name;
    }

    if (summaryEmail) {
        const email = document.getElementById("signupEmail")?.value.trim() || "-";
        summaryEmail.textContent = email;
    }

    if (summaryPhone) {
        const phone = document.getElementById("signupPhone")?.value.trim() || "-";
        summaryPhone.textContent = phone;
    }
}

function validateSignupStep(stepIndex) {
    if (stepIndex === 0) {
        const name = document.getElementById("signupName")?.value.trim() || "";
        const email = document.getElementById("signupEmail")?.value.trim() || "";

        if (!name) {
            return "Masukkan nama lengkap terlebih dahulu.";
        }

        if (!email || !email.includes("@")) {
            return "Masukkan email yang valid.";
        }

        return "";
    }

    if (stepIndex === 1) {
        const phone = document.getElementById("signupPhone")?.value.trim() || "";
        const password = document.getElementById("signupPassword")?.value || "";
        const confirmPassword = document.getElementById("signupConfirmPassword")?.value || "";

        if (!phone) {
            return "Masukkan nomor handphone.";
        }

        if (password.length < 8) {
            return "Password minimal 8 karakter.";
        }

        if (password !== confirmPassword) {
            return "Konfirmasi password tidak cocok.";
        }

        return "";
    }

    return "";
}

function toggleAuthForm(mode) {
    const forms = document.querySelectorAll(".auth-form");
    forms.forEach((form) => {
        form.classList.toggle("active", form.id === mode + "Form");
    });

    if (mode === "login") {
        signupCurrentStep = 0;
        updateSignupStepUI();
    }
}

function syncAccountState() {
    const sidebarName = document.querySelector(".sidebar-user strong");
    const sidebarRole = document.querySelector(".sidebar-user small");
    const profileDisplayName = document.getElementById("profileDisplayName");
    const profileStatus = document.getElementById("profileStatus");
    const emailInput = document.getElementById("profileEmail");
    const loginMessage = document.getElementById("loginMessage");

    const accountName = appData.account?.name || "Pelajar";
    const isLoggedIn = Boolean(appData.account?.loggedIn);

    if (sidebarName) {
        sidebarName.textContent = accountName;
    }

    if (sidebarRole) {
        sidebarRole.textContent = isLoggedIn ? `Akun ${appData.account?.provider || "aktif"}` : "Level Pemula";
    }

    if (profileDisplayName) {
        profileDisplayName.textContent = accountName;
    }

    if (profileStatus) {
        profileStatus.textContent = isLoggedIn ? "Sudah masuk" : "Belum masuk";
    }

    if (emailInput) {
        emailInput.value = isLoggedIn ? appData.account.email || emailInput.value : "";
    }

    if (loginMessage) {
        const shouldKeepVisible =
            loginMessage.textContent.trim() === "Kamu telah keluar dari akun." ||
            (isLoggedIn && loginMessage.textContent.trim().length > 0);

        loginMessage.classList.toggle("visible", shouldKeepVisible);
    }
}

function applyLoginState(emailValue, successLabel, providerName = "Gmail") {
    const emailInput = document.getElementById("profileEmail");
    const loginMessage = document.getElementById("loginMessage");

    if (!loginMessage) {
        return;
    }

    const email = (emailValue || (emailInput ? emailInput.value.trim() : "")).trim();
    const rawValue = email;
    const name = rawValue
        ? rawValue.replace(/[@._-]/g, " ").split(" ")[0]
        : "Pelajar";

    const displayName = name
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : "Pelajar";

    appData.account = {
        loggedIn: true,
        name: displayName,
        email,
        provider: providerName
    };

    saveData();
    syncAccountState();

    if (emailInput && !email) {
        emailInput.value = "pelajar@gmail.com";
    }

    loginMessage.textContent = successLabel;
    loginMessage.classList.add("visible");
}

function logoutAccount() {
    appData.account = {
        loggedIn: false,
        name: "Pelajar",
        email: "",
        provider: "Gmail"
    };

    const emailInput = document.getElementById("profileEmail");
    const passwordInput = document.getElementById("profilePassword");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.reset();
    }

    if (emailInput) {
        emailInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }

    if (loginMessage) {
        loginMessage.textContent = "Kamu telah keluar dari akun.";
        loginMessage.classList.add("visible");
    }

    syncAccountState();
    saveData();
}

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = document.getElementById("profileEmail");
        const email = emailInput ? emailInput.value.trim() : "";
        applyLoginState(email || "pelajar@gmail.com", "Login berhasil via Gmail. Selamat belajar!", "Gmail");
        loginForm.reset();
        if (emailInput) {
            emailInput.value = email || "pelajar@gmail.com";
        }
    });
}

if (freeSignupButton) {
    freeSignupButton.addEventListener("click", () => {
        signupCurrentStep = 0;
        updateSignupStepUI();
        toggleAuthForm("signup");
    });
}

if (backToLoginButton) {
    backToLoginButton.addEventListener("click", () => {
        toggleAuthForm("login");
    });
}

if (signupPrevButton) {
    signupPrevButton.addEventListener("click", () => {
        signupCurrentStep = Math.max(0, signupCurrentStep - 1);
        updateSignupStepUI();
    });
}

if (signupNextButton) {
    signupNextButton.addEventListener("click", () => {
        const validationMessage = validateSignupStep(signupCurrentStep);
        const loginMessage = document.getElementById("loginMessage");

        if (validationMessage) {
            if (loginMessage) {
                loginMessage.textContent = validationMessage;
                loginMessage.classList.add("visible");
            }
            return;
        }

        if (loginMessage) {
            loginMessage.classList.remove("visible");
            loginMessage.textContent = "";
        }

        signupCurrentStep = Math.min(signupSteps.length - 1, signupCurrentStep + 1);
        updateSignupStepUI();
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("signupName");
        const emailInput = document.getElementById("signupEmail");
        const phoneInput = document.getElementById("signupPhone");
        const passwordInput = document.getElementById("signupPassword");
        const confirmPasswordInput = document.getElementById("signupConfirmPassword");
        const loginMessage = document.getElementById("loginMessage");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : "";

        if (!name || !email || !phone || !password || !confirmPassword) {
            if (loginMessage) {
                loginMessage.textContent = "Harap isi semua data pendaftaran terlebih dahulu.";
                loginMessage.classList.add("visible");
            }
            return;
        }

        if (password.length < 8) {
            if (loginMessage) {
                loginMessage.textContent = "Password minimal 8 karakter.";
                loginMessage.classList.add("visible");
            }
            return;
        }

        if (password !== confirmPassword) {
            if (loginMessage) {
                loginMessage.textContent = "Konfirmasi password tidak cocok.";
                loginMessage.classList.add("visible");
            }
            return;
        }

        const profileEmail = document.getElementById("profileEmail");
        const profilePassword = document.getElementById("profilePassword");

        if (profileEmail) {
            profileEmail.value = email;
        }

        if (profilePassword) {
            profilePassword.value = password;
        }

        applyLoginState(email, `Pendaftaran gratis berhasil! Akun ${name} berhasil dibuat.`, "Gmail");
        signupForm.reset();
        signupCurrentStep = 0;
        updateSignupStepUI();
        toggleAuthForm("login");
    });
}

updateSignupStepUI();

providerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const provider = button.dataset.provider || "Google";
        const emailInput = document.getElementById("profileEmail");
        const passwordInput = document.getElementById("profilePassword");

        const emailMap = {
            Google: "pelajar.google@gmail.com",
            Gmail: "pelajar.gmail@gmail.com",
            Facebook: "pelajar.facebook@gmail.com"
        };

        if (emailInput) {
            emailInput.value = emailMap[provider] || "pelajar@gmail.com";
        }

        if (passwordInput) {
            passwordInput.value = "akun" + provider.toLowerCase();
        }

        applyLoginState(emailInput ? emailInput.value : "", `Login berhasil via ${provider}. Akun kamu terhubung dengan ${provider}.`, provider);
        loginForm.reset();

        if (emailInput) {
            emailInput.value = emailMap[provider] || "pelajar@gmail.com";
        }

        if (passwordInput) {
            passwordInput.value = "akun" + provider.toLowerCase();
        }
    });
});

if (logoutButton) {
    logoutButton.addEventListener("click", logoutAccount);
}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(".nav-item[data-page]");

const pages =
    document.querySelectorAll(".page");


const pageTitles = {

    dashboard: [
        "Dashboard",
        "Mari lanjutkan perjalanan bahasa Jepangmu."
    ],

    hiragana: [
        "Hiragana",
        "Pelajari huruf dasar bahasa Jepang."
    ],

    katakana: [
        "Katakana",
        "Pelajari huruf untuk kata asing."
    ],

    kanji: [
        "Kanji",
        "Pelajari Kanji dasar bahasa Jepang."
    ],

    vocabulary: [
        "Kosakata",
        "Pelajari kata-kata Jepang sehari-hari."
    ],

    quiz: [
        "Quiz",
        "Uji kemampuan bahasa Jepangmu."
    ],

    profile: [
        "Profil",
        "Masuk ke akun untuk memantau progres belajar."
    ]

};


function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageName);

    if (target) {
        target.classList.add("active");
    }


    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.page === pageName) {
            item.classList.add("active");
        }

    });


    const titleData = pageTitles[pageName] || ["Dashboard", "Mari lanjutkan perjalanan bahasa Jepangmu."];

    document.getElementById("pageTitle").textContent =
        titleData[0];

    document.getElementById("pageSubtitle").textContent =
        titleData[1];


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        showPage(item.dataset.page);

        document
            .querySelector(".sidebar")
            .classList.remove("mobile-open");

    });

});


function openLesson(page) {

    showPage(page);

    const lessonMap = {
        hiragana: "hiragana",
        katakana: "katakana",
        kanji: "kanji",
        vocabulary: "vocabulary"
    };

    const lessonKey = lessonMap[page];
    if (lessonKey) {
        appData.progress[lessonKey] = 100;
    }

    appData.lessons = Math.max(
        appData.lessons,
        Object.values(appData.progress || {}).filter(value => Number(value) >= 100).length
    );

    saveData();

    updateStats();

}


/* =====================================================
   GENERATE HIRAGANA
===================================================== */

function createAlphabetCards(data, containerId, type) {

    const container =
        document.getElementById(containerId);

    container.innerHTML = "";


    data.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className = "character-card";


        card.innerHTML = `
            <div class="character">
                ${item.char}
            </div>

            <div class="romaji">
                ${item.romaji}
            </div>
        `;


        card.addEventListener("click", () => {

            openCharacterModal(item, type);

        });


        container.appendChild(card);

    });

}


/* =====================================================
   MODAL
===================================================== */

function openCharacterModal(item, type) {

    selectedCharacter = item;


    document.getElementById("modalCharacter")
        .textContent = item.char;


    document.getElementById("modalRomaji")
        .textContent = item.romaji.toUpperCase();


    document.getElementById("modalExample")
        .textContent =
        item.example ||
        `${item.char} — ${item.romaji}`;


    document.querySelector(".modal-label")
        .textContent = type.toUpperCase();


    document
        .getElementById("characterModal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("characterModal")
        .classList.remove("show");

}


function speakCharacter() {

    if (!selectedCharacter) {
        return;
    }

    const text =
        selectedCharacter.char;

    bicaraJepang(text, 0.8);

}

/* Close modal when clicking outside */

document
    .getElementById("characterModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


/* =====================================================
   VOCABULARY
===================================================== */

function createVocabulary() {

    const container =
        document.getElementById("vocabularyGrid");

    if (!container) {
        return;
    }

    const searchInput = document.getElementById("vocabularySearch");
    const searchValue = (searchInput ? searchInput.value : "").toLowerCase().trim();

    container.innerHTML = "";

    let hasVisibleSection = false;

    vocabularySections.forEach(section => {
        const visibleItems = section.items.filter(word => {
            if (!searchValue) {
                return true;
            }

            return [word.japanese, word.romaji, word.meaning]
                .some(value => value.toLowerCase().includes(searchValue));
        });

        if (visibleItems.length === 0 && searchValue) {
            return;
        }

        hasVisibleSection = true;

        const sectionWrap = document.createElement("div");
        sectionWrap.className = "vocabulary-section";

        const heading = document.createElement("h3");
        heading.className = "vocabulary-section-title";
        heading.textContent = section.title;

        const cardsWrap = document.createElement("div");
        cardsWrap.className = "vocabulary-grid-inner";

        visibleItems.forEach(word => {
            const card = document.createElement("div");
            card.className = "vocabulary-card";

            card.innerHTML = `
                <div class="word-japanese">${word.japanese}</div>
                <div class="word-romaji">${word.romaji}</div>
                <div class="word-meaning">${word.meaning}</div>
                <button class="word-button">🔊 Dengarkan</button>
            `;

            const button = card.querySelector(".word-button");
            button.addEventListener("click", () => {
                speakWord(word.japanese);
            });

            cardsWrap.appendChild(card);
        });

        sectionWrap.appendChild(heading);
        sectionWrap.appendChild(cardsWrap);
        container.appendChild(sectionWrap);
    });

    if (!hasVisibleSection && searchValue) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent = "Tidak ada kata yang cocok dengan pencarian Anda.";
        container.appendChild(emptyState);
    }

}


function createKanjiVocabulary() {

    const container =
        document.getElementById("kanjiVocabularyGrid");

    if (!container) {
        return;
    }

    const uniqueWords = deduplicateVocabularyEntries(vocabulary);

    container.innerHTML = "";

    uniqueWords.forEach(word => {

        const card =
            document.createElement("div");

        card.className = "vocabulary-card";

        card.innerHTML = `
            <div class="word-japanese">${word.japanese}</div>
            <div class="word-romaji">${word.romaji}</div>
            <div class="word-meaning">${word.meaning}</div>
            <button class="word-button">🔊 Dengarkan</button>
        `;

        const button = card.querySelector(".word-button");
        button.addEventListener("click", () => {
            speakWord(word.japanese);
        });

        container.appendChild(card);

    });

}


function createKanjiCards() {

    const container = document.getElementById("kanjiGrid");

    if (!container) {
        return;
    }

    const searchInput = document.getElementById("kanjiSearch");
    const levelSelect = document.getElementById("kanjiLevel");
    const summary = document.getElementById("kanjiSummary");
    const searchValue = (searchInput ? searchInput.value : "").toLowerCase().trim();
    const levelValue = levelSelect ? levelSelect.value : "all";

    const filtered = kanjiData.filter(item => {
        const matchesSearch =
            !searchValue ||
            item.char.toLowerCase().includes(searchValue) ||
            item.read.toLowerCase().includes(searchValue) ||
            item.meaning.toLowerCase().includes(searchValue);

        const matchesLevel =
            levelValue === "all"
                ? true
                : levelValue === "mixed"
                    ? !["N5", "N4"].includes(item.level)
                    : item.level === levelValue;

        return matchesSearch && matchesLevel;
    });

    if (summary) {
        const totalN5 = kanjiData.filter(item => item.level === "N5").length;
        const totalN4 = kanjiData.filter(item => item.level === "N4").length;
        const totalMixed = kanjiData.filter(item => !["N5", "N4"].includes(item.level)).length;
        const labelMap = {
            all: "Semua",
            N5: "N5",
            N4: "N4",
            mixed: "Campuran"
        };
        const label = labelMap[levelValue] || "Semua";
        summary.textContent = `${label} • ${filtered.length} kanji • N5: ${totalN5} • N4: ${totalN4} • Campuran: ${totalMixed}`;
    }

    container.innerHTML = "";

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "kanji-card";

        card.innerHTML = `
            <div class="kanji-char">${item.char}</div>
            <div class="kanji-read">${item.read}</div>
            <div class="kanji-meaning">${item.meaning}</div>
        `;

        card.addEventListener("click", () => {
            openCharacterModal(
                {
                    char: item.char,
                    romaji: item.read,
                    example: `${item.char} — ${item.meaning}`
                },
                "Kanji"
            );
        });

        container.appendChild(card);
    });

}


function showKanjiView(viewName) {

    const buttons = document.querySelectorAll(".kanji-mode-button");
    const panels = document.querySelectorAll(".kanji-view-panel");

    buttons.forEach(button => {
        const isActive = button.dataset.kanjiView === viewName;
        button.classList.toggle("active", isActive);
    });

    panels.forEach(panel => {
        const isActive = panel.id === "kanjiPanel" && viewName === "kanji";
        panel.classList.toggle("active", isActive);
    });

}


/* =====================================================
   SPEAK WORD
===================================================== */

function speakWord(word) {

    bicaraJepang(word, 0.8);

}


/* =====================================================
   QUIZ
===================================================== */

const baseQuizData = [
    {
        char: "あ",
        answer: "a",
        options: ["a", "i", "u", "o"]
    },

    {
        char: "い",
        answer: "i",
        options: ["a", "i", "e", "o"]
    },

    {
        char: "う",
        answer: "u",
        options: ["u", "e", "a", "i"]
    },

    {
        char: "え",
        answer: "e",
        options: ["o", "a", "e", "u"]
    },

    {
        char: "お",
        answer: "o",
        options: ["i", "o", "u", "a"]
    },

    {
        char: "か",
        answer: "ka",
        options: ["ka", "ki", "ku", "ko"]
    },

    {
        char: "き",
        answer: "ki",
        options: ["ke", "ki", "ka", "ko"]
    },

    {
        char: "さ",
        answer: "sa",
        options: ["shi", "su", "sa", "so"]
    },

    {
        char: "し",
        answer: "shi",
        options: ["sa", "shi", "su", "se"]
    },

    {
        char: "す",
        answer: "su",
        options: ["so", "sa", "su", "shi"]
    }
];

const monthlyQuizTemplates = [
    { char: "あ", answer: "a", options: ["a", "i", "u", "o"] },
    { char: "い", answer: "i", options: ["a", "i", "u", "e"] },
    { char: "う", answer: "u", options: ["u", "e", "a", "i"] },
    { char: "え", answer: "e", options: ["o", "a", "e", "u"] },
    { char: "お", answer: "o", options: ["i", "o", "u", "a"] },
    { char: "か", answer: "ka", options: ["ka", "ki", "ku", "ko"] },
    { char: "き", answer: "ki", options: ["ke", "ki", "ka", "ko"] },
    { char: "く", answer: "ku", options: ["ku", "ka", "ko", "ki"] },
    { char: "け", answer: "ke", options: ["ke", "ka", "ki", "ko"] },
    { char: "こ", answer: "ko", options: ["ka", "ko", "ke", "ku"] },
    { char: "さ", answer: "sa", options: ["sa", "shi", "su", "so"] },
    { char: "し", answer: "shi", options: ["sa", "shi", "su", "se"] },
    { char: "す", answer: "su", options: ["so", "sa", "su", "shi"] },
    { char: "せ", answer: "se", options: ["se", "sa", "su", "shi"] },
    { char: "そ", answer: "so", options: ["so", "sa", "su", "shi"] },
    { char: "た", answer: "ta", options: ["ta", "te", "to", "ti"] },
    { char: "ち", answer: "chi", options: ["chi", "cha", "cho", "te"] },
    { char: "つ", answer: "tsu", options: ["tsu", "ta", "te", "to"] },
    { char: "て", answer: "te", options: ["ta", "te", "to", "tsu"] },
    { char: "と", answer: "to", options: ["to", "ta", "te", "tsu"] },
    { char: "な", answer: "na", options: ["na", "ni", "nu", "ne"] },
    { char: "に", answer: "ni", options: ["na", "ni", "nu", "ne"] },
    { char: "ぬ", answer: "nu", options: ["nu", "na", "ni", "ne"] },
    { char: "ね", answer: "ne", options: ["ne", "na", "ni", "nu"] },
    { char: "の", answer: "no", options: ["no", "na", "ni", "nu"] },
    { char: "は", answer: "ha", options: ["ha", "hi", "fu", "he"] },
    { char: "ひ", answer: "hi", options: ["ha", "hi", "hu", "he"] },
    { char: "ふ", answer: "fu", options: ["fu", "ha", "hi", "ho"] },
    { char: "へ", answer: "he", options: ["he", "ha", "hi", "ho"] },
    { char: "ほ", answer: "ho", options: ["ho", "ha", "hi", "he"] },
    { char: "ま", answer: "ma", options: ["ma", "mi", "mu", "me"] },
    { char: "み", answer: "mi", options: ["ma", "mi", "mu", "me"] },
    { char: "む", answer: "mu", options: ["mu", "ma", "mi", "me"] },
    { char: "め", answer: "me", options: ["me", "ma", "mi", "mu"] },
    { char: "も", answer: "mo", options: ["mo", "ma", "mi", "mu"] },
    { char: "や", answer: "ya", options: ["ya", "yu", "yo", "ya"] },
    { char: "ゆ", answer: "yu", options: ["ya", "yu", "yo", "yo"] },
    { char: "よ", answer: "yo", options: ["ya", "yu", "yo", "yoo"] },
    { char: "ら", answer: "ra", options: ["ra", "ri", "ru", "re"] },
    { char: "り", answer: "ri", options: ["ra", "ri", "ru", "re"] },
    { char: "る", answer: "ru", options: ["ru", "ra", "ri", "re"] },
    { char: "れ", answer: "re", options: ["re", "ra", "ri", "ru"] },
    { char: "ろ", answer: "ro", options: ["ro", "ra", "ri", "ru"] },
    { char: "わ", answer: "wa", options: ["wa", "wi", "wo", "we"] },
    { char: "を", answer: "wo", options: ["wa", "wo", "we", "wi"] },
    { char: "ん", answer: "n", options: ["n", "na", "no", "nu"] },
    { char: "こんにちは", answer: "konnichiwa", options: ["konnichiwa", "arigatou", "sumimasen", "oyasumi"] },
    { char: "ありがとう", answer: "arigatou", options: ["arigatou", "konnichiwa", "ohayou", "sayounara"] },
    { char: "すみません", answer: "sumimasen", options: ["sumimasen", "arigatou", "konnichiwa", "genki"] },
    { char: "おはよう", answer: "ohayou", options: ["ohayou", "sayounara", "sumimasen", "konnichiwa"] },
    { char: "さようなら", answer: "sayounara", options: ["sayounara", "ohayou", "genki", "arigatou"] },
    { char: "1月", answer: "ichigatsu", options: ["ichigatsu", "nigatsu", "sangatsu", "shigatsu"] },
    { char: "2月", answer: "nigatsu", options: ["ichigatsu", "nigatsu", "sangatsu", "shigatsu"] },
    { char: "3月", answer: "sangatsu", options: ["sangatsu", "nigatsu", "hachigatsu", "jugatsu"] },
    { char: "4月", answer: "shigatsu", options: ["shigatsu", "ichigatsu", "kugatsu", "nigatsu"] },
    { char: "5月", answer: "gogatsu", options: ["gogatsu", "rokugatsu", "ichigatsu", "shichigatsu"] },
    { char: "6月", answer: "rokugatsu", options: ["rokugatsu", "gogatsu", "sangatsu", "nigatsu"] },
    { char: "7月", answer: "shichigatsu", options: ["shichigatsu", "hachigatsu", "jugatsu", "kugatsu"] },
    { char: "8月", answer: "hachigatsu", options: ["hachigatsu", "shichigatsu", "nigatsu", "sangatsu"] },
    { char: "9月", answer: "kugatsu", options: ["kugatsu", "hachigatsu", "shigatsu", "gogatsu"] },
    { char: "10月", answer: "jugatsu", options: ["jugatsu", "kugatsu", "rokugatsu", "ichigatsu"] },
    { char: "11月", answer: "juichigatsu", options: ["juichigatsu", "junigatsu", "ichigatsu", "nigatsu"] },
    { char: "12月", answer: "junigatsu", options: ["junigatsu", "juichigatsu", "shigatsu", "jugatsu"] },
    { char: "1", answer: "ichi", options: ["ichi", "ni", "san", "go"] },
    { char: "2", answer: "ni", options: ["go", "ni", "roku", "hachi"] },
    { char: "3", answer: "san", options: ["san", "ichi", "yon", "roku"] },
    { char: "4", answer: "yon", options: ["yon", "go", "ku", "ichi"] },
    { char: "5", answer: "go", options: ["go", "yon", "roku", "ku"] },
    { char: "6", answer: "roku", options: ["roku", "go", "ni", "san"] },
    { char: "7", answer: "nana", options: ["nana", "hachi", "kuro", "go"] },
    { char: "8", answer: "hachi", options: ["hachi", "ichi", "ni", "go"] },
    { char: "9", answer: "kyuu", options: ["kyuu", "roku", "hachi", "go"] },
    { char: "10", answer: "juu", options: ["juu", "ichi", "go", "roku"] },
    { char: "水", answer: "mizu", options: ["mizu", "ki", "yama", "hito"] },
    { char: "木", answer: "ki", options: ["ki", "mizu", "hi", "tori"] },
    { char: "山", answer: "yama", options: ["yama", "mizu", "ki", "sora"] },
    { char: "人", answer: "hito", options: ["hito", "mizu", "ki", "yama"] },
    { char: "日", answer: "hi", options: ["hi", "hito", "mizu", "sora"] },
    { char: "学校", answer: "gakkou", options: ["gakkou", "ie", "machi", "mizu"] },
    { char: "家", answer: "ie", options: ["ie", "gakkou", "michi", "hana"] },
    { char: "駅", answer: "eki", options: ["eki", "michi", "ie", "tori"] },
    { char: "車", answer: "kuruma", options: ["kuruma", "eki", "kasa", "ie"] },
    { char: "食べる", answer: "taberu", options: ["taberu", "yomu", "hashiru", "kaku"] },
    { char: "読む", answer: "yomu", options: ["yomu", "taberu", "matsu", "iku"] },
    { char: "行く", answer: "iku", options: ["iku", "yomu", "taberu", "kaku"] },
    { char: "書く", answer: "kaku", options: ["kaku", "yomu", "taberu", "iku"] },
    { char: "見る", answer: "miru", options: ["miru", "kiku", "hanasu", "taberu"] },
    { char: "聞く", answer: "kiku", options: ["kiku", "miru", "kaku", "iku"] },
    { char: "話す", answer: "hanasu", options: ["hanasu", "miru", "kaku", "yomu"] },
    { char: "雨", answer: "ame", options: ["ame", "yuki", "kaze", "sora"] },
    { char: "雪", answer: "yuki", options: ["yuki", "ame", "kaze", "mizu"] },
    { char: "風", answer: "kaze", options: ["kaze", "ame", "yuki", "mizu"] },
    { char: "空", answer: "sora", options: ["sora", "kaze", "yuki", "ame"] }
];

function createMonthlyQuizBank() {
    const bank = [];

    for (let day = 1; day <= 30; day++) {
        for (let i = 0; i < 20; i++) {
            const template = monthlyQuizTemplates[(day * i + i) % monthlyQuizTemplates.length];
            bank.push({
                ...template,
                options: [...template.options]
            });
        }
    }

    return bank;
}

const monthlyQuizBank = createMonthlyQuizBank();
const quizData = [
    ...baseQuizData,
    ...monthlyQuizBank
];


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    const newArray = [...array];


    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));


        [
            newArray[i],
            newArray[j]
        ] = [
            newArray[j],
            newArray[i]
        ];

    }


    return newArray;
}


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    quizState.current = 0;

    quizState.score = 0;

    quizState.answered = false;


    quizState.questions =
        shuffle(quizData).slice(0, 5);


    updateStats();

    displayQuestion();

}


/* =====================================================
   DISPLAY QUESTION
===================================================== */

function displayQuestion() {

    const question =
        quizState.questions[quizState.current];


    if (!question) {
        finishQuiz();
        return;
    }


    quizState.answered = false;


    document.getElementById("questionCharacter")
        .textContent = question.char;


    const totalQuestions = Math.max(1, quizState.totalQuestions || quizState.questions.length || QUIZ_PER_DAY);

    document.getElementById("questionNumber")
        .textContent = `${quizState.current + 1} / ${totalQuestions}`;


    const progress =
        ((quizState.current) / totalQuestions) * 100;


    document
        .getElementById("quizProgressBar")
        .style.width = progress + "%";


    document.getElementById("quizResult")
        .textContent = "";


    const nextButton =
        document.getElementById("nextQuestionButton");


    nextButton.disabled = true;


    const answerGrid =
        document.getElementById("answerGrid");


    answerGrid.innerHTML = "";


    const options =
        shuffle(question.options);


    options.forEach(option => {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            option;


        button.addEventListener(
            "click",
            () => checkAnswer(button, option)
        );


        answerGrid.appendChild(button);

    });


    updateStats();

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(button, answer) {

    if (quizState.answered) {
        return;
    }


    quizState.answered = true;


    const question =
        quizState.questions[quizState.current];


    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach(btn => {

        btn.disabled = true;

    });


    if (answer === question.answer) {

        button.classList.add("correct");


        document.getElementById("quizResult")
            .textContent =
            "✓ Benar! +10 XP";


        document.getElementById("quizResult")
            .style.color =
            "var(--green)";


        quizState.score += 10;

        appData.xp += 10;

        appData.correct++;
        const totalQuestions = Math.max(1, quizState.totalQuestions || quizState.questions.length || QUIZ_PER_DAY);
        appData.progress.quiz = Math.min(100, Math.max(appData.progress.quiz || 0, ((quizState.current + 1) / totalQuestions) * 100));

    }

    else {

        button.classList.add("wrong");


        document.getElementById("quizResult")
            .textContent =
            `✗ Jawaban benar: ${question.answer}`;


        document.getElementById("quizResult")
            .style.color =
            "#d94d4d";


        buttons.forEach(btn => {

            if (btn.textContent === question.answer) {

                btn.classList.add("correct");

            }

        });

    }


    document.getElementById("nextQuestionButton")
        .disabled = false;


    saveData();

    updateStats();

}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    quizState.current++;

    displayQuestion();

}


/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    document.getElementById("questionCharacter")
        .textContent = "🎉";


    const totalQuestions = Math.max(1, quizState.totalQuestions || quizState.questions.length || QUIZ_PER_DAY);

    document.getElementById("questionNumber")
        .textContent = `${totalQuestions}`;


    document.getElementById("quizProgressBar")
        .style.width = "100%";


    document.getElementById("answerGrid")
        .innerHTML = `

            <div style="
                grid-column: 1 / -1;
                padding: 20px;
            ">

                <h2>Quiz selesai!</h2>

                <p style="
                    color: var(--muted);
                    margin-top: 10px;
                ">
                    Kamu mendapatkan
                    <strong>${quizState.score} XP</strong>.
                </p>

            </div>

        `;


    document.getElementById("quizResult")
        .textContent =
        "Hebat! Terus latihan untuk meningkatkan kemampuanmu.";

    appData.progress.quiz = 100;

    const nextButton =
        document.getElementById("nextQuestionButton");


    nextButton.disabled = false;

    nextButton.textContent = "🔄 Ulangi Quiz";


    nextButton.onclick = () => {

        nextButton.textContent =
            "Pertanyaan Berikutnya →";

        nextButton.onclick =
            nextQuestion;

        startQuiz();

    };


    saveData();

    updateStats();

}


/* =====================================================
   DARK MODE
===================================================== */

const darkModeButton =
    document.getElementById("darkModeButton");


darkModeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "nihongoDarkMode",
        isDark
    );

});


function loadDarkMode() {

    const darkMode =
        localStorage.getItem("nihongoDarkMode");


    if (darkMode === "true") {

        document.body.classList.add("dark");

    }

}


/* =====================================================
   MOBILE MENU
===================================================== */

document
    .getElementById("mobileMenu")
    .addEventListener("click", () => {

        document
            .querySelector(".sidebar")
            .classList.toggle("mobile-open");

    });


/* =====================================================
   INITIALIZE
===================================================== */

function initializeApp() {

    loadData();

    loadDarkMode();

    createAlphabetCards(
        hiragana,
        "hiraganaGrid",
        "Hiragana"
    );

    createAlphabetCards(
        katakana,
        "katakanaGrid",
        "Katakana"
    );

    createVocabulary();
    createKanjiVocabulary();
    createKanjiCards();

    const kanjiSearch = document.getElementById("kanjiSearch");
    const kanjiLevel = document.getElementById("kanjiLevel");
    const vocabularySearch = document.getElementById("vocabularySearch");

    if (kanjiSearch) {
        kanjiSearch.addEventListener("input", createKanjiCards);
    }

    if (kanjiLevel) {
        kanjiLevel.addEventListener("change", createKanjiCards);
    }

    if (vocabularySearch) {
        vocabularySearch.addEventListener("input", createVocabulary);
    }

    document.querySelectorAll(".kanji-mode-button").forEach(button => {
        button.addEventListener("click", () => {
            showKanjiView(button.dataset.kanjiView);
        });
    });

    showKanjiView("kanji");

    startQuiz();

}


initializeApp();

function bicaraJepang(teks, kecepatan) {
  var rate = kecepatan || 0.9;
  var cap = window.Capacitor;
  var TTS = cap && cap.isNativePlatform && cap.isNativePlatform() &&
            cap.Plugins && cap.Plugins.TextToSpeech;

  // Aplikasi Android (Capacitor)
  if (TTS) {
    TTS.speak({
      text: teks,
      lang: "ja-JP",
      rate: rate,
      pitch: 1.0,
      volume: 1.0
    }).catch(function (e) {
      alert("Suara gagal diputar: " + (e && e.message ? e.message : e));
    });
    return;
  }

  // Browser biasa
  if (!("speechSynthesis" in window)) {
    alert("Browser kamu tidak mendukung text-to-speech.");
    return;
  }
  var u = new SpeechSynthesisUtterance(teks);
  u.lang = "ja-JP";
  u.rate = rate;
  u.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}