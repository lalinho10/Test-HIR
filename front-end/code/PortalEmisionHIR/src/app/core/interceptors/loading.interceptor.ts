import { Injectable }											from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor }	from '@angular/common/http';

import { LoadingModalService }									from './loading-modal.service';

export class LoadingInterceptor implements HttpInterceptor {
	constructor( private loadingModalService: LoadingModalService ){}

	intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
	}
}