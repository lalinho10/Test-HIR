import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { VidaAhorroComponent }	 	from './vida-ahorro.component';
import { VidaAhorroP1Component }	from './p1-usuario/vida-ahorro-p1.component';
import { VidaAhorroP2Component }	from './p2-seguro/vida-ahorro-p2.component';
import { VidaAhorroP3Component }	from './p3-medico/vida-ahorro-p3.component';
import { VidaAhorroP4Component }	from './p4-asegurados/vida-ahorro-p4.component';
import { VidaAhorroP5Component }	from './p5-beneficiarios/vida-ahorro-p5.component';
import { VidaAhorroP6Component }	from './p6-agentes/vida-ahorro-p6.component';

import { MyDatePickerModule }		from 'mydatepicker';

import { VidaAhorroRoutingModule }	from './vida-ahorro-routing.module';
import { AgentTableModule }			from 'app/modulos/shared/agent-table/agent-table.module';
import { ExtendFormControlModule }	from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { InsuredFormModule }		from 'app/modulos/shared/insured-form/insured-form.module';
import { MedicalQuestionaryModule }	from 'app/modulos/shared/medical-questionary/medical-questionary.module';
import { PolicyHolderTableModule }	from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		VidaAhorroComponent,
		VidaAhorroP1Component,
		VidaAhorroP2Component,
		VidaAhorroP3Component,
		VidaAhorroP4Component,
		VidaAhorroP5Component,
		VidaAhorroP6Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		VidaAhorroRoutingModule,
		AgentTableModule,
		ExtendFormControlModule,
		InsuredFormModule,
		MedicalQuestionaryModule,
		PolicyHolderTableModule,
		ProgressControlModule
	]
})

export class VidaAhorroModule {}