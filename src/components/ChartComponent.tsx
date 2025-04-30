
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ChartProps {
  title: string;
  type: 'bar' | 'line' | 'pie';
  data: any[];
  xKey: string;
  yKeys: { key: string; name: string; color: string }[];
  height?: string | number;
}

const ChartComponent = ({ title, type, data, xKey, yKeys, height = 300 }: ChartProps) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {type === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xKey} stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} 
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              {yKeys.map((yKey, index) => (
                <Bar key={yKey.key} dataKey={yKey.key} name={yKey.name} fill={yKey.color || COLORS[index % COLORS.length]} />
              ))}
            </BarChart>
          ) : type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xKey} stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} 
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              {yKeys.map((yKey, index) => (
                <Line 
                  key={yKey.key} 
                  type="monotone" 
                  dataKey={yKey.key} 
                  name={yKey.name}
                  stroke={yKey.color || COLORS[index % COLORS.length]} 
                  activeDot={{ r: 8 }} 
                />
              ))}
            </LineChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey={yKeys[0].key}
                nameKey={xKey}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} 
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
