import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Project } from '../../models';
import { ContainerComponent, TagComponent } from '../../shared';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-project-details-page',
  imports: [CommonModule, ContainerComponent, TagComponent, SafeUrlPipe],
  templateUrl: './project-details-page.component.html',
  styleUrl: './project-details-page.component.scss',
  standalone: true
})
export class ProjectDetailsPageComponent implements OnInit {
  project: Project | null = null;

  // Sample project data - in a real app, this would come from a service
  private projects: Project[] = [
    {
      id: 'portfolio-app',
      title: 'Portfolio App',
      description: 'A modern Angular portfolio with retrowave styling, internationalization, and responsive design.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00ffff?text=Portfolio+App',
      tags: ['#angular', '#typescript', '#scss', '#responsive'],
      youtubeUrl: '',
      sourceUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
      downloadUrl: '',
      detailedDescription: [
        {
          title: 'Overview',
          content: 'This portfolio showcases my skills and projects with a unique retrowave aesthetic inspired by pattybuilds.dev. Built with Angular 19, it features modern web technologies and responsive design principles.'
        },
        {
          title: 'Key Features',
          content: 'Internationalization support for multiple languages, responsive design that works on all devices, smooth animations and transitions, and a modular component architecture for maintainability.'
        },
        {
          title: 'Technical Stack',
          content: 'Angular 19, TypeScript, SCSS, Angular Router, and modern CSS features like CSS Grid and Flexbox for layout. The project follows Angular best practices and modern development workflows.'
        }
      ]
    },
    {
      id: 'clickoin',
      title: 'Clickoin',
      description: 'A clicker game with coin skins, drops, and Steam integration. Built with Unity and C#.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ff0080?text=Clickoin',
      tags: ['#unity', '#csharp', '#steam', '#indie'],
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      sourceUrl: '',
      liveUrl: 'https://store.steampowered.com/app/yourgame',
      downloadUrl: '',
      detailedDescription: [
        {
          title: 'Game Overview',
          content: 'Clickoin is an addictive clicker game where players collect coins, unlock skins, and discover rare drops. The game features Steam integration for achievements and cloud saves.'
        },
        {
          title: 'Development Process',
          content: 'Developed over 6 months using Unity 2022.3 LTS, the game went through multiple iterations based on player feedback. Steam integration was implemented using the Steamworks.NET library.'
        }
      ]
    },
    {
      id: 'leaf-me-be',
      title: 'Leaf Me Be',
      description: 'A meditative fall simulator with light story elements and beautiful particle effects.',
      image: '',
      tags: ['#unity', '#narrative', '#casual', '#particles'],
      youtubeUrl: '',
      sourceUrl: '',
      liveUrl: '',
      downloadUrl: 'https://itch.io/yourgame',
      detailedDescription: [
        {
          title: 'Concept',
          content: 'Leaf Me Be is a peaceful meditation game where players experience the beauty of autumn through falling leaves. The game focuses on relaxation and mindfulness.'
        },
        {
          title: 'Technical Implementation',
          content: 'Built with Unity\'s particle system for realistic leaf physics, custom shaders for atmospheric effects, and ambient sound design for immersive experience.'
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.project = this.projects.find(p => p.id === projectId) || null;
      
      if (!this.project) {
        // Redirect to projects page if project not found
        this.router.navigate(['/projects']);
      } else {
        // Scroll to top when project loads
        window.scrollTo(0, 0);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
