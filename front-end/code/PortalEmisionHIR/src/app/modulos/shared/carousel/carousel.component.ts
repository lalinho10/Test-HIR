import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'pehir-carousel',
	templateUrl: 'carousel.component.html',
	styleUrls: [ 'carousel.component.css' ]
})

export class CarouselComponent implements OnInit {
	@Input() carouselImages: string[];

	selImage: number = 1;

	ngOnInit() {
		setInterval( () => this.fnMove( 1 ), 3000 );
	}

	fnMove( i: number ): void {
		this.selImage = this.selImage + i;

		if( this.selImage > this.carouselImages.length ) {
			this.selImage = 1;
		}
		if( this.selImage < 1 ) {
			this.selImage = this.carouselImages.length;
		}
	}
}