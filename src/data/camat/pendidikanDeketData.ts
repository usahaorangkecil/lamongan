
import { SekolahData } from '@/data/pendidikanData';

// Data for schools in Kecamatan Deket
export const sekolahDeketDetailData: SekolahData[] = [
  { id: "SD1", nama: "SDN 1 Deket Wetan", jenjang: "SD", akreditasi: "A", jumlahSiswa: 175 },
  { id: "SD2", nama: "SDN 1 Deket Kulon", jenjang: "SD", akreditasi: "B", jumlahSiswa: 165 },
  { id: "SD3", nama: "SDN 2 Deket Wetan", jenjang: "SD", akreditasi: "A", jumlahSiswa: 182 },
  { id: "SD4", nama: "SDN 1 Babat Agung", jenjang: "SD", akreditasi: "B", jumlahSiswa: 143 },
  { id: "SD5", nama: "SDN 1 Sidorejo", jenjang: "SD", akreditasi: "B", jumlahSiswa: 128 },
  { id: "SD6", nama: "SDN 1 Dinoyo", jenjang: "SD", akreditasi: "C", jumlahSiswa: 110 },
  { id: "SD7", nama: "SDN 1 Rejosari", jenjang: "SD", akreditasi: "B", jumlahSiswa: 125 },
  { id: "SMP1", nama: "SMPN 1 Deket", jenjang: "SMP", akreditasi: "A", jumlahSiswa: 320 },
  { id: "SMP2", nama: "SMPN 2 Deket", jenjang: "SMP", akreditasi: "B", jumlahSiswa: 280 },
  { id: "MI1", nama: "MI Babat Agung", jenjang: "MI", akreditasi: "B", jumlahSiswa: 120 },
  { id: "MTS1", nama: "MTs Sidorejo", jenjang: "MTs", akreditasi: "C", jumlahSiswa: 170 }
];

// Data for guru
export const guruDeketData = [
  { jenjang: "SD", jumlah: 59, pns: 42, honorer: 17, rasioGuruSiswa: "1:18" },
  { jenjang: "SMP", jumlah: 38, pns: 28, honorer: 10, rasioGuruSiswa: "1:16" },
  { jenjang: "MI", jumlah: 10, pns: 3, honorer: 7, rasioGuruSiswa: "1:12" },
  { jenjang: "MTs", jumlah: 15, pns: 5, honorer: 10, rasioGuruSiswa: "1:11" }
];

// Chart data for comparison
export const pendidikanDeketChartData = [
  { jenjang: 'SD', jumlahSekolah: 7, jumlahSiswa: 1028, jumlahGuru: 59 },
  { jenjang: 'SMP', jumlahSekolah: 2, jumlahSiswa: 600, jumlahGuru: 38 },
  { jenjang: 'MI', jumlahSekolah: 1, jumlahSiswa: 120, jumlahGuru: 10 },
  { jenjang: 'MTs', jumlahSekolah: 1, jumlahSiswa: 170, jumlahGuru: 15 }
];

// Summary statistics for KPI cards
export const pendidikanDeketStats = {
  totalSekolah: 11,
  totalSiswa: 1918,
  totalGuru: 122,
  rasioGuruSiswa: "1:16",
  akreditasiA: 3
};

// Map data for schools in Kecamatan Deket
export const sekolahDeketMapData = [
  { id: "SD1", nama: "SDN 1 Deket Wetan", jenjang: "SD", lat: -7.0778, lng: 112.4634, akreditasi: "A" },
  { id: "SD2", nama: "SDN 1 Deket Kulon", jenjang: "SD", lat: -7.0758, lng: 112.4534, akreditasi: "B" },
  { id: "SMP1", nama: "SMPN 1 Deket", jenjang: "SMP", lat: -7.0778, lng: 112.4534, akreditasi: "A" },
  { id: "MI1", nama: "MI Babat Agung", jenjang: "MI", lat: -7.0798, lng: 112.4534, akreditasi: "B" },
  { id: "MTS1", nama: "MTs Sidorejo", jenjang: "MTs", lat: -7.0758, lng: 112.4734, akreditasi: "C" }
];
