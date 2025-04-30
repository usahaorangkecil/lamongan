
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface AiInsightBoxProps {
  insights?: string[];
}

interface Insight {
  type: 'urgent' | 'positive' | 'action';
  content: string;
}

const AiInsightBox = ({ insights: providedInsights }: AiInsightBoxProps) => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI insights
    setLoading(true);
    
    if (providedInsights) {
      // Use provided insights if available
      const formattedInsights = providedInsights.map((content, index) => {
        // Alternate between types for variety
        const types: ('urgent' | 'positive' | 'action')[] = ['urgent', 'positive', 'action'];
        return { type: types[index % 3], content };
      });
      
      setInsights(formattedInsights);
      setLoading(false);
    } else {
      // Simulating API call with setTimeout
      setTimeout(() => {
        const mockInsights: Insight[] = [
          { type: 'urgent', content: 'Lonjakan kasus DBD di Kecamatan Deket, 15 kasus baru dalam seminggu terakhir.' },
          { type: 'urgent', content: 'Potensi banjir di 3 desa di Kecamatan Sukodadi akibat curah hujan tinggi.' },
          { type: 'urgent', content: 'Volume sampah di TPS Terminal meningkat 30%, beresiko overflow dalam 2 hari.' },
          { type: 'positive', content: 'Program vaksinasi anak mencapai target 95% di Kecamatan Babat.' },
          { type: 'positive', content: 'Pendapatan UMKM naik 12% dibanding bulan lalu di sektor makanan.' },
          { type: 'action', content: 'Koordinasi dengan Dinas Kesehatan untuk antisipasi lonjakan DBD dengan fogging dan pembagian abate.' }
        ];
        
        setInsights(mockInsights);
        setLoading(false);
      }, 1500);
    }

    // Setup auto refresh
    const intervalId = setInterval(() => {
      console.log('Auto-refreshing AI insights');
      // In real app, would make an API call here
    }, 30000); // refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, [providedInsights]);

  return (
    <div className="glass-card max-w-md w-full">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <h2 className="text-white font-bold">
          Apa yang Perlu Diperhatikan Hari Ini?
        </h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-white">
          Refresh
        </Button>
      </div>
      
      <div className="p-4 max-h-[400px] overflow-y-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white">Menganalisis data...</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-sm text-white/70 mb-2">Isu Mendesak:</h3>
              <ul className="space-y-2">
                {insights
                  .filter(insight => insight.type === 'urgent')
                  .map((insight, idx) => (
                    <li key={`urgent-${idx}`} className="bg-red-900/30 p-3 rounded border-l-4 border-red-500 text-sm">
                      {insight.content}
                    </li>
                  ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm text-white/70 mb-2">Perkembangan Positif:</h3>
              <ul className="space-y-2">
                {insights
                  .filter(insight => insight.type === 'positive')
                  .map((insight, idx) => (
                    <li key={`positive-${idx}`} className="bg-green-900/30 p-3 rounded border-l-4 border-green-500 text-sm">
                      {insight.content}
                    </li>
                  ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm text-white/70 mb-2">Rekomendasi Tindakan:</h3>
              <ul className="space-y-2">
                {insights
                  .filter(insight => insight.type === 'action')
                  .map((insight, idx) => (
                    <li key={`action-${idx}`} className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 text-sm">
                      {insight.content}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AiInsightBox;
