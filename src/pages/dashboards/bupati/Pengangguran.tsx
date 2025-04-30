
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import ChartComponent from '@/components/ChartComponent';
import { pengangguranData, pengangguranTrendData, PengangguranData } from '@/data/pengangguranData';
import { Users, GraduationCap, Briefcase } from 'lucide-react';

const BupatiPengangguran = () => {
  const [data, setData] = useState<PengangguranData[]>(pengangguranData);

  // Hitung total untuk KPI cards
  const totalPengangguran = data.reduce((sum, item) => sum + item.pengangguranTerbuka, 0);
  const totalLulusan = data.reduce((sum, item) => sum + item.lulusanBaru, 0);
  const totalPekerjaInformal = data.reduce((sum, item) => sum + item.pekerjaInformal, 0);

  // Table columns
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Pengangguran Terbuka', accessorKey: 'pengangguranTerbuka' },
    { header: 'Lulusan Baru', accessorKey: 'lulusanBaru' },
    { header: 'Pekerja Informal', accessorKey: 'pekerjaInformal' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'pengangguranTerbuka', label: 'Pengangguran Terbuka', type: 'number' },
    { name: 'lulusanBaru', label: 'Lulusan Baru', type: 'number' },
    { name: 'pekerjaInformal', label: 'Pekerja Informal', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: PengangguranData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: PengangguranData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <DashboardLayout title="Statistik Pengangguran" activeLink="pengangguran">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <CardStat 
            title="Pengangguran Terbuka" 
            value={`${totalPengangguran.toLocaleString()} Orang`}
            icon={<Users />} 
            trend="down" 
            trendValue="2.3% dari bulan lalu" 
          />
          <CardStat 
            title="Lulusan Baru Belum Kerja" 
            value={`${totalLulusan.toLocaleString()} Orang`}
            icon={<GraduationCap />} 
            trend="up" 
            trendValue="1.5% dari bulan lalu" 
          />
          <CardStat 
            title="Pekerja Informal" 
            value={`${totalPekerjaInformal.toLocaleString()} Orang`}
            icon={<Briefcase />} 
            trend="stable" 
            trendValue="0.3% dari bulan lalu" 
          />
        </div>

        {/* Chart: Trend 2 Tahun Terakhir */}
        <ChartComponent 
          title="Tren Pengangguran 2 Tahun Terakhir"
          type="line"
          data={pengangguranTrendData}
          xKey="bulan"
          yKeys={[
            { key: 'pengangguranTerbuka', name: 'Pengangguran Terbuka', color: '#f44336' },
            { key: 'lulusanBaru', name: 'Lulusan Baru', color: '#2196f3' },
            { key: 'pekerjaInformal', name: 'Pekerja Informal', color: '#ff9800' }
          ]}
          height={300}
        />

        {/* Data Table */}
        <DataTable
          title="Data Pengangguran per Kecamatan"
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

export default BupatiPengangguran;
