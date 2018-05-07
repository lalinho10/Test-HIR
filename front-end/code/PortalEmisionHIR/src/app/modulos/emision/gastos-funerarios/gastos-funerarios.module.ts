import { NgModule }						 from '@angular/core';
import { CommonModule } 				 from '@angular/common';
import { ReactiveFormsModule }			 from '@angular/forms';

import { MyDatePickerModule }			 from 'mydatepicker';

import { GastosFunerariosComponent }	 from './gastos-funerarios.component';
import { GastosFunerariosP1Component }	 from './p1-usuario/gastos-funerarios-p1.component';
import { GastosFunerariosP2Component }	 from './p2-beneficiarios/gastos-funerarios-p2.component';
import { GastosFunerariosP3Component }	 from './p3-confirmacion/gastos-funerarios-p3.component';

import { GastosFunerariosService }		 from './gastos-funerarios.service';
import { GastosFunerariosP1Service }	 from './p1-usuario/gastos-funerarios-p1.service';
import { GastosFunerariosP2Service }	 from './p2-beneficiarios/gastos-funerarios-p2.service';

import { GastosFunerariosRoutingModule } from './gastos-funerarios-routing.module';
import { ExtendFormControlModule }		 from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { PolicyHolderTableModule }		 from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }		 from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		GastosFunerariosComponent,
		GastosFunerariosP1Component,
		GastosFunerariosP2Component,
		GastosFunerariosP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		GastosFunerariosRoutingModule,
		PolicyHolderTableModule,
		ExtendFormControlModule,
		ProgressControlModule
	],
	providers: [
		GastosFunerariosService,
		GastosFunerariosP1Service,
		GastosFunerariosP2Service
	]
})

export class GastosFunerariosModule {}