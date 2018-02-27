import { Injectable } from '@angular/core';

import { LoadingModalComponent } from './loading-modal.component';

@Injectable()
export class LoadingModalService {
	private calls: number;
	private loadingModal: LoadingModalComponent;

	constructor() {
		this.calls = 0;
	}

	setLoadingModal( loadingModal: LoadingModalComponent ) {
		this.loadingModal = loadingModal;
	}

	openModal(): void {
		if ( this.calls === 0 ) {
			this.loadingModal.openModal();
		}
		this.incrementCalls();
		this.loadingModal.setCalls( this.calls );
	}

	closeModal(): void {
		if ( this.calls <= 0 ) {
			console.error( 'Se intentó cerrar una modal de carga que no se ha abierto.' );
		} else if ( this.calls === 1 ) {
			this.loadingModal.closeModal();
		}
		this.decrementCalls();
		this.loadingModal.setCalls( this.calls );
	}

	incrementCalls(): void {
		this.calls++;
	}

	decrementCalls(): void {
		this.calls--;
	}
}