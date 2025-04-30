
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { lingkunganData, LingkunganData, lingkunganMapData, lingkunganStatistikData } from '@/data/lingkunganData';
import { Trash2, CloudRain, Droplets } from 'lucide-react';

const BupatiLingkungan = () => {
  const [data, setData] = useState<LingkunganData[]>(lingkunganData);

  // Calculate KPI metrics
  const totalVolumeSampah = data.reduce((sum, item) => sum + item.volumeSampah, 0).toFixed(1);
  const daerahRawanBanjir = 15; // Dummy data
  const curahHujanRataRata = 1950; // Dummy data in mm/year

  // Table columns
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Volume Sampah (ton/hari)', accessorKey: 'volumeSampah' },
    { header: 'Jumlah TPS', accessorKey: 'tps' },
    { header: 'Tindak Lanjut', accessorKey: 'tindakLanjut', cell: (value: string) => {
      const colorClass = 
        value === 'Bank Sampah' || value === 'Daur Ulang' ? 'text-green-500' : 
        value === 'TPA' ? 'text-amber-500' : 'text-red-500';
      return <span className={colorClass}>{value}</span>
    } }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'volumeSampah', label: 'Volume Sampah (ton/hari)', type: 'number' },
    { name: 'tps', label: 'Jumlah TPS', type: 'number' },
    { name: 'tindakLanjut', label: 'Tindak Lanjut', type: 'select', options: ['Bank Sampah', 'TPA', 'Daur Ulang', 'Belum Diproses'] }
  ];

  // CRUD operations
  const handleCreate = (newData: LingkunganData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: LingkunganData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers
  const mapMarkers = lingkunganMapData.map(item => ({
    lat: item.lat,
    lng: item.lng,
    title: item.nama,
    color: item.jenis === 'TPA' ? '#FF9800' : 
           item.jenis === 'Bank Sampah' ? '#4CAF50' : 
           item.jenis === 'Titik Banjir' ? '#2196F3' : '#F44336',
    popup: `<b>${item.nama}</b><br>Lokasi: ${item.lokasi}<br>Jenis: ${item.jenis}<br>Status: ${item.status}`
  }));

  return (
    <DashboardLayout title="Data Lingkungan" activeLink="lingkungan">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <CardStat 
            title="Volume Sampah" 
            value={`${totalVolumeSampah} ton/hari`}
            icon={<Trash2 />} 
            trend="down" 
            trendValue="0.5 ton dari bulan lalu" 
          />
          <CardStat 
            title="Daerah Rawan Banjir" 
            value={`${daerahRawanBanjir} Titik`}
            icon={<CloudRain />} 
            trend="down" 
            trendValue="2 dari tahun lalu" 
          />
          <CardStat 
            title="Curah Hujan" 
            value={`${curahHujanRataRata} mm/tahun`}
            icon={<Droplets />} 
            trend="up" 
            trendValue="120 mm dari tahun lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Data Sampah per Kecamatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Titik Risiko Lingkungan */}
        <SimpleMap 
          title="Titik Risiko Lingkungan"
          center={[-7.1193, 112.4167]} 
          zoom={11} 
          markers={mapMarkers}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default BupatiLingkungan;
