import { NgModule }				   from '@angular/core';
import { CommonModule } 		   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { SegubiciComponent }	   from './segubici.component';
import { SegubiciP1Component }	   from './segubici-p1.component';
import { SegubiciP2Component }	   from './segubici-p2.component';

import { MyDatePickerModule }	   from 'mydatepicker';

import { SegubiciRoutingModule }   from './segubici-routing.module';
import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }   from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SegubiciComponent,
		SegubiciP1Component,
		SegubiciP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SegubiciRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class SegubiciModule {}