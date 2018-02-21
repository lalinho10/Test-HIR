import { NgModule }					 from '@angular/core';
import { CommonModule }				 from '@angular/common';
import { ReactiveFormsModule }		 from '@angular/forms';

import { ApindividualComponent }	 from './apindividual.component';
import { ApindividualP1Component }	 from './apindividual-p1.component';
import { ApindividualP2Component }	 from './apindividual-p2.component';

import { MyDatePickerModule }		 from 'mydatepicker';

import { ApindividualRoutingModule } from './apindividual-routing.module';
import { ExtendFormControlModule }	 from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	 from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		ApindividualComponent,
		ApindividualP1Component,
		ApindividualP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ApindividualRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class ApindividualModule {}