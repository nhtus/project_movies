import { Component } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { environment } from 'src/environments/environments'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    NavbarComponent
  ]
})
export class HomeComponent {
  imagePaths = environment.imagePaths;
}
