import { NgModule }					  from '@angular/core';
import { RouterModule, Routes }		  from '@angular/router';

import { ApindividualComponent }	  from './apindividual.component';
import { ApindividualP1Component }	  from './p1-usuario/apindividual-p1.component';
import { ApindividualP2Component }	  from './p2-seguro/apindividual-p2.component';

import { AuthenticationGuardService } from 'app/core/services/authentication/authentication-guard.service';

const apindividualRoutes: Routes = [
	{
		path: '',
		component: ApindividualComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/apindividual/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: ApindividualP1Component },
			{ path: 'seguro', component: ApindividualP2Component }
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( apindividualRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService ]
})

export class ApindividualRoutingModule {}