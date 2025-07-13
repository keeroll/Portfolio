import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    constructor(
        private readonly translate: TranslateService,
        private readonly http: HttpClient
    ) {
        this.translate.addLangs([Language.EN, Language.UA, Language.HR]);
        this.translate.setDefaultLang(Language.EN);
        
        // Load saved language preference or use default
        const savedLang = this.getSavedLanguage();
        this.loadTranslations(savedLang);
    }

    public switchLanguage(lang: string): void {
        this.saveLanguage(lang);
        this.loadTranslations(lang);
    }

    public get currentLang(): string {
        return this.translate.currentLang;
    }

    public get onLangChange() {
        return this.translate.onLangChange;
    }

    private loadTranslations(lang: string): void {
        console.log("init localization loading")
        this.http.get(`/i18n/${lang}.json`).subscribe((translations) => {
            console.log("setting locale")
            
            this.translate.setTranslation(lang, translations, true);
            this.translate.use(lang);
        });
    }

    private getSavedLanguage(): string {
        return localStorage.getItem('preferred-language') || Language.EN;
    }

    private saveLanguage(lang: string): void {
        try {
            localStorage.setItem('preferred-language', lang);
        } catch {
            // Silently fail if localStorage is not available
            console.warn('Could not save language preference to localStorage');
        }
    }
}
