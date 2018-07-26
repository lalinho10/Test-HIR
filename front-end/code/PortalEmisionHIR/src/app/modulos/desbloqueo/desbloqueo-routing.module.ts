import { NgModule }				  from '@angular/core';
import { RouterModule, Routes }	  from '@angular/router';

import { DesbloqueoComponent } 	  from './desbloqueo.component';
import { DesbloqueoP1Component }  from './p1-contacto/desbloqueo-p1.component';
import { DesbloqueoP2Component }  from './p2-codigo/desbloqueo-p2.component';
import { DesbloqueoP3Component }  from './p3-confirmacion/desbloqueo-p3.component';

import { DesbloqueoGuardService } from './desbloqueo-guard.service'

const desbloqueoRoutes: Routes = [
	{
		path: '',
		component: DesbloqueoComponent,
		children: [
			{ path: '', redirectTo: '/desbloqueo/contacto', pathMatch: 'full' },
			{ path: 'contacto',     component: DesbloqueoP1Component },
			{
				path: 'codigo',
				component: DesbloqueoP2Component,
				canActivate: [ DesbloqueoGuardService ]
			},
			{
				path: 'confirmacion',
				component: DesbloqueoP3Component,
				canActivate: [ DesbloqueoGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( desbloqueoRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ DesbloqueoGuardService ]
})

export class DesbloqueoRoutingModule {}