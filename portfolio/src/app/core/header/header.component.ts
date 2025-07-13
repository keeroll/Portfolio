import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Language } from '../../enums/language.enum';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  currentLang: string = Language.EN;
  private langChangeSub?: Subscription;

  languages = [
    { code: Language.EN, label: 'EN' },
    { code: Language.UA, label: 'UA' },
    { code: Language.HR, label: 'HR' }
  ];

  constructor(public translationService: TranslationService) {
    this.currentLang = this.translationService.currentLang;
    this.langChangeSub = this.translationService.onLangChange.subscribe(() => {
      this.currentLang = this.translationService.currentLang;
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
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
