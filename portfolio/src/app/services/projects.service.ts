import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { Project } from '../models';
import { TranslationService } from './translation.service';
import { Language, Util } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Remove the readonly projectsUrl, use a getter instead

  constructor(private http: HttpClient, private translationService: TranslationService) {}

  /**
   * Get the correct projects file path based on the current language
   */
  private get projectsUrl(): string {
    const lang = this.translationService.currentLangValue || Language.EN;
    return `/projects/${lang}.json`;
  }

  /**
   * Fetch all projects from the JSON file for the current language
   */
  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  /**
   * Fetch a specific project by ID
   */
  public getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      take(Util.DEFAULT_TAKE),
      map(projects => projects.find(p => p.id === id))
    );
  }
} 