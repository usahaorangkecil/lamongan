
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';
import SimpleMap from '@/components/SimpleMap';
import { Users, Heart, Package, CheckCircle } from 'lucide-react';
import { bansosKesehatanData, BansosKesehatanData } from '@/data/kesehatanData';

const OpdBansos = () => {
  const [data, setData] = useState<BansosKesehatanData[]>(bansosKesehatanData);

  // Calculate KPI metrics
  const totalPenerima = data.length;
  const totalKeluargaMiskin = data.filter(item => item.jenisBansos === 'JKN-KIS').length;
  const totalBansosPenyakit = data.filter(item => 
    item.jenisBansos === 'Obat Gratis' || 
    item.jenisBansos === 'Biaya Pengobatan' || 
    item.jenisBansos === 'Alat Kesehatan'
  ).length;
  const totalTerverifikasi = data.filter(item => item.statusVerifikasi === 'Terverifikasi').length;

  // Table columns
  const columns = [
    { header: 'Nama Penerima', accessorKey: 'namaPenerima' },
    { header: 'Alamat', accessorKey: 'alamat' },
    { header: 'Jenis Bansos', accessorKey: 'jenisBansos' },
    { header: 'Status Verifikasi', accessorKey: 'statusVerifikasi', cell: (value: string) => {
      const colorClass = value === 'Terverifikasi' ? 'text-green-500' : 'text-amber-500';
      return <span className={colorClass}>{value}</span>
    }},
    { header: 'Tanggal Penerimaan', accessorKey: 'tanggalPenerimaan' }
  ];

  // Form fields for add/edit dialog
  const formFields = [
    { name: 'namaPenerima', label: 'Nama Penerima' },
    { name: 'alamat', label: 'Alamat' },
    { name: 'jenisBansos', label: 'Jenis Bansos', type: 'select', options: ['JKN-KIS', 'Obat Gratis', 'Biaya Pengobatan', 'Alat Kesehatan', 'Bantuan Vitamin'] },
    { name: 'statusVerifikasi', label: 'Status Verifikasi', type: 'select', options: ['Terverifikasi', 'Proses Verifikasi', 'Belum Diverifikasi'] },
    { name: 'tanggalPenerimaan', label: 'Tanggal Penerimaan', type: 'date' },
    { name: 'jumlahAnggotaKeluarga', label: 'Jumlah Anggota Keluarga', type: 'number' }
  ];

  // CRUD operations
  const handleCreate = (newData: BansosKesehatanData) => {
    setData([...data, newData]);
  };

  const handleUpdate = (id: string, updatedData: BansosKesehatanData) => {
    setData(data.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  // Map markers for bansos distribution
  const mapMarkers = data.map((item, index) => {
    // Creating dummy coordinates based on alamat (location)
    const baseCoordinates = {
      'Sukodadi': { lat: -7.1335, lng: 112.3335 },
      'Lamongan': { lat: -7.1193, lng: 112.4167 },
      'Babat': { lat: -7.1051, lng: 112.1782 },
      'Paciran': { lat: -6.8764, lng: 112.3778 },
      'Deket': { lat: -7.0778, lng: 112.4634 }
    };

    // Add a small random offset for items in the same location
    const randomOffset = () => (Math.random() - 0.5) * 0.01;
    const coords = baseCoordinates[item.alamat as keyof typeof baseCoordinates] || { lat: -7.1193, lng: 112.4167 };
    
    return {
      lat: coords.lat + randomOffset(),
      lng: coords.lng + randomOffset(),
      title: item.namaPenerima,
      color: item.statusVerifikasi === 'Terverifikasi' ? '#4CAF50' : '#FFC107',
      popup: `<b>${item.namaPenerima}</b><br>Jenis: ${item.jenisBansos}<br>Status: ${item.statusVerifikasi}`
    };
  });

  return (
    <DashboardLayout title="Data Bantuan Sosial Kesehatan" activeLink="bansos">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <CardStat 
            title="Total Penerima Bansos" 
            value={`${totalPenerima} KK`}
            icon={<Users />} 
            trend="up" 
            trendValue="12% dari bulan lalu" 
          />
          <CardStat 
            title="Keluarga Miskin - JKN-KIS" 
            value={`${totalKeluargaMiskin} KK`}
            icon={<Heart />} 
            trend="up" 
            trendValue="8% dari bulan lalu" 
          />
          <CardStat 
            title="Bansos Penyakit Khusus" 
            value={`${totalBansosPenyakit} KK`}
            icon={<Package />} 
            trend="up" 
            trendValue="15% dari bulan lalu" 
          />
          <CardStat 
            title="Terverifikasi" 
            value={`${totalTerverifikasi} dari ${totalPenerima}`}
            icon={<CheckCircle />} 
            trend="up" 
            trendValue="5% dari bulan lalu" 
          />
        </div>

        {/* Data Table */}
        <DataTable
          title="Data Penerima Bantuan Sosial Kesehatan"
          data={data}
          columns={columns}
          formFields={formFields}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {/* Map: Penyebaran Bantuan Sosial */}
        <SimpleMap 
          title="Penyebaran Bantuan Sosial Kesehatan di Wilayah"
          center={[-7.1193, 112.4167]} 
          zoom={10} 
          markers={mapMarkers}
          height="500px"
        />
      </div>
    </DashboardLayout>
  );
};

export default OpdBansos;
