import { NgModule }				 from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RegistroComponent }	 from './modulos/registro/registro.component';
import { InicioComponent }		 from './modulos/inicio/inicio.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

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
	{ path: 'inicio', component: InicioComponent },
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
	{ path: 'notfound', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/notfound' }
];

@NgModule({
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}