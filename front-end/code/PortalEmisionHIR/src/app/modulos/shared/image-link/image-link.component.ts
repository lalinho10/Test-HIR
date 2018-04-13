import { Component, Input, OnInit } from '@angular/core';
import { Router }					from '@angular/router';

@Component({
	selector: 'pehir-image-link',
	templateUrl: 'image-link.component.html',
	styleUrls: [ 'image-link.component.css' ]
})

export class ImageLinkComponent {
	@Input() imagePath: string;
	@Input() linkLabel: string;
	@Input() linkPath: string;

	constructor( private router: Router ) {}

	ngOnInit() {
		if( this.imagePath === '' || this.imagePath === undefined ) {
			this.imagePath = './assets/img/sinImagen.png';
		}
	}

	navigateTo(): void {
		this.router.navigateByUrl( this.linkPath );
	}
}