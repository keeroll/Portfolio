import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContainerComponent } from '../../shared';
import { NgForOf } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ScrollPositionService } from '../../services/scroll-position.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, ContainerComponent, ProjectCardComponent, NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];
  private langChangeSub?: Subscription;

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private scrollPositionService: ScrollPositionService,
    private translationService: TranslationService
  ) {}

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
  
  private loadProjects(): void {
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }
}
