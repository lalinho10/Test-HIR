import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { ProcuraVidaComponent }		  from './procura-vida.component';
import { ProcuraVidaP1Component }	  from './p1-usuario/procura-vida-p1.component';
import { ProcuraVidaP2Component }	  from './p2-beneficiarios/procura-vida-p2.component';

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
	imports:   [ RouterModule.forChild( procuraVidaRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class ProcuraVidaRoutingModule {}