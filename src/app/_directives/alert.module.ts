import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AlertComponent } from '.';
import { AlertService } from '../service/alert.service';
import { AppTranslationModule } from '../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../theme/nga.module';

@NgModule({
  imports: [CommonModule,
            AppTranslationModule,
            ReactiveFormsModule,
            FormsModule,
            NgaModule,],
  exports: [AlertComponent],
  declarations: [AlertComponent],
  providers: [AlertService],
})
export class AlertModule {}
