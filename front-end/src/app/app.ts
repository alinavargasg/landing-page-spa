import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from "./shared/footer/footer";
import { ScrollService } from './shared/services/scroll-service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Soluciones Inteligentes';
  constructor(private scrollService: ScrollService) {
  }
}
