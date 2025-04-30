
// Detailed waste management data for each village in Kecamatan Deket
export const lingkunganDeketDetailData = [
  { 
    id: "LNG001", 
    desa: "Deket Wetan", 
    volumeSampah: 2.8, 
    tps: 1, 
    tindakLanjut: "Bank Sampah",
    populasi: 2250,
    resikoBanjir: "Sedang"
  },
  { 
    id: "LNG002", 
    desa: "Deket Kulon", 
    volumeSampah: 2.5, 
    tps: 1, 
    tindakLanjut: "TPA",
    populasi: 2150,
    resikoBanjir: "Sedang"
  },
  { 
    id: "LNG003", 
    desa: "Babat Agung", 
    volumeSampah: 1.4, 
    tps: 1, 
    tindakLanjut: "Bank Sampah",
    populasi: 1450,
    resikoBanjir: "Rendah"
  },
  { 
    id: "LNG004", 
    desa: "Sidorejo", 
    volumeSampah: 1.7, 
    tps: 0, 
    tindakLanjut: "Belum Diproses",
    populasi: 1680,
    resikoBanjir: "Tinggi"
  },
  { 
    id: "LNG005", 
    desa: "Dinoyo", 
    volumeSampah: 1.2, 
    tps: 1, 
    tindakLanjut: "Daur Ulang",
    populasi: 1250,
    resikoBanjir: "Rendah"
  },
  { 
    id: "LNG006", 
    desa: "Rejosari", 
    volumeSampah: 1.3, 
    tps: 0, 
    tindakLanjut: "Belum Diproses",
    populasi: 1380,
    resikoBanjir: "Sedang"
  }
];

// Climate and environmental risk data
export const lingkunganDeketStatsData = {
  totalVolumeSampah: 10.9, // ton per hari
  totalTPS: 4,
  curahHujan: 1950, // mm per tahun
  daerahRawanBanjir: [
    { desa: "Sidorejo", tingkatRisiko: "Tinggi", luasWilayah: 1.5 }, // km²
    { desa: "Deket Wetan", tingkatRisiko: "Sedang", luasWilayah: 0.8 },
    { desa: "Deket Kulon", tingkatRisiko: "Sedang", luasWilayah: 0.7 },
    { desa: "Rejosari", tingkatRisiko: "Sedang", luasWilayah: 0.5 }
  ],
  tindakLanjut: {
    bankSampah: 2,
    tpa: 1,
    daurUlang: 1,
    belumDiproses: 2
  }
};

// Map data for environmental facilities and risk areas in Kecamatan Deket
export const lingkunganDeketMapData = [
  { 
    id: "TPA001", 
    nama: "TPA Deket Kulon", 
    lokasi: "Deket Kulon", 
    lat: -7.0758, 
    lng: 112.4534, 
    jenis: "TPA", 
    status: "Aktif" 
  },
  { 
    id: "BS001", 
    nama: "Bank Sampah Deket Wetan", 
    lokasi: "Deket Wetan", 
    lat: -7.0778, 
    lng: 112.4634, 
    jenis: "Bank Sampah", 
    status: "Aktif" 
  },
  { 
    id: "BS002", 
    nama: "Bank Sampah Babat Agung", 
    lokasi: "Babat Agung", 
    lat: -7.0798, 
    lng: 112.4534, 
    jenis: "Bank Sampah", 
    status: "Aktif" 
  },
  { 
    id: "TB001", 
    nama: "Titik Rawan Banjir Sidorejo", 
    lokasi: "Sidorejo", 
    lat: -7.0758, 
    lng: 112.4734, 
    jenis: "Titik Banjir", 
    status: "Waspada" 
  },
  { 
    id: "DR001", 
    nama: "Daur Ulang Dinoyo", 
    lokasi: "Dinoyo", 
    lat: -7.0798, 
    lng: 112.4734, 
    jenis: "Daur Ulang", 
    status: "Aktif" 
  }
];

// Environmental risk zone polygons
export const lingkunganDeketPolygons = [
  {
    name: "Zona Rawan Banjir - Sidorejo",
    coordinates: [
      [[-7.0758, 112.4734], [-7.0758, 112.4834], [-7.0658, 112.4834], [-7.0658, 112.4734], [-7.0758, 112.4734]]
    ],
    color: "#1976D2" // Blue
  },
  {
    name: "Zona Pengelolaan Sampah - Deket Wetan",
    coordinates: [
      [[-7.0778, 112.4634], [-7.0778, 112.4734], [-7.0678, 112.4734], [-7.0678, 112.4634], [-7.0778, 112.4634]]
    ],
    color: "#43A047" // Green
  }
];
