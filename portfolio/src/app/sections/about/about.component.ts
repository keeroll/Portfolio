import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent, TagComponent } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ContainerComponent, TagComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true
})
export class AboutComponent {

}
