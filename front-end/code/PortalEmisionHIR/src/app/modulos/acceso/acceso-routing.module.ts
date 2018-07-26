import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { AccesoComponent }		from './acceso.component';
import { LoginComponent }		from './p1-login/login.component';
import { CodigoComponent }		from './p2-codigo/codigo.component';
import { ContrasenaComponent }	from './p3-contrasena/contrasena.component';

import { AccesoGuardService }	from './acceso-guard.service';

const accesoRoutes: Routes = [
	{
		path: '',
		component: AccesoComponent,
		children: [
			{ path: '', redirectTo: '/acceso/login', pathMatch: 'full' },
			{ path: 'login',      component: LoginComponent },
			{
				path: 'codigo',
				component: CodigoComponent,
				canActivate: [ AccesoGuardService ]
			},
			{
				path: 'contrasena',
				component: ContrasenaComponent,
				canActivate: [ AccesoGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( accesoRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AccesoGuardService ]
})

export class AccesoRoutingModule {}