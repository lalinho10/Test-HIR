import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { AccesoComponent }		   from './acceso.component';
import { LoginComponent }		   from './p1-login/login.component';
import { CodigoComponent }		   from './p2-codigo/codigo.component';
import { ContrasenaComponent }	   from './p3-contrasena/contrasena.component';

import { AccesoService }		   from './acceso.service';

import { AccesoRoutingModule }	   from './acceso-routing.module';
import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [
		AccesoComponent,
		LoginComponent,
		CodigoComponent,
		ContrasenaComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AccesoRoutingModule,
		ExtendFormControlModule
	],
	providers: [
		AccesoService
	]
})

export class AccesoModule {}