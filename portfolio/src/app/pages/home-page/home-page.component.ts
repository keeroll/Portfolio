import { Component, OnInit } from '@angular/core';
import { AboutComponent, ProjectsComponent } from '../../sections';
import { ScrollPositionService } from '../../services/scroll-position.service';

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent implements OnInit {
  constructor(private scrollPositionService: ScrollPositionService) { }

  public ngOnInit(): void {
    this.scrollPositionService.restoreScrollPosition();
  }
}
