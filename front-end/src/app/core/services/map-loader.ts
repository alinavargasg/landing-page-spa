import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  private mapReady = new BehaviorSubject<boolean>(false);

  loadingStatus$ = this.loading.asObservable();
  isMapReady$ = this.mapReady.asObservable();

  loadMap() {
    this.loading.next(true);
    // Lógica de carga...
    setTimeout(() => {
      this.loading.next(false);
      this.mapReady.next(true);
    }, 2000);
  }
}