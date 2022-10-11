import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { BasicsComponent } from './pages/basics/basics.component';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    OrdenComponent,
    BasicsComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    OrdenComponent,
    BasicsComponent,
  ],
})
export class SellsModule {}
