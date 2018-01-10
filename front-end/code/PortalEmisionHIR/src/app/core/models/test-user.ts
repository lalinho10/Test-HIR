export class TestUser {
	id: string;
	name: string;
	username: string;
	email: string;

	constructor( user: TestUser ) {
		this.id = user.id;
		this.name = user.name;
		this.username = user.username;
		this.email = user.email;
	}
}