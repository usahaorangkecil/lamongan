
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TutorialItem {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  hours: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara menambah data kasus penyakit baru?",
    answer: "Klik tombol 'Tambah Data' pada halaman Penyakit, kemudian isi formulir dengan informasi yang diperlukan seperti nama kecamatan, jenis penyakit, jumlah kasus, dan status penanganan. Setelah selesai, klik tombol 'Simpan'.",
    category: "Data Penyakit"
  },
  {
    id: "faq-2",
    question: "Bagaimana cara melihat data pada peta?",
    answer: "Data peta akan otomatis ditampilkan pada bagian bawah halaman terkait. Anda dapat melihat penyebaran kasus penyakit, lokasi faskes, atau distribusi bantuan sosial dengan melihat pada bagian peta di tiap halaman.",
    category: "Peta"
  },
  {
    id: "faq-3",
    question: "Bagaimana cara mengubah status penanganan kasus penyakit?",
    answer: "Klik tombol Edit (ikon pensil) pada baris data yang ingin diubah, kemudian pilih status penanganan yang baru dari menu dropdown yang tersedia. Jika sudah selesai, klik tombol 'Simpan'.",
    category: "Data Penyakit"
  },
  {
    id: "faq-4",
    question: "Apakah data akan otomatis terupdate ke server pusat?",
    answer: "Ya, setiap perubahan data yang Anda lakukan akan otomatis disinkronkan dengan server pusat dalam waktu 15 menit. Namun, Anda juga dapat melihat status sinkronisasi terakhir pada bagian bawah dashboard.",
    category: "Sinkronisasi Data"
  },
  {
    id: "faq-5",
    question: "Bagaimana cara mengunduh data dalam format Excel?",
    answer: "Saat ini fitur ekspor data ke format Excel sedang dalam pengembangan dan akan tersedia dalam pembaruan mendatang. Untuk sementara, Anda dapat menggunakan fitur tangkapan layar atau menyalin data secara manual.",
    category: "Ekspor Data"
  },
  {
    id: "faq-6",
    question: "Apakah saya bisa menghapus data yang sudah diinput?",
    answer: "Ya, Anda dapat menghapus data dengan mengklik tombol Hapus (ikon sampah) pada baris data yang ingin dihapus. Sistem akan meminta konfirmasi sebelum data benar-benar dihapus.",
    category: "Manajemen Data"
  },
  {
    id: "faq-7",
    question: "Bagaimana cara mengakses dashboard dari perangkat mobile?",
    answer: "Dashboard Smart Lamongan sudah responsif dan dapat diakses dari perangkat mobile melalui browser. Cukup buka alamat yang sama dan login dengan kredensial Anda.",
    category: "Akses"
  },
  {
    id: "faq-8",
    question: "Siapa yang bisa melihat data yang saya input?",
    answer: "Data yang Anda input dapat dilihat oleh semua pengguna yang memiliki akses ke dashboard sesuai dengan level otorisasi mereka. Admin dan Bupati dapat melihat semua data, sementara Camat hanya dapat melihat data di kecamatannya.",
    category: "Privasi"
  }
];

