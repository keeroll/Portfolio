import { Component, computed, OnInit, signal } from '@angular/core';
import { FadeInDirective, SafeUrlPipe } from '../../shared';
import { ScrollPositionService } from '../../services/scroll-position.service';
import { TranslatePipe } from '@ngx-translate/core';
import { take, finalize } from 'rxjs';
import { Util } from '../../enums';
import { CertificatesService } from '../../services';

@Component({
  selector: 'app-certificates-page',
  imports: [FadeInDirective, SafeUrlPipe, TranslatePipe],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.scss',
  standalone: true
})
export class CertificatesPageComponent implements OnInit {
  public certificates = signal<string[]>([]);
  public currentIndex = signal(0);
  public loading = signal(true);

  public currentCertificate = computed(() => {
    const certs = this.certificates();
    const idx = this.currentIndex();
    return certs.length > 0 ? certs[idx] : '';
  });

  public pdfUrl = computed(() => `certificates/${this.currentCertificate()}`);

  constructor(private scrollPositionService: ScrollPositionService,
    private certificatesService: CertificatesService) { }

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);

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