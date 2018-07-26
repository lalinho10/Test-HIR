import { NgModule }						  from '@angular/core';
import { CommonModule } 				  from '@angular/common';
import { ReactiveFormsModule }			  from '@angular/forms';

import { MyDatePickerModule }			  from 'mydatepicker';

import { SeguhirEmpresarioComponent }	  from './seguhir-empresario.component';
import { SeguhirEmpresarioP1Component }	  from './p1-usuario/seguhir-empresario-p1.component';
import { SeguhirEmpresarioP2Component }	  from './p2-beneficiarios/seguhir-empresario-p2.component';
import { SeguhirEmpresarioP3Component }	  from './p3-confirmacion/seguhir-empresario-p3.component';

import { SeguhirEmpresarioService }		  from './seguhir-empresario.service';
import { SeguhirEmpresarioP1Service }	  from './p1-usuario/seguhir-empresario-p1.service';
import { SeguhirEmpresarioP2Service }	  from './p2-beneficiarios/seguhir-empresario-p2.service';

import { SeguhirEmpresarioRoutingModule } from './seguhir-empresario-routing.module';
import { ExtendFormControlModule }		  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { PolicyHolderTableModule }		  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }		  from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		SeguhirEmpresarioComponent,
		SeguhirEmpresarioP1Component,
		SeguhirEmpresarioP2Component,
		SeguhirEmpresarioP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		SeguhirEmpresarioRoutingModule,
		PolicyHolderTableModule,
		ExtendFormControlModule,
		ProgressControlModule
	],
	providers: [
		SeguhirEmpresarioService,
		SeguhirEmpresarioP1Service,
		SeguhirEmpresarioP2Service
	]
})

export class SeguhirEmpresarioModule {}