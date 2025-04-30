
export interface InfrastrukturData {
  id: string;
  namaProyek: string;
  lokasi: string;
  status: 'Perencanaan' | 'Pelaksanaan' | 'Selesai';
  anggaran: number;
}

export const infrastrukturData: InfrastrukturData[] = [
  { id: "1", namaProyek: "Perbaikan Jalan Provinsi", lokasi: "Sukodadi", status: "Pelaksanaan", anggaran: 5200000000 },
  { id: "2", namaProyek: "Pembangunan Jembatan Kali Lamong", lokasi: "Lamongan", status: "Pelaksanaan", anggaran: 8500000000 },
  { id: "3", namaProyek: "Sistem Irigasi Babat", lokasi: "Babat", status: "Selesai", anggaran: 3700000000 },
  { id: "4", namaProyek: "Normalisasi Saluran Air", lokasi: "Paciran", status: "Perencanaan", anggaran: 2100000000 },
  { id: "5", namaProyek: "Jaringan Air Bersih", lokasi: "Deket", status: "Pelaksanaan", anggaran: 1800000000 },
  { id: "6", namaProyek: "Perbaikan Jalan Desa", lokasi: "Mantup", status: "Selesai", anggaran: 950000000 },
  { id: "7", namaProyek: "Talud Penahan Ombak", lokasi: "Brondong", status: "Pelaksanaan", anggaran: 4300000000 },
  { id: "8", namaProyek: "Sistem Drainase", lokasi: "Tikung", status: "Perencanaan", anggaran: 1200000000 },
  { id: "9", namaProyek: "Perbaikan Irigasi Sawah", lokasi: "Sugio", status: "Selesai", anggaran: 1800000000 },
  { id: "10", namaProyek: "Embung Kedungpring", lokasi: "Kedungpring", status: "Pelaksanaan", anggaran: 2500000000 }
];

export const infrastrukturDeketData: InfrastrukturData[] = [
  { id: "1", namaProyek: "Perbaikan Jalan Desa Deket Wetan", lokasi: "Desa Deket Wetan", status: "Selesai", anggaran: 450000000 },
  { id: "2", namaProyek: "Drainase Deket Kulon", lokasi: "Desa Deket Kulon", status: "Pelaksanaan", anggaran: 350000000 },
  { id: "3", namaProyek: "Irigasi Persawahan Babat Agung", lokasi: "Desa Babat Agung", status: "Perencanaan", anggaran: 320000000 },
  { id: "4", namaProyek: "Jembatan Desa Sidorejo", lokasi: "Desa Sidorejo", status: "Pelaksanaan", anggaran: 400000000 },
  { id: "5", namaProyek: "Jaringan Air Bersih Dinoyo", lokasi: "Desa Dinoyo", status: "Selesai", anggaran: 280000000 }
];

export const infrastrukturMapData = [
  { id: "1", namaProyek: "Perbaikan Jalan Provinsi", lokasi: "Sukodadi", lat: -7.1335, lng: 112.3335, jenis: "JALAN", status: "Pelaksanaan" },
  { id: "2", namaProyek: "Pembangunan Jembatan Kali Lamong", lokasi: "Lamongan", lat: -7.1193, lng: 112.4167, jenis: "JEMBATAN", status: "Pelaksanaan" },
  { id: "3", namaProyek: "Sistem Irigasi Babat", lokasi: "Babat", lat: -7.1051, lng: 112.1782, jenis: "IRIGASI", status: "Selesai" },
  { id: "4", namaProyek: "Normalisasi Saluran Air", lokasi: "Paciran", lat: -6.8764, lng: 112.3778, jenis: "DRAINASE", status: "Perencanaan" },
  { id: "5", namaProyek: "Jaringan Air Bersih", lokasi: "Deket", lat: -7.0778, lng: 112.4634, jenis: "AIR_BERSIH", status: "Pelaksanaan" }
];

export const infrastrukturStatistikData = [
  { kecamatan: "Sukodadi", panjangJalan: 78.5, proyekIrigasi: 3, aksesAirBersih: "85%" },
  { kecamatan: "Lamongan", panjangJalan: 124.2, proyekIrigasi: 5, aksesAirBersih: "92%" },
  { kecamatan: "Babat", panjangJalan: 86.8, proyekIrigasi: 4, aksesAirBersih: "87%" },
  { kecamatan: "Paciran", panjangJalan: 62.3, proyekIrigasi: 2, aksesAirBersih: "80%" },
  { kecamatan: "Deket", panjangJalan: 45.1, proyekIrigasi: 3, aksesAirBersih: "78%" }
];
