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
      id: 'clickoin',
      title: 'Clickoin',
      description: 'A clicker game with coin skins, drops, and Steam integration.',
      image: '/assets/projects/clickoin.png',
      tags: ['#unity', '#steam', '#indie']
    },
    {
      id: 'leaf-me-be',
      title: 'Leaf Me Be',
      description: 'A meditative fall simulator with light story elements.',
      image: '/assets/projects/leaf.png',
      tags: ['#unity', '#narrative', '#casual']
    }
    // more to come
  ];

}
