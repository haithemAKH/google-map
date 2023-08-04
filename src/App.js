import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';

const containerStyle = {
  width: '1000px',
  height: '400px',

};

const center = {
  lat: 36.857960,
  lng: 10.202090
};

function app() {
  return (
    <div > 
    <LoadScript
      googleMapsApiKey="AIzaSyDNhjrMIn7LKvMDFORX8cw3dyym4zHkwRg"
    >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default app
