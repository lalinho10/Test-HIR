import { NgModule }						  from '@angular/core';
import { CommonModule } 				  from '@angular/common';
import { ReactiveFormsModule }			  from '@angular/forms';

import { SeguhirEmpresarioComponent }	  from './seguhir-empresario.component';
import { SeguhirEmpresarioP1Component }	  from './seguhir-empresario-p1.component';
import { SeguhirEmpresarioP2Component }	  from './seguhir-empresario-p2.component';

import { MyDatePickerModule }			  from 'mydatepicker';

import { SeguhirEmpresarioRoutingModule } from './seguhir-empresario-routing.module';
import { ExtendFormControlModule }		  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { PolicyHolderTableModule }		  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }		  from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SeguhirEmpresarioComponent,
		SeguhirEmpresarioP1Component,
		SeguhirEmpresarioP2Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SeguhirEmpresarioRoutingModule,
		PolicyHolderTableModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class SeguhirEmpresarioModule {}