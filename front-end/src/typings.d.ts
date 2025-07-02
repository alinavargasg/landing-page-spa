// typings.d.ts
declare namespace google {
  namespace maps {
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface MarkerOptions {
      position: LatLngLiteral;
      title?: string;
      label?: string | google.maps.MarkerLabel;
      icon?: string | google.maps.Icon | google.maps.Symbol;
      // Agrega otras propiedades que necesites
    }
    
    interface Icon {
      url: string;
      scaledSize?: Size;
    }
    
    interface Size {
      width: number;
      height: number;
    }
  }
}