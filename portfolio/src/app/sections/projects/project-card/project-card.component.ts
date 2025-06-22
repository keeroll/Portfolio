import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() cardClick = new EventEmitter<Project>();

  onCardClick(): void {
    this.cardClick.emit(this.project);
  }
}
