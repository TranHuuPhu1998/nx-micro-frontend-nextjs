export interface PositionType {
  lat?: string;
  lng?: string;
  address?: string;
}

export interface LatLngType {
  lat: () => string;
  lng: () => string;
}

export interface GoogleMapEventType {
  latLng: LatLngType;
}

export type GoogleMapClickEventType = GoogleMapEventType;

export type GoogleMapDragEventType = GoogleMapEventType;

export interface GeometryType {
  location: LatLngType;
}
export interface GoogleMapAutocompleteEventType {
  geometry: GeometryType;
}
