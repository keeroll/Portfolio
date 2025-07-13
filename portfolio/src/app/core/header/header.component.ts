import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgIf, NgFor, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  languages = [
    { code: Language.EN, label: 'EN' },
    { code: Language.UA, label: 'UA' }
  ];

  constructor(public translationService: TranslationService) {}

  get currentLang(): string {
    return this.translationService.currentLang;
  }

  switchLanguage(lang: string): void {
    this.translationService.switchLanguage(lang);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
