// scroll.service.ts
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToElement(elementId: string, offset = 65): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}