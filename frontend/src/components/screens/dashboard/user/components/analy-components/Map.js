import React from 'react';
import { Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mines = [
  { id: 1, name: 'Mine A', lat: -13.2543, lng: 34.3015 },
  { id: 2, name: 'Mine B', lat: -13.3500, lng: 34.4000 },
  // Add other mines here
];

const Map = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h6>Map of Mines in Malawi</h6>
        {/* Map component */}
        <div style={{ height: '400px', width: '100%' }}>
          <MapContainer
            center={[-13.2543, 34.3015]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {mines.map((mine) => (
              <Marker
                key={mine.id}
                position={[mine.lat, mine.lng]}
                icon={new L.Icon({ iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Map_marker.svg', iconSize: [25, 25] })}
              >
                <Popup>{mine.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Map;
