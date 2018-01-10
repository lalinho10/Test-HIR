import { NgModule }					from '@angular/core';
import { ReactiveFormsModule }		from '@angular/forms';
import { CommonModule }				from '@angular/common';

import { RcontrasenaComponent }		from './rcontrasena.component';
import { RcontrasenaP1Component }	from './rcontrasena-p1.component';
import { RcontrasenaP2Component }	from './rcontrasena-p2.component';
import { RcontrasenaP3Component }	from './rcontrasena-p3.component';

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
		RcontrasenaRoutingModule,
		ExtendFormControlModule,
		ProgressControlModule
	]
})

export class RcontrasenaModule {}