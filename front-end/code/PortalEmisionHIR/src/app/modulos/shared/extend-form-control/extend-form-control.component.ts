import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'pehir-extend-form-control',
	templateUrl: 'extend-form-control.component.html'
})

export class ExtendFormControlComponent implements OnChanges {
	@Input() inputDirty: boolean;
	@Input() inputErrors: Object;
	@Input() formErrors: Object;

	private hasError: boolean;
	private errorMessage: string;

	private errorDefs: Object = 
	{
		required: 'Campo requerido',
		max: 'El campo excede el valor máximo válido',
		min: 'El campo no tiene el valor mínimo válido',
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
		rfc : 'Formato de RFC incorrecto',
		porcentaje: 'El porcentaje asigando es inválido'
	};

	ngOnChanges( changes: SimpleChanges ): void {
		this.hasError = false;
		this.errorMessage = '';

		let errors: any = ( changes.inputErrors ) ? changes.inputErrors.currentValue : this.inputErrors;

		if( !errors && changes.formErrors ) {
			errors = changes.formErrors.currentValue;
		}

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