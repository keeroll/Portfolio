import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projectsUrl = '/projects/en.json';

  constructor(private http: HttpClient) {}

  /**
   * Fetch all projects from the JSON file
   */
  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  /**
   * Fetch a specific project by ID
   */
  public getProjectById(id: string): Observable<Project | undefined> {
    return new Observable(observer => {
      this.getProjects().subscribe({
        next: (projects) => {
          const project = projects.find(p => p.id === id);
          observer.next(project);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }
} 