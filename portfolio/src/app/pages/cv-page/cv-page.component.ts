import { Component, OnInit, signal } from '@angular/core';
import { ScrollPositionService, CvPageService } from '../../services';
import { ContainerComponent, FadeInDirective } from '../../shared';
import { TranslatePipe } from '@ngx-translate/core';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { take } from 'rxjs';
import { Util } from '../../enums';

@Component({
  selector: 'app-cv-page',
  imports: [TranslatePipe, ContainerComponent, FadeInDirective, SafeUrlPipe],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.scss',
  standalone: true
})
export class CvPageComponent implements OnInit {
  public cvPath = signal<string | null>(null);
  public cvAvailable = signal(true);

  constructor(
    private scrollPositionService: ScrollPositionService,
    private cvPageService: CvPageService
  ) { }

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);
    this.cvPageService.getCvFilename()
      .pipe(take(Util.DEFAULT_TAKE))
      .subscribe({
        next: (data) => {
          this.cvPath.set(`cv/${data.filename}`);
          this.cvAvailable.set(true);
        },
        error: () => {
          this.cvAvailable.set(false);
        }
      });
  }

  public onPdfError(): void {
    this.cvAvailable.set(false);
  }
} 