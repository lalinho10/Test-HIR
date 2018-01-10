import { NgModule }					  from '@angular/core';
import { CommonModule } 		 	  from '@angular/common';

import { ExtendFormControlComponent } from './extend-form-control.component'

@NgModule({
	declarations: [ExtendFormControlComponent],
	exports: 	  [ExtendFormControlComponent],
	imports: 	  [CommonModule]
})

export class ExtendFormControlModule {}