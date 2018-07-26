import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { ProcuraVidaComponent }		  from './procura-vida.component';
import { ProcuraVidaP1Component }	  from './p1-usuario/procura-vida-p1.component';
import { ProcuraVidaP2Component }	  from './p2-beneficiarios/procura-vida-p2.component';
import { ProcuraVidaP3Component }	  from './p3-confirmacion/procura-vida-p3.component';

import { ProcuraVidaGuardService }	  from './procura-vida-guard.service';
import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const procuraVidaRoutes: Routes = [
	{
		path: '',
		component: ProcuraVidaComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/procuravida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: ProcuraVidaP1Component },
			{
				path: 'beneficiarios',
				component: ProcuraVidaP2Component,
				canActivate: [ ProcuraVidaGuardService ]
			},
			{
				path: 'confirmacion',
				component: ProcuraVidaP3Component,
				canActivate: [ ProcuraVidaGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( procuraVidaRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService, ProcuraVidaGuardService ]
})

export class ProcuraVidaRoutingModule {}