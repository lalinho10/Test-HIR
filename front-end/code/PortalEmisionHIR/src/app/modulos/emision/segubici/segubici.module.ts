import { NgModule }				   from '@angular/core';
import { CommonModule } 		   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { MyDatePickerModule }	   from 'mydatepicker';

import { SegubiciComponent }	   from './segubici.component';
import { SegubiciP1Component }	   from './p1-usuario/segubici-p1.component';
import { SegubiciP2Component }	   from './p2-seguro/segubici-p2.component';
import { SegubiciP3Component }	   from './p3-confirmacion/segubici-p3.component';

import { SegubiciRoutingModule }   from './segubici-routing.module';
import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }   from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SegubiciComponent,
		SegubiciP1Component,
		SegubiciP2Component,
		SegubiciP3Component
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