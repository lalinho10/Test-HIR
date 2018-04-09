import { NgModule }						 from '@angular/core';
import { RouterModule, Routes }			 from '@angular/router';

import { ProductosComponent }			 from './productos.component';
import { ProductosVidaComponent }		 from './productos-vida.component';
import { ProductosAccidentesComponent }	 from './productos-accidentes.component';

import { AuthenticationGuardService }	 from 'app/core/services/authentication/authentication-guard.service';

const productosRoutes: Routes = [
	{
		path: '',
		component: ProductosComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'vida',
		component: ProductosVidaComponent,
		canActivate: [ AuthenticationGuardService ]
	},
	{
		path: 'accidentes',
		component: ProductosAccidentesComponent,
		canActivate: [ AuthenticationGuardService ]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( productosRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class ProductosRoutingModule {}