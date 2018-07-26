import { NgModule }					  from '@angular/core';
import { CommonModule }				  from '@angular/common';
import { ReactiveFormsModule }		  from '@angular/forms';

import { InsuredFormComponent }		  from './insured-form.component';

import { MyDatePickerModule }		  from 'mydatepicker';

import { ExtendFormControlModule }	  from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ InsuredFormComponent ],
	exports:	  [ InsuredFormComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ExtendFormControlModule
	]
})

export class InsuredFormModule {}