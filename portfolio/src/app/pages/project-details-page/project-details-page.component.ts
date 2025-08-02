import { Component, OnInit, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { Project } from '../../models';
import { ContainerComponent, TagComponent, FadeInDirective, SafeUrlPipe } from '../../shared';
import { ProjectsService, TranslationService } from '../../services';
import { TranslatePipe } from '@ngx-translate/core';
import { take } from 'rxjs';
import { Util } from '../../enums';

@Component({
  selector: 'app-project-details-page',
  imports: [CommonModule, ContainerComponent, TagComponent, SafeUrlPipe, TranslatePipe, FadeInDirective],
  templateUrl: './project-details-page.component.html',
  styleUrl: './project-details-page.component.scss',
  standalone: true
})
export class ProjectDetailsPageComponent implements OnInit {
  private currentProjectId = signal<string | null>(null);

  public projectSignal = signal<Project | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectsService: ProjectsService,
    private translationService: TranslationService
  ) {
    effect(() => {
      const id = this.currentProjectId();
      if (id) {
        this.loadProject(id);
      }
    });
  }

  public get hasProjectLinks(): boolean {
    const p = this.projectSignal();
    return !!p?.sourceUrl || !!p?.liveUrl || !!p?.downloadUrl;
  }

  public ngOnInit(): void {
    this.route.params
      .pipe(take(Util.DEFAULT_TAKE))
      .subscribe(params => {
        this.currentProjectId.set(params['id']);
      });
  }

  public goBack(): void {
    this.location.back();
  }

  private loadProject(projectId: string): void {
    this.projectsService.getProjectById(projectId)
      .pipe(take(Util.DEFAULT_TAKE))
      .subscribe({
        next: (project) => {
          if (project) {
            this.projectSignal.set(project);
            window.scrollTo(0, 0);
          } else {
            this.router.navigate(['/projects']);
          }
        },
        error: (error) => {
          console.error('Error loading project:', error);
          this.router.navigate(['/projects']);
        }
      });
  }
}
