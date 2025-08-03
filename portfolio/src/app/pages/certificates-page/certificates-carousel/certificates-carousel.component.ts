import { Component, computed, OnInit, signal } from '@angular/core';
import { SafeUrlPipe } from '../../../shared';
import { TranslatePipe } from '@ngx-translate/core';
import { CertificatesService } from '../../../services';
import { take, finalize } from 'rxjs';
import { Util } from '../../../enums';

@Component({
  selector: 'app-certificates-carousel',
  imports: [SafeUrlPipe, TranslatePipe],
  templateUrl: './certificates-carousel.component.html',
  styleUrl: './certificates-carousel.component.scss',
  standalone: true
})
export class CertificatesCarouselComponent implements OnInit {
  public certificates = signal<string[]>([]);
  public currentIndex = signal(0);
  public loading = signal(true);

  public currentCertificate = computed(() => {
    const certs = this.certificates();
    const idx = this.currentIndex();
    return certs.length > 0 ? certs[idx] : '';
  });

  public hasCertificates = computed(() => {
    const certificatesAvailable = this.certificates().length > 0;
    return certificatesAvailable && !this.loading();
  });

  public pdfUrl = computed(() => `certificates/${this.currentCertificate()}`);

  constructor(private certificatesService: CertificatesService) { }

  public ngOnInit(): void {
    this.loading.set(true);
    this.certificatesService.getCertificates()
      .pipe(
        take(Util.DEFAULT_TAKE),
        finalize(() => this.loading.set(false))
      )
      .subscribe((filenames: string[]) => {
        this.certificates.set(filenames);
        this.currentIndex.set(0);
      });
  }

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