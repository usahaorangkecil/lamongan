
export interface PengangguranData {
  id: string;
  kecamatan: string;
  pengangguranTerbuka: number;
  lulusanBaru: number;
  pekerjaInformal: number;
}

export const pengangguranData: PengangguranData[] = [
  { id: "1", kecamatan: "Sukodadi", pengangguranTerbuka: 520, lulusanBaru: 185, pekerjaInformal: 735 },
  { id: "2", kecamatan: "Lamongan", pengangguranTerbuka: 780, lulusanBaru: 243, pekerjaInformal: 1120 },
  { id: "3", kecamatan: "Babat", pengangguranTerbuka: 640, lulusanBaru: 212, pekerjaInformal: 890 },
  { id: "4", kecamatan: "Paciran", pengangguranTerbuka: 480, lulusanBaru: 175, pekerjaInformal: 620 },
  { id: "5", kecamatan: "Deket", pengangguranTerbuka: 330, lulusanBaru: 152, pekerjaInformal: 460 },
  { id: "6", kecamatan: "Mantup", pengangguranTerbuka: 410, lulusanBaru: 168, pekerjaInformal: 580 },
  { id: "7", kecamatan: "Brondong", pengangguranTerbuka: 390, lulusanBaru: 145, pekerjaInformal: 510 },
  { id: "8", kecamatan: "Tikung", pengangguranTerbuka: 320, lulusanBaru: 130, pekerjaInformal: 440 },
  { id: "9", kecamatan: "Sugio", pengangguranTerbuka: 360, lulusanBaru: 160, pekerjaInformal: 510 },
  { id: "10", kecamatan: "Kedungpring", pengangguranTerbuka: 290, lulusanBaru: 125, pekerjaInformal: 390 }
];

// Data per bulan untuk tren 2 tahun terakhir
export const pengangguranTrendData = [
  { bulan: 'Jan 2023', pengangguranTerbuka: 5200, lulusanBaru: 1800, pekerjaInformal: 7200 },
  { bulan: 'Feb 2023', pengangguranTerbuka: 5150, lulusanBaru: 1820, pekerjaInformal: 7180 },
  { bulan: 'Mar 2023', pengangguranTerbuka: 5100, lulusanBaru: 1790, pekerjaInformal: 7150 },
  { bulan: 'Apr 2023', pengangguranTerbuka: 5080, lulusanBaru: 1770, pekerjaInformal: 7120 },
  { bulan: 'May 2023', pengangguranTerbuka: 5070, lulusanBaru: 1780, pekerjaInformal: 7100 },
  { bulan: 'Jun 2023', pengangguranTerbuka: 5050, lulusanBaru: 1760, pekerjaInformal: 7090 },
  { bulan: 'Jul 2023', pengangguranTerbuka: 5030, lulusanBaru: 1750, pekerjaInformal: 7070 },
  { bulan: 'Aug 2023', pengangguranTerbuka: 5000, lulusanBaru: 1730, pekerjaInformal: 7050 },
  { bulan: 'Sep 2023', pengangguranTerbuka: 4980, lulusanBaru: 1720, pekerjaInformal: 7030 },
  { bulan: 'Oct 2023', pengangguranTerbuka: 4950, lulusanBaru: 1700, pekerjaInformal: 7010 },
  { bulan: 'Nov 2023', pengangguranTerbuka: 4930, lulusanBaru: 1690, pekerjaInformal: 6980 },
  { bulan: 'Dec 2023', pengangguranTerbuka: 4920, lulusanBaru: 1680, pekerjaInformal: 6950 },
  { bulan: 'Jan 2024', pengangguranTerbuka: 4900, lulusanBaru: 1670, pekerjaInformal: 6930 },
  { bulan: 'Feb 2024', pengangguranTerbuka: 4890, lulusanBaru: 1660, pekerjaInformal: 6910 },
  { bulan: 'Mar 2024', pengangguranTerbuka: 4870, lulusanBaru: 1650, pekerjaInformal: 6880 },
  { bulan: 'Apr 2024', pengangguranTerbuka: 4850, lulusanBaru: 1640, pekerjaInformal: 6860 },
  { bulan: 'May 2024', pengangguranTerbuka: 4830, lulusanBaru: 1630, pekerjaInformal: 6840 },
  { bulan: 'Jun 2024', pengangguranTerbuka: 4810, lulusanBaru: 1620, pekerjaInformal: 6820 },
  { bulan: 'Jul 2024', pengangguranTerbuka: 4790, lulusanBaru: 1610, pekerjaInformal: 6800 },
  { bulan: 'Aug 2024', pengangguranTerbuka: 4770, lulusanBaru: 1600, pekerjaInformal: 6780 },
  { bulan: 'Sep 2024', pengangguranTerbuka: 4750, lulusanBaru: 1590, pekerjaInformal: 6760 },
  { bulan: 'Oct 2024', pengangguranTerbuka: 4730, lulusanBaru: 1580, pekerjaInformal: 6740 },
  { bulan: 'Nov 2024', pengangguranTerbuka: 4710, lulusanBaru: 1570, pekerjaInformal: 6720 },
  { bulan: 'Dec 2024', pengangguranTerbuka: 4690, lulusanBaru: 1560, pekerjaInformal: 6700 }
];

