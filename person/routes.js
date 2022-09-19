import express from 'express'
import { createPerson, getPerson } from './functions'
import { verifyCPF } from '../helpers'

const router = express.Router()

router.post('', async (req, res) => {
	const { cpf, name } = req.body
	const people = req.app.get('people')

	const cpfHasError = verifyCPF(people, cpf)
	if (cpfHasError !== 3) {
		res.send(400)
		return
	}

	people.push(createPerson({ cpf, name }))
	req.app.set('people', people)
	res.status(200).send('Success')
})

router.get('/:CPF', (req, res) => {
	const people = req.app.get('people')
	const { CPF } = req.params

	const person = getPerson(people, CPF)

	if (person === null) {
		res.status(400).send('CPF não encontrado.')
		return
	}
	res.status(200).send({
		cpf: person.cpf,
		name: person.name
	})
})

export default router
