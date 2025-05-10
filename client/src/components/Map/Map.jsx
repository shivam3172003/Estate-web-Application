import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultLocation = {
  lat: 12.9716,
  lng: 77.5946,
};

function Map({ location, title }) {
  // Ensuring location is properly set, defaulting if missing
  const mapCenter = {
    lat: location?.lat || defaultLocation.lat,
    lng: location?.lng || defaultLocation.lng,
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_SECRET_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={12}
      >
        <Marker position={mapCenter} title={title || "Default Location"} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;

// import { useState, useMemo } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// const defaultLocation = {
//   lat: 12.9716,
//   lng: 77.5946,
// };

// function Map({ location, title }) {
//   const mapCenter = location?.lat && location?.lng ? location : defaultLocation;

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDgAN7E-alHib29fj_OP20V32kwqJ778ZQ">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={mapCenter}
//         zoom={12}
//       >
//         <Marker position={mapCenter} title={title || "Default Location"} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }
