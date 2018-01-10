import { NgModule }				  from '@angular/core';
import { RouterModule, Routes }	  from '@angular/router';

import { ProcuraVidaComponent }	  from './procura-vida.component';
import { ProcuraVidaP1Component } from './procura-vida-p1.component';
import { ProcuraVidaP2Component } from './procura-vida-p2.component';

const procuraVidaRoutes: Routes = [
	{
		path: '',
		component: ProcuraVidaComponent,
		children: [
			{ path: '', redirectTo: '/emision/procuravida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: ProcuraVidaP1Component },
			{ path: 'beneficiarios', component: ProcuraVidaP2Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( procuraVidaRoutes ) ],
	exports: [ RouterModule ]
})

export class ProcuraVidaRoutingModule {}