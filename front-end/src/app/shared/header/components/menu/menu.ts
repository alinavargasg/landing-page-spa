import { Component, ViewChild, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-menu',
  imports: [MatMenuTrigger, MatIconModule, MatMenuModule,  MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  private hoverTimeout: any;
  private isInMenu = false;

  handleMouseEnter() {
    this.cancelClose();
    this.hoverTimeout = setTimeout(() => {
      if (!this.isInMenu) {
        this.menuTrigger.openMenu();
      }
    }, 200);
  }

  @HostListener('document:mousemove', ['$event'])
  globalMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.hover-menu') && !target.closest('button[mat-button]')) {
      this.menuTrigger.closeMenu();
    }
  }
  handleMenuLeave() {
    this.isInMenu = false;
    this.hoverTimeout = setTimeout(() => {
      if (!this.isInMenu) {
        this.menuTrigger.closeMenu();
      }
    }, 300);
  }

  handleItemHover() {
    this.isInMenu = true;
    this.cancelClose();
  }

  private cancelClose() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }
}
