import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContainerComponent } from '../../shared';
import { ProjectsService } from '../../services/projects.service';
import { ScrollPositionService } from '../../services/scroll-position.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { take, finalize } from 'rxjs';
import { FadeInDirective } from '../../shared';
import { Util } from '../../enums';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, ContainerComponent, ProjectCardComponent, FadeInDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent implements OnInit {
  public projects = signal<Project[]>([]);
  public loading = signal(true);

  public hasProjects = computed(() => {
    const projects = this.projects();
    return !!projects && projects.length > 0;
  });

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private scrollPositionService: ScrollPositionService,
    private translationService: TranslationService
  ) {
    effect(() => {
      const currentLang = this.translationService.currentLang();
      if (currentLang) {
        this.loadProjects();
      }
    });
  }

  public ngOnInit(): void {
    this.loadProjects();
  }

  public onProjectClick(project: Project): void {
    this.scrollPositionService.saveCurrentPosition();
    this.router.navigate(['/projects', project.id]);
  }

  public trackByProject(index: number, project: Project): string {
    return project.id;
  }

  private loadProjects(): void {
    this.loading.set(true);
    this.projectsService.getProjects()
      .pipe(
        take(Util.DEFAULT_TAKE),
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (projects) => {
          this.projects.set(projects);
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.projects.set([]);
        }
      });
  }
}
