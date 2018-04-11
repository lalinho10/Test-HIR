import { Component, OnInit }   from '@angular/core';

import { LoadingModalService } from './loading-modal.service';

@Component({
	selector: 'pehir-loading-modal',
	templateUrl: 'loading-modal.component.html',
	styleUrls: [ 'loading-modal.component.css' ]
})

export class LoadingModalComponent implements OnInit {
	calls: number;
	isVisible: boolean = false;

	constructor( private loadingModalService: LoadingModalService ) {}

	ngOnInit() {
		this.loadingModalService.setLoadingModal( this );
	}

	setCalls( calls: number ): void {
		this.calls = calls;
	}

	openModal(): void {
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}
}