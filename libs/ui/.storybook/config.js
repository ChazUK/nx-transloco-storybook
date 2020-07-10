// import {
//   translocoConfig,
//   TranslocoModule,
//   TRANSLOCO_CONFIG,
// } from '@ngneat/transloco';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, moduleMetadata } from '@storybook/angular';

addDecorator(
  moduleMetadata({
    //   imports: [TranslocoModule],
    //   providers: [
    //     {
    //       provide: TRANSLOCO_CONFIG,
    //       useValue: translocoConfig({
    //         reRenderOnLangChange: true,
    //         availableLangs: ['en', 'de'],
    //         defaultLang: 'en',
    //         prodMode: false,
    //       }),
    //     },
    //   ],
  })
);

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
