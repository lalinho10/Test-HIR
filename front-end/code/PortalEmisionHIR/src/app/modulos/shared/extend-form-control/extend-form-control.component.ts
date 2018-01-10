import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'pehir-extend-form-control',
	templateUrl: 'extend-form-control.component.html'
})

export class ExtendFormControlComponent implements OnChanges {
	@Input() inputDirty: boolean;
	@Input() inputErrors: Object;

	private hasError: boolean;
	private errorMessage: string;

	private errorDefs: Object = 
	{
		required: 'Campo requerido',
		maxlength: 'El campo excede el número máximo de caracteres permitidos',
		minlength: 'El campo no tiene el número mínimo de caracteres permitidos',
		pattern: 'El formato del dato capturado es incorrecto',
		email: 'Formato de correo electrónico incorrecto',
		celular: 'Formato de celular incorrecto',
		telefono: 'Formato de telefono incorrecto',
		codigo: 'Formato de código incorrecto',
		contrasena: 'Formato de contraseña incorrecto',
		igualdadContrasenas: 'Las contraseñas son diferentes',
		nombre: 'El nombre contiene caracteres no permitidos',
		apellido: 'El apellido contiene caracteres no permitidos',
		rfc : 'Formato de RFC incorrecto'
	};

	ngOnChanges( changes: SimpleChanges ): void {
		//debugger;
		this.hasError = false;
		this.errorMessage = '';
		
		if( changes.inputErrors ) {	
			let errors: any = changes.inputErrors.currentValue;

			if ( errors && this.inputDirty ) {
				Object.keys( this.errorDefs ).some( key => {
					if ( errors[ key ] ) {
						this.errorMessage = this.errorDefs[ key ];
						this.hasError = true;
						return true;
					}
				});
			}
		}
	}
}