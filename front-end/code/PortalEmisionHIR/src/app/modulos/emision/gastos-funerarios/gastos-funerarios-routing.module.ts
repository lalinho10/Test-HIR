import { NgModule }					   from '@angular/core';
import { RouterModule, Routes }		   from '@angular/router';

import { GastosFunerariosComponent }   from './gastos-funerarios.component';
import { GastosFunerariosP1Component } from './gastos-funerarios-p1.component';

const gastosFunerariosRoutes: Routes = [
	{
		path: '',
		component: GastosFunerariosComponent,
		children: [
			{ path: '', redirectTo: '/emision/gastosfunerarios/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: GastosFunerariosP1Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( gastosFunerariosRoutes ) ],
	exports: [ RouterModule ]
})

export class GastosFunerariosRoutingModule {}