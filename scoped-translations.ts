import { NgModule } from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';

export const availableLangs = ['en', 'de'];

export const scopeLoader = (importer, root = 'i18n') => {
  return availableLangs.reduce((acc, lang) => {
    acc[lang] = () => importer(lang, root);
    return acc;
  }, {});
};

@NgModule({
  imports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        reRenderOnLangChange: true,
        availableLangs: ['en', 'de'],
        defaultLang: 'en',
        prodMode: false,
      }),
    },
  ],
  exports: [TranslocoModule],
})
export class StorybookTranslocoModule {}
