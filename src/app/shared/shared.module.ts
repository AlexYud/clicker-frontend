import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdleComponent } from './idle/idle.component';
import { IonicModule } from '@ionic/angular';
import { ClickComponent } from './click/click.component';



@NgModule({
  declarations: [
    IdleComponent,
    ClickComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    IdleComponent,
    ClickComponent,
  ]
})
export class SharedModule { }
