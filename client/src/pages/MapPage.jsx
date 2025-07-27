// src/pages/MapPages.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});



const MapPages = () => {
  const position = [4.597936, -74.076079]; // Bogotá

    return (
        <div>
        <h2 className='text-white font-bold text-3xl hover:text-blue-600' style={{ textAlign: 'center', marginBottom: '1rem'}}>Location on the map</h2>
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>We are located here</Popup>
            </Marker>
        </MapContainer>
        </div>
    );
    };

export default MapPages;
