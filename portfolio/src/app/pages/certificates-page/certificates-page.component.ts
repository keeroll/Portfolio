import { Component, OnInit } from '@angular/core';
import { ContainerComponent, CertificatesCarouselComponent } from '../../shared';

@Component({
  selector: 'app-certificates-page',
  imports: [ContainerComponent, CertificatesCarouselComponent],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.scss',
  standalone: true
})
export class CertificatesPageComponent implements OnInit {
  // Future certificates data will go here
  
  ngOnInit(): void {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }
} 