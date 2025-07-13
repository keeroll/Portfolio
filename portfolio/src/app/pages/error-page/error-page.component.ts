import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-error-page',
  imports: [TranslatePipe],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
  standalone: true
})
export class ErrorPageComponent {

}
