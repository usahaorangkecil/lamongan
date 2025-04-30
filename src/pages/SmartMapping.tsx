import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from '@/components/Navbar';

const categories = [
  "Kemiskinan dan Bantuan Sosial",
  "Pengangguran dan Lapangan Kerja",
  "Kesehatan Masyarakat",
  "Pendidikan dan Sekolah",
  "Risiko Bencana",
  "Infrastruktur",
  "Komoditas",
  "Pendapatan Daerah",
  "Laporan Warga",
  "Inovasi Pemuda"
];

const categoryColors = {
  "Kemiskinan dan Bantuan Sosial": "red",
  "Pengangguran dan Lapangan Kerja": "orange",
  "Kesehatan Masyarakat": "green",
  "Pendidikan dan Sekolah": "blue",
  "Risiko Bencana": "purple",
   "Infrastruktur": "cyan",
  "Komoditas: "yellow",
  "Pendapatan Daerah": "pink",
  "Laporan Warga": "brown",
   "Inovasi Pemuda": "lime",
};

const generateRandomMarkers = () => {
  const latBase = -7.1167; // Lamongan area
  const lngBase = 112.4167;

  return categories.map((category) => ({
    category,
    points: Array.from({ length: 5 }).map(() => ({
      lat: latBase + (Math.random() - 0.5) * 0.2, // more confined to Lamongan area
      lng: lngBase + (Math.random() - 0.5) * 0.2,
      value: Math.floor(Math.random() * 41) + 60,
    })),
  }));
};

const SmartMapping = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const data = generateRandomMarkers();

  const getIcon = (category: string) => {
    const iconColor = categoryColors[category] || "gray";
    return new L.DivIcon({
      className: `leaflet-div-icon`,
      html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid #fff;"></div>`,
      iconSize: [20, 20],
    });
  };

  return (
    <div className="relative h-screen w-full">
      {/* Navbar */}
      <Navbar /> {/* Navbar ditambahkan di sini */}

      {/* Floating Insight Box */}
      <div className="absolute top-4 left-4 z-[1000] bg-white/20 backdrop-blur-md text-white p-4 rounded-xl shadow-lg w-72">
        <h2 className="font-semibold text-white mb-2">Apa yang Perlu Diperhatikan Hari Ini?</h2>
        <ul className="text-sm space-y-1">
          <li><span className="text-red-400">🔴 3 Urgent Issues:</span> Banjir, Pengangguran, Kesehatan</li>
          <li><span className="text-green-300">🟢 2 Positive Developments:</span> Infrastruktur, Inovasi Pemuda</li>
          <li><span className="text-blue-200">🔵 1 Recommended Action:</span> Fokus pada distribusi bantuan</li>
        </ul>
      </div>

      {/* Floating Category Selector */}
      <div className="absolute top-4 right-4 z-[1000] bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg text-black max-h-[80vh] overflow-y-auto w-60">
        <h3 className="font-semibold mb-2">Kategori</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-white/50 ${
                selectedCategory === cat ? "bg-white/70 font-bold" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Map Layer */}
      <MapContainer
        center={[-7.1167, 112.4167]}
        zoom={10}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {(selectedCategory
          ? data.filter((d) => d.category === selectedCategory)
          : data
        ).flatMap((cat) =>
          cat.points.map((point, idx) => (
            <Marker
              key={idx}
              position={[point.lat, point.lng]}
              icon={getIcon(cat.category)}
            >
              <Popup>
                <b>{cat.category.toUpperCase()}</b>
                <br />
                {point.value}%
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default SmartMapping;
