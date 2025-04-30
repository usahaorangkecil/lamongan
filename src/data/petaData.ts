export const categories = [
    { id: 'kemiskinan', name: 'Kemiskinan', color: 'green', icon: '💸' },
    { id: 'pengangguran', name: 'Pengangguran', color: 'orange', icon: '🧑‍🏭' },
    { id: 'kesehatan', name: 'Kesehatan', color: 'red', icon: '🏥' },
    { id: 'pendidikan', name: 'Pendidikan', color: 'blue', icon: '🎓' },
    { id: 'bencana', name: 'Bencana', color: 'purple', icon: '🌪️' },
    { id: 'infrastruktur', name: 'Infrastruktur', color: 'gray', icon: '🏗️' },
    { id: 'komoditas', name: 'Komoditas', color: 'yellow', icon: '🌾' },
    { id: 'pendapatan', name: 'Pendapatan Daerah', color: 'teal', icon: '💰' },
    { id: 'laporan', name: 'Laporan Warga', color: 'pink', icon: '📢' },
    { id: 'inovasi', name: 'Inovasi Pemuda', color: 'cyan', icon: '💡' },
  ];
  
  const getRandomCoords = () => ({
    lat: -7.3 + Math.random() * 0.4,
    lng: 112.1 + Math.random() * 0.6,
  });
  
  export const allMarkers = categories.flatMap(cat =>
    Array.from({ length: 5 }).map((_, i) => ({
      id: `${cat.id}-${i}`,
      category: cat.id,
      title: `${cat.name} #${i + 1}`,
      score: Math.floor(50 + Math.random() * 50),
      coords: getRandomCoords(),
      icon: cat.icon,
      color: cat.color,
    }))
  );
  