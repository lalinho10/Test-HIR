import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: 'pehir-progress-control',
	templateUrl: 'progress-control.component.html',
	styleUrls: [ 'progress-control.component.css' ]
})

export class ProgressControlComponent implements OnInit {
	@Input() numSteps: number;
	@Input() selStep: number;

	stepsClass: Array<String> = new Array<String>();

	ngOnInit() {
		for( let i = 0; i < this.numSteps; i++ ) {
			let stepClasses: string = 'progress-step';

			if( i == ( this.selStep - 1 ) ) {
				stepClasses = stepClasses + ' active';
			}

			this.stepsClass.push( stepClasses );
		}
	}
}