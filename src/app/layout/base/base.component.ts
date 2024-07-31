import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, CommonModule, RouterOutlet],
})
export class BaseComponent {
  sidebarOpen = false;

  onSidebarToggle(isOpen: boolean) {
    this.sidebarOpen = isOpen;
  }
}
