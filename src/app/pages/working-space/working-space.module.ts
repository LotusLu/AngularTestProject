import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { WorkingSpaceComponent } from './working-space.component';
import { routing } from './working-space.routing';
import { IconsService } from '../ui/components/icons/icons.service';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    WorkingSpaceComponent
  ],
  providers: [
    IconsService
  ]
})
export class WorkingSpaceModule {}
