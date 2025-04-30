
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import ChartComponent from '@/components/ChartComponent';
import { Syringe, Baby, Calendar, CheckCircle } from 'lucide-react';

// Define the types for the data
interface ImunisasiData {
  id: string;
  kecamatan: string;
  jumlahBalita: number;
  imunisasiLengkap: number;
  imunisasiTidakLengkap: number;
}

// Mock data
const imunisasiData: ImunisasiData[] = [
  { id: "1", kecamatan: "Lamongan", jumlahBalita: 1250, imunisasiLengkap: 1050, imunisasiTidakLengkap: 200 },
  { id: "2", kecamatan: "Sukodadi", jumlahBalita: 850, imunisasiLengkap: 700, imunisasiTidakLengkap: 150 },
  { id: "3", kecamatan: "Deket", jumlahBalita: 620, imunisasiLengkap: 520, imunisasiTidakLengkap: 100 },
  { id: "4", kecamatan: "Babat", jumlahBalita: 920, imunisasiLengkap: 820, imunisasiTidakLengkap: 100 },
  { id: "5", kecamatan: "Sugio", jumlahBalita: 730, imunisasiLengkap: 630, imunisasiTidakLengkap: 100 },
  { id: "6", kecamatan: "Kedungpring", jumlahBalita: 580, imunisasiLengkap: 480, imunisasiTidakLengkap: 100 }
];

// Chart data
const imunisasiChartData = [
  { kecamatan: "Lamongan", cakupan: 84 },
  { kecamatan: "Sukodadi", cakupan: 82 },
  { kecamatan: "Deket", cakupan: 83 },
  { kecamatan: "Babat", cakupan: 89 },
  { kecamatan: "Sugio", cakupan: 86 },
  { kecamatan: "Kedungpring", cakupan: 82 }
];

const OpdImunisasi = () => {
  const [data, setData] = useState<ImunisasiData[]>(imunisasiData);

  // Calculate KPI metrics
  const totalBalita = data.reduce((sum, item) => sum + item.jumlahBalita, 0);
  const totalImunisasiLengkap = data.reduce((sum, item) => sum + item.imunisasiLengkap, 0);
  const targetImunisasi = 5000;
  const cakupanImunisasi = Math.round((totalImunisasiLengkap / totalBalita) * 100);

  // Table columns
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Jumlah Balita', accessorKey: 'jumlahBalita' },
    { header: 'Imunisasi Lengkap', accessorKey: 'imunisasiLengkap' },
    { header: 'Imunisasi Tidak Lengkap', accessorKey: 'imunisasiTidakLengkap' },
    // Fix the cell function by only accepting one parameter
    { header: 'Persentase', accessorKey: 'imunisasiLengkap', cell: (value: number) => {
        const row = data.find(item => item.imunisasiLengkap === value);
        if (!row) return "0%";
        return `${Math.round((value / row.jumlahBalita) * 100)}%`;
    }}
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'jumlahBalita', label: 'Jumlah Balita', type: 'number' },
    { name: 'imunisasiLengkap', label: 'Imunisasi Lengkap', type: 'number' },
    { name: 'imunisasiTidakLengkap', label: 'Imunisasi Tidak Lengkap', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: ImunisasiData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: ImunisasiData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <DashboardLayout title="Data Imunisasi OPD Kesehatan" activeLink="imunisasi">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Jumlah Balita" 
            value={`${totalBalita.toLocaleString()} Anak`}
            icon={<Baby />} 
            trend="up" 
            trendValue="3.2% dari tahun lalu" 
          />
          <CardStat 
            title="Cakupan Imunisasi" 
            value={`${cakupanImunisasi}%`}
            icon={<Syringe />} 
            trend="up" 
            trendValue="2.5% dari tahun lalu" 
          />
          <CardStat 
            title="Target Imunisasi Tahunan" 
            value={`${targetImunisasi.toLocaleString()} Anak`}
            icon={<Calendar />} 
            trend="stable" 
            trendValue="0% dari tahun lalu" 
          />
          <CardStat 
            title="Status Imunisasi" 
            value={cakupanImunisasi >= 80 ? "Baik" : "Perlu Perhatian"}
            icon={<CheckCircle />} 
            trend={cakupanImunisasi >= 80 ? "up" : "down"} 
            trendValue={`${cakupanImunisasi}% dari target minimal 80%`} 
          />
        </div>

        {/* Chart: Perbandingan Cakupan Imunisasi */}
        <ChartComponent 
          title="Perbandingan Cakupan Imunisasi per Kecamatan"
          type="bar"
          data={imunisasiChartData}
          xKey="kecamatan"
          yKeys={[{ key: 'cakupan', name: 'Cakupan Imunisasi (%)', color: '#4CAF50' }]}
          height={300}
        />

        {/* Data Table */}
        <DataTable
          title="Data Imunisasi per Kecamatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default OpdImunisasi;
