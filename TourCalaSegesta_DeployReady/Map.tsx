import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    const map = L.map('map').setView([38.1, 12.8], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([38.1, 12.8]).addTo(map).bindPopup('Attrazione turistica');
  }, []);
  return <div id="map" style={{ height: '100vh' }}></div>;
}
