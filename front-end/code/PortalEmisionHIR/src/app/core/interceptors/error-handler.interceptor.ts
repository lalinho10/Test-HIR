import { Injectable }		from '@angular/core';
import { HttpErrorResponse,
		 HttpEvent,
		 HttpHandler,
		 HttpInterceptor,
		 HttpRequest }		from '@angular/common/http';

import { Observable }		from 'rxjs/Observable';
import							 'rxjs/add/operator/catch';
import							 'rxjs/add/observable/throw';

import { AppModalService }	from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
	constructor( private appModalService: AppModalService ){}

	intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		return next.handle( request ).catch( ( err: any ) => {
			let errorMessage: string = '';

			if ( err instanceof HttpErrorResponse ) {
				switch ( err.status ) {
					case 0:
						errorMessage = 'Error desconocido';
					break;
					case 404:
						errorMessage = 'Recurso no encontrado';
					break;
					case 500:
						errorMessage = 'Error de comunicación, por favor intenta nuevamente';
					break;
					default:
						//Mensajes de error definidos en la respuesta de los servicios.
					break;
				}

				this.appModalService.openModal( 'error', errorMessage );
			}

			return Observable.throw( err );
		});
	}
}