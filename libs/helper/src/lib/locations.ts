import {
  GoogleMapClickEventType,
  GoogleMapDragEventType,
  PositionType,
  GoogleMapAutocompleteEventType,
} from '@nx-nextjs/interfaces';

export const getPositionMap = (
  event: GoogleMapClickEventType | GoogleMapDragEventType
): PositionType | null => {
  if (!event) return null;
  const { lat, lng } = event.latLng;
  return { lat: lat(), lng: lng() };
};

export const getPositionMapAutocomplete = (
  event: GoogleMapAutocompleteEventType
): PositionType => {
  const { lat, lng } = event.geometry.location;
  return { lat: lat(), lng: lng() };
};

export type Coordinate = {
  lat: number;
  lng: number;
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    const success = (pos: any) => {
      const crd = pos.coords;
      const position = {
        lat: crd.latitude,
        lng: crd.longitude,
      };
      resolve(position);
    };

    const error = () => {
      reject();
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });

export const getDistanceBetweenTwoPoints = (
  cord1: Coordinate,
  cord2: Coordinate
) => {
  // Have the same latitude and longitude coordinates return 0
  if (cord1.lat === cord2.lat && cord1.lng === cord2.lng) {
    return 0;
  }
  // Convert latitude to radians
  const radlat1 = (Math.PI * cord1.lat) / 180;
  const radlat2 = (Math.PI * cord2.lat) / 180;

  // Longitude distance
  const theta = cord1.lng - cord2.lng;
  const radtheta = (Math.PI * theta) / 180;

  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  if (dist > 1) {
    dist = 1;
  }

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist *= 1609.344;
  return dist; // Metres
};
