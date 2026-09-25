/* =========================================================
   SI-LIMBAH - DATA LIMBAH
========================================================= */

const wasteData = [

    {
        id: "pampers",
        name: "Pampers",
        category: "Rumah Tangga",
        icon: "🧷",

        description:
            "Limbah pampers perlu dipilah dan dikelola dengan tepat. Dalam informasi KKN, pampers dapat digunakan sebagai salah satu komponen media tanam.",

        preparation: [
            "Pisahkan pampers dari sampah lain.",
            "Bersihkan dan siapkan bagian yang akan digunakan sesuai praktik pengolahan.",
            "Jangan gunakan bagian yang terkontaminasi secara sembarangan."
        ],

        solutions: [
            "Salah satu komponen media tanam",
            "Pengelolaan limbah pampers",
            "Pemilahan sebelum pengolahan"
        ],

        note:
            "Penggunaan pampers sebagai media tanam harus mengikuti cara pengolahan yang tepat dan praktik yang telah disosialisasikan."
    },


    {
        id: "botol-plastik",
        name: "Botol Plastik",
        category: "Rumah Tangga",
        icon: "🧴",

        description:
            "Botol plastik dapat dipilah, dibersihkan, lalu dimanfaatkan kembali atau disalurkan untuk daur ulang.",

        preparation: [
            "Kosongkan isi botol.",
            "Pisahkan tutup dan bagian lain jika diperlukan.",
            "Bilas dan keringkan sebelum dimanfaatkan."
        ],

        solutions: [
            "Pot tanaman",
            "Wadah sederhana",
            "Bahan untuk daur ulang"
        ],

        note:
            "Pastikan botol yang akan digunakan kembali dalam kondisi bersih dan layak."
    },


    {
        id: "kardus",
        name: "Kardus",
        category: "Rumah Tangga",
        icon: "📦",

        description:
            "Kardus bekas dapat digunakan kembali atau diolah menjadi berbagai produk sederhana dan kerajinan.",

        preparation: [
            "Lepaskan selotip dan bahan lain yang menempel.",
            "Pastikan kardus tidak terlalu basah atau berjamur.",
            "Lipat dan kelompokkan berdasarkan kondisinya."
        ],

        solutions: [
            "Kerajinan",
            "Tempat penyimpanan",
            "Bahan kemasan"
        ],

        note:
            "Kardus yang bersih dan kering lebih mudah dimanfaatkan kembali."
    },


    {
        id: "potongan-bambu",
        name: "Potongan Bambu",
        category: "Pertanian",
        icon: "🎋",

        description:
            "Potongan bambu dari kegiatan pertanian atau rumah tangga dapat dimanfaatkan menjadi produk sederhana.",

        preparation: [
            "Pilih potongan bambu yang masih layak.",
            "Bersihkan permukaan bambu.",
            "Potong atau haluskan bagian yang tajam."
        ],

        solutions: [
            "Pot tanaman",
            "Kerajinan",
            "Dekorasi"
        ],

        note:
            "Gunakan alat dan teknik yang sesuai saat memotong atau menghaluskan bambu."
    },


    {
        id: "minyak-jelantah",
        name: "Minyak Jelantah",
        category: "Rumah Tangga",
        icon: "🫗",

        description:
            "Minyak jelantah sebaiknya dikumpulkan dan tidak dibuang langsung ke saluran air atau tanah.",

        preparation: [
            "Biarkan minyak dingin.",
            "Saring jika terdapat sisa makanan.",
            "Simpan dalam wadah tertutup."
        ],

        solutions: [
            "Pengumpulan minyak jelantah",
            "Penyerahan kepada pengelola",
            "Pemanfaatan melalui proses yang sesuai"
        ],

        note:
            "Jangan membuang minyak jelantah langsung ke saluran air karena dapat mengganggu lingkungan."
    },


    {
        id: "sisa-sayuran",
        name: "Sisa Sayuran",
        category: "Pertanian",
        icon: "🥬",

        description:
            "Sisa sayuran dan bahan organik dapat dipilah untuk pengelolaan organik yang sesuai.",

        preparation: [
            "Pisahkan dari plastik dan bahan anorganik.",
            "Potong menjadi bagian yang lebih kecil jika diperlukan.",
            "Kumpulkan dalam wadah organik."
        ],

        solutions: [
            "Bahan kompos",
            "Pengolahan organik",
            "Pupuk organik melalui proses yang sesuai"
        ],

        note:
            "Pengolahan organik perlu memperhatikan komposisi dan proses yang sesuai."
    },


    {
        id: "kemasan-umkm",
        name: "Kemasan Produk UMKM",
        category: "UMKM",
        icon: "🛍️",

        description:
            "Kemasan bekas kegiatan UMKM dapat dipilah berdasarkan materialnya untuk digunakan kembali atau disalurkan ke pengelola.",

        preparation: [
            "Pisahkan kemasan berdasarkan bahan.",
            "Kosongkan sisa produk.",
            "Bersihkan dan keringkan jika memungkinkan."
        ],

        solutions: [
            "Penggunaan kembali",
            "Pemilahan untuk daur ulang",
            "Penyaluran ke pengelola"
        ],

        note:
            "Jenis pengelolaan mengikuti material kemasan dan kondisi kemasan."
    },


    {
        id: "sisa-kain",
        name: "Sisa Kain",
        category: "UMKM",
        icon: "🧵",

        description:
            "Potongan kain dari kegiatan usaha dapat dipilah dan dimanfaatkan kembali menjadi produk sederhana.",

        preparation: [
            "Pisahkan kain berdasarkan jenis dan ukuran.",
            "Pastikan kain bersih dan kering.",
            "Kelompokkan potongan yang masih dapat digunakan."
        ],

        solutions: [
            "Kerajinan kain",
            "Lap atau kain guna ulang",
            "Bahan produk kreatif"
        ],

        note:
            "Pemanfaatan bergantung pada jenis, ukuran, dan kondisi kain."
    },


    {
        id: "limbah-kayu",
        name: "Sisa Kayu Produksi",
        category: "Industri",
        icon: "🪵",

        description:
            "Sisa potongan kayu dari kegiatan produksi dapat dipilah untuk digunakan kembali atau dikelola sesuai jenisnya.",

        preparation: [
            "Pisahkan kayu dari bahan lain.",
            "Periksa paku atau bagian tajam.",
            "Kelompokkan berdasarkan ukuran dan kondisi."
        ],

        solutions: [
            "Bahan kerajinan",
            "Produk kayu sederhana",
            "Penyaluran untuk pemanfaatan kembali"
        ],

        note:
            "Penanganan limbah industri harus mengikuti karakteristik material dan prosedur keselamatan yang berlaku."
    }

];