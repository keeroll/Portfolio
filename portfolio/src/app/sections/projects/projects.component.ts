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
      id: 'simple-smart-house',
      title: 'Simple Smart House',
      description: 'IoT smart home system using Arduino with sensors and Blynk integration for home automation.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ff8800?text=Smart+House',
      tags: ['#iot', '#arduino', '#c++', '#smarthome']
    },
    {
      id: 'text-formatter',
      title: 'Text Formatter',
      description: 'C# WPF application for text formatting and manipulation with a modern desktop interface.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/8800ff?text=Text+Formatter',
      tags: ['#csharp', '#wpf', '#dotnet', '#desktop']
    },
    {
      id: 'atm-system',
      title: 'ATM System',
      description: 'Complete ATM management system built with C# WinForms and MS SQL Server for banking operations.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00aa44?text=ATM+System',
      tags: ['#csharp', '#winforms', '#mssql', '#crud']
    },
    {
      id: 'time-travel-unity',
      title: 'Time Travel Unity Game',
      description: 'Unity 5 game development project featuring time travel mechanics and innovative gameplay elements.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ff0088?text=Time+Travel',
      tags: ['#unity', '#csharp', '#gamedev', '#unity3d']
    },
    {
      id: 'little-rts-game',
      title: 'Little RTS Game',
      description: 'Real-time strategy game built in Unity 5 as a test task for Enixan, featuring strategic gameplay mechanics.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00ffaa?text=RTS+Game',
      tags: ['#unity', '#csharp', '#gamedev', '#strategy']
    },
    {
      id: 'barcode-scanner',
      title: 'Barcode Scanner',
      description: 'TypeScript-based barcode scanning application with modern web technologies for product identification.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/ffaa00?text=Barcode+Scanner',
      tags: ['#typescript', '#webdev', '#barcode', '#scanner']
    },
    {
      id: 'student-exams-db',
      title: 'Student Exams Score DB',
      description: 'Database management system for tracking student exam scores using C# WinForms and MS SQL Server.',
      image: 'https://via.placeholder.com/400x200/1a1a1a/aa00ff?text=Student+DB',
      tags: ['#csharp', '#winforms', '#mssql', '#database']
    }
  ];
}
