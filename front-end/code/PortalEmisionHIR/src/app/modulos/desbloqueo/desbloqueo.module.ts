import { NgModule }				   from '@angular/core';
import { CommonModule } 		   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { DesbloqueoComponent } 	   from './desbloqueo.component';
import { DesbloqueoP1Component }   from './desbloqueo-p1.component';
import { DesbloqueoP2Component }   from './desbloqueo-p2.component';
import { DesbloqueoP3Component }   from './desbloqueo-p3.component';

import { DesbloqueoRoutingModule } from './desbloqueo-routing.module';
import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }   from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		DesbloqueoComponent,
		DesbloqueoP1Component,
		DesbloqueoP2Component,
		DesbloqueoP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		DesbloqueoRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class DesbloqueoModule {}