import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent, FooterComponent } from './core';
import { ScrollToTopComponent } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  // workaround for GitHub pages 404 routing
  public ngOnInit(): void {
    const storedRedirect = sessionStorage.getItem('redirectAfter404');
    if (storedRedirect) {
      sessionStorage.removeItem('redirectAfter404');
      this.router.navigateByUrl(storedRedirect);
    }
  }
}