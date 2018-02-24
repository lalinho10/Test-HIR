import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { ProcuraVidaComponent }		  from './procura-vida.component';
import { ProcuraVidaP1Component }	  from './procura-vida-p1.component';
import { ProcuraVidaP2Component }	  from './procura-vida-p2.component';

import { AuthenticationService }	  from 'app/core/services/authentication/authentication.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const procuraVidaRoutes: Routes = [
	{
		path: '',
		component: ProcuraVidaComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/procuravida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: ProcuraVidaP1Component },
			{ path: 'beneficiarios', component: ProcuraVidaP2Component }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild( procuraVidaRoutes )
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthenticationService,
		AuthenticationGuardService
	]
})

export class ProcuraVidaRoutingModule {}