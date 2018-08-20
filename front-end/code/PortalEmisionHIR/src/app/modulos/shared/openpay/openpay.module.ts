import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { OpenpayComponent }		   from './openpay.component';

import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ OpenpayComponent ],
	exports:	  [ OpenpayComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ExtendFormControlModule
	]
})

export class OpenpayModule {}