import { NgModule }				   from '@angular/core';
import { CommonModule } 		   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { RecaptchaModule }		   from 'ng-recaptcha';
import { RecaptchaFormsModule }	   from 'ng-recaptcha/forms';

import { DesbloqueoComponent }	   from './desbloqueo.component';
import { DesbloqueoP1Component }   from './p1-contacto/desbloqueo-p1.component';
import { DesbloqueoP2Component }   from './p2-codigo/desbloqueo-p2.component';
import { DesbloqueoP3Component }   from './p3-confirmacion/desbloqueo-p3.component';

import { DesbloqueoService }	   from './desbloqueo.service';

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
		RecaptchaModule.forRoot(),
		RecaptchaFormsModule,
		DesbloqueoRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	],
	providers: [
		DesbloqueoService
	]
})

export class DesbloqueoModule {}