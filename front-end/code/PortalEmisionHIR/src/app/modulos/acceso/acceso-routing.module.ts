import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { AccesoComponent }		from './components/acceso.component';
import { LoginComponent }		from './components/login.component';
import { CodigoComponent }		from './components/codigo.component';
import { ContrasenaComponent }	from './components/contrasena.component';

import { AccesoGuardService }	from './services/acceso-guard.service';

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