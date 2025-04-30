
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { Bug, Thermometer, HeartPulse, Activity } from 'lucide-react';

interface PenyakitData {
  id: string;
  kecamatan: string;
  penyakit: string;
  jumlahKasus: number;
  statusPenanganan: string;
}

const OpdPenyakit = () => {
  // Sample data for penyakit (diseases)
  const [data, setData] = useState<PenyakitData[]>([
    { id: '1', kecamatan: 'Lamongan', penyakit: 'DBD', jumlahKasus: 45, statusPenanganan: 'Ditangani' },
    { id: '2', kecamatan: 'Sukodadi', penyakit: 'Pneumonia', jumlahKasus: 32, statusPenanganan: 'Proses Penanganan' },
    { id: '3', kecamatan: 'Deket', penyakit: 'ISPA', jumlahKasus: 78, statusPenanganan: 'Ditangani' },
    { id: '4', kecamatan: 'Paciran', penyakit: 'Diabetes', jumlahKasus: 124, statusPenanganan: 'Proses Penanganan' },
    { id: '5', kecamatan: 'Babat', penyakit: 'Hipertensi', jumlahKasus: 187, statusPenanganan: 'Belum Ditangani' },
    { id: '6', kecamatan: 'Kedungpring', penyakit: 'Diare', jumlahKasus: 56, statusPenanganan: 'Ditangani' },
  ]);

  // Calculate KPI metrics
  const totalKasusDbd = data.filter(item => item.penyakit === 'DBD').reduce((sum, item) => sum + item.jumlahKasus, 0);
  const totalKasusPneumonia = data.filter(item => item.penyakit === 'Pneumonia').reduce((sum, item) => sum + item.jumlahKasus, 0);
  const totalKasusPTM = data.filter(item => item.penyakit === 'Diabetes' || item.penyakit === 'Hipertensi').reduce((sum, item) => sum + item.jumlahKasus, 0);
  const totalKasus = data.reduce((sum, item) => sum + item.jumlahKasus, 0);

  // Table columns
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Penyakit', accessorKey: 'penyakit' },
    { header: 'Jumlah Kasus', accessorKey: 'jumlahKasus' },
    { header: 'Status Penanganan', accessorKey: 'statusPenanganan', cell: (value: string) => {
      const colorClass = 
        value === 'Ditangani' ? 'text-green-500' : 
        value === 'Proses Penanganan' ? 'text-amber-500' : 'text-red-500';
      return <span className={colorClass}>{value}</span>
    } }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'penyakit', label: 'Penyakit' },
    { name: 'jumlahKasus', label: 'Jumlah Kasus', type: 'number' },
    { name: 'statusPenanganan', label: 'Status Penanganan', type: 'select', options: ['Ditangani', 'Proses Penanganan', 'Belum Ditangani'] }
  ];

  // CRUD operations
  const handleCreate = (newData: PenyakitData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: PenyakitData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers
  const mapMarkers = data.map((item, index) => ({
    lat: -7.1193 + (index * 0.03),
    lng: 112.4167 + (index * 0.03),
    title: item.kecamatan,
    color: item.statusPenanganan === 'Ditangani' ? '#4CAF50' : 
           item.statusPenanganan === 'Proses Penanganan' ? '#FFC107' : '#F44336',
    popup: `<b>${item.kecamatan}</b><br>Penyakit: ${item.penyakit}<br>Jumlah Kasus: ${item.jumlahKasus}<br>Status: ${item.statusPenanganan}`
  }));

  return (
    <DashboardLayout title="Data Penyakit" activeLink="penyakit">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Kasus DBD" 
            value={`${totalKasusDbd} Kasus`}
            icon={<Bug />} 
            trend="down" 
            trendValue="12 dari bulan lalu" 
          />
          <CardStat 
            title="Kasus Pneumonia" 
            value={`${totalKasusPneumonia} Kasus`}
            icon={<Thermometer />} 
            trend="stable" 
            trendValue="tidak ada perubahan" 
          />
          <CardStat 
            title="Kasus PTM" 
            value={`${totalKasusPTM} Kasus`}
            icon={<HeartPulse />} 
            trend="up" 
            trendValue="24 dari bulan lalu" 
          />
          <CardStat 
            title="Total Kasus" 
            value={`${totalKasus} Kasus`}
            icon={<Activity />} 
            trend="down" 
            trendValue="3% dari bulan lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Data Kasus Penyakit per Kecamatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Penyebaran Penyakit */}
        <SimpleMap 
          title="Penyebaran Kasus Penyakit per Kecamatan"
          center={[-7.1193, 112.4167]} 
          zoom={10} 
          markers={mapMarkers}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default OpdPenyakit;
