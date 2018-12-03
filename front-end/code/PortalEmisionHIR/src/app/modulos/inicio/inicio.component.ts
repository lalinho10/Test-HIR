import { Component } from '@angular/core';

@Component({
	selector: 'pehir-inicio',
	templateUrl: 'inicio.component.html'
})

export class InicioComponent {
	carouselImages: string[] = [
		'./assets/img/Banner_SeguHIRVida.jpg',
		'./assets/img/Banner_ProcuraVida.jpg',
		'./assets/img/Banner_GastosFunerarios.jpg',
		'./assets/img/Banner_SeguHIREmpresario.jpg',
		'./assets/img/Banner_APIndividual.jpg',
		'./assets/img/Banner_SeguBici.jpg'
	];
}