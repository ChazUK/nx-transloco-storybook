import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [ButtonComponent, CardComponent],
  exports: [ButtonComponent, CardComponent],
})
export class UiModule {}
