export interface PositionType {
  lat?: any;
  lng?: any;
  address?: string;
}

export interface LatLngType {
  lat: () => any;
  lng: () => any;
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
