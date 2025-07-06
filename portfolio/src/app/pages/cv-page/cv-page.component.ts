import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../shared';

@Component({
  selector: 'app-cv-page',
  imports: [ContainerComponent],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.scss',
  standalone: true
})
export class CvPageComponent implements OnInit {
  // Future CV data will go here
  
  ngOnInit(): void {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }
} 