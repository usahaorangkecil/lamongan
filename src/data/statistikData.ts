
// Common population data interfaces
export interface PopulationData {
  kecamatan: string;
  totalPenduduk: number;
  lakiLaki: number;
  perempuan: number;
  usiaProduktif: number;
  lansia: number;
  anak: number;
}

export interface AgeGroupData {
  ageGroup: string;
  male: number;
  female: number;
}

// Data for the entire Lamongan regency
export const lamonganPopulationData: PopulationData[] = [
  { kecamatan: "Lamongan", totalPenduduk: 68450, lakiLaki: 33425, perempuan: 35025, usiaProduktif: 42500, lansia: 7850, anak: 18100 },
  { kecamatan: "Deket", totalPenduduk: 23578, lakiLaki: 11652, perempuan: 11926, usiaProduktif: 14789, lansia: 2845, anak: 5944 },
  { kecamatan: "Tikung", totalPenduduk: 31250, lakiLaki: 15320, perempuan: 15930, usiaProduktif: 19575, lansia: 3625, anak: 8050 },
  { kecamatan: "Sugio", totalPenduduk: 42780, lakiLaki: 21045, perempuan: 21735, usiaProduktif: 26850, lansia: 5120, anak: 10810 },
  { kecamatan: "Sukodadi", totalPenduduk: 35670, lakiLaki: 17480, perempuan: 18190, usiaProduktif: 22465, lansia: 4280, anak: 8925 },
  { kecamatan: "Babat", totalPenduduk: 58920, lakiLaki: 28920, perempuan: 30000, usiaProduktif: 37140, lansia: 6430, anak: 15350 },
  { kecamatan: "Paciran", totalPenduduk: 47850, lakiLaki: 23650, perempuan: 24200, usiaProduktif: 30145, lansia: 5360, anak: 12345 },
  { kecamatan: "Brondong", totalPenduduk: 29750, lakiLaki: 14580, perempuan: 15170, usiaProduktif: 18635, lansia: 3570, anak: 7545 },
  { kecamatan: "Turi", totalPenduduk: 21450, lakiLaki: 10510, perempuan: 10940, usiaProduktif: 13510, lansia: 2575, anak: 5365 },
  { kecamatan: "Kedungpring", totalPenduduk: 34820, lakiLaki: 17125, perempuan: 17695, usiaProduktif: 21935, lansia: 4180, anak: 8705 }
];

// Population pyramid data for Lamongan
export const populationPyramidData: AgeGroupData[] = [
  { ageGroup: "0-4", male: 15230, female: 14780 },
  { ageGroup: "5-9", male: 16450, female: 15920 },
  { ageGroup: "10-14", male: 17350, female: 16780 },
  { ageGroup: "15-19", male: 18250, female: 18120 },
  { ageGroup: "20-24", male: 19450, female: 19750 },
  { ageGroup: "25-29", male: 21230, female: 21680 },
  { ageGroup: "30-34", male: 20150, female: 20580 },
  { ageGroup: "35-39", male: 18750, female: 19230 },
  { ageGroup: "40-44", male: 17850, female: 18320 },
  { ageGroup: "45-49", male: 16420, female: 17150 },
  { ageGroup: "50-54", male: 14680, female: 15450 },
  { ageGroup: "55-59", male: 12230, female: 13150 },
  { ageGroup: "60-64", male: 9850, female: 10780 },
  { ageGroup: "65-69", male: 7230, female: 8450 },
  { ageGroup: "70-74", male: 5450, female: 6780 },
  { ageGroup: "75+", male: 4320, female: 5890 }
];

// Population growth and migration data
export const populationGrowthData = {
  currentPopulation: 394520,
  growthRate: 1.2,
  birthRate: 18.5,
  deathRate: 7.3,
  migrationIn: 2450,
  migrationOut: 1850
};

// Health statistics for OPD (Dinas Kesehatan)
export interface HealthStatData {
  kecamatan: string;
  totalPenduduk: number;
  penyakitMenular: number;
  penyakitTidakMenular: number;
  jumlahFaskes: number;
  persentaseAsuransi: number;
}

