import { LOCALE_ID }			   from '@angular/core';

import { BrowserModule }		   from '@angular/platform-browser';
import { NgModule }				   from '@angular/core';
import { ReactiveFormsModule }	   from '@angular/forms';
import { HttpModule }			   from '@angular/http';

import { MyDatePickerModule }	   from 'mydatepicker';

import { AppRoutingModule }		   from './app-routing.module';
import { AccesoModule }			   from './modulos/acceso/acceso.module';
import { DesbloqueoModule }		   from './modulos/desbloqueo/desbloqueo.module';
import { RcontrasenaModule }	   from './modulos/recuperar-contrasena/rcontrasena.module';
import { CotizacionModule }		   from './modulos/cotizacion/cotizacion.module';
import { EmisionModule }		   from './modulos/emision/emision.module';
import { ExtendFormControlModule } from './modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }		   from './modulos/shared/image-link/image-link.module';
import { PolicyHolderTableModule } from './modulos/shared/policyholder-table/policyholder-table.module';

import { AppComponent }			   from './app.component';
import { AppHeaderComponent }	   from './layout/app-header.component';
import { AppMainComponent }		   from './layout/app-main.component';
import { AppFooterComponent }	   from './layout/app-footer.component';
import { AppModalComponent }	   from './modulos/shared/app-modal/app-modal.component';
import { LoadingModalComponent }   from './modulos/shared/loading-modal/loading-modal.component';
import { PageNotFoundComponent }   from './core/components/page-not-found/page-not-found.component';
import { RegistroComponent }	   from './modulos/registro/registro.component';
import { InicioComponent }		   from './modulos/inicio/inicio.component';

import { AppModalService }		   from './modulos/shared/app-modal/app-modal.service';
import { LoadingModalService }	   from './modulos/shared/loading-modal/loading-modal.service';

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppMainComponent,
		AppFooterComponent,
		AppModalComponent,
		LoadingModalComponent,
		PageNotFoundComponent,
		RegistroComponent,
		InicioComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		MyDatePickerModule,
		AppRoutingModule,
		AccesoModule,
		DesbloqueoModule,
		RcontrasenaModule,
		CotizacionModule,
		EmisionModule,
		ExtendFormControlModule,
		ImageLinkModule,
		PolicyHolderTableModule
	],
	providers: [
		AppModalService,
		LoadingModalService,
		{
			provide: LOCALE_ID, useValue: "es-MX"
		}
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}