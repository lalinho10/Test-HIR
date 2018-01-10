import { NgModule }						from '@angular/core';
import { RouterModule, Routes }			from '@angular/router';

import { SeguhirEmpresarioComponent }	from './seguhir-empresario.component';
import { SeguhirEmpresarioP1Component } from './seguhir-empresario-p1.component';

const seguhirEmpresarioRoutes: Routes = [
	{
		path: '',
		component: SeguhirEmpresarioComponent,
		children: [
			{ path: '', redirectTo: '/emision/seguhirempresario/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirEmpresarioP1Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( seguhirEmpresarioRoutes ) ],
	exports: [ RouterModule ]
})

export class SeguhirEmpresarioRoutingModule {}