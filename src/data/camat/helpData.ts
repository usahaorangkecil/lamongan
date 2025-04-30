
export interface FAQItemCamat {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TutorialItemCamat {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export const faqDataCamat: FAQItemCamat[] = [
  {
    id: "faq-camat-1",
    question: "Bagaimana cara menambah data desa baru di kecamatan?",
    answer: "Klik tombol 'Tambah Data' pada tabel yang sesuai, kemudian isi formulir dengan informasi desa. Setelah mengisi semua data yang diperlukan, klik tombol 'Simpan'.",
    category: "Data Desa"
  },
  {
    id: "faq-camat-2",
    question: "Apakah data yang saya input akan terlihat oleh kabupaten?",
    answer: "Ya, data yang Anda input akan terlihat oleh Bupati dan OPD terkait sesuai dengan hak akses mereka. Data ini akan digunakan untuk monitoring dan evaluasi program di tingkat kabupaten.",
    category: "Sinkronisasi Data"
  },
  {
    id: "faq-camat-3",
    question: "Bagaimana cara menggunakan fitur peta di dashboard?",
    answer: "Pada setiap halaman yang memiliki fitur peta, Anda dapat melihat persebaran data secara geografis. Klik pada titik di peta untuk melihat detail informasi. Anda juga dapat menggunakan kontrol zoom di sisi kanan peta.",
    category: "Fitur Peta"
  },
  {
    id: "faq-camat-4",
    question: "Siapa saja yang memiliki akses ke dashboard Kecamatan Deket?",
    answer: "Dashboard Kecamatan Deket dapat diakses oleh Camat, perangkat kecamatan yang diberi akses khusus, Bupati, dan OPD terkait sesuai dengan hak akses yang ditetapkan.",
    category: "Akses"
  },
  {
    id: "faq-camat-5",
    question: "Bagaimana cara mengubah pengaturan notifikasi?",
    answer: "Buka halaman 'Settings', kemudian pilih tab 'Pengaturan Notifikasi'. Di sana Anda dapat mengaktifkan atau menonaktifkan jenis notifikasi yang ingin diterima.",
    category: "Notifikasi"
  },
  {
    id: "faq-camat-6",
    question: "Apakah saya bisa mengunduh data dalam format Excel?",
    answer: "Ya, pada setiap tabel data, Anda dapat mengklik tombol 'Ekspor' di pojok kanan atas untuk mengunduh data dalam format Excel.",
    category: "Ekspor Data"
  }
];

export const tutorialDataCamat: TutorialItemCamat[] = [
  {
    id: "tutorial-camat-1",
    title: "Cara Menggunakan Dashboard Kecamatan",
    description: "Panduan lengkap untuk memaksimalkan penggunaan dashboard Kecamatan Deket",
    category: "Umum",
    steps: [
      "Login ke sistem menggunakan kredensial yang diberikan",
      "Lihat ringkasan data pada halaman utama dashboard",
      "Navigasi ke menu yang diinginkan menggunakan sidebar",
      "Pantau statistik dan KPI pada cards yang tersedia",
      "Gunakan tabel untuk melihat dan mengelola data detail"
    ],
    imageUrl: "/tutorial/dashboard-camat-overview.jpg"
  },
  {
    id: "tutorial-camat-2",
    title: "Mengelola Data Kemiskinan",
    description: "Cara menambah, mengedit, dan menghapus data kemiskinan di Kecamatan Deket",
    category: "Kemiskinan",
    steps: [
      "Akses menu 'Kemiskinan' di sidebar",
      "Klik tombol 'Tambah Data' untuk menambahkan data KPM baru",
      "Isi formulir dengan data yang diperlukan",
      "Klik 'Simpan' untuk menyimpan data",
      "Gunakan tombol Edit (ikon pensil) untuk mengubah data yang sudah ada",
      "Gunakan tombol Hapus (ikon sampah) untuk menghapus data"
    ],
    imageUrl: "/tutorial/kemiskinan-management.jpg"
  },
  {
    id: "tutorial-camat-3",
    title: "Melihat Data Peta",
    description: "Cara menggunakan fitur peta untuk melihat sebaran data geografis",
    category: "Peta",
    steps: [
      "Akses halaman yang memiliki fitur peta",
      "Gunakan kontrol zoom untuk memperbesar atau mengecilkan peta",
      "Klik pada titik atau area di peta untuk melihat detail informasi",
      "Gunakan legenda di sisi kanan peta untuk memahami simbol yang digunakan"
    ],
    imageUrl: "/tutorial/map-usage-camat.jpg"
  },
  {
    id: "tutorial-camat-4",
    title: "Mengelola Pengaturan Profil",
    description: "Cara mengubah pengaturan profil Kecamatan Deket",
    category: "Pengaturan",
    steps: [
      "Akses menu 'Settings' di sidebar",
      "Pilih tab 'Pengaturan Profil Kecamatan'",
      "Edit informasi profil yang ingin diubah",
      "Klik 'Simpan' untuk menyimpan perubahan"
    ],
    imageUrl: "/tutorial/profile-settings.jpg"
  }
];

export const contactDataCamat = {
  email: "kecamatan.deket@smartlamongan.go.id",
  phone: "(0322) 321789",
  hours: "Senin-Jumat, 08.00-16.00 WIB",
  address: "Jl. Raya Deket No. 10, Kecamatan Deket, Kabupaten Lamongan"
};

export const contactDataArrayCamat = [
  {
    id: "contact-camat-1",
    department: "Kantor Kecamatan Deket",
    email: "kecamatan.deket@smartlamongan.go.id",
    phone: "(0322) 321789",
    address: "Jl. Raya Deket No. 10, Kecamatan Deket, Kabupaten Lamongan"
  },
  {
    id: "contact-camat-2",
    department: "Dukungan Teknis Smart Lamongan",
    email: "support@smartlamongan.go.id",
    phone: "(0322) 321123",
    address: "Jl. Lamongan No. 1, Lamongan"
  }
];

export const helpDataCamat = {
  faqs: faqDataCamat,
  guides: tutorialDataCamat,
  contactInfo: contactDataCamat,
  contactArray: contactDataArrayCamat
};
