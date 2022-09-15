/*
	Todas as funções relativas a Person estão aqui.
*/

/**
 * Creates a person and inserts it on people list.
 * @param {JSON} person A JSON with cpf and name of the person.
 */
export function createPerson(person) {
	const newPerson = {
		cpf: person.cpf,
		name: person.name,
		friends: []
	}
	return newPerson
}

/**
 * Get a person from people list using its CPF.
 * @param {array} people The people list.
 * @param {string} cpf The CPF.
 * @returns {JSON} a Person object or 'null' if CPF doesn't exists
 */
export function getPerson(people, cpf) {
	const person = people.find(person => person.cpf === cpf)
	return typeof person === 'undefined' ? null : person
}
