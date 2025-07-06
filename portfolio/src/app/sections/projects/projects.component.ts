import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContainerComponent } from '../../shared';
import { NgForOf } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [ContainerComponent, ProjectCardComponent, NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  public ngOnInit(): void {
    this.loadProjects();
  }

  public onProjectClick(project: Project): void {
    this.router.navigate(['/projects', project.id]);
  }
  
  private loadProjects(): void {
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        // You might want to show an error message to the user here
      }
    });
  }
}
