import { Injectable }		   from '@angular/core';
import { HttpRequest,
		 HttpResponse,
		 HttpHandler,
		 HttpEvent,
		 HttpInterceptor }	   from '@angular/common/http';
import { Observable }		   from 'rxjs/Observable';
import 								'rxjs/add/operator/do';

import { LoadingModalService } from 'app/core/components/loading-modal/loading-modal.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
	constructor( private loadingModalService: LoadingModalService ){}

	intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		this.loadingModalService.openModal();

		return next.handle( request ).do( ( event: HttpEvent<any> ) => {
			if ( event instanceof HttpResponse ) {
				this.loadingModalService.closeModal();
			}
		}, ( err: any ) => {
			this.loadingModalService.closeModal();
		});
	}
}