import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { VidaAhorroComponent }		  from './vida-ahorro.component';
import { VidaAhorroP1Component }	  from './vida-ahorro-p1.component';
import { VidaAhorroP2Component }	  from './vida-ahorro-p2.component';
import { VidaAhorroP3Component }	  from './vida-ahorro-p3.component';
import { VidaAhorroP5Component }	  from './vida-ahorro-p5.component';

import { AuthenticationService }	  from 'app/core/services/authentication/authentication.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const vidaAhorroRoutes: Routes = [
	{
		path: '',
		component: VidaAhorroComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/vidaahorro/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: VidaAhorroP1Component },
			{ path: 'seguro', component: VidaAhorroP2Component },
			{ path: 'medico', component: VidaAhorroP3Component },
			{ path: 'beneficiarios', component: VidaAhorroP5Component }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild( vidaAhorroRoutes )
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthenticationService,
		AuthenticationGuardService
	]
})

export class VidaAhorroRoutingModule {}