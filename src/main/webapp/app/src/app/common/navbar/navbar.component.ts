import { Component } from '@angular/core';
import { environment } from 'src/environments/environments'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imagePaths = environment.imagePaths;
}
