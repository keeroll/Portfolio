import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  standalone: true,
})
export class TagComponent {
  @Input() public label!: string;
}
