import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../services/scroll-service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, RouterLink, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;
  constructor(private scrollService: ScrollService) {}

  goToTop() {
    this.scrollService.scrollToTop();
  }

}
