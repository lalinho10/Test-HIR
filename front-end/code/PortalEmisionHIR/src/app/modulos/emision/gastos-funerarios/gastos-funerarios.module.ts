import { NgModule }						 from '@angular/core';
import { CommonModule } 				 from '@angular/common';
import { ReactiveFormsModule }			 from '@angular/forms';

import { GastosFunerariosComponent }	 from './gastos-funerarios.component';
import { GastosFunerariosP1Component }	 from './gastos-funerarios-p1.component';
import { GastosFunerariosP2Component }	 from './gastos-funerarios-p2.component';

import { MyDatePickerModule }			 from 'mydatepicker';

import { GastosFunerariosRoutingModule } from './gastos-funerarios-routing.module';
import { ExtendFormControlModule }  	 from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { PolicyHolderTableModule }  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }		 from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		GastosFunerariosComponent,
		GastosFunerariosP1Component,
		GastosFunerariosP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		GastosFunerariosRoutingModule,
		PolicyHolderTableModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class GastosFunerariosModule {}