import { NgModule }						 from '@angular/core';
import { RouterModule, Routes }			 from '@angular/router';

import { SeguhirEmpresarioComponent }	 from './seguhir-empresario.component';
import { SeguhirEmpresarioP1Component }	 from './p1-usuario/seguhir-empresario-p1.component';
import { SeguhirEmpresarioP2Component }	 from './p2-beneficiarios/seguhir-empresario-p2.component';
import { SeguhirEmpresarioP3Component }	 from './p3-confirmacion/seguhir-empresario-p3.component';

import { SeguhirEmpresarioGuardService } from './seguhir-empresario-guard.service';
import { AuthenticationGuardService }	 from 'app/core/services/authentication/authentication-guard.service';

const seguhirEmpresarioRoutes: Routes = [
	{
		path: '',
		component: SeguhirEmpresarioComponent,
		canActivate: [ AuthenticationGuardService ],
		children: [
			{ path: '', redirectTo: '/emision/seguhirempresario/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirEmpresarioP1Component },
			{
				path: 'beneficiarios',
				component: SeguhirEmpresarioP2Component,
				canActivate: [ SeguhirEmpresarioGuardService ]
			},
			{
				path: 'confirmacion',
				component: SeguhirEmpresarioP3Component,
				canActivate: [ SeguhirEmpresarioGuardService ]
			}
		]
	}
];

@NgModule({
	imports:   [ RouterModule.forChild( seguhirEmpresarioRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ AuthenticationGuardService, SeguhirEmpresarioGuardService ]
})

export class SeguhirEmpresarioRoutingModule {}