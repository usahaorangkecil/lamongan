// src/pages/SmartServices.tsx

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import {
  Camera,
  CreditCard,
  AlertCircle,
  FileCheck,
  Heart,
  Map,
  MessageSquare,
  ShoppingCart,
  Globe,
  Users,
  Book,
  School,
  Bus,
} from 'lucide-react';

const SmartServices = () => {
  useEffect(() => {
    document.title = 'Smart Services - Smart Lamongan';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900">
      <Navbar />

      <header className="pt-28 pb-12 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">Smart Services Lamongan</h1>
          <p className="text-lg">Akses layanan digital untuk mendukung kemudahan aktivitas harian Anda.</p>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Pantau Keamanan Kota"
              icon={<Camera className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Live CCTV', value: 'live-feed', path: '/services/cctv/live' },
                { label: 'Laporan Keamanan', value: 'reports', path: '/services/cctv/reports' },
              ]}
            />
            <ServiceCard
              title="Pembayaran Pajak"
              icon={<CreditCard className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Bayar Pajak', value: 'pay', path: '/services/pajak/bayar' },
                { label: 'Status Pembayaran', value: 'status', path: '/services/pajak/status' },
              ]}
            />
            <ServiceCard
              title="Laporkan Masalah"
              icon={<AlertCircle className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Buat Laporan', value: 'report', path: '/services/laporan/buat' },
                { label: 'Lihat Laporan', value: 'view', path: '/services/laporan/lihat' },
              ]}
            />
            <ServiceCard
              title="Permohonan Izin"
              icon={<FileCheck className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Ajukan Izin', value: 'apply', path: '/services/izin/ajukan' },
                { label: 'Status Izin', value: 'check', path: '/services/izin/status' },
              ]}
            />
            <ServiceCard
              title="Data Kesehatan"
              icon={<Heart className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Data Kesehatan', value: 'data', path: '/services/kesehatan/data' },
                { label: 'Fasilitas Terdekat', value: 'facilities', path: '/services/kesehatan/fasilitas' },
              ]}
            />
            <ServiceCard
              title="Fasilitas Umum"
              icon={<Map className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Sekolah', value: 'school', path: '/services/fasilitas/sekolah' },
                { label: 'Puskesmas', value: 'health', path: '/services/fasilitas/puskesmas' },
                { label: 'Pasar', value: 'market', path: '/services/fasilitas/pasar' },
              ]}
            />
            <ServiceCard
              title="Berita Terbaru"
              icon={<MessageSquare className="text-green-600 w-8 h-8 mb-2" />}
              path="/services/berita"
            />
            <ServiceCard
              title="Kampung Wisata"
              icon={<Globe className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Lihat Kampung', value: 'villages', path: '/services/wisata/kampung' },
                { label: 'Peta Wisata', value: 'map', path: '/services/wisata/peta' },
              ]}
            />
            <ServiceCard
              title="Produk UMKM"
              icon={<ShoppingCart className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Lihat Produk', value: 'products', path: '/services/umkm/produk' },
                { label: 'Dukung UMKM', value: 'support', path: '/services/umkm/dukung' },
              ]}
            />
            <ServiceCard
              title="Data Penduduk"
              icon={<Users className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Lihat Data', value: 'data', path: '/services/penduduk/data' },
                { label: 'Statistik', value: 'stats', path: '/services/penduduk/statistik' },
              ]}
            />
            <ServiceCard
              title="Perpustakaan Digital"
              icon={<Book className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Buku Online', value: 'books', path: '/services/perpustakaan/buku' },
                { label: 'Pinjam Buku', value: 'borrow', path: '/services/perpustakaan/pinjam' },
              ]}
            />
            <ServiceCard
              title="Transportasi Umum"
              icon={<Bus className="text-green-600 w-8 h-8 mb-2" />}
              options={[
                { label: 'Jadwal Bus', value: 'schedule', path: '/services/transportasi/jadwal' },
                { label: 'Rute & Tarif', value: 'route', path: '/services/transportasi/rute' },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Berita Terbaru</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: 'Transformasi Digital di Lamongan',
          date: '28 Apr 2025',
          summary: 'Bagaimana Lamongan membangun ekosistem digital kota cerdas melalui layanan terintegrasi.',
        },
        {
          title: 'Pelatihan UMKM Berbasis Teknologi',
          date: '24 Apr 2025',
          summary: 'Mendorong pelaku usaha lokal untuk go digital melalui pelatihan e-commerce dan branding.',
        },
        {
          title: 'Keamanan Data dalam Layanan Publik',
          date: '20 Apr 2025',
          summary: 'Langkah preventif yang dilakukan Pemkab untuk menjaga keamanan data masyarakat.',
        },
      ].map((blog, index) => (
        <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-green-700 mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
          <p className="text-gray-700 text-sm">{blog.summary}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-12 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Blog Destinasi Wisata Lamongan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://www.radarjatim.co/wp-content/uploads/2024/09/IMG-20240922-WA0148.jpg" alt="Wisata Bahari Lamongan" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Wisata Bahari Lamongan</h3>
          <p className="text-sm text-gray-600">Wahana rekreasi keluarga dengan berbagai atraksi seru di pesisir utara Lamongan.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://ik.imagekit.io/tvlk/blog/2025/03/Goa-Maharani.jpeg" alt="Goa Maharani" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Goa Maharani</h3>
          <p className="text-sm text-gray-600">Keindahan stalaktit dan stalagmit dalam goa alami yang menakjubkan.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://static.promediateknologi.id/crop/0x543:1080x1454/0x0/webp/photo/p2/206/2024/03/28/Screenshot_2024-03-28-08-53-31-360_cominstagramandroid-1184604569.jpg" alt="Pantai Kutang" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Pantai Kutang</h3>
          <p className="text-sm text-gray-600">Pantai eksotis dengan pasir putih dan jembatan kayu yang ikonik.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 px-4 bg-gray-50">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Produk Unggulan Lamongan</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2023/01/2700172023-Screen-Shot-2023-01-27-at-00.17.13.png" alt="Batik Lamongan" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Batik Lamongan</h3>
          <p className="text-sm text-gray-600 mb-2">Kain batik khas Lamongan dengan motif tradisional yang elegan.</p>
          <p className="text-green-600 font-bold">Rp150.000</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://jatimnow.com/po-content/uploads/202111/produk-ikan-patin-ekspor-ke-berbagai-negara-2.jpg" alt="Kerupuk Ikan" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Kerupuk Ikan</h3>
          <p className="text-sm text-gray-600 mb-2">Camilan renyah berbahan dasar ikan segar khas Lamongan.</p>
          <p className="text-green-600 font-bold">Rp25.000</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://asset.kompas.com/crops/0QyFTwt0pUN7hLOLaYDjpGEDTJE=/0x0:698x465/1200x800/data/photo/2020/12/10/5fd1de4ac38e9.jpg" alt="Olahan Bandeng" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Olahan Bandeng</h3>
          <p className="text-sm text-gray-600 mb-2">Produk olahan ikan bandeng dengan cita rasa khas Lamongan.</p>
          <p className="text-green-600 font-bold">Rp50.000</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://asset-2.tstatic.net/surabaya/foto/bank/images/kerajinan-anyaman-bambu-lamongan.jpg" alt="Kerajinan Bambu" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Kerajinan Bambu</h3>
          <p className="text-sm text-gray-600 mb-2">Produk kerajinan tangan dari bambu oleh pengrajin lokal.</p>
          <p className="text-green-600 font-bold">Rp75.000</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Butuh Bantuan dengan Layanan?</h2>
          <p className="text-gray-700 mb-6">
            Hubungi tim Smart Lamongan untuk panduan layanan digital kota.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Hubungi Kami</button>
        </div>
      </section>

      <footer className="bg-green-700 py-6 text-white text-center">
        <p>&copy; 2025 Smart Lamongan. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
};

export default SmartServices;
