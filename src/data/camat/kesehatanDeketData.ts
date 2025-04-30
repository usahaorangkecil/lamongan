
import { FaskesData } from '@/data/kesehatanData';

// Data for Fasilitas Kesehatan in Kecamatan Deket
export const faskesDeketDetailData: FaskesData[] = [
  { id: "D1", nama: "Puskesmas Deket", lokasi: "Desa Deket Wetan", status: "Aktif", nakesTerdaftar: 18 },
  { id: "D2", nama: "Polindes Deket Kulon", lokasi: "Desa Deket Kulon", status: "Aktif", nakesTerdaftar: 6 },
  { id: "D3", nama: "Klinik Pratama Babat Agung", lokasi: "Desa Babat Agung", status: "Aktif", nakesTerdaftar: 7 },
  { id: "D4", nama: "Polindes Sidorejo", lokasi: "Desa Sidorejo", status: "Tidak Aktif", nakesTerdaftar: 0 },
  { id: "D5", nama: "Klinik Kesehatan Dinoyo", lokasi: "Desa Dinoyo", status: "Aktif", nakesTerdaftar: 4 },
  { id: "D6", nama: "Pustu Rejosari", lokasi: "Desa Rejosari", status: "Aktif", nakesTerdaftar: 5 }
];

// Data for DBD cases
export const dbdDeketData = [
  { desa: "Deket Wetan", jumlahKasus: 12, statusPenanganan: "Terkendali" },
  { desa: "Deket Kulon", jumlahKasus: 8, statusPenanganan: "Terkendali" },
  { desa: "Babat Agung", jumlahKasus: 5, statusPenanganan: "Terkendali" },
  { desa: "Sidorejo", jumlahKasus: 3, statusPenanganan: "Terkendali" },
  { desa: "Dinoyo", jumlahKasus: 0, statusPenanganan: "Terkendali" },
  { desa: "Rejosari", jumlahKasus: 3, statusPenanganan: "Terkendali" }
];

// Data for imunisasi in Deket
export const imunisasiDeketData = {
  totalBalita: 645,
  imunisasiLengkap: 532,
  persentaseCakupan: 82.5,
  perDesa: [
    { desa: "Deket Wetan", jumlahBalita: 180, imunisasiLengkap: 165, persentase: 91.7 },
    { desa: "Deket Kulon", jumlahBalita: 145, imunisasiLengkap: 125, persentase: 86.2 },
    { desa: "Babat Agung", jumlahBalita: 85, imunisasiLengkap: 65, persentase: 76.5 },
    { desa: "Sidorejo", jumlahBalita: 97, imunisasiLengkap: 71, persentase: 73.2 },
    { desa: "Dinoyo", jumlahBalita: 56, imunisasiLengkap: 48, persentase: 85.7 },
    { desa: "Rejosari", jumlahBalita: 82, imunisasiLengkap: 58, persentase: 70.7 }
  ]
};

// Map data for faskes in Kecamatan Deket
export const faskesDeketMapData = [
  { id: "D1", nama: "Puskesmas Deket", lokasi: "Desa Deket Wetan", lat: -7.0778, lng: 112.4634, jenis: "PUSKESMAS" },
  { id: "D2", nama: "Polindes Deket Kulon", lokasi: "Desa Deket Kulon", lat: -7.0758, lng: 112.4534, jenis: "POLINDES" },
  { id: "D3", nama: "Klinik Pratama Babat Agung", lokasi: "Desa Babat Agung", lat: -7.0798, lng: 112.4534, jenis: "KLINIK" },
  { id: "D4", nama: "Polindes Sidorejo", lokasi: "Desa Sidorejo", lat: -7.0758, lng: 112.4734, jenis: "POLINDES" },
  { id: "D5", nama: "Klinik Kesehatan Dinoyo", lokasi: "Desa Dinoyo", lat: -7.0798, lng: 112.4734, jenis: "KLINIK" },
  { id: "D6", nama: "Pustu Rejosari", lokasi: "Desa Rejosari", lat: -7.0678, lng: 112.4634, jenis: "PUSTU" }
];

// Summary statistics for KPI cards
export const kesehatanDeketStats = {
  totalFaskes: 6,
  faskesAktif: 5,
  totalNakes: 40,
  kasusDBD: 31,
  cakupanImunisasi: "82.5%"
};
