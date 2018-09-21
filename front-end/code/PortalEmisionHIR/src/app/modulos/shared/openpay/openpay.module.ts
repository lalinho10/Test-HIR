import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { OpenpayComponent }		   from './openpay.component';

import { OpenpayService }		   from './openpay.service';

import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ OpenpayComponent ],
	exports:	  [ OpenpayComponent ],
	providers: [
		OpenpayService
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ExtendFormControlModule
	]
})

export class OpenpayModule {}