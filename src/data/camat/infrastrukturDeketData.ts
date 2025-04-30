
// Detailed infrastructure project data for Kecamatan Deket
export const infrastrukturDeketDetailData = [
  { 
    id: "INF001", 
    namaProyek: "Perbaikan Jalan Desa Deket Wetan", 
    lokasi: "Desa Deket Wetan", 
    status: "Selesai", 
    anggaran: 450000000,
    tahun: 2024,
    panjangJalan: 1.2 // km
  },
  { 
    id: "INF002", 
    namaProyek: "Drainase Deket Kulon", 
    lokasi: "Desa Deket Kulon", 
    status: "Pelaksanaan", 
    anggaran: 350000000,
    tahun: 2024,
    panjangDrainase: 1.8 // km
  },
  { 
    id: "INF003", 
    namaProyek: "Irigasi Persawahan Babat Agung", 
    lokasi: "Desa Babat Agung", 
    status: "Perencanaan", 
    anggaran: 320000000,
    tahun: 2024,
    luasIrigasi: 8.5 // hektar
  },
  { 
    id: "INF004", 
    namaProyek: "Jembatan Desa Sidorejo", 
    lokasi: "Desa Sidorejo", 
    status: "Pelaksanaan", 
    anggaran: 400000000,
    tahun: 2024,
    panjangJembatan: 15 // meter
  },
  { 
    id: "INF005", 
    namaProyek: "Jaringan Air Bersih Dinoyo", 
    lokasi: "Desa Dinoyo", 
    status: "Selesai", 
    anggaran: 280000000,
    tahun: 2023,
    cakupanKK: 320 // KK
  },
  { 
    id: "INF006", 
    namaProyek: "Perbaikan Jalan Desa Rejosari", 
    lokasi: "Desa Rejosari", 
    status: "Pelaksanaan", 
    anggaran: 375000000,
    tahun: 2024,
    panjangJalan: 1.4 // km
  },
  { 
    id: "INF007", 
    namaProyek: "Drainase Persawahan Deket Wetan", 
    lokasi: "Desa Deket Wetan", 
    status: "Perencanaan", 
    anggaran: 230000000,
    tahun: 2024,
    panjangDrainase: 1.2 // km
  }
];

// Infrastructure statistics per village
export const infrastrukturDeketStats = {
  totalPanjangJalan: 45.1, // km
  proyekIrigasiAktif: 3,
  aksesAirBersih: "78%",
  totalProyekAktif: 7,
  totalAnggaran: 2405000000,
  perDesa: [
    { desa: "Deket Wetan", panjangJalan: 12.5, aksesAirBersih: "82%" },
    { desa: "Deket Kulon", panjangJalan: 10.8, aksesAirBersih: "79%" },
    { desa: "Babat Agung", panjangJalan: 6.2, aksesAirBersih: "75%" },
    { desa: "Sidorejo", panjangJalan: 5.8, aksesAirBersih: "72%" },
    { desa: "Dinoyo", panjangJalan: 4.5, aksesAirBersih: "85%" },
    { desa: "Rejosari", panjangJalan: 5.3, aksesAirBersih: "74%" }
  ]
};

// Map data for infrastructure in Kecamatan Deket
export const infrastrukturDeketMapData = [
  { 
    id: "INF001", 
    namaProyek: "Perbaikan Jalan Desa Deket Wetan", 
    lokasi: "Desa Deket Wetan", 
    lat: -7.0778, 
    lng: 112.4634, 
    jenis: "JALAN", 
    status: "Selesai" 
  },
  { 
    id: "INF002", 
    namaProyek: "Drainase Deket Kulon", 
    lokasi: "Desa Deket Kulon", 
    lat: -7.0758, 
    lng: 112.4534, 
    jenis: "DRAINASE", 
    status: "Pelaksanaan" 
  },
  { 
    id: "INF003", 
    namaProyek: "Irigasi Persawahan Babat Agung", 
    lokasi: "Desa Babat Agung", 
    lat: -7.0798, 
    lng: 112.4534, 
    jenis: "IRIGASI", 
    status: "Perencanaan" 
  },
  { 
    id: "INF004", 
    namaProyek: "Jembatan Desa Sidorejo", 
    lokasi: "Desa Sidorejo", 
    lat: -7.0758, 
    lng: 112.4734, 
    jenis: "JEMBATAN", 
    status: "Pelaksanaan" 
  },
  { 
    id: "INF005", 
    namaProyek: "Jaringan Air Bersih Dinoyo", 
    lokasi: "Desa Dinoyo", 
    lat: -7.0798, 
    lng: 112.4734, 
    jenis: "AIR_BERSIH", 
    status: "Selesai" 
  }
];
