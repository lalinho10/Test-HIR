import { NgModule }					  from '@angular/core';
import { RouterModule, Routes } 	  from '@angular/router';

import { RegistroComponent }		  from 'app/modulos/registro/registro.component';
import { InicioComponent }			  from 'app/modulos/inicio/inicio.component';
import { CambiarContrasenaComponent } from 'app/modulos/cambiar-contrasena/cambiar-contrasena.component';
import { PageNotFoundComponent }	  from 'app/core/components/page-not-found/page-not-found.component';
import { WorkInProgressComponent }	  from 'app/core/components/work-in-progress/work-in-progress.component';

import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const routes: Routes = [
	{ path: '', redirectTo: '/acceso/login', pathMatch: 'full' },
	{
		path: 'acceso',
		loadChildren: 'app/modulos/acceso/acceso.module#AccesoModule'
	},
	{ path: 'registro', component: RegistroComponent },
	{
		path: 'rcontrasena',
		loadChildren: 'app/modulos/recuperar-contrasena/rcontrasena.module#RcontrasenaModule'
	},
	{
		path: 'desbloqueo',
		loadChildren: 'app/modulos/desbloqueo/desbloqueo.module#DesbloqueoModule'
	},
	{
		path: 'inicio',
		component: InicioComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'productos',
		loadChildren: 'app/modulos/productos/productos.module#ProductosModule'
	},
	{
		path: 'cotizacion',
		loadChildren: 'app/modulos/cotizacion/cotizacion.module#CotizacionModule'
	},
	{
		path: 'emision',
		loadChildren: 'app/modulos/emision/emision.module#EmisionModule'
	},
	{
		path: 'cambiarcontrasena',
		component: CambiarContrasenaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{ path: 'inprogress', component: WorkInProgressComponent },
	{ path: 'notfound', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/notfound' }
];

@NgModule({
	imports:   [ RouterModule.forRoot( routes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class AppRoutingModule {}