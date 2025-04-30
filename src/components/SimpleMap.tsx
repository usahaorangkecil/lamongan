
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

interface MapMarker {
  lat: number;
  lng: number;
  title: string;
  color?: string;
  popup?: string;
}

interface SimpleMapProps {
  title: string;
  center: [number, number];
  zoom: number;
  markers: MapMarker[];
  height?: string;
  polygons?: { 
    coordinates: [number, number][][], 
    color: string, 
    name: string 
  }[];
}

// Fix for the marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const SimpleMap = ({ title, center, zoom, markers, height = "400px", polygons = [] }: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // Initialize map
      leafletMap.current = L.map(mapRef.current).setView(center, zoom);
      
      // Add dark theme map tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
      }).addTo(leafletMap.current);

      // Clean up on unmount
      return () => {
        if (leafletMap.current) {
          leafletMap.current.remove();
          leafletMap.current = null;
        }
      };
    }
  }, [center, zoom]);

  useEffect(() => {
    if (leafletMap.current) {
      // Clear existing markers and polygons
      leafletMap.current.eachLayer((layer) => {
        if (layer instanceof L.Marker || layer instanceof L.Polygon) {
          leafletMap.current?.removeLayer(layer);
        }
      });
      
      // Add markers
      markers.forEach(marker => {
        const markerIcon = marker.color ? 
          L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${marker.color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff;"></div>`,
            iconSize: [15, 15],
            iconAnchor: [7, 7]
          }) : 
          new L.Icon.Default();
        
        const mapMarker = L.marker([marker.lat, marker.lng], { icon: markerIcon })
          .addTo(leafletMap.current!);
        
        if (marker.popup || marker.title) {
          mapMarker.bindPopup(marker.popup || marker.title);
        }
      });
      
      // Add polygons if provided
      polygons.forEach(polygon => {
        L.polygon(polygon.coordinates, {
          color: polygon.color,
          fillColor: polygon.color,
          fillOpacity: 0.3,
          weight: 1
        }).bindPopup(polygon.name).addTo(leafletMap.current!);
      });
    }
  }, [markers, polygons]);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mapRef} style={{ height, width: '100%' }}></div>
      </CardContent>
    </Card>
  );
};

export default SimpleMap;
