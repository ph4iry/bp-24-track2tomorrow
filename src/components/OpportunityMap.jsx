import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '1.5rem'
};

const center = {
  lat: 42.3601,
  lng: -71.0942
};

const MarkerFactory = (lat, lng) => {
  return {lat, lng}
}

/**
@type {MarkerFactory[]}
*/
const Markers = [
  MarkerFactory(35.83365, -78.563571),
  MarkerFactory(44.0929129, -87.6582208),
  MarkerFactory(40.7841523, -73.9759904),   
  MarkerFactory(29.72201, -95.38951),
  MarkerFactory(42.3469837, -71.0736154),
  MarkerFactory(34.7408413, -92.2915917),
  MarkerFactory(37.769825, -122.466087),
  MarkerFactory(42.3109333, -71.0765391),
  MarkerFactory(34.023417, -91.343255),
  MarkerFactory(32.375283, -86.299479),
  MarkerFactory(41.895760, -87.622383),
  MarkerFactory(41.8796009, -87.6230828),
  MarkerFactory(41.788784, -87.604882),
  MarkerFactory(41.8778607, -87.6300122),
  MarkerFactory(41.877990, -87.698800),
  MarkerFactory(41.798550, -87.587532),
  MarkerFactory(41.790827, -87.601364),
  MarkerFactory(41.71692, -87.62276),
  MarkerFactory(41.834853,  -87.851813),
  MarkerFactory(41.7913968, 87.6008439),
 
]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'map',
    googleMapsApiKey: "AIzaSyAl6pDUwv7h-ck-GYiWAcaJBuIm1JPDfPI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF position={center} />
        {Markers.map((marker, i) => (
          <MarkerF key={i} position={{lat: marker.lat, lng: marker.lng}}/>
        ))}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
