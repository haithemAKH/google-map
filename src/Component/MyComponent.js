import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.7128, // Replace with the latitude of your desired center
  lng: -74.0060, // Replace with the longitude of your desired center
};

const markerPosition = {
  lat: 40.7128, // Replace with the latitude of the marker
  lng: -74.0060, // Replace with the longitude of the marker
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDNhjrMIn7LKvMDFORX8cw3dyym4zHkwRg"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Add Marker */}
      <Marker position={markerPosition} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