export interface PengangguranDesaData {
  id: string;
  desa: string;
  pengangguranTerbuka: number;
  lulusanBaru: number;
  pekerjaInformal: number;
}

// Data untuk Kecamatan Deket per desa
export const pengangguranDeketData: PengangguranDesaData[] = [
  { id: "1", desa: "Deket Wetan", pengangguranTerbuka: 68, lulusanBaru: 34, pekerjaInformal: 95 },
  { id: "2", desa: "Deket Kulon", pengangguranTerbuka: 72, lulusanBaru: 31, pekerjaInformal: 103 },
  { id: "3", desa: "Babat Agung", pengangguranTerbuka: 43, lulusanBaru: 19, pekerjaInformal: 62 },
  { id: "4", desa: "Sidorejo", pengangguranTerbuka: 51, lulusanBaru: 22, pekerjaInformal: 73 },
  { id: "5", desa: "Dinoyo", pengangguranTerbuka: 37, lulusanBaru: 16, pekerjaInformal: 49 },
  { id: "6", desa: "Rejosari", pengangguranTerbuka: 59, lulusanBaru: 30, pekerjaInformal: 78 }
];

export const pengangguranDeketStats = {
  totalPengangguranTerbuka: 330,
  totalLulusanBaru: 152,
  totalPekerjaInformal: 460,
  trendPengangguran: -2.3, // percentage change from last month
  trendLulusanBaru: 1.5,
  trendPekerjaInformal: 0.3
};

export const pengangguranDeketTrendData = [
  { bulan: 'Jan 2023', pengangguranTerbuka: 390, lulusanBaru: 178, pekerjaInformal: 520 },
  { bulan: 'Mar 2023', pengangguranTerbuka: 385, lulusanBaru: 175, pekerjaInformal: 515 },
  { bulan: 'Jun 2023', pengangguranTerbuka: 375, lulusanBaru: 170, pekerjaInformal: 510 },
  { bulan: 'Sep 2023', pengangguranTerbuka: 360, lulusanBaru: 165, pekerjaInformal: 505 },
  { bulan: 'Dec 2023', pengangguranTerbuka: 350, lulusanBaru: 160, pekerjaInformal: 500 },
  { bulan: 'Mar 2024', pengangguranTerbuka: 340, lulusanBaru: 155, pekerjaInformal: 490 },
  { bulan: 'Jun 2024', pengangguranTerbuka: 335, lulusanBaru: 152, pekerjaInformal: 480 },
  { bulan: 'Sep 2024', pengangguranTerbuka: 330, lulusanBaru: 152, pekerjaInformal: 460 }
];
