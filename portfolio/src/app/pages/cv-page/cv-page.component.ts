import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../shared';
import { ScrollPositionService } from '../../services/scroll-position.service';

@Component({
  selector: 'app-cv-page',
  imports: [ContainerComponent],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.scss',
  standalone: true
})
export class CvPageComponent implements OnInit {
  constructor(private scrollPositionService: ScrollPositionService) {}

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);
  }
} 