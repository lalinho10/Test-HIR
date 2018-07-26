import { NgModule }					 from '@angular/core';
import { CommonModule }				 from '@angular/common';
import { ReactiveFormsModule }		 from '@angular/forms';

import { MyDatePickerModule }		 from 'mydatepicker';

import { ApindividualComponent }	 from './apindividual.component';
import { ApindividualP1Component }	 from './p1-usuario/apindividual-p1.component';
import { ApindividualP2Component }	 from './p2-seguro/apindividual-p2.component';
import { ApindividualP3Component }	 from './p3-confirmacion/apindividual-p3.component';

import { ApindividualService }		 from './apindividual.service';
import { ApindividualP1Service }	 from './p1-usuario/apindividual-p1.service';
import { ApindividualP2Service }	 from './p2-seguro/apindividual-p2.service';

import { ApindividualRoutingModule } from './apindividual-routing.module';
import { ExtendFormControlModule }	 from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	 from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		ApindividualComponent,
		ApindividualP1Component,
		ApindividualP2Component,
		ApindividualP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		ApindividualRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	],
	providers: [
		ApindividualService,
		ApindividualP1Service,
		ApindividualP2Service
	]
})

export class ApindividualModule {}