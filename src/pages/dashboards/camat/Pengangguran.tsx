
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import ChartComponent from '@/components/ChartComponent';
import { pengangguranDeketData } from '@/data/pengangguranData';
import { Users, GraduationCap, Briefcase } from 'lucide-react';

interface PengangguranDesaData {
  id: string;
  desa: string;
  pengangguranTerbuka: number;
  lulusanBaru: number;
  pekerjaInformal: number;
}

const CamatPengangguran = () => {
  const [data, setData] = useState<PengangguranDesaData[]>(pengangguranDeketData);

  // Hitung total untuk KPI cards
  const totalPengangguran = data.reduce((sum, item) => sum + item.pengangguranTerbuka, 0);
  const totalLulusan = data.reduce((sum, item) => sum + item.lulusanBaru, 0);
  const totalPekerjaInformal = data.reduce((sum, item) => sum + item.pekerjaInformal, 0);

  // Table columns
  const columns = [
    { header: 'Desa', accessorKey: 'desa' },
    { header: 'Pengangguran Terbuka', accessorKey: 'pengangguranTerbuka' },
    { header: 'Lulusan Baru', accessorKey: 'lulusanBaru' },
    { header: 'Pekerja Informal', accessorKey: 'pekerjaInformal' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'desa', label: 'Desa' },
    { name: 'pengangguranTerbuka', label: 'Pengangguran Terbuka', type: 'number' },
    { name: 'lulusanBaru', label: 'Lulusan Baru', type: 'number' },
    { name: 'pekerjaInformal', label: 'Pekerja Informal', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: PengangguranDesaData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: PengangguranDesaData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Chart data
  const trendData = [
    { bulan: 'Jan 2023', pengangguranTerbuka: 390, lulusanBaru: 178, pekerjaInformal: 520 },
    { bulan: 'Mar 2023', pengangguranTerbuka: 385, lulusanBaru: 175, pekerjaInformal: 515 },
    { bulan: 'Jun 2023', pengangguranTerbuka: 375, lulusanBaru: 170, pekerjaInformal: 510 },
    { bulan: 'Sep 2023', pengangguranTerbuka: 360, lulusanBaru: 165, pekerjaInformal: 505 },
    { bulan: 'Dec 2023', pengangguranTerbuka: 350, lulusanBaru: 160, pekerjaInformal: 500 },
    { bulan: 'Mar 2024', pengangguranTerbuka: 340, lulusanBaru: 155, pekerjaInformal: 490 },
    { bulan: 'Jun 2024', pengangguranTerbuka: 335, lulusanBaru: 152, pekerjaInformal: 480 },
    { bulan: 'Sep 2024', pengangguranTerbuka: 330, lulusanBaru: 152, pekerjaInformal: 460 }
  ];

  return (
    <DashboardLayout title="Statistik Pengangguran Kecamatan Deket" activeLink="pengangguran">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <CardStat 
            title="Pengangguran Terbuka di Kecamatan Deket" 
            value={`${totalPengangguran.toLocaleString()} Orang`}
            icon={<Users />} 
            trend="down" 
            trendValue="2.3% dari bulan lalu" 
          />
          <CardStat 
            title="Lulusan Baru Belum Kerja di Kecamatan Deket" 
            value={`${totalLulusan.toLocaleString()} Orang`}
            icon={<GraduationCap />} 
            trend="up" 
            trendValue="1.5% dari bulan lalu" 
          />
          <CardStat 
            title="Pekerja Informal di Kecamatan Deket" 
            value={`${totalPekerjaInformal.toLocaleString()} Orang`}
            icon={<Briefcase />} 
            trend="stable" 
            trendValue="0.3% dari bulan lalu" 
          />
        </div>

        {/* Chart: Trend 2 Tahun Terakhir */}
        <ChartComponent 
          title="Tren Pengangguran di Kecamatan Deket (2 Tahun Terakhir)"
          type="line"
          data={trendData}
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
          title="Data Pengangguran per Desa"
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

export default CamatPengangguran;
