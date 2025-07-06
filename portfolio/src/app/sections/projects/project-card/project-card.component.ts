import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../models';
import { TagComponent } from '../../../shared';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [TagComponent, NgForOf, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: true
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() cardClick = new EventEmitter<Project>();

  public onCardClick(): void {
    this.cardClick.emit(this.project);
  }
}
