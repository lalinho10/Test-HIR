import { NgModule }						from '@angular/core';
import { RouterModule, Routes }			from '@angular/router';

import { SeguhirEmpresarioComponent }	from './seguhir-empresario.component';
import { SeguhirEmpresarioP1Component } from './seguhir-empresario-p1.component';
import { SeguhirEmpresarioP2Component } from './seguhir-empresario-p2.component';

const seguhirEmpresarioRoutes: Routes = [
	{
		path: '',
		component: SeguhirEmpresarioComponent,
		children: [
			{ path: '', redirectTo: '/emision/seguhirempresario/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirEmpresarioP1Component },
			{ path: 'beneficiarios', component: SeguhirEmpresarioP2Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( seguhirEmpresarioRoutes ) ],
	exports: [ RouterModule ]
})

export class SeguhirEmpresarioRoutingModule {}