import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { AccesoComponent }		   from './acceso.component';
import { LoginComponent }		   from './login.component';
import { CodigoComponent }		   from './codigo.component';
import { ContrasenaComponent }	   from './contrasena.component';

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
	]
})

export class AccesoModule {}