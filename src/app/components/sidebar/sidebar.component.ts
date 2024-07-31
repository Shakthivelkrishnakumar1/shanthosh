import { Component, EventEmitter, Output } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class SidebarComponent {
  faBars = faBars;
  faTimes = faTimes;
  isOpen = false;

  @Output() toggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen); // Emit the current state
  }
}
