import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true
})
export class AboutComponent {

}
