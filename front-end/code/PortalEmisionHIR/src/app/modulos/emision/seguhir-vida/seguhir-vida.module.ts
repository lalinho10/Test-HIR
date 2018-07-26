import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { MyDatePickerModule }		from 'mydatepicker';

import { SeguhirVidaComponent }	 	from './seguhir-vida.component';
import { SeguhirVidaP1Component }	from './p1-usuario/seguhir-vida-p1.component';
import { SeguhirVidaP2Component }	from './p2-seguro/seguhir-vida-p2.component';
import { SeguhirVidaP3Component }	from './p3-medico/seguhir-vida-p3.component';
import { SeguhirVidaP4Component }	from './p4-asegurados/seguhir-vida-p4.component';
import { SeguhirVidaP5Component }	from './p5-beneficiarios/seguhir-vida-p5.component';
import { SeguhirVidaP6Component }	from './p6-agentes/seguhir-vida-p6.component';
import { SeguhirVidaP7Component }	from './p7-confirmacion/seguhir-vida-p7.component';

import { SeguhirVidaService }		from './seguhir-vida.service';
import { SeguhirVidaP1Service }		from './p1-usuario/seguhir-vida-p1.service';
import { SeguhirVidaP2Service }		from './p2-seguro/seguhir-vida-p2.service';
import { SeguhirVidaP3Service }		from './p3-medico/seguhir-vida-p3.service';
import { SeguhirVidaP4Service }		from './p4-asegurados/seguhir-vida-p4.service';
import { SeguhirVidaP5Service }		from './p5-beneficiarios/seguhir-vida-p5.service';
import { SeguhirVidaP6Service }		from './p6-agentes/seguhir-vida-p6.service';

import { SeguhirVidaRoutingModule } from './seguhir-vida-routing.module';
import { AgentTableModule }			from 'app/modulos/shared/agent-table/agent-table.module';
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
		SeguhirVidaP5Component,
		SeguhirVidaP6Component,
		SeguhirVidaP7Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SeguhirVidaRoutingModule,
		AgentTableModule,
		ExtendFormControlModule,
		InsuredFormModule,
		MedicalQuestionaryModule,
		PolicyHolderTableModule,
		ProgressControlModule
	],
	providers: [
		SeguhirVidaService,
		SeguhirVidaP1Service,
		SeguhirVidaP2Service,
		SeguhirVidaP3Service,
		SeguhirVidaP4Service,
		SeguhirVidaP5Service,
		SeguhirVidaP6Service
	]
})

export class SeguhirVidaModule {}