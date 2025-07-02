import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapLoaderService } from '../../../../../core/services/map-loader';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MapControlsComponent } from './components/map-controls/map-controls';
import { MatSpinner } from '@angular/material/progress-spinner';


@Component({
  standalone: true,
  selector: 'app-cultivo-map',
  imports: [
    CommonModule,
    GoogleMapsModule,
    MapControlsComponent,
    GoogleMap,
    MatSpinner
  ],
  templateUrl: './cultivo-map.html',
  styleUrl: './cultivo-map.scss'
})
export class CultivoMapComponent implements OnInit {
  // Propiedad para el servicio
  constructor(public mapLoaderService: MapLoaderService) {}

  // Configuración del mapa
  zoom = 14;
  center: google.maps.LatLngLiteral = { lat: -17.3895, lng: -66.2168 };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    disableDefaultUI: true
  };

  // Manejo de zoom
  handleZoomIn() {
    this.zoom = Math.min(this.zoom + 1, 20);
  }

  handleZoomOut() {
    this.zoom = Math.max(this.zoom - 1, 8);
  }

  handleReset() {
    this.zoom = 14;
    this.center = { lat: -17.3895, lng: -66.2168 };
  }

  ngOnInit() {
    this.mapLoaderService.loadMap();
  }

  get isLoading$() {
    return this.mapLoaderService.loadingStatus$;
  }
}