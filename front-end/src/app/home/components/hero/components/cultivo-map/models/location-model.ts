// Creando alias para los tipos de Google Maps
type LatLngLiteral = {
  lat: number;
  lng: number;
};

type MarkerOptions = {
  title?: string;
  label?: string;
  description: string,
  icon?: string | {
    url: string;
    scaledSize?: {
      width: number;
      height: number;
    };
  };
};

export interface LocationWithGoogleTypes {
  position: LatLngLiteral;
  markerOptions?: MarkerOptions;
  // ...otros campos
}

// interfaces/map.interface.ts
export interface Location {
  position: google.maps.LatLngLiteral;
  label?: string;
  title: string;
  description: string;
  type: string;
}

export interface MapConfig {
  center: google.maps.LatLngLiteral;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
}

export interface MapIcon {
  url: string;
  scaledSize?: {
    width: number;
    height: number;
  };
}