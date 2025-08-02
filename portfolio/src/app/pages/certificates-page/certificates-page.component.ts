import { Component, OnInit } from '@angular/core';
import { ContainerComponent, FadeInDirective } from '../../shared';
import { ScrollPositionService } from '../../services/scroll-position.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CertificatesCarouselComponent } from './certificates-carousel/certificates-carousel.component';

@Component({
  selector: 'app-certificates-page',
  imports: [ContainerComponent, CertificatesCarouselComponent, FadeInDirective, TranslatePipe],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.scss',
  standalone: true
})
export class CertificatesPageComponent implements OnInit {
  constructor(private scrollPositionService: ScrollPositionService) { }

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);
  }
} 