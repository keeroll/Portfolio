import { Component } from '@angular/core';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { TranslatePipe } from '@ngx-translate/core';

interface Certificate {
  id: string;
  name: string;
  filename: string;
  description: string;
}

@Component({
  selector: 'app-certificates-carousel',
  imports: [SafeUrlPipe, TranslatePipe],
  templateUrl: './certificates-carousel.component.html',
  styleUrl: './certificates-carousel.component.scss',
  standalone: true
})
export class CertificatesCarouselComponent {
  public certificates: Certificate[] = [
    {
      id: 'ai-engineering-1',
      name: 'AI Engineering Essentials',
      filename: 'CertificateOfCompletion_AI_Engineering_Essentials_Navigating_the.pdf',
      description: 'AI Engineering Essentials - Navigating the Fundamentals'
    },
    {
      id: 'ai-engineering-2',
      name: 'AI Engineering Essentials 2',
      filename: 'CertificateOfCompletion_AI_Engineering_Essentials_Navigating_the2.pdf',
      description: 'AI Engineering Essentials - Advanced Navigation'
    }
  ];

  public currentIndex = 0;

  public get currentCertificate(): Certificate {
    return this.certificates[this.currentIndex];
  }

  public get pdfUrl(): string {
    return `/certificates/${this.currentCertificate.filename}`;
  }

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
  }

  public previous(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.certificates.length - 1 
      : this.currentIndex - 1;
  }

  public goToSlide(index: number): void {
    this.currentIndex = index;
  }
} 