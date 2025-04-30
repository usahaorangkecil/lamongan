
export interface SekolahData {
  id: string;
  nama: string;
  jenjang: 'SD' | 'SMP' | 'SMA' | 'SMK' | 'MI' | 'MTs' | 'MA';
  akreditasi: 'A' | 'B' | 'C' | 'Tidak Terakreditasi';
  jumlahSiswa: number;
}

export const sekolahData: SekolahData[] = [
  { id: "1", nama: "SDN 1 Lamongan", jenjang: "SD", akreditasi: "A", jumlahSiswa: 520 },
  { id: "2", nama: "SDN 2 Lamongan", jenjang: "SD", akreditasi: "A", jumlahSiswa: 485 },
  { id: "3", nama: "SMPN 1 Lamongan", jenjang: "SMP", akreditasi: "A", jumlahSiswa: 780 },
  { id: "4", nama: "SMPN 2 Lamongan", jenjang: "SMP", akreditasi: "A", jumlahSiswa: 750 },
  { id: "5", nama: "SMAN 1 Lamongan", jenjang: "SMA", akreditasi: "A", jumlahSiswa: 850 },
  { id: "6", nama: "SMAN 2 Lamongan", jenjang: "SMA", akreditasi: "A", jumlahSiswa: 820 },
  { id: "7", nama: "SMK Negeri 1 Lamongan", jenjang: "SMK", akreditasi: "A", jumlahSiswa: 790 },
  { id: "8", nama: "SDN 1 Sukodadi", jenjang: "SD", akreditasi: "B", jumlahSiswa: 320 },
  { id: "9", nama: "SMPN 1 Sukodadi", jenjang: "SMP", akreditasi: "B", jumlahSiswa: 420 },
  { id: "10", nama: "SDN 1 Deket", jenjang: "SD", akreditasi: "B", jumlahSiswa: 280 }
];

export const sekolahDeketData: SekolahData[] = [
  { id: "1", nama: "SDN 1 Deket Wetan", jenjang: "SD", akreditasi: "B", jumlahSiswa: 175 },
  { id: "2", nama: "SDN 1 Deket Kulon", jenjang: "SD", akreditasi: "B", jumlahSiswa: 165 },
  { id: "3", nama: "SMPN 1 Deket", jenjang: "SMP", akreditasi: "B", jumlahSiswa: 310 },
  { id: "4", nama: "MI Babat Agung", jenjang: "MI", akreditasi: "B", jumlahSiswa: 120 },
  { id: "5", nama: "MTs Sidorejo", jenjang: "MTs", akreditasi: "C", jumlahSiswa: 170 }
];

export const pendidikanChartData = [
  { jenjang: 'SD', jumlahSekolah: 145, jumlahSiswa: 28500, jumlahGuru: 1250 },
  { jenjang: 'SMP', jumlahSekolah: 75, jumlahSiswa: 18600, jumlahGuru: 920 },
  { jenjang: 'SMA', jumlahSekolah: 25, jumlahSiswa: 12400, jumlahGuru: 580 },
  { jenjang: 'SMK', jumlahSekolah: 20, jumlahSiswa: 10800, jumlahGuru: 520 },
  { jenjang: 'MI', jumlahSekolah: 42, jumlahSiswa: 6500, jumlahGuru: 380 },
  { jenjang: 'MTs', jumlahSekolah: 28, jumlahSiswa: 5200, jumlahGuru: 280 },
  { jenjang: 'MA', jumlahSekolah: 12, jumlahSiswa: 3600, jumlahGuru: 180 }
];
