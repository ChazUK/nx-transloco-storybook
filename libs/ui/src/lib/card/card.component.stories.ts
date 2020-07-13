import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  decorators: [
    moduleMetadata({
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
    }),
  ],
};

export const primary = () => ({
  component: CardComponent,
  props: {},
});
