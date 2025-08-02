import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services';
import { Language } from '../../enums';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  private currentLangSignal = signal<string>('');

  public isMobileMenuOpen = false;
  public languages = [
    { code: Language.EN, label: 'EN' },
    { code: Language.UA, label: 'UA' },
    { code: Language.HR, label: 'HR' }
  ];

  constructor(private readonly translationService: TranslationService) {
    this.currentLangSignal.set(this.translationService.currentLang());

    effect(() => {
      this.currentLangSignal.set(this.translationService.currentLang());
    });
  }

  public switchLanguage(lang: string): void {
    this.translationService.switchLanguage(lang);
  }

  public isLangActive(lang: string): boolean {
    return this.currentLangSignal() === lang;
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}