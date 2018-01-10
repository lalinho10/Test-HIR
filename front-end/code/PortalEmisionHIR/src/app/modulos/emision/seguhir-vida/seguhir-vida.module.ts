import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { SeguhirVidaComponent }	 	from './seguhir-vida.component';
import { SeguhirVidaP1Component }	from './seguhir-vida-p1.component';

import { MyDatePickerModule }		from 'mydatepicker';

import { SeguhirVidaRoutingModule } from './seguhir-vida-routing.module';
import { ExtendFormControlModule }	from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SeguhirVidaComponent,
		SeguhirVidaP1Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SeguhirVidaRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class SeguhirVidaModule {}