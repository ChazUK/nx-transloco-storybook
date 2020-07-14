import { Component } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

@Component({
  selector: 'nx-transloco-storybook-button',
  template: `
    <ng-template transloco let-t>
      <button>Button Text: {{ t('button.title') }}</button>
    </ng-template>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'button',
        loader: scopeLoader((lang, root) => import(`./${root}/${lang}.json`)),
      },
    },
  ],
})
export class ButtonComponent {}
