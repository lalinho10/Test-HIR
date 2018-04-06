import { NgModule }					from '@angular/core';
import { ReactiveFormsModule }		from '@angular/forms';
import { CommonModule }				from '@angular/common';

import { RecaptchaModule }			from 'ng-recaptcha';
import { RecaptchaFormsModule }		from 'ng-recaptcha/forms';

import { RcontrasenaComponent }		from './components/rcontrasena.component';
import { RcontrasenaP1Component }	from './components/rcontrasena-p1.component';
import { RcontrasenaP2Component }	from './components/rcontrasena-p2.component';
import { RcontrasenaP3Component }	from './components/rcontrasena-p3.component';

import { RcontrasenaService }		from './services/rcontrasena.service';

import { RcontrasenaRoutingModule }	from './rcontrasena-routing.module';
import { ExtendFormControlModule }	from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ProgressControlModule }	from 'app/modulos/shared/progress-control/progress-control.module';

@NgModule({
	declarations: [
		RcontrasenaComponent,
		RcontrasenaP1Component,
		RcontrasenaP2Component,
		RcontrasenaP3Component
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecaptchaModule.forRoot(),
		RecaptchaFormsModule,
		RcontrasenaRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	],
	providers: [
		RcontrasenaService
	]
})

export class RcontrasenaModule {}