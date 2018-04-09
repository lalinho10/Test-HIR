import { LOCALE_ID }					from '@angular/core';

import { BrowserModule }				from '@angular/platform-browser';
import { NgModule }						from '@angular/core';
import { ReactiveFormsModule }			from '@angular/forms';
import { HttpClientModule,
		 HTTP_INTERCEPTORS }			from '@angular/common/http';

import { RecaptchaModule,
		 RECAPTCHA_SETTINGS,
		 RecaptchaSettings,
		 RECAPTCHA_LANGUAGE }			from 'ng-recaptcha';
import { RecaptchaFormsModule }			from 'ng-recaptcha/forms';
import { MyDatePickerModule }			from 'mydatepicker';

import { AppRoutingModule }				from './app-routing.module';
import { AccesoModule }					from './modulos/acceso/acceso.module';
import { DesbloqueoModule }				from './modulos/desbloqueo/desbloqueo.module';
import { RcontrasenaModule }			from './modulos/recuperar-contrasena/rcontrasena.module';
import { CotizacionModule }				from './modulos/cotizacion/cotizacion.module';
import { EmisionModule }				from './modulos/emision/emision.module';
import { ExtendFormControlModule }		from './modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }				from './modulos/shared/image-link/image-link.module';
import { PolicyHolderTableModule }		from './modulos/shared/policyholder-table/policyholder-table.module';
import { MedicalQuestionaryModule }		from './modulos/shared/medical-questionary/medical-questionary.module';

import { AppComponent }					from './app.component';
import { AppHeaderComponent }			from './layout/app-header.component';
import { AppMainComponent }				from './layout/app-main.component';
import { AppFooterComponent }			from './layout/app-footer.component';
import { BienvenidaComponent }			from './modulos/bienvenida/bienvenida.component';
import { MenuComponent }				from './modulos/menu/menu.component';
import { AppModalComponent }			from './core/components/app-modal/app-modal.component';
import { LoadingModalComponent }		from './core/components/loading-modal/loading-modal.component';
import { SessionModalComponent }		from './core/components/session-modal/session-modal.component';
import { SessionExpireModalComponent }	from './core/components/session-expire-modal/session-expire-modal.component';
import { SessionTimerComponent }		from './core/components/session-timer/session-timer.component';
import { PageNotFoundComponent }		from './core/components/page-not-found/page-not-found.component';
import { RegistroComponent }			from './modulos/registro/registro.component';
import { InicioComponent }				from './modulos/inicio/inicio.component';

import { AuthenticationService }		from './core/services/authentication/authentication.service';
import { WSClientService }				from './core/services/ws-client.service';
import { AppModalService }				from './core/components/app-modal/app-modal.service';
import { LoadingModalService }			from './core/components/loading-modal/loading-modal.service';
import { SessionModalService }			from './core/components/session-modal/session-modal.service';
import { SessionExpireModalService }	from './core/components/session-expire-modal/session-expire-modal.service';
import { SessionTimerService }			from './core/components/session-timer/session-timer.service';

import { ErrorHandlerInterceptor }		from './core/interceptors/error-handler.interceptor'
import { LoadingInterceptor }			from './core/interceptors/loading.interceptor'

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppMainComponent,
		AppFooterComponent,
		BienvenidaComponent,
		MenuComponent,
		AppModalComponent,
		LoadingModalComponent,
		SessionModalComponent,
		SessionExpireModalComponent,
		SessionTimerComponent,
		PageNotFoundComponent,
		RegistroComponent,
		InicioComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		RecaptchaModule.forRoot(),
		RecaptchaFormsModule,
		MyDatePickerModule,
		AppRoutingModule,
		AccesoModule,
		DesbloqueoModule,
		RcontrasenaModule,
		CotizacionModule,
		EmisionModule,
		ExtendFormControlModule,
		ImageLinkModule,
		PolicyHolderTableModule,
		MedicalQuestionaryModule
	],
	providers: [
		AuthenticationService,
		WSClientService,
		AppModalService,
		LoadingModalService,
		SessionModalService,
		SessionExpireModalService,
		SessionTimerService,
		{
			provide: LOCALE_ID, useValue: "es-MX"
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoadingInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true
		},
		{
			provide: RECAPTCHA_SETTINGS,
			useValue: { siteKey: '6LfJhU8UAAAAANQjlRZ0Byk4M5iG7vCaCtxzLuof' } as RecaptchaSettings
		},
		{
			provide: RECAPTCHA_LANGUAGE,
			useValue: 'es'
		}
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}