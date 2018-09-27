import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { OpenpayComponent }		   from './openpay.component';

import { OpenpayService }		   from './openpay.service';

import { EmisionService }		   from 'app/modulos/emision/emision.service';

import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ OpenpayComponent ],
	exports:	  [ OpenpayComponent ],
	providers: [
		EmisionService,
		OpenpayService
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ExtendFormControlModule
	]
})

export class OpenpayModule {}