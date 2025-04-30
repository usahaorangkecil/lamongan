
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { kemiskinanData, KemiskinanData, kemiskinanPolygons, kemiskinanDataPerKecamatan } from '@/data/kemiskinanData';
import { Home, Package, CheckCircle } from 'lucide-react';

const CamatKemiskinan = () => {
  const [data, setData] = useState<KemiskinanData[]>(kemiskinanData);

  // Calculate KPI metrics
  const totalKeluargaMiskin = kemiskinanDataPerKecamatan.reduce((sum, item) => sum + item.keluargaMiskin, 0);
  const totalBansos = kemiskinanDataPerKecamatan.reduce((sum, item) => sum + item.bansosTerima, 0);
  const totalKPMTerverifikasi = kemiskinanDataPerKecamatan.reduce((sum, item) => sum + item.kpmTerverifikasi, 0);

  // Table columns
  const columns = [
    { header: 'Nama KPM', accessorKey: 'namaKPM' },
    { header: 'Alamat', accessorKey: 'alamat' },
    { header: 'Status Verifikasi', accessorKey: 'statusVerifikasi', cell: (value: string) => {
      const colorClass = 
        value === 'Terverifikasi' ? 'text-green-500' : 
        value === 'Proses Verifikasi' ? 'text-amber-500' : 'text-red-500';
      return <span className={colorClass}>{value}</span>
    } },
    { header: 'Bantuan Terima', accessorKey: 'bantuanTerima' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'namaKPM', label: 'Nama KPM' },
    { name: 'alamat', label: 'Alamat' },
    { name: 'statusVerifikasi', label: 'Status Verifikasi', type: 'select', options: ['Terverifikasi', 'Belum Terverifikasi', 'Proses Verifikasi'] },
    { name: 'bantuanTerima', label: 'Bantuan Terima' }
  ];

  // CRUD operations
  const handleCreate = (newData: KemiskinanData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: KemiskinanData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers for kecamatan centers
  const mapMarkers = kemiskinanDataPerKecamatan.map((item, index) => ({
    lat: -7.1193 + (index * 0.02),
    lng: 112.4167 + (index * 0.02),
    title: item.kecamatan,
    color: '#FF5252',
    popup: `<b>${item.kecamatan}</b><br>Keluarga Miskin: ${item.keluargaMiskin}<br>KPM Terverifikasi: ${item.kpmTerverifikasi}`
  }));

  // Convert the polygon data to the expected format
  const formattedPolygons = kemiskinanPolygons.map(poly => ({
    ...poly,
    coordinates: poly.coordinates as [number, number][][]
  }));

  return (
    <DashboardLayout title="Data Kemiskinan dan Bantuan Sosial" activeLink="kemiskinan">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <CardStat 
            title="Keluarga Miskin" 
            value={`${totalKeluargaMiskin.toLocaleString()} KK`}
            icon={<Home />} 
            trend="down" 
            trendValue="1.2% dari bulan lalu" 
          />
          <CardStat 
            title="Bansos Aktif" 
            value={`${totalBansos.toLocaleString()} KK`}
            icon={<Package />} 
            trend="up" 
            trendValue="3.5% dari bulan lalu" 
          />
          <CardStat 
            title="KPM Terverifikasi" 
            value={`${totalKPMTerverifikasi.toLocaleString()} KK`}
            icon={<CheckCircle />} 
            trend="up" 
            trendValue="2.8% dari bulan lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Data Keluarga Miskin"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Zona Kemiskinan per Kecamatan */}
        <SimpleMap 
          title="Zona Kemiskinan per Kecamatan"
          center={[-7.1193, 112.4167]} 
          zoom={11} 
          markers={mapMarkers}
          polygons={formattedPolygons}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default CamatKemiskinan;
