import { NgModule }						from '@angular/core';
import { RouterModule, Routes }			from '@angular/router';

import { ProductosComponent }			from './productos.component';
import { ProductosVidaComponent }		from './productos-vida.component';
import { ProductosAccidentesComponent } from './productos-accidentes.component';

const productosRoutes: Routes = [
	{ path: '', component: ProductosComponent },
	{ path: 'vida', component: ProductosVidaComponent },
	{ path: 'accidentes', component: ProductosAccidentesComponent }
];

@NgModule({
	imports: [ RouterModule.forChild( productosRoutes ) ],
	exports: [ RouterModule ]
})

export class ProductosRoutingModule {}