import { Component } from '@angular/core';
import { Location }  from '@angular/common';

@Component({
	selector: 'pehir-work-in-progress',
	templateUrl: 'work-in-progress.component.html',
	styleUrls: [ 'work-in-progress.component.css' ]
})

export class WorkInProgressComponent {
	constructor(
		private location: Location
	) {}

	fnRegresar(): void {
		this.location.back();
	}
}