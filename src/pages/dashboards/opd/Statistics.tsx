
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { healthStatData, healthIndicators, diseaseTrendData } from '@/data/statistikData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';

const OPDStatistics = () => {
  // For CRUD operations
  const [healthData, setHealthData] = useState(healthStatData);

  // Calculate totals
  const totalPopulation = healthData.reduce((sum, item) => sum + item.totalPenduduk, 0);
  const totalInfectiousDisease = healthData.reduce((sum, item) => sum + item.penyakitMenular, 0);
  const totalNonInfectiousDisease = healthData.reduce((sum, item) => sum + item.penyakitTidakMenular, 0);
  const totalFaskes = healthData.reduce((sum, item) => sum + item.jumlahFaskes, 0);
  
  // Handle CRUD operations
  const handleCreate = (newData: any) => {
    setHealthData([...healthData, newData]);
  };

  const handleUpdate = (id: string | number, updatedData: any) => {
    setHealthData(healthData.map(item => 
      item.kecamatan === id ? { ...item, ...updatedData } : item
    ));
  };

  const handleDelete = (id: string | number) => {
    setHealthData(healthData.filter(item => item.kecamatan !== id));
  };

  // Define columns for the data table
  const columns = [
    { header: 'Kecamatan', accessorKey: 'kecamatan' },
    { header: 'Total Penduduk', accessorKey: 'totalPenduduk' },
    { header: 'Penyakit Menular', accessorKey: 'penyakitMenular' },
    { header: 'Penyakit Tidak Menular', accessorKey: 'penyakitTidakMenular' },
    { header: 'Jumlah Faskes', accessorKey: 'jumlahFaskes' },
    { header: 'Persentase Asuransi', accessorKey: 'persentaseAsuransi', 
      cell: (value: number) => `${value}%` 
    },
  ];

  const formFields = [
    { name: 'kecamatan', label: 'Kecamatan', type: 'text' },
    { name: 'totalPenduduk', label: 'Total Penduduk', type: 'number' },
    { name: 'penyakitMenular', label: 'Penyakit Menular', type: 'number' },
    { name: 'penyakitTidakMenular', label: 'Penyakit Tidak Menular', type: 'number' },
    { name: 'jumlahFaskes', label: 'Jumlah Faskes', type: 'number' },
    { name: 'persentaseAsuransi', label: 'Persentase Asuransi', type: 'number' },
  ];

  // Transform disease trend data for charts
  const transformedTrendData = diseaseTrendData.labels.map((month, index) => {
    let entry: any = { month };
    diseaseTrendData.datasets.forEach((dataset) => {
      entry[dataset.name] = dataset.data[index];
    });
    return entry;
  });

  return (
    <DashboardLayout title="Statistik Kesehatan" activeLink="statistik">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardStat 
            title="Total Penduduk" 
            value={totalPopulation.toLocaleString()} 
            icon="users" 
          />
          <CardStat 
            title="Jumlah Lansia" 
            value={Math.round(totalPopulation * 0.12).toLocaleString()} 
            icon="older" 
          />
          <CardStat 
            title="Memiliki Asuransi" 
            value={`${healthIndicators.persentaseAsuransiKesehatan}%`} 
            icon="shield-check" 
          />
          <CardStat 
            title="Akses Kesehatan" 
            value={`${healthIndicators.persentaseAksesFaskes}%`} 
            icon="activity" 
          />
          <CardStat 
            title="Kasus Penyakit" 
            value={(totalInfectiousDisease + totalNonInfectiousDisease).toLocaleString()} 
            icon="heart" 
          />
          <CardStat 
            title="Indeks Kesehatan" 
            value={healthIndicators.indeksKesehatanMasyarakat.toFixed(1)} 
            icon="heart-pulse" 
          />
        </div>
        
        {/* Data Table */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Data Kesehatan per Kecamatan</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              data={healthData}
              columns={columns}
              title="Data Kesehatan"
              formFields={formFields}
              onCreate={handleCreate}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </CardContent>
        </Card>
        
        {/* Charts */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Tren Kasus Penyakit (12 Bulan Terakhir)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={transformedTrendData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} />
                <Legend />
                <Line type="monotone" dataKey="DBD" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="ISPA" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Pneumonia" stroke="#ffc658" />
                <Line type="monotone" dataKey="Diare" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Healthcare Indicator Chart */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Indikator Kesehatan</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: 'Indeks Kesehatan', value: healthIndicators.indeksKesehatanMasyarakat },
                  { name: 'Akses Faskes', value: healthIndicators.persentaseAksesFaskes },
                  { name: 'Asuransi Kesehatan', value: healthIndicators.persentaseAsuransiKesehatan },
                  { name: 'Harapan Hidup', value: healthIndicators.harapanHidup },
                ]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} />
                <Bar dataKey="value" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OPDStatistics;
