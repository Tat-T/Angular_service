import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { ButtonClikComponent } from './button-clik/button-clik.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, PaintingComponent,ButtonClikComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'painting-app';
}
