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
        this.loadTranslations(Language.EN);
    }

    public switchLanguage(lang: string): void {
        this.loadTranslations(lang);
    }

    public get currentLang(): string {
        return this.translate.currentLang;
    }

    private loadTranslations(lang: string): void {
        console.log("init localization loading")
        this.http.get(`/i18n/${lang}.json`).subscribe((translations) => {
            console.log("setting locale")
            
            this.translate.setTranslation(lang, translations, true);
            this.translate.use(lang);
        });
    }
}
