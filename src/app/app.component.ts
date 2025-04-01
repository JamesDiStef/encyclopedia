import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'encyclopedia';
  mobileNavOpen = false;
  faBars = faBars;

  toggleMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
