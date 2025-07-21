import { Component, computed, effect, signal } from '@angular/core';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { CertificatesService } from '../../services/certificates.service';

@Component({
  selector: 'app-certificates-carousel',
  imports: [SafeUrlPipe, TranslatePipe],
  templateUrl: './certificates-carousel.component.html',
  styleUrl: './certificates-carousel.component.scss',
  standalone: true
})
export class CertificatesCarouselComponent {
  public certificates = signal<string[]>([]);
  public currentIndex = signal(0);

  public currentCertificate = computed(() => {
    const certs = this.certificates();
    const idx = this.currentIndex();
    return certs.length > 0 ? certs[idx] : '';
  });

  public pdfUrl = computed(() => `/certificates/${this.currentCertificate()}`);

  public readonly loadCertificatesEffect = effect(() => {
    this.certificatesService.getCertificates().subscribe((filenames: string[]) => {
      this.certificates.set(filenames);
      this.currentIndex.set(0);
    });
  });

  constructor(private certificatesService: CertificatesService) {}

  public next(): void {
    const certs = this.certificates();
    this.currentIndex.set((this.currentIndex() + 1) % certs.length);
  }

  public previous(): void {
    const certs = this.certificates();
    this.currentIndex.set(this.currentIndex() === 0 ? certs.length - 1 : this.currentIndex() - 1);
  }

  public goToSlide(index: number): void {
    this.currentIndex.set(index);
  }
} 