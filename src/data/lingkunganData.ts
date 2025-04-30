
export interface LingkunganData {
  id: string;
  kecamatan: string;
  volumeSampah: number; // ton per hari
  tps: number; // jumlah TPS
  tindakLanjut: 'Bank Sampah' | 'TPA' | 'Daur Ulang' | 'Belum Diproses';
}

export const lingkunganData: LingkunganData[] = [
  { id: "1", kecamatan: "Sukodadi", volumeSampah: 12.5, tps: 4, tindakLanjut: "TPA" },
  { id: "2", kecamatan: "Lamongan", volumeSampah: 28.3, tps: 8, tindakLanjut: "Bank Sampah" },
  { id: "3", kecamatan: "Babat", volumeSampah: 18.7, tps: 6, tindakLanjut: "Daur Ulang" },
  { id: "4", kecamatan: "Paciran", volumeSampah: 14.2, tps: 5, tindakLanjut: "TPA" },
  { id: "5", kecamatan: "Deket", volumeSampah: 8.4, tps: 3, tindakLanjut: "Bank Sampah" },
  { id: "6", kecamatan: "Mantup", volumeSampah: 7.6, tps: 3, tindakLanjut: "Belum Diproses" },
  { id: "7", kecamatan: "Brondong", volumeSampah: 11.8, tps: 4, tindakLanjut: "TPA" },
  { id: "8", kecamatan: "Tikung", volumeSampah: 6.9, tps: 2, tindakLanjut: "Belum Diproses" },
  { id: "9", kecamatan: "Sugio", volumeSampah: 9.5, tps: 3, tindakLanjut: "Daur Ulang" },
  { id: "10", kecamatan: "Kedungpring", volumeSampah: 8.2, tps: 3, tindakLanjut: "Bank Sampah" }
];

export const lingkunganDeketData: LingkunganData[] = [
  { id: "1", kecamatan: "Desa Deket Wetan", volumeSampah: 2.8, tps: 1, tindakLanjut: "Bank Sampah" },
  { id: "2", kecamatan: "Desa Deket Kulon", volumeSampah: 2.5, tps: 1, tindakLanjut: "TPA" },
  { id: "3", kecamatan: "Desa Babat Agung", volumeSampah: 1.4, tps: 1, tindakLanjut: "Bank Sampah" },
  { id: "4", kecamatan: "Desa Sidorejo", volumeSampah: 1.7, tps: 0, tindakLanjut: "Belum Diproses" },
  { id: "5", kecamatan: "Desa Dinoyo", volumeSampah: 1.2, tps: 1, tindakLanjut: "Daur Ulang" }
];

export const lingkunganStatistikData = [
  { kecamatan: "Sukodadi", volumeSampah: 12.5, daerahRawanBanjir: "Sedang", curahHujan: 1850 },
  { kecamatan: "Lamongan", volumeSampah: 28.3, daerahRawanBanjir: "Tinggi", curahHujan: 2150 },
  { kecamatan: "Babat", volumeSampah: 18.7, daerahRawanBanjir: "Tinggi", curahHujan: 2050 },
  { kecamatan: "Paciran", volumeSampah: 14.2, daerahRawanBanjir: "Rendah", curahHujan: 1650 },
  { kecamatan: "Deket", volumeSampah: 8.4, daerahRawanBanjir: "Sedang", curahHujan: 1950 }
];

export const lingkunganMapData = [
  { id: "1", nama: "TPA Sukodadi", lokasi: "Sukodadi", lat: -7.1335, lng: 112.3335, jenis: "TPA", status: "Aktif" },
  { id: "2", nama: "Bank Sampah Lamongan", lokasi: "Lamongan", lat: -7.1193, lng: 112.4167, jenis: "Bank Sampah", status: "Aktif" },
  { id: "3", nama: "Titik Rawan Banjir Babat", lokasi: "Babat", lat: -7.1051, lng: 112.1782, jenis: "Titik Banjir", status: "Waspada" },
  { id: "4", nama: "Titik Rawan Longsor Paciran", lokasi: "Paciran", lat: -6.8764, lng: 112.3778, jenis: "Titik Longsor", status: "Waspada" },
  { id: "5", nama: "TPA Deket", lokasi: "Deket", lat: -7.0778, lng: 112.4634, jenis: "TPA", status: "Aktif" }
];
