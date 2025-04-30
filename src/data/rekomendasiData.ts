
export interface RekomendasiData {
  id: string;
  kategori: string;
  judul: string;
  rekomendasi: string;
  dataPendukung: string;
  sumberData: string;
}

export const rekomendasiData: RekomendasiData[] = [
  { 
    id: "1", 
    kategori: "Kesejahteraan Masyarakat", 
    judul: "Peningkatan Kesejahteraan Masyarakat",
    rekomendasi: "Berdasarkan data kemiskinan dan keluarga miskin, usulkan untuk memperluas cakupan program Bansos bagi Keluarga Miskin (KPM) yang belum terdaftar.",
    dataPendukung: "Jumlah Keluarga Miskin yang belum terdaftar di program Bansos: 1,250 KK.",
    sumberData: "/dashboard/kemiskinan"
  },
  { 
    id: "2", 
    kategori: "Pengangguran", 
    judul: "Penanganan Pengangguran Terbuka",
    rekomendasi: "Untuk mengurangi pengangguran terbuka, prioritaskan program pelatihan keterampilan bagi lulusan baru dan pekerja informal di daerah dengan angka pengangguran tinggi.",
    dataPendukung: "Persentase Pengangguran Terbuka tertinggi di Kecamatan Lamongan (780) dan jumlah Lulusan Baru belum bekerja (243).",
    sumberData: "/dashboard/pengangguran"
  },
  { 
    id: "3", 
    kategori: "Infrastruktur", 
    judul: "Peningkatan Infrastruktur Dasar",
    rekomendasi: "Berdasarkan data panjang jalan dan status proyek infrastruktur, alokasikan anggaran lebih banyak untuk pembangunan dan pemeliharaan jalan di Kecamatan Sukodadi yang memiliki jalan rusak berat.",
    dataPendukung: "Panjang Jalan Rusak di Kecamatan Sukodadi (15,3 km) dan anggaran Proyek Infrastruktur yang tersedia (Rp 5,2 Miliar).",
    sumberData: "/dashboard/infrastruktur"
  },
  { 
    id: "4", 
    kategori: "Kesehatan", 
    judul: "Perbaikan Fasilitas Kesehatan",
    rekomendasi: "Alokasikan dana untuk meningkatkan jumlah Nakes di Kecamatan Deket yang kekurangan tenaga medis, serta perbaiki fasilitas kesehatan di daerah tersebut.",
    dataPendukung: "Jumlah Nakes Terdaftar (32) dan status Faskes Aktif (5) di Kecamatan Deket.",
    sumberData: "/dashboard/kesehatan"
  },
  { 
    id: "5", 
    kategori: "Pendidikan", 
    judul: "Meningkatkan Kualitas Pendidikan",
    rekomendasi: "Berdasarkan data Rasio Guru/Murid, tingkatkan anggaran untuk pengadaan fasilitas dan perekrutan guru di sekolah-sekolah dengan rasio tinggi di Kecamatan Sukodadi.",
    dataPendukung: "Rasio Guru/Murid di Kecamatan Sukodadi (1:28) dan Akreditasi sekolah (60% B, 40% A).",
    sumberData: "/dashboard/pendidikan"
  },
  { 
    id: "6", 
    kategori: "Kemiskinan", 
    judul: "Percepatan Program Pengentasan Kemiskinan",
    rekomendasi: "Fokuskan program pengentasan kemiskinan di Kecamatan Sukodadi yang memiliki angka kemiskinan tertinggi dengan mempercepat distribusi Bansos dan pembangunan Infrastruktur Dasar.",
    dataPendukung: "Data Zona Kemiskinan dan Keluarga Miskin di Kecamatan Sukodadi (1,250 KK).",
    sumberData: "/dashboard/kemiskinan, /dashboard/infrastruktur"
  }
];

export const prioritasProyekData = [
  { id: "1", nama: "Pembangunan Jalan Provinsi Lamongan-Sukodadi", prioritas: "Tinggi", anggaran: 12500000000, statusAnggaran: "Tersedia" },
  { id: "2", nama: "Peningkatan Fasilitas Kesehatan di Deket", prioritas: "Tinggi", anggaran: 8700000000, statusAnggaran: "Sebagian" },
  { id: "3", nama: "Program Pelatihan Keterampilan di Lamongan", prioritas: "Menengah", anggaran: 5200000000, statusAnggaran: "Tersedia" },
  { id: "4", nama: "Perbaikan Sekolah di Sukodadi", prioritas: "Menengah", anggaran: 4800000000, statusAnggaran: "Tersedia" },
  { id: "5", nama: "Program Bantuan Pangan di Zona Kemiskinan", prioritas: "Tinggi", anggaran: 7500000000, statusAnggaran: "Sebagian" }
];

export const alokasiBudgetData = [
  { sektor: "Infrastruktur", persentase: 30 },
  { sektor: "Pendidikan", persentase: 25 },
  { sektor: "Kesehatan", persentase: 20 },
  { sektor: "Kemiskinan", persentase: 15 },
  { sektor: "Pengangguran", persentase: 10 }
];
