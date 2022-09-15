
import { getPerson } from './person/functions'

/**
 * Verify if CPF is bigger than 11 characters
 * or if CPF already exists on people list.
 * @param {array} people The people list.
 * @param {string} cpf The cpf.
 * @returns {number}
 */
export function verifyCPF(people, cpf) {
	if (cpf.length != 11) return 1
	if (getPerson(people, cpf) !== null) return 2
	return 3
}
