
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { infrastrukturData, InfrastrukturData, infrastrukturMapData, infrastrukturStatistikData } from '@/data/infrastrukturData';
import { Construction, Droplet } from 'lucide-react';
// Import a different icon 
import { MapPin } from 'lucide-react';

const BupatiInfrastruktur = () => {
  const [data, setData] = useState<InfrastrukturData[]>(infrastrukturData);

  // Calculate KPI metrics
  const totalPanjangJalan = infrastrukturStatistikData.reduce((sum, item) => sum + item.panjangJalan, 0);
  const totalProyekIrigasi = infrastrukturStatistikData.reduce((sum, item) => sum + item.proyekIrigasi, 0);
  const rataRataAksesAirBersih = Math.round(
    infrastrukturStatistikData.reduce((sum, item) => sum + parseInt(item.aksesAirBersih.replace('%', '')), 0) / 
    infrastrukturStatistikData.length
  );

  // Table columns
  const columns = [
    { header: 'Nama Proyek', accessorKey: 'namaProyek' },
    { header: 'Lokasi', accessorKey: 'lokasi' },
    { header: 'Status', accessorKey: 'status', cell: (value: string) => {
      const colorClass = 
        value === 'Selesai' ? 'text-green-500' : 
        value === 'Pelaksanaan' ? 'text-amber-500' : 'text-blue-500';
      return <span className={colorClass}>{value}</span>
    } },
    { header: 'Anggaran', accessorKey: 'anggaran', cell: (value: number) => 
      `Rp ${value.toLocaleString('id-ID')}`
    }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'namaProyek', label: 'Nama Proyek' },
    { name: 'lokasi', label: 'Lokasi' },
    { name: 'status', label: 'Status', type: 'select', options: ['Perencanaan', 'Pelaksanaan', 'Selesai'] },
    { name: 'anggaran', label: 'Anggaran', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: InfrastrukturData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: InfrastrukturData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers
  const mapMarkers = infrastrukturMapData.map(infra => ({
    lat: infra.lat,
    lng: infra.lng,
    title: infra.namaProyek,
    color: infra.jenis === 'JALAN' ? '#FF9800' : 
           infra.jenis === 'JEMBATAN' ? '#2196F3' : 
           infra.jenis === 'IRIGASI' ? '#4CAF50' : 
           infra.jenis === 'AIR_BERSIH' ? '#00BCD4' : '#9C27B0',
    popup: `<b>${infra.namaProyek}</b><br>Lokasi: ${infra.lokasi}<br>Status: ${infra.status}`
  }));

  return (
    <DashboardLayout title="Data Infrastruktur" activeLink="infrastruktur">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <CardStat 
            title="Panjang Jalan" 
            value={`${totalPanjangJalan.toLocaleString()} km`}
            icon={<MapPin />} // Using MapPin icon instead of Road
            trend="up" 
            trendValue="13.5 km dari tahun lalu" 
          />
          <CardStat 
            title="Proyek Irigasi Aktif" 
            value={`${totalProyekIrigasi} Proyek`}
            icon={<Construction />} 
            trend="up" 
            trendValue="2 dari tahun lalu" 
          />
          <CardStat 
            title="Akses Air Bersih" 
            value={`${rataRataAksesAirBersih}%`}
            icon={<Droplet />} 
            trend="up" 
            trendValue="3% dari tahun lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Proyek Infrastruktur"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Infrastruktur per Kecamatan */}
        <SimpleMap 
          title="Infrastruktur per Kecamatan"
          center={[-7.1193, 112.4167]} 
          zoom={11} 
          markers={mapMarkers}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default BupatiInfrastruktur;
