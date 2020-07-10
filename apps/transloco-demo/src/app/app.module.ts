import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { UiModule } from '@nx-transloco-storybook/ui';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslocoModule, UiModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        reRenderOnLangChange: true,
        availableLangs: ['en', 'de'],
        defaultLang: 'en',
        prodMode: environment.production,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
