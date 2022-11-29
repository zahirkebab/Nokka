import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AlertModule } from '@coreui/angular';
import { NgImageSliderModule } from 'ng-image-slider'


const MaterialComponents=[
  MatSlideToggleModule,
  MatToolbarModule,
  NgImageSliderModule,
  AlertModule,
  
]

@NgModule({
  imports: [MaterialComponents,],
  exports: [MaterialComponents]
})
export class MaterialModule { }
