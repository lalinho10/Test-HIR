import { NgModule }					   from '@angular/core';
import { CommonModule }				   from '@angular/common';
import { ReactiveFormsModule }		   from '@angular/forms';

import { MedicalQuestionaryComponent } from './medical-questionary.component';

import { MyDatePickerModule }		   from 'mydatepicker';

import { ExtendFormControlModule }	   from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ MedicalQuestionaryComponent ],
	exports:	  [ MedicalQuestionaryComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ExtendFormControlModule
	]
})

export class MedicalQuestionaryModule {}