import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from './base-layout/header/header.component';
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { BaseLayoutComponent } from "./base-layout/base-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, MainComponent, FooterComponent, RouterOutlet, BaseLayoutComponent]
})
export class AppComponent {
  isSidebarOpen = false;

  toggleSidebar(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }
}
