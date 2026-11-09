import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbarcomponent.html',
  styleUrls: ['./navbarcomponent.css'],
  standalone: false
})
export class NavbarComponent {
  isDropdownOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu(event: Event): void {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click')
  closeDropdown(): void {
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }
}
