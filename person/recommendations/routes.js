import express from 'express'
import { getRecommendations } from './functions'
import { verifyCPF } from '../../helpers'

const router = express.Router()

router.get('/:CPF', (req, res) => {
	const { CPF } = req.params
	const people = req.app.get('people')

	const cpfHasError = verifyCPF(people, CPF)
	if (cpfHasError === 1) {
		res.status(400).send('Bad Request.')
		return
	}
	const recommendations = getRecommendations(people, CPF)
	if (recommendations === null) {
		res.status(404).send('Not found.')
		return
	}
	res.status(200).send(recommendations)
})

export default router
