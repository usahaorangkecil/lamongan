
export interface FaskesData {
  id: string;
  nama: string;
  lokasi: string;
  status: 'Aktif' | 'Tidak Aktif' | 'Renovasi';
  nakesTerdaftar: number;
}

export const faskesData: FaskesData[] = [
  { id: "1", nama: "RSUD Lamongan", lokasi: "Lamongan", status: "Aktif", nakesTerdaftar: 245 },
  { id: "2", nama: "Puskesmas Sukodadi", lokasi: "Sukodadi", status: "Aktif", nakesTerdaftar: 45 },
  { id: "3", nama: "Puskesmas Babat", lokasi: "Babat", status: "Aktif", nakesTerdaftar: 52 },
  { id: "4", nama: "Puskesmas Paciran", lokasi: "Paciran", status: "Aktif", nakesTerdaftar: 38 },
  { id: "5", nama: "Puskesmas Deket", lokasi: "Deket", status: "Aktif", nakesTerdaftar: 32 },
  { id: "6", nama: "Polindes Mantup", lokasi: "Mantup", status: "Renovasi", nakesTerdaftar: 8 },
  { id: "7", nama: "Puskesmas Pembantu Brondong", lokasi: "Brondong", status: "Aktif", nakesTerdaftar: 19 },
  { id: "8", nama: "Klinik Kesehatan Tikung", lokasi: "Tikung", status: "Aktif", nakesTerdaftar: 12 },
  { id: "9", nama: "Puskesmas Sugio", lokasi: "Sugio", status: "Aktif", nakesTerdaftar: 27 },
  { id: "10", nama: "Puskesmas Kedungpring", lokasi: "Kedungpring", status: "Aktif", nakesTerdaftar: 31 }
];

export const faskesDeketData: FaskesData[] = [
  { id: "1", nama: "Puskesmas Deket Wetan", lokasi: "Deket Wetan", status: "Aktif", nakesTerdaftar: 18 },
  { id: "2", nama: "Polindes Deket Kulon", lokasi: "Deket Kulon", status: "Aktif", nakesTerdaftar: 6 },
  { id: "3", nama: "Klinik Pratama Babat Agung", lokasi: "Babat Agung", status: "Aktif", nakesTerdaftar: 7 },
  { id: "4", nama: "Polindes Sidorejo", lokasi: "Sidorejo", status: "Tidak Aktif", nakesTerdaftar: 0 },
  { id: "5", nama: "Klinik Kesehatan Dinoyo", lokasi: "Dinoyo", status: "Aktif", nakesTerdaftar: 4 },
  { id: "6", nama: "Pustu Rejosari", lokasi: "Rejosari", status: "Aktif", nakesTerdaftar: 5 }
];

export const faskesMapData = [
  { id: "1", nama: "RSUD Lamongan", lokasi: "Lamongan", lat: -7.1193, lng: 112.4167, jenis: "RS" },
  { id: "2", nama: "Puskesmas Sukodadi", lokasi: "Sukodadi", lat: -7.1335, lng: 112.3335, jenis: "PUSKESMAS" },
  { id: "3", nama: "Puskesmas Babat", lokasi: "Babat", lat: -7.1051, lng: 112.1782, jenis: "PUSKESMAS" },
  { id: "4", nama: "Puskesmas Paciran", lokasi: "Paciran", lat: -6.8764, lng: 112.3778, jenis: "PUSKESMAS" },
  { id: "5", nama: "Puskesmas Deket", lokasi: "Deket", lat: -7.0778, lng: 112.4634, jenis: "PUSKESMAS" },
  { id: "6", nama: "Polindes Mantup", lokasi: "Mantup", lat: -7.2970, lng: 112.3352, jenis: "POLINDES" },
  { id: "7", nama: "Puskesmas Pembantu Brondong", lokasi: "Brondong", lat: -6.8807, lng: 112.2745, jenis: "PUSTU" },
  { id: "8", nama: "Klinik Kesehatan Tikung", lokasi: "Tikung", lat: -7.1689, lng: 112.3325, jenis: "KLINIK" },
  { id: "9", nama: "Puskesmas Sugio", lokasi: "Sugio", lat: -7.1706, lng: 112.1135, jenis: "PUSKESMAS" },
  { id: "10", nama: "Puskesmas Kedungpring", lokasi: "Kedungpring", lat: -7.2059, lng: 112.1158, jenis: "PUSKESMAS" }
];

export const imunisasiData = [
  { id: "1", kecamatan: "Sukodadi", jumlahBalita: 1530, imunisasiLengkap: 1280, imunisasiTidakLengkap: 250 },
  { id: "2", kecamatan: "Lamongan", jumlahBalita: 2450, imunisasiLengkap: 2150, imunisasiTidakLengkap: 300 },
  { id: "3", kecamatan: "Babat", jumlahBalita: 1980, imunisasiLengkap: 1730, imunisasiTidakLengkap: 250 },
  { id: "4", kecamatan: "Paciran", jumlahBalita: 1620, imunisasiLengkap: 1420, imunisasiTidakLengkap: 200 },
  { id: "5", kecamatan: "Deket", jumlahBalita: 1140, imunisasiLengkap: 950, imunisasiTidakLengkap: 190 }
];

