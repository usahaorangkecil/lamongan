
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { populationPyramidData, lamonganPopulationData, populationGrowthData } from '@/data/statistikData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import CardStat from '@/components/CardStat';
import { AreaChart, Area } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// Transform data for the population pyramid
const transformPyramidData = () => {
  return populationPyramidData.map((item) => ({
    ageGroup: item.ageGroup,
    male: -item.male, // Negative values for males
    female: item.female // Positive values for females
  }));
};

const PopulationPyramidChart = () => {
  const data = transformPyramidData();
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" 
          tickFormatter={(value) => `${Math.abs(value).toLocaleString()}`} 
        />
        <YAxis dataKey="ageGroup" type="category" />
        <Tooltip 
          formatter={(value) => Math.abs(Number(value)).toLocaleString()}
          labelFormatter={(value) => `Age Group: ${value}`}
          contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '1px solid #444' }}
        />
        <Legend 
          payload={[
            { value: 'Male', type: 'square', color: '#2196F3' },
            { value: 'Female', type: 'square', color: '#FF69B4' }
          ]} 
        />
        <ReferenceLine x={0} stroke="#666" />
        <Bar dataKey="male" name="Male" fill="#2196F3" />
        <Bar dataKey="female" name="Female" fill="#FF69B4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const PopulationGrowthChart = () => {
  // Generate monthly growth data
  const generateGrowthData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const basePopulation = populationGrowthData.currentPopulation - (populationGrowthData.currentPopulation * 0.01);
    
    return months.map((month, index) => {
      const growthFactor = 1 + ((populationGrowthData.growthRate / 12) / 100);
      const population = basePopulation * Math.pow(growthFactor, index + 1);
      
      return {
        month,
        population: Math.round(population)
      };
    });
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={generateGrowthData()}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} />
        <Area type="monotone" dataKey="population" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const BupatiStatistics = () => {
  const [selectedKecamatan, setSelectedKecamatan] = useState<string | null>(null);
  
  // Calculate total statistics
  const totalPopulation = lamonganPopulationData.reduce((sum, item) => sum + item.totalPenduduk, 0);
  const totalMale = lamonganPopulationData.reduce((sum, item) => sum + item.lakiLaki, 0);
  const totalFemale = lamonganPopulationData.reduce((sum, item) => sum + item.perempuan, 0);
  const totalProductive = lamonganPopulationData.reduce((sum, item) => sum + item.usiaProduktif, 0);
  const totalElderly = lamonganPopulationData.reduce((sum, item) => sum + item.lansia, 0);

  return (
    <DashboardLayout title="Statistik Kabupaten Lamongan" activeLink="statistik">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardStat 
            title="Total Penduduk" 
            value={totalPopulation.toLocaleString()} 
            icon="users" 
          />
          <CardStat 
            title="Rasio Laki-laki/Perempuan" 
            value={`${((totalMale / totalFemale) * 100).toFixed(1)}%`} 
            icon="male-female" 
          />
          <CardStat 
            title="Penduduk Usia Produktif" 
            value={`${((totalProductive / totalPopulation) * 100).toFixed(1)}%`} 
            icon="activity" 
          />
          <CardStat 
            title="Lansia" 
            value={totalElderly.toLocaleString()} 
            icon="older" 
          />
          <CardStat 
            title="Pertumbuhan Penduduk" 
            value={`${populationGrowthData.growthRate}%`} 
            icon="trending-up" 
          />
          <CardStat 
            title="Migrasi Masuk" 
            value={populationGrowthData.migrationIn.toLocaleString()} 
            icon="move-right" 
          />
        </div>
        
        {/* Population Pyramid */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Piramida Penduduk Kabupaten Lamongan</CardTitle>
          </CardHeader>
          <CardContent>
            <PopulationPyramidChart />
          </CardContent>
        </Card>
        
        {/* Population Growth Trend */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Tren Pertumbuhan Penduduk</CardTitle>
          </CardHeader>
          <CardContent>
            <PopulationGrowthChart />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BupatiStatistics;
