// Archivo con variables de ambiente de Desarrollo.
// Este es el ambiente que se ocupa para desarrollar la capa de front-end apuntando a un rebotador.
// Al ejecutar 'ng build' o 'ng serve' se utilizará este archivo (environment.ts) por default.

export const environment = {
	appHost: 'http://localhost:3005',
	environmentName: 'Development',
	development: true,
	production: false,
	recaptchaSiteKey: '6LfJhU8UAAAAANQjlRZ0Byk4M5iG7vCaCtxzLuof'
};
