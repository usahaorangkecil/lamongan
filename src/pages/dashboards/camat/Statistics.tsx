
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { deketDemographicsData, desaDeketData } from '@/data/statistikData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CardStat from '@/components/CardStat';
import DataTable from '@/components/DataTable';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const CamatStatistics = () => {
  // For CRUD operations
  const [populationData, setPopulationData] = useState(desaDeketData);
  
  // Handle CRUD operations
  const handleCreate = (newData: any) => {
    setPopulationData([...populationData, newData]);
  };

  const handleUpdate = (id: string | number, updatedData: any) => {
    setPopulationData(populationData.map((item, index) => 
      item.desa === id ? { ...item, ...updatedData } : item
    ));
  };

  const handleDelete = (id: string | number) => {
    setPopulationData(populationData.filter(item => item.desa !== id));
  };

  // Distribution charts data
  const genderDistributionData = [
    { name: 'Laki-laki', value: deketDemographicsData.lakiLaki },
    { name: 'Perempuan', value: deketDemographicsData.perempuan }
  ];

  const ageDistributionData = [
    { name: 'Anak-anak', value: deketDemographicsData.anak },
    { name: 'Usia Produktif', value: deketDemographicsData.usiaProduktif },
    { name: 'Lansia', value: deketDemographicsData.lansia }
  ];

  // Define columns for the data table
  const columns = [
    { header: 'Desa', accessorKey: 'desa' },
    { header: 'Total Penduduk', accessorKey: 'penduduk' },
    { header: 'Laki-laki', accessorKey: 'lakiLaki' },
    { header: 'Perempuan', accessorKey: 'perempuan' },
    { header: 'Usia Produktif', accessorKey: 'usiaProduktif' },
  ];

  const formFields = [
    { name: 'desa', label: 'Desa', type: 'text' },
    { name: 'penduduk', label: 'Total Penduduk', type: 'number' },
    { name: 'lakiLaki', label: 'Laki-laki', type: 'number' },
    { name: 'perempuan', label: 'Perempuan', type: 'number' },
    { name: 'usiaProduktif', label: 'Usia Produktif', type: 'number' },
  ];

  return (
    <DashboardLayout title="Statistik Kecamatan Deket" activeLink="statistik">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardStat 
            title="Total Penduduk" 
            value={deketDemographicsData.totalPenduduk.toLocaleString()} 
            icon="users" 
          />
          <CardStat 
            title="Rasio L/P" 
            value={`${deketDemographicsData.rasioJenisKelamin}`} 
            icon="male-female" 
          />
          <CardStat 
            title="Lansia" 
            value={deketDemographicsData.lansia.toLocaleString()} 
            icon="older" 
          />
          <CardStat 
            title="Usia Produktif" 
            value={deketDemographicsData.usiaProduktif.toLocaleString()} 
            icon="activity" 
          />
          <CardStat 
            title="Pertumbuhan" 
            value={`${deketDemographicsData.pertumbuhanPenduduk}%`} 
            icon="trending-up" 
          />
          <CardStat 
            title="Migrasi Masuk" 
            value={deketDemographicsData.migrasiMasuk.toLocaleString()} 
            icon="move-right" 
          />
        </div>
        
        {/* Data Table */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Populasi per Desa di Kecamatan Deket</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              data={populationData}
              columns={columns}
              title="Populasi per Desa"
              formFields={formFields}
              onCreate={handleCreate}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </CardContent>
        </Card>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Distribusi Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Distribusi Kelompok Usia</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ageDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CamatStatistics;
