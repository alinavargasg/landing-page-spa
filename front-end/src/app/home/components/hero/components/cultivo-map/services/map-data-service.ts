import { Injectable } from '@angular/core';
import { LocationWithGoogleTypes, MapConfig, MapIcon } from '../models/location-model';

@Injectable({ providedIn: 'root' })
export class MapDataService {
  private defaultConfig: MapConfig = {
    center: { lat: -17.3895, lng: -66.2168 },
    zoom: 14,
    minZoom: 12,
    maxZoom: 18
  };

  getMapConfig(): MapConfig {
    return this.defaultConfig;
  }

  getLocations(): LocationWithGoogleTypes[] {
    return [
      {
        //id: '1',
        position: { lat: -17.3921, lng: -66.2183 },
        markerOptions: {
            title: 'Parcela 1 de Tiquipaya',
            label: 'L1',
            description: 'Cultivo de lechuga - 5 hectáreas',
            icon:""
        }
      },
      // Más ubicaciones...
    ];
  }

icon?: string | {
    url: string;
    scaledSize?: {
      width: number;
      height: number;
    };
  };

  getMarkerIcon(type: string): MapIcon {
  const baseUrl = 'assets/images/markers/';
  return {
    url: `${baseUrl}${type}-marker.png`,
    scaledSize: { width: 40, height: 40 } // Objeto normal en lugar de google.maps.Size
  };
}
}