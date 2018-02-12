import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { AccesoComponent }		   from './acceso.component';
import { LoginComponent }		   from './login.component';
import { CodigoComponent }		   from './codigo.component';
import { ContrasenaComponent }	   from './contrasena.component';

import { AccesoRoutingModule }	   from './acceso-routing.module';
import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }		   from 'app/modulos/shared/image-link/image-link.module';

import { TestUserService }		   from 'app/core/services/test-user.service';

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
		ExtendFormControlModule,
		ImageLinkModule,
	],
	providers: [
		TestUserService
	]
})

export class AccesoModule {}