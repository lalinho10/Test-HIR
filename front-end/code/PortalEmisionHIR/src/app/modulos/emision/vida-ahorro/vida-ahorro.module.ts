import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { VidaAhorroComponent }	 	from './vida-ahorro.component';
import { VidaAhorroP1Component }	from './vida-ahorro-p1.component';
import { VidaAhorroP2Component }	from './vida-ahorro-p2.component';

import { MyDatePickerModule }		from 'mydatepicker';

import { VidaAhorroRoutingModule }	from './vida-ahorro-routing.module';
import { ExtendFormControlModule }	from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		VidaAhorroComponent,
		VidaAhorroP1Component,
		VidaAhorroP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		VidaAhorroRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class VidaAhorroModule {}