export interface PenyakitData {
  id: string;
  kecamatan: string;
  penyakit: string;
  jumlahKasus: number;
  statusPenanganan: string;
}

export const penyakitData: PenyakitData[] = [
  { id: "1", kecamatan: "Sukodadi", penyakit: "DBD", jumlahKasus: 47, statusPenanganan: "Terkendali" },
  { id: "2", kecamatan: "Lamongan", penyakit: "DBD", jumlahKasus: 75, statusPenanganan: "Terkendali" },
  { id: "3", kecamatan: "Babat", penyakit: "DBD", jumlahKasus: 56, statusPenanganan: "Waspada" },
  { id: "4", kecamatan: "Paciran", penyakit: "ISPA", jumlahKasus: 149, statusPenanganan: "Terkendali" },
  { id: "5", kecamatan: "Deket", penyakit: "DBD", jumlahKasus: 28, statusPenanganan: "Terkendali" },
  { id: "6", kecamatan: "Sukodadi", penyakit: "Pneumonia", jumlahKasus: 32, statusPenanganan: "Terkendali" },
  { id: "7", kecamatan: "Lamongan", penyakit: "Pneumonia", jumlahKasus: 58, statusPenanganan: "Waspada" },
  { id: "8", kecamatan: "Babat", penyakit: "Pneumonia", jumlahKasus: 29, statusPenanganan: "Terkendali" },
  { id: "9", kecamatan: "Lamongan", penyakit: "Diabetes", jumlahKasus: 124, statusPenanganan: "Waspada" },
  { id: "10", kecamatan: "Babat", penyakit: "Hipertensi", jumlahKasus: 187, statusPenanganan: "Waspada" },
  { id: "11", kecamatan: "Kedungpring", penyakit: "Diare", jumlahKasus: 56, statusPenanganan: "Terkendali" },
  { id: "12", kecamatan: "Deket", penyakit: "Diabetes", jumlahKasus: 68, statusPenanganan: "Waspada" },
  { id: "13", kecamatan: "Paciran", penyakit: "Hipertensi", jumlahKasus: 178, statusPenanganan: "Waspada" },
  { id: "14", kecamatan: "Sukodadi", penyakit: "Diare", jumlahKasus: 42, statusPenanganan: "Terkendali" },
  { id: "15", kecamatan: "Deket", penyakit: "ISPA", jumlahKasus: 83, statusPenanganan: "Terkendali" }
];

export interface VaksinasiData {
  id: string;
  kecamatan: string;
  jenisVaksin: string;
  jumlahPenerima: number;
  statusVaksinasi: string;
  tanggalPelaksanaan: string;
}

export const vaksinasiData: VaksinasiData[] = [
  { id: "1", kecamatan: "Sukodadi", jenisVaksin: "Covid-19", jumlahPenerima: 12500, statusVaksinasi: "80%", tanggalPelaksanaan: "2023-01-15" },
  { id: "2", kecamatan: "Lamongan", jenisVaksin: "Covid-19", jumlahPenerima: 18200, statusVaksinasi: "85%", tanggalPelaksanaan: "2023-01-20" },
  { id: "3", kecamatan: "Babat", jenisVaksin: "Covid-19", jumlahPenerima: 14800, statusVaksinasi: "78%", tanggalPelaksanaan: "2023-01-25" },
  { id: "4", kecamatan: "Paciran", jenisVaksin: "Covid-19", jumlahPenerima: 11600, statusVaksinasi: "82%", tanggalPelaksanaan: "2023-02-05" },
  { id: "5", kecamatan: "Deket", jenisVaksin: "Covid-19", jumlahPenerima: 9400, statusVaksinasi: "79%", tanggalPelaksanaan: "2023-02-10" },
  { id: "6", kecamatan: "Sukodadi", jenisVaksin: "Campak", jumlahPenerima: 3200, statusVaksinasi: "92%", tanggalPelaksanaan: "2023-03-05" },
  { id: "7", kecamatan: "Lamongan", jenisVaksin: "Campak", jumlahPenerima: 4500, statusVaksinasi: "95%", tanggalPelaksanaan: "2023-03-10" },
  { id: "8", kecamatan: "Babat", jenisVaksin: "Campak", jumlahPenerima: 3800, statusVaksinasi: "90%", tanggalPelaksanaan: "2023-03-15" },
  { id: "9", kecamatan: "Paciran", jenisVaksin: "Campak", jumlahPenerima: 2900, statusVaksinasi: "88%", tanggalPelaksanaan: "2023-03-20" },
  { id: "10", kecamatan: "Deket", jenisVaksin: "Campak", jumlahPenerima: 2400, statusVaksinasi: "91%", tanggalPelaksanaan: "2023-03-25" },
  { id: "11", kecamatan: "Sukodadi", jenisVaksin: "Hepatitis B", jumlahPenerima: 2800, statusVaksinasi: "85%", tanggalPelaksanaan: "2023-04-05" },
  { id: "12", kecamatan: "Lamongan", jenisVaksin: "Hepatitis B", jumlahPenerima: 3900, statusVaksinasi: "88%", tanggalPelaksanaan: "2023-04-10" },
  { id: "13", kecamatan: "Babat", jenisVaksin: "Hepatitis B", jumlahPenerima: 3300, statusVaksinasi: "82%", tanggalPelaksanaan: "2023-04-15" },
  { id: "14", kecamatan: "Paciran", jenisVaksin: "Hepatitis B", jumlahPenerima: 2600, statusVaksinasi: "80%", tanggalPelaksanaan: "2023-04-20" },
  { id: "15", kecamatan: "Deket", jenisVaksin: "Hepatitis B", jumlahPenerima: 2100, statusVaksinasi: "83%", tanggalPelaksanaan: "2023-04-25" }
];

