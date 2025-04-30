
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AiInsightBox from '@/components/AiInsightBox';
import { rekomendasiData, RekomendasiData } from '@/data/rekomendasiData';
import { Check, Archive, ChevronRight, AlertTriangle, TrendingUp, ChartBar, Target } from 'lucide-react';

// Define the RekomendasiItem interface to match the structure we're using
interface RekomendasiItem {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected' | 'implemented';
  priority: 'high' | 'medium' | 'low';
  source: 'ai' | 'manual' | 'data';
  date: string;
  category: string;
  metrics: {
    name: string;
    value: string;
    change?: string;
  }[];
  department: string;
  color: string;
}

// Function to map the RekomendasiData to RekomendasiItem
const mapRekomendasiData = (data: RekomendasiData[]): RekomendasiItem[] => {
  const currentDate = new Date().toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Create priority mapping
  const priorityMap: {[key: string]: 'high' | 'medium' | 'low'} = {
    'Kesejahteraan Masyarakat': 'high',
    'Kemiskinan': 'high',
    'Kesehatan': 'high',
    'Pengangguran': 'medium',
    'Infrastruktur': 'medium',
    'Pendidikan': 'medium'
  };

  // Create department mapping
  const departmentMap: {[key: string]: string} = {
    'Kesejahteraan Masyarakat': 'Dinas Sosial',
    'Kemiskinan': 'Dinas Sosial',
    'Kesehatan': 'Dinas Kesehatan',
    'Pengangguran': 'Dinas Tenaga Kerja',
    'Infrastruktur': 'Dinas PU',
    'Pendidikan': 'Dinas Pendidikan'
  };

  return data.map(item => ({
    id: item.id,
    title: item.judul,
    description: item.rekomendasi,
    status: 'pending' as const,
    priority: priorityMap[item.kategori] || 'medium',
    source: 'ai' as const,
    date: currentDate,
    category: item.kategori,
    metrics: [
      {
        name: 'Data Pendukung',
        value: item.dataPendukung
      },
      {
        name: 'Sumber Data',
        value: item.sumberData
      }
    ],
    department: departmentMap[item.kategori] || 'Sekretariat Daerah',
    color: item.kategori === 'Kemiskinan' ? '#ef4444' : 
           item.kategori === 'Kesehatan' ? '#3b82f6' : 
           item.kategori === 'Pendidikan' ? '#22c55e' : '#f59e0b'
  }));
};

