import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { ReactiveFormsModule }		from '@angular/forms';

import { MyDatePickerModule }		from 'mydatepicker';

import { ProcuraVidaComponent }		from './procura-vida.component';
import { ProcuraVidaP1Component }	from './p1-usuario/procura-vida-p1.component';
import { ProcuraVidaP2Component }	from './p2-beneficiarios/procura-vida-p2.component';
import { ProcuraVidaP3Component }	from './p3-confirmacion/procura-vida-p3.component';

import { ProcuraVidaRoutingModule } from './procura-vida-routing.module';
import { ExtendFormControlModule }  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { PolicyHolderTableModule }  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		ProcuraVidaComponent,
		ProcuraVidaP1Component,
		ProcuraVidaP2Component,
		ProcuraVidaP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		PolicyHolderTableModule,
		ProcuraVidaRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class ProcuraVidaModule {}