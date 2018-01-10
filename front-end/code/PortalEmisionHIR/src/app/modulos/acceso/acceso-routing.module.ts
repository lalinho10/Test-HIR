import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { AccesoComponent }		from './acceso.component';
import { LoginComponent }		from './login.component';
import { CodigoComponent }		from './codigo.component';
import { ContrasenaComponent }	from './contrasena.component';

const accesoRoutes: Routes = [
	{
		path: '',
		component: AccesoComponent,
		children: [
			{ path: '', redirectTo: '/acceso/login', pathMatch: 'full' },
			{ path: 'login',      component: LoginComponent },
			{ path: 'codigo',     component: CodigoComponent },
			{ path: 'contrasena', component: ContrasenaComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( accesoRoutes ) ],
	exports: [ RouterModule ]
})

export class AccesoRoutingModule {}