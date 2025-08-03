import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private certificatesUrl = 'certificates/certificates.json';

  constructor(private http: HttpClient) { }

  public getCertificates(): Observable<string[]> {
    return this.http.get<string[]>(this.certificatesUrl);
  }
} 