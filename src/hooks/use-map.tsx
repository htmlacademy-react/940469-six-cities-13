import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/city-type';
import {URL_TITLE_LAYER, OPEN_STREET_MAP} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        URL_TITLE_LAYER,
        {
          attribution:
          OPEN_STREET_MAP
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
