// Archivo con variables de ambiente Beta.
// Este es el ambiente de integración de las diferentes capas de un proyecto.
// Al ejecutar 'ng build --env=beta' o 'ng serve --env=beta' se utilizará este
// archivo (environment.beta.ts) en vez del default (environment.ts)

export const environment = {
	appHost: 'http://192.168.10.39:8080/service-rest/dtiServices',
	environmentName: 'Beta',
	development: false,
	production: false
};