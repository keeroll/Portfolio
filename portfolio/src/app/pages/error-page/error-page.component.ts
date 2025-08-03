import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent, FadeInDirective } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  imports: [TranslatePipe, ContainerComponent, FadeInDirective],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
  standalone: true
})
export class ErrorPageComponent {
  constructor(private router: Router) { }

  public goHome(): void {
    this.router.navigate(['/']);
  }
}
