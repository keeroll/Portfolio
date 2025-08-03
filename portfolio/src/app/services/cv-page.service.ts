import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvPageService {
  private readonly cvJsonUrl = 'cv/cv.json';

  constructor(private http: HttpClient) { }

  public getCvFilename(): Observable<{ filename: string }> {
    return this.http.get<{ filename: string }>(this.cvJsonUrl);
  }
} 