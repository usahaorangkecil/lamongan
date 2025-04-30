
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import ChartComponent from '@/components/ChartComponent';
import { Syringe, Clipboard, FileText, TrendingUp } from 'lucide-react';
import { vaksinasiData, VaksinasiData } from '@/data/kesehatanData';

const OpdVaksinasi = () => {
  const [data, setData] = useState<VaksinasiData[]>(vaksinasiData);

  // Calculate KPI metrics
  const totalVaksinasiCovid = data.filter(item => item.jenisVaksin === 'Covid-19').reduce((sum, item) => sum + item.jumlahPenerima, 0);
  const totalVaksinasiCampak = data.filter(item => item.jenisVaksin === 'Campak').reduce((sum, item) => sum + item.jumlahPenerima, 0);
  const totalVaksinasiHepatitis = data.filter(item => item.jenisVaksin === 'Hepatitis B').reduce((sum, item) => sum + item.jumlahPenerima, 0);
  
  // Calculate vaksinasi per month (using the tanggalPelaksanaan field)
  const currentMonth = new Date().getMonth();
  const totalVaksinasiPerbulan = data
    .filter(item => {
      const itemDate = new Date(item.tanggalPelaksanaan);
      return itemDate.getMonth() === currentMonth;
    })
    .reduce((sum, item) => sum + item.jumlahPenerima, 0);

  // Table columns
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Jenis Vaksin', accessorKey: 'jenisVaksin' },
    { header: 'Jumlah Penerima', accessorKey: 'jumlahPenerima' },
    { header: 'Status Vaksinasi', accessorKey: 'statusVaksinasi', cell: (value: string) => {
      const percentage = parseInt(value);
      let colorClass = 'text-amber-500';
      
      if (percentage >= 90) {
        colorClass = 'text-green-500';
      } else if (percentage < 70) {
        colorClass = 'text-red-500';
      }
      
      return <span className={colorClass}>{value}</span>
    }},
    { header: 'Tanggal Pelaksanaan', accessorKey: 'tanggalPelaksanaan' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'jenisVaksin', label: 'Jenis Vaksin', type: 'select', options: ['Covid-19', 'Campak', 'Hepatitis B', 'Polio', 'BCG'] },
    { name: 'jumlahPenerima', label: 'Jumlah Penerima', type: 'number' },
    { name: 'statusVaksinasi', label: 'Status Vaksinasi' },
    { name: 'tanggalPelaksanaan', label: 'Tanggal Pelaksanaan', type: 'date' }
  ];

  // CRUD operations
  const handleCreate = (newData: VaksinasiData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: VaksinasiData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Chart data formatted for ChartComponent
  const chartData = [
    { month: 'Januari', 'Covid-19': 12000, 'Campak': 3000, 'Hepatitis B': 2500 },
    { month: 'Februari', 'Covid-19': 14500, 'Campak': 3500, 'Hepatitis B': 3000 },
    { month: 'Maret', 'Covid-19': 13800, 'Campak': 4200, 'Hepatitis B': 2800 },
    { month: 'April', 'Covid-19': 15200, 'Campak': 3800, 'Hepatitis B': 3200 },
    { month: 'Mei', 'Covid-19': 16500, 'Campak': 4500, 'Hepatitis B': 3500 }
  ];

  return (
    <DashboardLayout title="Data Vaksinasi" activeLink="vaksinasi">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Vaksinasi Covid-19" 
            value={`${totalVaksinasiCovid.toLocaleString()} Orang`}
            icon={<Syringe />} 
            trend="up" 
            trendValue="5% dari bulan lalu" 
          />
          <CardStat 
            title="Vaksinasi Campak" 
            value={`${totalVaksinasiCampak.toLocaleString()} Orang`}
            icon={<Clipboard />} 
            trend="up" 
            trendValue="3% dari bulan lalu" 
          />
          <CardStat 
            title="Vaksinasi Hepatitis B" 
            value={`${totalVaksinasiHepatitis.toLocaleString()} Orang`}
            icon={<FileText />} 
            trend="stable" 
            trendValue="tidak ada perubahan" 
          />
          <CardStat 
            title="Vaksinasi Bulan Ini" 
            value={`${totalVaksinasiPerbulan.toLocaleString()} Orang`}
            icon={<TrendingUp />} 
            trend="up" 
            trendValue="8% dari bulan lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Data Vaksinasi per Kecamatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Chart: Tren Vaksinasi */}
        <ChartComponent 
          title="Tren Vaksinasi di Wilayah (5 Bulan Terakhir)"
          type="line"
          data={chartData}
          xKey="month"
          yKeys={[
            { key: 'Covid-19', name: 'Covid-19', color: '#4CAF50' },
            { key: 'Campak', name: 'Campak', color: '#2196F3' },
            { key: 'Hepatitis B', name: 'Hepatitis B', color: '#FFC107' }
          ]}
          height={400}
        />
      </div>
    </DashboardLayout>
  );
};

export default OpdVaksinasi;
