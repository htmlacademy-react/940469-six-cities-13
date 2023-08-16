import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { OfferCity } from '../types/offer';
import { URL_TITLE_LAYER, OPEN_STREET_MAP } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: OfferCity,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(URL_TITLE_LAYER, {
        attribution: OPEN_STREET_MAP,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if (map && city) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );
    }
  }, [city, map]);

  return map;
}

export default useMap;
