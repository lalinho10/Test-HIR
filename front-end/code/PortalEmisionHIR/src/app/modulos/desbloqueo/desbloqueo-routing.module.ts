import { NgModule }				  from '@angular/core';
import { RouterModule, Routes }	  from '@angular/router';

import { DesbloqueoComponent } 	  from './components/desbloqueo.component';
import { DesbloqueoP1Component }  from './components/desbloqueo-p1.component';
import { DesbloqueoP2Component }  from './components/desbloqueo-p2.component';
import { DesbloqueoP3Component }  from './components/desbloqueo-p3.component';

import { DesbloqueoGuardService } from './services/desbloqueo-guard.service'

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