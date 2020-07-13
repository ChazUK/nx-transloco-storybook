import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
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
  component: ButtonComponent,
  props: {},
});
