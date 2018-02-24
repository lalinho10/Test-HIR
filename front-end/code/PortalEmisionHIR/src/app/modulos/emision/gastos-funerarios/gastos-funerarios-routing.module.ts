import { NgModule }					   from '@angular/core';
import { RouterModule, Routes }		   from '@angular/router';

import { GastosFunerariosComponent }   from './gastos-funerarios.component';
import { GastosFunerariosP1Component } from './gastos-funerarios-p1.component';
import { GastosFunerariosP2Component } from './gastos-funerarios-p2.component';

import { AuthenticationService }	   from 'app/core/services/authentication/authentication.service';
import { AuthenticationGuardService }  from 'app/core/services/authentication/authentication-guard.service';

const gastosFunerariosRoutes: Routes = [
	{
		path: '',
		component: GastosFunerariosComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/gastosfunerarios/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: GastosFunerariosP1Component },
			{ path: 'beneficiarios', component: GastosFunerariosP2Component }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild( gastosFunerariosRoutes )
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthenticationService,
		AuthenticationGuardService
	]
})

export class GastosFunerariosRoutingModule {}