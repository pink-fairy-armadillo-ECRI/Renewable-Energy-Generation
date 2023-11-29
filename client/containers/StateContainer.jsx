import React from 'react';
import { MapContainer, Polygon } from 'react-leaflet';
import { statesData } from '../state.js';
import 'leaflet/dist/leaflet.css';

const center = [40.63463151377654, -97.89969605983609];

const StateContainer = () => {
  return (
    <MapContainer
      center={center}
      zoom={4}
      style={{ width: '152.5em', height: '50vh', borderRadius: '1em' }}
    >
      {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              color: 'white',
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 5,
                  color: '#666',
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: 'white',
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default StateContainer;
