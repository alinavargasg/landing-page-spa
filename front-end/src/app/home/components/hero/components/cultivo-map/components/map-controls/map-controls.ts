import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-map-controls',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './map-controls.html',
  styleUrls: ['./map-controls.scss']
})
export class MapControlsComponent {
  @Output() zoomIn = new EventEmitter<void>();
  @Output() zoomOut = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  // Métodos que manejan los clicks
  onZoomInClick() {
    this.zoomIn.emit();
  }

  onZoomOutClick() {
    this.zoomOut.emit();
  }

  onResetClick() {
    this.reset.emit();
  }
}