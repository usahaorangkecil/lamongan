
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { faskesData, FaskesData, faskesMapData } from '@/data/kesehatanData';
import { Heart, Users, Syringe, Bug } from 'lucide-react';

const BupatiKesehatan = () => {
  const [data, setData] = useState<FaskesData[]>(faskesData);

  // Calculate KPI metrics
  const totalAktif = data.filter(item => item.status === 'Aktif').length;
  const totalNakes = data.reduce((sum, item) => sum + item.nakesTerdaftar, 0);
  const cakupanImunisasi = 84; // Dummy percentage
  const kasusDbd = 285; // Dummy count

  // Table columns
  const columns = [
    { header: 'Nama Faskes', accessorKey: 'nama' },
    { header: 'Lokasi', accessorKey: 'lokasi' },
    { header: 'Status', accessorKey: 'status', cell: (value: string) => {
      const colorClass = 
        value === 'Aktif' ? 'text-green-500' : 
        value === 'Renovasi' ? 'text-amber-500' : 'text-red-500';
      return <span className={colorClass}>{value}</span>
    } },
    { header: 'Nakes Terdaftar', accessorKey: 'nakesTerdaftar' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'nama', label: 'Nama Faskes' },
    { name: 'lokasi', label: 'Lokasi' },
    { name: 'status', label: 'Status', type: 'select', options: ['Aktif', 'Tidak Aktif', 'Renovasi'] },
    { name: 'nakesTerdaftar', label: 'Nakes Terdaftar', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: FaskesData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: FaskesData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers from faskes data
  const mapMarkers = faskesMapData.map(faskes => ({
    lat: faskes.lat,
    lng: faskes.lng,
    title: faskes.nama,
    color: faskes.jenis === 'RS' ? '#f44336' : 
           faskes.jenis === 'PUSKESMAS' ? '#4CAF50' : 
           faskes.jenis === 'KLINIK' ? '#2196F3' : '#FF9800',
    popup: `<b>${faskes.nama}</b><br>${faskes.lokasi}<br>Jenis: ${faskes.jenis}`
  }));

  return (
    <DashboardLayout title="Data Kesehatan" activeLink="kesehatan">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Faskes Aktif" 
            value={`${totalAktif} Faskes`}
            icon={<Heart />} 
            trend="up" 
            trendValue="2 dari bulan lalu" 
          />
          <CardStat 
            title="Jumlah Nakes" 
            value={`${totalNakes.toLocaleString()} Orang`}
            icon={<Users />} 
            trend="up" 
            trendValue="15 dari bulan lalu" 
          />
          <CardStat 
            title="Cakupan Imunisasi" 
            value={`${cakupanImunisasi}%`}
            icon={<Syringe />} 
            trend="up" 
            trendValue="3% dari tahun lalu" 
          />
          <CardStat 
            title="Kasus DBD" 
            value={`${kasusDbd} Kasus`}
            icon={<Bug />} 
            trend="down" 
            trendValue="12 dari bulan lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Fasilitas Kesehatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Faskes per Kecamatan */}
        <SimpleMap 
          title="Peta Fasilitas Kesehatan per Kecamatan"
          center={[-7.1193, 112.4167]} 
          zoom={11} 
          markers={mapMarkers}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default BupatiKesehatan;
