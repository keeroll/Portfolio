import { Component, OnInit } from '@angular/core';
import { AboutComponent, ProjectsComponent } from '../../sections';

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent implements OnInit {
  public ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
