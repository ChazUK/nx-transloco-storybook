import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, moduleMetadata } from '@storybook/angular';
import { StorybookTranslocoModule } from 'scoped-translations';

addDecorator(withKnobs);

addDecorator(
  moduleMetadata({
    imports: [StorybookTranslocoModule],
  })
);

configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
