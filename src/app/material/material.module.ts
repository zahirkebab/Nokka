import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'

import { NgImageSliderModule } from 'ng-image-slider'

const MaterialComponents=[
  MatSlideToggleModule,
  MatToolbarModule,
  NgImageSliderModule,
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
