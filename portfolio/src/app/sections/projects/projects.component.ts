import { Component } from '@angular/core';
import { Project } from '../../models';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContainerComponent } from '../../shared';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ContainerComponent, ProjectCardComponent, NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      id: 'portfolio-app',
      title: 'Portfolio App',
      description: 'A modern Angular portfolio with retrowave styling, internationalization, and responsive design.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00ffff?text=Portfolio+App',
      tags: ['#angular', '#typescript', '#scss', '#responsive']
    },
    {
      id: 'clickoin',
      title: 'Clickoin',
      description: 'A clicker game with coin skins, drops, and Steam integration. Built with Unity and C#.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ff0080?text=Clickoin',
      tags: ['#unity', '#csharp', '#steam', '#indie']
    },
    {
      id: 'leaf-me-be',
      title: 'Leaf Me Be',
      description: 'A meditative fall simulator with light story elements and beautiful particle effects.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00ffcc?text=Leaf+Me+Be',
      tags: ['#unity', '#narrative', '#casual', '#particles']
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by machine learning with natural language processing capabilities.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/8000ff?text=AI+Chatbot',
      tags: ['#python', '#ml', '#nlp', '#ai']
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ffff00?text=E-commerce',
      tags: ['#react', '#nodejs', '#mongodb', '#stripe']
    },
    {
      id: 'crypto-tracker',
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking app with price alerts, portfolio management, and market analysis.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00ff00?text=Crypto+Tracker',
      tags: ['#vue', '#api', '#websockets', '#finance']
    }
  ];
}