// Create a wrapper component for Rekomendasi elements
const RekomendationWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const BupatiRekomendasi = () => {
  const [activeTab, setActiveTab] = useState('all');
  const mappedRekomendasi = mapRekomendasiData(rekomendasiData);
  
  const filteredRekomendasi = activeTab === 'all' 
    ? mappedRekomendasi 
    : mappedRekomendasi.filter(item => item.status === activeTab);

  const priorityCount = {
    high: mappedRekomendasi.filter(item => item.priority === 'high').length,
    medium: mappedRekomendasi.filter(item => item.priority === 'medium').length,
    low: mappedRekomendasi.filter(item => item.priority === 'low').length
  };

  const statusCount = {
    pending: mappedRekomendasi.filter(item => item.status === 'pending').length,
    approved: mappedRekomendasi.filter(item => item.status === 'approved').length,
    rejected: mappedRekomendasi.filter(item => item.status === 'rejected').length,
    implemented: mappedRekomendasi.filter(item => item.status === 'implemented').length
  };

  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      pending: 'bg-yellow-500',
      approved: 'bg-blue-500',
      rejected: 'bg-red-500',
      implemented: 'bg-green-500'
    };
    return statusColors[status] || 'bg-gray-500';
  };

  const getPriorityColor = (priority: string) => {
    const priorityColors: Record<string, string> = {
      high: 'text-red-500 border-red-500',
      medium: 'text-yellow-500 border-yellow-500',
      low: 'text-green-500 border-green-500'
    };
    return priorityColors[priority] || 'text-gray-500 border-gray-500';
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'ai':
        return <ChartBar className="h-4 w-4 mr-1" />;
      case 'manual':
        return <Target className="h-4 w-4 mr-1" />;
      case 'data':
        return <TrendingUp className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout title="Rekomendasi" activeLink="rekomendasi">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Insight: Rekomendasi Kebijakan</CardTitle>
              <CardDescription>Analisis dan rekomendasi berdasarkan data terkini</CardDescription>
            </CardHeader>
            <CardContent>
              <AiInsightBox 
                insights={[
                  "Rekomendasi prioritas tinggi meningkat 15% dibandingkan periode sebelumnya",
                  "74% rekomendasi terkait kesehatan dan pendidikan telah diimplementasikan",
                  "Perlu perhatian khusus pada rekomendasi terkait infrastruktur yang masih pending"
                ]}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ringkasan Status Rekomendasi</CardTitle>
              <CardDescription>Jumlah rekomendasi berdasarkan status dan prioritas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Berdasarkan Status</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="text-xs">Pending</div>
                        <Badge variant="outline">{statusCount.pending}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="text-xs">Approved</div>
                        <Badge variant="outline">{statusCount.approved}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="text-xs">Rejected</div>
                        <Badge variant="outline">{statusCount.rejected}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="text-xs">Implemented</div>
                        <Badge variant="outline">{statusCount.implemented}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Berdasarkan Prioritas</div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-xs">Tinggi</span>
                        </div>
                        <Badge variant="outline">{priorityCount.high}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs">Sedang</span>
                        </div>
                        <Badge variant="outline">{priorityCount.medium}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-green-500 mr-1" />
                          <span className="text-xs">Rendah</span>
                        </div>
                        <Badge variant="outline">{priorityCount.low}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Daftar Rekomendasi Kebijakan</CardTitle>
            <CardDescription>Rekomendasi kebijakan berdasarkan analisis data dan input OPD</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="all">Semua ({mappedRekomendasi.length})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({statusCount.pending})</TabsTrigger>
                <TabsTrigger value="approved">Disetujui ({statusCount.approved})</TabsTrigger>
                <TabsTrigger value="rejected">Ditolak ({statusCount.rejected})</TabsTrigger>
                <TabsTrigger value="implemented">Diimplementasi ({statusCount.implemented})</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab}>
                <RekomendationWrapper>
                  {filteredRekomendasi.map((rekomendasi, index) => (
                    <div
                      key={rekomendasi.id}
                      className="border-b last:border-0 pb-4 last:pb-0 pt-4 first:pt-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${getStatusColor(rekomendasi.status)}`}></div>
                          <div>
                            <h3 className="font-medium">{rekomendasi.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {rekomendasi.department}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {rekomendasi.category}
                              </Badge>
                              <Badge variant="outline" className={`border text-xs ${getPriorityColor(rekomendasi.priority)}`}>
                                {rekomendasi.priority === 'high' ? 'Prioritas Tinggi' : 
                                 rekomendasi.priority === 'medium' ? 'Prioritas Sedang' : 'Prioritas Rendah'}
                              </Badge>
                              <Badge variant="outline" className="flex items-center text-xs">
                                {getSourceIcon(rekomendasi.source)}
                                {rekomendasi.source === 'ai' ? 'AI Generated' : 
                                 rekomendasi.source === 'manual' ? 'Manual Input' : 'Data Driven'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {rekomendasi.date}
                        </div>
                      </div>
                      <div className="pl-6">
                        <p className="text-sm text-muted-foreground mb-3">
                          {rekomendasi.description}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-3">
                          {rekomendasi.metrics?.map((metric, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-xs text-muted-foreground">{metric.name}</span>
                              <span className="font-medium">{metric.value}</span>
                              {metric.change && (
                                <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                  {metric.change}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-end gap-2 mt-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <Archive className="w-4 h-4 mr-1" />
                            Arsip
                          </Button>
                          {rekomendasi.status === 'pending' && (
                            <Button variant="outline" size="sm" className="h-8">
                              <Check className="w-4 h-4 mr-1" />
                              Setujui
                            </Button>
                          )}
                          <Button variant="default" size="sm" className="h-8">
                            Detail
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </RekomendationWrapper>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BupatiRekomendasi;
