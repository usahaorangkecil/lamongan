import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CounterStat from '@/components/CounterStat';
import { ArrowRight, MapPin, ListCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player';

const Landing = () => {
  useEffect(() => {
    document.title = 'Smart Lamongan - Kota Cerdas';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-white">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qCL-FRyXIDw"
          playing
          loop
          muted
          controls={false}
          width="100vw"
          height="100%"
          className="absolute top-0 left-0 z-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-800">
              Smart Lamongan
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-600 font-medium">
              Platform digital terintegrasi untuk memantau dan mengelola layanan kota secara efisien.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/smart-mapping">
                <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  Smart Mapping
                </Button>
              </Link>
              <Link to="/smart-services">
                <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50 px-6 py-3 rounded-md flex items-center gap-2 text-lg">
                  <ListCheck className="w-5 h-5" />
                  Smart Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Statistik Lamongan Terkini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CounterStat title="Jumlah Pengangguran" value={5280} suffix=" Jiwa" />
            <CounterStat title="Volume Sampah Hari Ini" value={24} suffix=" Ton" />
            <CounterStat title="Bansos Aktif" value={5148} suffix=" KK" />
            <CounterStat title="Harga Gabah Kering" prefix="Rp " value={5200} suffix="/Kg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Fitur Utama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Mapping',
                icon: <MapPin className="w-6 h-6 text-green-700" />,
                desc: 'Visualisasi data kota secara real-time melalui peta interaktif dengan indikator performa berbagai sektor.',
                to: '/smart-mapping',
                cta: 'Jelajahi Peta'
              },
              {
                title: 'Smart Services',
                icon: <ListCheck className="w-6 h-6 text-green-700" />,
                desc: 'Akses berbagai layanan publik digital untuk mempermudah aktivitas sehari-hari warga Lamongan.',
                to: '/smart-services',
                cta: 'Akses Layanan'
              },
              {
                title: 'Smart Governance',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" stroke="#166534" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 2v5h5" />
                    <path d="M21 6v6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V12a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.974-1.674L20 13.5a1.5 1.5 0 0 0 1.5-1.5V6l-5-4H3v14" />
                    <path d="M9 18h1" /><path d="M13 18h1" /><path d="M18 18h1" />
                    <path d="M21 18h1" /><path d="M2 18h1" /><path d="M6 18h1" />
                    <path d="M10 22h4" />
                  </svg>
                ),
                desc: 'Dashboard khusus untuk pemerintah daerah dalam pengambilan keputusan berbasis data.',
                to: '/login',
                cta: 'Login Dashboard'
              }
            ].map(({ title, icon, desc, to, cta }, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="p-3 bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">{title}</h3>
                <p className="text-gray-700 mb-6">{desc}</p>
                <Link to={to} className="inline-flex items-center text-green-700 hover:underline">
                  {cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="p-8 md:p-12 text-center bg-white border border-green-200 rounded-xl shadow">
            <h2 className="text-4xl font-bold mb-6 text-green-800">
              Kota Cerdas untuk Masa Depan Lamongan
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Mari bergabung dalam transformasi digital Lamongan menuju kota yang lebih efisien, berkelanjutan, dan nyaman untuk semua warga.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/smart-mapping">
                <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md">
                  Jelajahi Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Smart Lamongan. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
