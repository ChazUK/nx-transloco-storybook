import { Component } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

@Component({
  selector: 'nx-transloco-storybook-card',
  templateUrl: './card.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'card',
        loader: scopeLoader((lang, root) => import(`./${root}/${lang}.json`)),
      },
    },
  ],
})
export class CardComponent {}
