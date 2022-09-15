/**
 * Todas as funções relativas a Recommendations estão aqui.
 */
import { getPerson } from "../functions"

/**
 * Recommends friends for the inputted CPF.
 * @param {array} people The people list.
 * @param {string} cpf The CPF.
 * @returns {array} An array with all the CPFs recommended.
 */
 export function getRecommendations(people, argCPF) {

	const person = getPerson(people, argCPF)
	if (person === null) {
		return null
	}
	const friendsCPFs = person.friends
	const ranking = []
	const friends = []

	friendsCPFs.forEach(cpf => {
		ranking.push({ friendsInCommon: 0, cpf: '' })
		friends.push(getPerson(people, cpf))
 	})

	friends.forEach(person => {
		const friends2nd = []
		person.friends.forEach(cpf => {
			if (cpf !== argCPF) friends2nd.push(getPerson(people, cpf))
		})

		friends2nd.forEach(friend => {
			const commonFriends = friend.friends.filter(friendCPF => friendsCPFs.find(cpf => cpf === friendCPF))
			const commonFriendsCount = commonFriends.length

			const maxIndex = ranking.findIndex(person => person.friendsInCommon > commonFriendsCount)
			if (maxIndex !== 1) {
				ranking.pop()
				ranking.unshift({ friendsInCommon: commonFriendsCount, cpf: friend.cpf })
			}
		})

	})

	return ranking.map(friend => { if (friend.friendsInCommon > 0) return friend.cpf })

}