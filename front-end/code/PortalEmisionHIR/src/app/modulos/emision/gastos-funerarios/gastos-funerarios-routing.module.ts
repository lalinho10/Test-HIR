import { NgModule }					   from '@angular/core';
import { RouterModule, Routes }		   from '@angular/router';

import { GastosFunerariosComponent }   from './gastos-funerarios.component';
import { GastosFunerariosP1Component } from './p1-usuario/gastos-funerarios-p1.component';
import { GastosFunerariosP2Component } from './p2-beneficiarios/gastos-funerarios-p2.component';

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
	imports:   [ RouterModule.forChild( gastosFunerariosRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class GastosFunerariosRoutingModule {}