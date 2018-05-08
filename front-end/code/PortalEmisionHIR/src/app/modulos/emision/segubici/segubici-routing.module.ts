import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { SegubiciComponent }		  from './segubici.component';
import { SegubiciP1Component }		  from './p1-usuario/segubici-p1.component';
import { SegubiciP2Component }		  from './p2-seguro/segubici-p2.component';
import { SegubiciP3Component }		  from './p3-confirmacion/segubici-p3.component';

import { SegubiciGuardService }		  from './segubici-guard.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const segubiciRoutes: Routes = [
	{
		path: '',
		component: SegubiciComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/segubici/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SegubiciP1Component },
			{
				path: 'seguro',
				component: SegubiciP2Component,
				canActivate: [ SegubiciGuardService ]
			},
			{
				path: 'confirmacion',
				component: SegubiciP3Component,
				canActivate: [ SegubiciGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( segubiciRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService, SegubiciGuardService ]
})

export class SegubiciRoutingModule {}