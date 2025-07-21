import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContainerComponent } from '../../shared';

import { ProjectsService } from '../../services/projects.service';
import { ScrollPositionService } from '../../services/scroll-position.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription, take } from 'rxjs';
import { FadeInDirective } from '../../shared';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, ContainerComponent, ProjectCardComponent, FadeInDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent implements OnInit {
  private readonly defaultTake: number = 1;
  public projects: Project[] = [];
  private langChangeSub?: Subscription;

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private scrollPositionService: ScrollPositionService,
    private translationService: TranslationService
  ) {}

  public get hasProjects(): boolean {
    return !!this.projects && this.projects.length > 0;
  }

  public ngOnInit(): void {
    this.loadProjects();
    // Subscribe to language changes
    this.langChangeSub = this.translationService.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  public onProjectClick(project: Project): void {
    this.scrollPositionService.saveCurrentPosition();
    this.router.navigate(['/projects', project.id]);
  }

  public trackByProject(index: number, project: Project): string {
    return project.id;
  }
  
  private loadProjects(): void {
    this.projectsService.getProjects()
    .pipe(take(this.defaultTake))
    .subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }
}
