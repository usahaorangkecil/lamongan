
export interface KemiskinanData {
  id: string;
  namaKPM: string;
  alamat: string;
  statusVerifikasi: 'Terverifikasi' | 'Belum Terverifikasi' | 'Proses Verifikasi';
  bantuanTerima: string;
}

export const kemiskinanData: KemiskinanData[] = [
  { id: "1", namaKPM: "Keluarga Slamet", alamat: "Jl. Pahlawan No. 12, Sukodadi", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" },
  { id: "2", namaKPM: "Keluarga Sutrisno", alamat: "Jl. Ahmad Yani No. 78, Lamongan", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT, PIP" },
  { id: "3", namaKPM: "Keluarga Bambang", alamat: "Jl. Veteran No. 45, Babat", statusVerifikasi: "Proses Verifikasi", bantuanTerima: "BPNT" },
  { id: "4", namaKPM: "Keluarga Suparman", alamat: "Jl. Laut No. 23, Paciran", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" },
  { id: "5", namaKPM: "Keluarga Kariman", alamat: "Jl. Mawar No. 5, Deket", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH" },
  { id: "6", namaKPM: "Keluarga Tukiman", alamat: "Jl. Melati No. 9, Mantup", statusVerifikasi: "Belum Terverifikasi", bantuanTerima: "-" },
  { id: "7", namaKPM: "Keluarga Sukijan", alamat: "Jl. Nelayan No. 14, Brondong", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" },
  { id: "8", namaKPM: "Keluarga Kasiman", alamat: "Jl. Kenanga No. 7, Tikung", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT, PIP" },
  { id: "9", namaKPM: "Keluarga Sutejo", alamat: "Jl. Merdeka No. 32, Sugio", statusVerifikasi: "Proses Verifikasi", bantuanTerima: "BPNT" },
  { id: "10", namaKPM: "Keluarga Parman", alamat: "Jl. Sawah No. 16, Kedungpring", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" }
];

export const kemiskinanDeketData: KemiskinanData[] = [
  { id: "1", namaKPM: "Keluarga Sudirman", alamat: "Dusun Krajan, Desa Deket Wetan", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" },
  { id: "2", namaKPM: "Keluarga Karso", alamat: "Dusun Tanjung, Desa Deket Kulon", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, BPNT" },
  { id: "3", namaKPM: "Keluarga Wagiman", alamat: "Dusun Karang, Desa Babat Agung", statusVerifikasi: "Proses Verifikasi", bantuanTerima: "BPNT" },
  { id: "4", namaKPM: "Keluarga Suroso", alamat: "Dusun Baru, Desa Sidorejo", statusVerifikasi: "Terverifikasi", bantuanTerima: "PKH, PIP" },
  { id: "5", namaKPM: "Keluarga Joko", alamat: "Dusun Lama, Desa Dinoyo", statusVerifikasi: "Belum Terverifikasi", bantuanTerima: "-" }
];

export const kemiskinanPolygons = [
  {
    name: "Zona Kemiskinan Tinggi - Sukodadi",
    coordinates: [
      [[-7.1435, 112.3235], [-7.1435, 112.3435], [-7.1235, 112.3435], [-7.1235, 112.3235], [-7.1435, 112.3235]]
    ],
    color: "#FF5252" // Red
  },
  {
    name: "Zona Kemiskinan Menengah - Lamongan",
    coordinates: [
      [[-7.1293, 112.4067], [-7.1293, 112.4267], [-7.1093, 112.4267], [-7.1093, 112.4067], [-7.1293, 112.4067]]
    ],
    color: "#FFC107" // Amber
  },
  {
    name: "Zona Kemiskinan Rendah - Paciran",
    coordinates: [
      [[-6.8664, 112.3678], [-6.8664, 112.3878], [-6.8464, 112.3878], [-6.8464, 112.3678], [-6.8664, 112.3678]]
    ],
    color: "#4CAF50" // Green
  }
];

export const kemiskinanDataPerKecamatan = [
  { kecamatan: "Sukodadi", keluargaMiskin: 1250, bansosTerima: 1150, kpmTerverifikasi: 1050 },
  { kecamatan: "Lamongan", keluargaMiskin: 1850, bansosTerima: 1720, kpmTerverifikasi: 1580 },
  { kecamatan: "Babat", keluargaMiskin: 1430, bansosTerima: 1320, kpmTerverifikasi: 1180 },
  { kecamatan: "Paciran", keluargaMiskin: 980, bansosTerima: 920, kpmTerverifikasi: 840 },
  { kecamatan: "Deket", keluargaMiskin: 650, bansosTerima: 590, kpmTerverifikasi: 540 }
];
