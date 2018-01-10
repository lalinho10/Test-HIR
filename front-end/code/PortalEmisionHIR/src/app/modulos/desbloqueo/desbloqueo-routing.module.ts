import { NgModule }				 from '@angular/core';
import { RouterModule, Routes }	 from '@angular/router';

import { DesbloqueoComponent } 	 from './desbloqueo.component';
import { DesbloqueoP1Component } from './desbloqueo-p1.component';
import { DesbloqueoP2Component } from './desbloqueo-p2.component';
import { DesbloqueoP3Component } from './desbloqueo-p3.component';

const desbloqueoRoutes: Routes = [
	{
		path: '',
		component: DesbloqueoComponent,
		children: [
			{ path: '', redirectTo: '/desbloqueo/contacto', pathMatch: 'full' },
			{ path: 'contacto',     component: DesbloqueoP1Component },
			{ path: 'codigo',       component: DesbloqueoP2Component },
			{ path: 'confirmacion', component: DesbloqueoP3Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( desbloqueoRoutes ) ],
	exports: [ RouterModule ]
})

export class DesbloqueoRoutingModule {}