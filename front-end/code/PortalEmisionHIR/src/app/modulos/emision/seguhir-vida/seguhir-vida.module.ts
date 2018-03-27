import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { SeguhirVidaComponent }	 	from './seguhir-vida.component';
import { SeguhirVidaP1Component }	from './seguhir-vida-p1.component';
import { SeguhirVidaP2Component }	from './seguhir-vida-p2.component';
import { SeguhirVidaP3Component }	from './seguhir-vida-p3.component';
import { SeguhirVidaP4Component }	from './seguhir-vida-p4.component';
import { SeguhirVidaP5Component }	from './seguhir-vida-p5.component';

import { MyDatePickerModule }		from 'mydatepicker';

import { SeguhirVidaRoutingModule } from './seguhir-vida-routing.module';
import { ExtendFormControlModule }	from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { InsuredFormModule }		from 'app/modulos/shared/insured-form/insured-form.module';
import { MedicalQuestionaryModule }	from 'app/modulos/shared/medical-questionary/medical-questionary.module';
import { PolicyHolderTableModule }  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SeguhirVidaComponent,
		SeguhirVidaP1Component,
		SeguhirVidaP2Component,
		SeguhirVidaP3Component,
		SeguhirVidaP4Component,
		SeguhirVidaP5Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SeguhirVidaRoutingModule,
		ExtendFormControlModule,
		InsuredFormModule,
		MedicalQuestionaryModule,
		PolicyHolderTableModule,
		ProgressControlModule
	]
})

export class SeguhirVidaModule {}