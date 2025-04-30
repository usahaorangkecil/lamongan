
// Detail data for kemiskinan in each village of Kecamatan Deket
export const kemiskinanDeketDetailData = [
  { 
    desa: "Deket Wetan", 
    keluargaMiskin: 178, 
    bansosTerima: 165, 
    kpmTerverifikasi: 155,
    persentaseKemiskinan: 14.2
  },
  { 
    desa: "Deket Kulon", 
    keluargaMiskin: 145, 
    bansosTerima: 134, 
    kpmTerverifikasi: 128,
    persentaseKemiskinan: 12.8
  },
  { 
    desa: "Babat Agung", 
    keluargaMiskin: 98, 
    bansosTerima: 92, 
    kpmTerverifikasi: 85,
    persentaseKemiskinan: 10.5
  },
  { 
    desa: "Sidorejo", 
    keluargaMiskin: 110, 
    bansosTerima: 102, 
    kpmTerverifikasi: 94,
    persentaseKemiskinan: 15.2
  },
  { 
    desa: "Dinoyo", 
    keluargaMiskin: 68, 
    bansosTerima: 62, 
    kpmTerverifikasi: 58,
    persentaseKemiskinan: 9.7
  },
  { 
    desa: "Rejosari", 
    keluargaMiskin: 51, 
    bansosTerima: 48, 
    kpmTerverifikasi: 45,
    persentaseKemiskinan: 8.3
  }
];

// KKM (Keluarga Penerima Manfaat) detail data
export const kpmDeketDetailData = [
  { 
    id: "KPM001", 
    namaKPM: "Keluarga Sudirman", 
    alamat: "Dusun Krajan, Desa Deket Wetan", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "PKH, BPNT" 
  },
  { 
    id: "KPM002", 
    namaKPM: "Keluarga Karso", 
    alamat: "Dusun Tanjung, Desa Deket Kulon", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "PKH, BPNT" 
  },
  { 
    id: "KPM003", 
    namaKPM: "Keluarga Wagiman", 
    alamat: "Dusun Karang, Desa Babat Agung", 
    statusVerifikasi: "Proses Verifikasi", 
    bantuanTerima: "BPNT" 
  },
  { 
    id: "KPM004", 
    namaKPM: "Keluarga Suroso", 
    alamat: "Dusun Baru, Desa Sidorejo", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "PKH, PIP" 
  },
  { 
    id: "KPM005", 
    namaKPM: "Keluarga Joko", 
    alamat: "Dusun Lama, Desa Dinoyo", 
    statusVerifikasi: "Belum Terverifikasi", 
    bantuanTerima: "-" 
  },
  { 
    id: "KPM006", 
    namaKPM: "Keluarga Sumadi", 
    alamat: "Dusun Lor, Desa Deket Wetan", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "PKH" 
  },
  { 
    id: "KPM007", 
    namaKPM: "Keluarga Tukimin", 
    alamat: "Dusun Kidul, Desa Deket Kulon", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "BPNT, PIP" 
  },
  { 
    id: "KPM008", 
    namaKPM: "Keluarga Wardi", 
    alamat: "Dusun Tengah, Desa Sidorejo", 
    statusVerifikasi: "Terverifikasi", 
    bantuanTerima: "PKH, BPNT" 
  }
];

// Polygon data for map visualization
export const kemiskinanDeketPolygons = [
  {
    name: "Zona Kemiskinan Tinggi - Deket Wetan",
    coordinates: [
      [[-7.0778, 112.4634], [-7.0778, 112.4734], [-7.0678, 112.4734], [-7.0678, 112.4634], [-7.0778, 112.4634]]
    ],
    color: "#FF5252" // Red
  },
  {
    name: "Zona Kemiskinan Menengah - Deket Kulon",
    coordinates: [
      [[-7.0758, 112.4534], [-7.0758, 112.4634], [-7.0658, 112.4634], [-7.0658, 112.4534], [-7.0758, 112.4534]]
    ],
    color: "#FFC107" // Amber
  },
  {
    name: "Zona Kemiskinan Rendah - Dinoyo",
    coordinates: [
      [[-7.0798, 112.4734], [-7.0798, 112.4834], [-7.0698, 112.4834], [-7.0698, 112.4734], [-7.0798, 112.4734]]
    ],
    color: "#4CAF50" // Green
  }
];

// Summary statistics for KPI cards
export const kemiskinanDeketStats = {
  totalKeluargaMiskin: 650,
  totalBansosAktif: 603,
  totalKPMTerverifikasi: 565
};
