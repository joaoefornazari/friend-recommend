import express from 'express'
import { createRelationship } from './functions'

const router = express.Router()

router.post('', (req, res) => {
	const cpfs = req.body
	const people = req.app.get('people')
	if (!createRelationship(people, cpfs)) {
		res.status(404).send('Not found.')
		return
	}
	res.status(200).send('Success')
})

export default router
