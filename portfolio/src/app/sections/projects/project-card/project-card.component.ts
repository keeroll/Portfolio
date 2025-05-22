import { Component, Input } from '@angular/core';
import { Project } from '../../../models';
import { TagComponent } from '../../../shared';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [TagComponent, NgForOf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: true
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
