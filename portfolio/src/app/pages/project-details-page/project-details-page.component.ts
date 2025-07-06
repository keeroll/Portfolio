import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Project } from '../../models';
import { ContainerComponent, TagComponent } from '../../shared';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details-page',
  imports: [CommonModule, ContainerComponent, TagComponent, SafeUrlPipe, NgIf],
  templateUrl: './project-details-page.component.html',
  styleUrl: './project-details-page.component.scss',
  standalone: true
})
export class ProjectDetailsPageComponent implements OnInit {
  project: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectsService: ProjectsService
  ) {}

  public get hasProjectLinks(): boolean {
    return !!this.project?.sourceUrl || !!this.project?.liveUrl || !!this.project?.downloadUrl;
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.loadProject(projectId);
    });
  }

  public goBack(): void {
    this.location.back();
  }

  private loadProject(projectId: string): void {
    this.projectsService.getProjectById(projectId).subscribe({
      next: (project) => {
        if (project) {
          this.project = project;
          // Scroll to top when project loads
          window.scrollTo(0, 0);
        } else {
          // Redirect to projects page if project not found
          this.router.navigate(['/projects']);
        }
      },
      error: (error) => {
        console.error('Error loading project:', error);
        // Redirect to projects page on error
        this.router.navigate(['/projects']);
      }
    });
  }
}
