
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import ChartComponent from '@/components/ChartComponent';
import { sekolahData, SekolahData, pendidikanChartData } from '@/data/pendidikanData';
import { GraduationCap, Users, AlertTriangle, Award } from 'lucide-react';

const CamatPendidikan = () => {
  const [data, setData] = useState<SekolahData[]>(sekolahData);

  // Calculate KPI metrics
  const totalSekolah = data.length;
  const totalSiswa = data.reduce((sum, item) => sum + item.jumlahSiswa, 0);
  const totalGuru = 850; // Dummy data
  const rasioGuruMurid = (totalSiswa / totalGuru).toFixed(1);
  const dropoutRate = 2.5; // Dummy percentage
  const akreditasiA = data.filter(item => item.akreditasi === 'A').length;

  // Table columns
  const columns = [
    { header: 'Nama Sekolah', accessorKey: 'nama' },
    { header: 'Jenjang', accessorKey: 'jenjang' },
    { header: 'Akreditasi', accessorKey: 'akreditasi', cell: (value: string) => {
      const colorClass = 
        value === 'A' ? 'text-green-500' : 
        value === 'B' ? 'text-amber-500' : 
        value === 'C' ? 'text-red-500' : 'text-gray-500';
      return <span className={colorClass}>{value}</span>
    } },
    { header: 'Jumlah Siswa', accessorKey: 'jumlahSiswa' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'nama', label: 'Nama Sekolah' },
    { name: 'jenjang', label: 'Jenjang', type: 'select', options: ['SD', 'SMP', 'SMA', 'SMK', 'MI', 'MTs', 'MA'] },
    { name: 'akreditasi', label: 'Akreditasi', type: 'select', options: ['A', 'B', 'C', 'Tidak Terakreditasi'] },
    { name: 'jumlahSiswa', label: 'Jumlah Siswa', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: SekolahData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: SekolahData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <DashboardLayout title="Data Pendidikan" activeLink="pendidikan">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Jumlah Sekolah" 
            value={`${totalSekolah} Sekolah`}
            icon={<GraduationCap />} 
            trend="up" 
            trendValue="3 dari tahun lalu" 
          />
          <CardStat 
            title="Rasio Guru/Murid" 
            value={`1:${rasioGuruMurid}`}
            icon={<Users />} 
            trend="down" 
            trendValue="0.3 dari tahun lalu" 
          />
          <CardStat 
            title="Dropout Rate" 
            value={`${dropoutRate}%`}
            icon={<AlertTriangle />} 
            trend="down" 
            trendValue="0.5% dari tahun lalu" 
          />
          <CardStat 
            title="Akreditasi A" 
            value={`${akreditasiA} Sekolah`}
            icon={<Award />} 
            trend="up" 
            trendValue="2 dari tahun lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Daftar Sekolah"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Chart: Perbandingan Sekolah SD/SMA */}
        <ChartComponent 
          title="Perbandingan Sekolah Berdasarkan Jenjang"
          type="bar"
          data={pendidikanChartData}
          xKey="jenjang"
          yKeys={[
            { key: 'jumlahSekolah', name: 'Jumlah Sekolah', color: '#4CAF50' },
            { key: 'jumlahSiswa', name: 'Jumlah Siswa (dibagi 100)', color: '#2196F3' }
          ]}
          height={300}
        />
      </div>
    </DashboardLayout>
  );
};

export default CamatPendidikan;