export interface BansosKesehatanData {
  id: string;
  namaPenerima: string;
  alamat: string;
  jenisBansos: string;
  statusVerifikasi: string;
  tanggalPenerimaan?: string;
  jumlahAnggotaKeluarga?: number;
}

export const bansosKesehatanData: BansosKesehatanData[] = [
  { id: "1", namaPenerima: "Keluarga Suroso", alamat: "Sukodadi", jenisBansos: "JKN-KIS", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-02-15", jumlahAnggotaKeluarga: 5 },
  { id: "2", namaPenerima: "Keluarga Suparmin", alamat: "Lamongan", jenisBansos: "JKN-KIS", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-02-20", jumlahAnggotaKeluarga: 4 },
  { id: "3", namaPenerima: "Keluarga Hartono", alamat: "Babat", jenisBansos: "JKN-KIS", statusVerifikasi: "Proses Verifikasi", tanggalPenerimaan: "2023-02-25", jumlahAnggotaKeluarga: 6 },
  { id: "4", namaPenerima: "Keluarga Sukijan", alamat: "Paciran", jenisBansos: "JKN-KIS", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-03-05", jumlahAnggotaKeluarga: 3 },
  { id: "5", namaPenerima: "Keluarga Maryono", alamat: "Deket", jenisBansos: "JKN-KIS", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-03-10", jumlahAnggotaKeluarga: 4 },
  { id: "6", namaPenerima: "Keluarga Sumiati", alamat: "Sukodadi", jenisBansos: "Obat Gratis", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-03-15", jumlahAnggotaKeluarga: 3 },
  { id: "7", namaPenerima: "Keluarga Widodo", alamat: "Lamongan", jenisBansos: "Obat Gratis", statusVerifikasi: "Proses Verifikasi", tanggalPenerimaan: "2023-03-20", jumlahAnggotaKeluarga: 5 },
  { id: "8", namaPenerima: "Keluarga Suratno", alamat: "Babat", jenisBansos: "Biaya Pengobatan", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-03-25", jumlahAnggotaKeluarga: 4 },
  { id: "9", namaPenerima: "Keluarga Juminten", alamat: "Paciran", jenisBansos: "Biaya Pengobatan", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-04-05", jumlahAnggotaKeluarga: 3 },
  { id: "10", namaPenerima: "Keluarga Suratmin", alamat: "Deket", jenisBansos: "Biaya Pengobatan", statusVerifikasi: "Proses Verifikasi", tanggalPenerimaan: "2023-04-10", jumlahAnggotaKeluarga: 6 },
  { id: "11", namaPenerima: "Keluarga Sutrisno", alamat: "Sukodadi", jenisBansos: "Bantuan Vitamin", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-04-15", jumlahAnggotaKeluarga: 4 },
  { id: "12", namaPenerima: "Keluarga Winarso", alamat: "Lamongan", jenisBansos: "Bantuan Vitamin", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-04-20", jumlahAnggotaKeluarga: 5 },
  { id: "13", namaPenerima: "Keluarga Suharno", alamat: "Babat", jenisBansos: "Alat Kesehatan", statusVerifikasi: "Proses Verifikasi", tanggalPenerimaan: "2023-04-25", jumlahAnggotaKeluarga: 3 },
  { id: "14", namaPenerima: "Keluarga Sutarjo", alamat: "Paciran", jenisBansos: "Alat Kesehatan", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-05-05", jumlahAnggotaKeluarga: 4 },
  { id: "15", namaPenerima: "Keluarga Mulyono", alamat: "Deket", jenisBansos: "Alat Kesehatan", statusVerifikasi: "Terverifikasi", tanggalPenerimaan: "2023-05-10", jumlahAnggotaKeluarga: 5 }
];
