import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'nx-transloco-storybook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transloco-demo';

  constructor(private translocoService: TranslocoService) {}

  change(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
