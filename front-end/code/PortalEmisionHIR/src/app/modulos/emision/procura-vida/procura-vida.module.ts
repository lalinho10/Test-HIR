import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { ProcuraVidaComponent }		from './procura-vida.component';
import { ProcuraVidaP1Component }	from './procura-vida-p1.component';
import { ProcuraVidaP2Component }	from './procura-vida-p2.component';

import { MyDatePickerModule }		from 'mydatepicker';

import { ProcuraVidaRoutingModule } from './procura-vida-routing.module';
import { ExtendFormControlModule }  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		ProcuraVidaComponent,
		ProcuraVidaP1Component,
		ProcuraVidaP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ProcuraVidaRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class ProcuraVidaModule {}