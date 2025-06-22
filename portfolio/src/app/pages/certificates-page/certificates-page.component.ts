import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared';

@Component({
  selector: 'app-certificates-page',
  imports: [ContainerComponent],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.scss',
  standalone: true
})
export class CertificatesPageComponent {
  // Future certificates data will go here
} 