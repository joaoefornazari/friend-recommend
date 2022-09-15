/*
	Todas as funções relativas a Relationship estão aqui.
*/
import { getPerson } from '../functions'

/**
 * Creates a relationship between two people.
 * @param {JSON} cpfs Two CPFs from two different people.
 * @param {array} people The people list.
 * @return {boolean}
 */
 export function createRelationship(people, cpfs) {
	const { cpf1, cpf2 } = cpfs

	const person1 = getPerson(people, cpf1)
	const person2 = getPerson(people, cpf2)
	console.log({
		cpfs, person1, person2
	})

	if (person1 === null || person2 === null) return false

	person1.friends.push(cpf2)
	person2.friends.push(cpf1)
	return true
}