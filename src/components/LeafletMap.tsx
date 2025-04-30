import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MarkerData = {
  id: string;
  coords: { lat: number; lng: number };
  title: string;
  score: number;
  icon: string;
  color: string;
};

type Props = {
  center: [number, number];
  zoom?: number;
  markers: MarkerData[];
};

const LeafletMap = ({ center, zoom = 10, markers }: Props) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
      />

      <LayersControl position="topright">
        {markers.map((marker) => {
          const customIcon = new L.DivIcon({
            className: '',
            html: `<div style="
              background-color:${marker.color};
              color:white;
              padding:6px 8px;
              border-radius:6px;
              font-size:12px;
              text-align:center;
              box-shadow:0 0 6px rgba(0,0,0,0.4);
              transform:translate(-50%, -50%);
            ">${marker.icon}<br/>${marker.score}%</div>`,
          });

          return (
            <Marker
              key={marker.id}
              position={[marker.coords.lat, marker.coords.lng]}
              icon={customIcon}
            >
              <Popup>
                <strong>{marker.title}</strong><br />
                Nilai: {marker.score}%
              </Popup>
            </Marker>
          );
        })}
      </LayersControl>
    </MapContainer>
  );
};

export default LeafletMap;
