import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../../shared/services/scroll-service';
import { TestimonialsComponent } from './components/testimonials/testimonials';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, TestimonialsComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  constructor(private scrollService: ScrollService) {}

  goToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }

}