export const tutorialData: TutorialItem[] = [
  {
    id: "tutorial-1",
    title: "Cara Menggunakan Dashboard",
    description: "Panduan lengkap untuk mengakses dan menggunakan fitur-fitur utama dashboard Smart Lamongan",
    category: "Umum",
    steps: [
      "Login ke sistem menggunakan kredensial yang diberikan",
      "Lihat ringkasan data pada halaman utama dashboard",
      "Gunakan menu navigasi di sebelah kiri untuk mengakses fitur-fitur khusus",
      "Klik pada item data untuk melihat detail dan opsi modifikasi"
    ],
    imageUrl: "/tutorial/dashboard-overview.jpg"
  },
  {
    id: "tutorial-2",
    title: "Mengelola Data Penyakit",
    description: "Cara menambah, mengedit, dan menghapus data kasus penyakit di wilayah Anda",
    category: "Kesehatan",
    steps: [
      "Akses halaman Data Penyakit di menu OPD Kesehatan",
      "Klik tombol 'Tambah Data' untuk menambahkan kasus penyakit baru",
      "Isi formulir dengan informasi kasus penyakit",
      "Klik 'Simpan' untuk menyimpan data"
    ],
    imageUrl: "/tutorial/penyakit-management.jpg"
  },
  {
    id: "tutorial-3",
    title: "Mengelola Data Vaksinasi",
    description: "Panduan untuk mengelola data vaksinasi dan memantau cakupan vaksinasi di wilayah Anda",
    category: "Kesehatan",
    steps: [
      "Akses halaman Data Vaksinasi di menu OPD Kesehatan",
      "Tambahkan data vaksinasi baru dengan klik 'Tambah Data'",
      "Isi informasi vaksinasi termasuk jenis, lokasi, dan jumlah penerima",
      "Pantau persentase cakupan vaksinasi melalui dashboard"
    ],
    imageUrl: "/tutorial/vaksinasi-guide.jpg"
  },
  {
    id: "tutorial-4",
    title: "Mengelola Data Bantuan Sosial",
    description: "Langkah-langkah untuk mengelola data penerima bantuan sosial kesehatan",
    category: "Bantuan Sosial",
    steps: [
      "Akses halaman Bantuan Sosial di menu OPD Kesehatan",
      "Tambahkan data penerima bantuan dengan klik 'Tambah Data'",
      "Isi informasi penerima bantuan termasuk jenis bantuan dan status",
      "Verifikasi data penerima melalui sistem"
    ],
    imageUrl: "/tutorial/bansos-tutorial.jpg"
  },
  {
    id: "tutorial-5",
    title: "Membuat Laporan Bulanan",
    description: "Cara membuat dan mengekspor laporan bulanan untuk keperluan pelaporan",
    category: "Pelaporan",
    steps: [
      "Pilih periode pelaporan dari dropdown di halaman terkait",
      "Klik tombol 'Generate Laporan' untuk membuat laporan",
      "Tinjau laporan yang dihasilkan dan lakukan penyesuaian jika diperlukan",
      "Klik 'Ekspor ke PDF' untuk mengunduh laporan dalam format PDF"
    ],
    imageUrl: "/tutorial/report-generation.jpg"
  },
  {
    id: "tutorial-6",
    title: "Menggunakan Fitur Peta",
    description: "Panduan menggunakan fitur peta untuk visualisasi data geografis",
    category: "Visualisasi",
    steps: [
      "Akses fitur peta di bagian bawah halaman terkait",
      "Gunakan kontrol zoom untuk memperbesar atau mengecilkan peta",
      "Klik pada marker untuk melihat detail informasi",
      "Gunakan filter di atas peta untuk menampilkan jenis data tertentu"
    ],
    imageUrl: "/tutorial/map-usage.jpg"
  }
];

export const contactData: ContactInfo = {
  email: "support@smartlamongan.go.id",
  phone: "(0322) 321123",
  hours: "Senin-Jumat, 08.00-16.00 WIB"
};

// Adding contact information array for the Help component
export const contactDataArray = [
  {
    id: "contact-1",
    department: "Dukungan Teknis",
    email: "support@smartlamongan.go.id",
    phone: "(0322) 321123",
    address: "Jl. Lamongan No. 1, Lamongan"
  },
  {
    id: "contact-2",
    department: "Administrasi",
    email: "admin@smartlamongan.go.id",
    phone: "(0322) 321124",
    address: "Jl. Lamongan No. 1, Lamongan"
  }
];

// Export all data as a combined object for convenience
export const helpData = {
  faqs: faqData,
  guides: tutorialData,
  contactInfo: contactData,
  contactArray: contactDataArray
};
