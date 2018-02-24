import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { SeguhirVidaComponent }		  from './seguhir-vida.component';
import { SeguhirVidaP1Component }	  from './seguhir-vida-p1.component';

import { AuthenticationService }	  from 'app/core/services/authentication/authentication.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const seguhirVidaRoutes: Routes = [
	{
		path: '',
		component: SeguhirVidaComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/seguhirvida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirVidaP1Component }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild( seguhirVidaRoutes )
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthenticationService,
		AuthenticationGuardService
	]
})

export class SeguhirVidaRoutingModule {}