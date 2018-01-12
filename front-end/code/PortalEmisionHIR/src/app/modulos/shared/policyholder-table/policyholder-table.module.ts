import { NgModule }					  from '@angular/core';
import { CommonModule }				  from '@angular/common';
import { ReactiveFormsModule }		  from '@angular/forms';

import { PolicyHolderTableComponent } from './policyholder-table.component';

import { MyDatePickerModule }		  from 'mydatepicker';

import { ExtendFormControlModule }	  from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ PolicyHolderTableComponent ],
	exports:	  [ PolicyHolderTableComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ExtendFormControlModule
	]
})

export class PolicyHolderTableModule {}