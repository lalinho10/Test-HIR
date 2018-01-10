import { NgModule }				  from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { SeguhirVidaComponent }   from './seguhir-vida.component';
import { SeguhirVidaP1Component } from './seguhir-vida-p1.component';

const seguhirVidaRoutes: Routes = [
	{
		path: '',
		component: SeguhirVidaComponent,
		children: [
			{ path: '', redirectTo: '/emision/seguhirvida/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SeguhirVidaP1Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( seguhirVidaRoutes ) ],
	exports: [ RouterModule ]
})

export class SeguhirVidaRoutingModule {}