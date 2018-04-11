import { Component } from '@angular/core';

@Component({
	selector: 'pehir-bienvenida',
	templateUrl: './bienvenida.component.html'
})

export class BienvenidaComponent {
	loggedUser: string = 'Pancho Pantera Brown';

	today: Date = new Date();
	lastAccess: Date = new Date();

	constructor() {
		const TWO_DAYS: number = 2*24*60*60*1000;
		this.lastAccess.setTime( this.today.getTime() - TWO_DAYS );
	}
}