import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-100);
  const [lat, setLat] = useState(40);
  const [zoom, setZoom] = useState(3);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('load', () => {
      // Load an image from an external URL.
      map.loadImage(
      './mapbox-marker-icon-red.svg',
      (error, image) => {
      if (error) throw error;
       
      // Add the image to the map style.
      map.addImage('marker', image);
       
      // Add a data source containing one point feature.
      map.addSource('point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
              'type': 'Point',
              'coordinates': [-100, 40]
      }
      }
      ]
      }
      });
       
      // Add a layer to use the image to represent the data.
      map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'point', // reference the data source
      'layout': {
      'icon-image': 'marker', // reference the image
      'icon-size': 1
      }
      });
      }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;
