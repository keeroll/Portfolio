import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent, TagComponent, FadeInDirective } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ContainerComponent, TagComponent, FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true
})
export class AboutComponent { }
