import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
// Material Design Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../../../../shared/services/scroll-service';

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO',
      company: 'TechStart',
      message: 'Estoy convencida de que proyectos como estos, permitirán optimizar la producción agrícola.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5
    },
    {
      id: 2,
      name: 'Don Ernesto',
      position: 'Productor Local',
      company: 'Tiquipaya - Cochabamba',
      message: 'Antes regábamos a ojo, ahora el sistema nos avisa cuándo y cuánto regar. Las lechugas crecen más sanas y usamos menos agua.',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Agricultora Comunitaria',
      company: 'Tiquipaya - Cochabamba',
      message: 'Gracias a los sensores, ya no tenemos que preocuparnos por el exceso o falta de riego. La tecnología nos ha facilitado el trabajo en el campo.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 4
    },
    {
      id: 4,
      name: 'Luis Fernández',
      position: 'Joven Agricultor en Formación',
      company: 'Tiquipaya - Cochabamba',
      message: 'Nunca pensé que trabajar con tecnología en la agricultura sería tan fácil. Hoy puedo controlar el riego desde mi celular.',
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5
    },
    {
      id: 5,
      name: 'Marcelina',
      position: 'Agricultora de la Comunidad',
      company: 'Colcapirhua - Cochabamba',
      message: 'El sistema nos avisa cuándo regar, pero también cuándo el suelo está muy seco o saturado. Así cuidamos la tierra y evitamos enfermedades en las plantas.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5
    },
    {
      id: 6,
      name: 'Don Hilario',
      position: 'Productor Local de Lechuga',
      company: 'Colcapirhua - Cochabamba',
      message: 'Antes teníamos muchas plagas y no sabíamos por qué. Ahora el sistema nos ayuda a detectarlas temprano y aplicar solo lo necesario para controlarlas.',
      avatar: 'https://i.pravatar.cc/150?img=6',
      rating: 4
    }
  ];

currentTestimonialIndex = 0;
  private autoSlideInterval: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private scrollService: ScrollService) {}

  goToTop() {
    this.scrollService.scrollToTop();
  }
 
  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide();
    
    if (isPlatformBrowser(this.platformId)) {
      this.autoSlideInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    }
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  nextTestimonial() {
    if (this.testimonials.length === 0) return;
    
    this.currentTestimonialIndex = 
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    if (this.testimonials.length === 0) return;
    
    this.currentTestimonialIndex = 
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    if (index >= 0 && index < this.testimonials.length) {
      this.currentTestimonialIndex = index;
    }
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}