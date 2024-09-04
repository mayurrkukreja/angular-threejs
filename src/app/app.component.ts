import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreejsViewerModule } from './threejs-viewer/threejs.module'; // Import the module

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreejsViewerModule], // Import the module
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-threejs-app';
}