export const healthStatData: HealthStatData[] = [
  { kecamatan: "Lamongan", totalPenduduk: 68450, penyakitMenular: 235, penyakitTidakMenular: 1250, jumlahFaskes: 12, persentaseAsuransi: 78.5 },
  { kecamatan: "Deket", totalPenduduk: 23578, penyakitMenular: 87, penyakitTidakMenular: 450, jumlahFaskes: 6, persentaseAsuransi: 72.3 },
  { kecamatan: "Tikung", totalPenduduk: 31250, penyakitMenular: 112, penyakitTidakMenular: 580, jumlahFaskes: 8, persentaseAsuransi: 68.7 },
  { kecamatan: "Sugio", totalPenduduk: 42780, penyakitMenular: 156, penyakitTidakMenular: 780, jumlahFaskes: 9, persentaseAsuransi: 65.2 },
  { kecamatan: "Sukodadi", totalPenduduk: 35670, penyakitMenular: 125, penyakitTidakMenular: 650, jumlahFaskes: 7, persentaseAsuransi: 70.5 },
  { kecamatan: "Babat", totalPenduduk: 58920, penyakitMenular: 210, penyakitTidakMenular: 1120, jumlahFaskes: 11, persentaseAsuransi: 75.8 },
  { kecamatan: "Paciran", totalPenduduk: 47850, penyakitMenular: 168, penyakitTidakMenular: 890, jumlahFaskes: 10, persentaseAsuransi: 73.2 },
  { kecamatan: "Brondong", totalPenduduk: 29750, penyakitMenular: 105, penyakitTidakMenular: 520, jumlahFaskes: 6, persentaseAsuransi: 67.9 },
  { kecamatan: "Turi", totalPenduduk: 21450, penyakitMenular: 78, penyakitTidakMenular: 380, jumlahFaskes: 5, persentaseAsuransi: 66.4 },
  { kecamatan: "Kedungpring", totalPenduduk: 34820, penyakitMenular: 122, penyakitTidakMenular: 610, jumlahFaskes: 7, persentaseAsuransi: 69.3 }
];

// Disease trend data for OPD
export const diseaseTrendData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      name: "DBD",
      data: [45, 52, 68, 74, 83, 90, 87, 75, 68, 60, 55, 50]
    },
    {
      name: "ISPA",
      data: [120, 132, 145, 162, 170, 165, 155, 148, 138, 125, 118, 110]
    },
    {
      name: "Pneumonia",
      data: [35, 42, 48, 52, 58, 62, 65, 60, 55, 50, 45, 40]
    },
    {
      name: "Diare",
      data: [85, 92, 98, 105, 112, 120, 115, 108, 100, 95, 90, 88]
    }
  ]
};

// Health indicators
export const healthIndicators = {
  indeksKesehatanMasyarakat: 78.5,
  persentaseAksesFaskes: 82.3,
  persentaseAsuransiKesehatan: 72.8,
  angkaKematianBayi: 15.4,
  harapanHidup: 72.5
};

// Deket kecamatan specific data
export const deketDemographicsData = {
  totalPenduduk: 23578,
  lakiLaki: 11652,
  perempuan: 11926,
  rasioJenisKelamin: 97.7, // Laki-laki per 100 perempuan
  usiaProduktif: 14789,
  lansia: 2845,
  anak: 5944,
  pertumbuhanPenduduk: 1.1,
  migrasiMasuk: 245,
  migrasiKeluar: 187,
  kepadatanPenduduk: 785 // per km²
};

// Population per desa in Deket kecamatan
export const desaDeketData = [
  { desa: "Deket Wetan", penduduk: 3825, lakiLaki: 1880, perempuan: 1945, usiaProduktif: 2410 },
  { desa: "Deket Kulon", penduduk: 3560, lakiLaki: 1740, perempuan: 1820, usiaProduktif: 2230 },
  { desa: "Babat Agung", penduduk: 2785, lakiLaki: 1370, perempuan: 1415, usiaProduktif: 1720 },
  { desa: "Sidorejo", penduduk: 3150, lakiLaki: 1550, perempuan: 1600, usiaProduktif: 1980 },
  { desa: "Dinoyo", penduduk: 2450, lakiLaki: 1210, perempuan: 1240, usiaProduktif: 1520 },
  { desa: "Rejosari", penduduk: 2650, lakiLaki: 1315, perempuan: 1335, usiaProduktif: 1670 },
  { desa: "Sugihwaras", penduduk: 2870, lakiLaki: 1410, perempuan: 1460, usiaProduktif: 1809 },
  { desa: "Waru", penduduk: 2288, lakiLaki: 1177, perempuan: 1111, usiaProduktif: 1450 }
];
