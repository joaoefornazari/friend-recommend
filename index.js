import express from 'express'

import personRoutes from './person/routes.js'
import relationshipRoutes from './person/relationship/routes.js'
import recommendationRoutes from './person/recommendations/routes'
import bodyParser from 'body-parser'

export const app = express()
const PORT = '3000'

app.get('/', (req, res) => {
	res.status(200).send()
})

app.set('people', [])
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/person', personRoutes)
app.use(
	'/clean', 
	express.Router().delete('', (req, res) => {
		app.set('people', [])
		res.send(200)
	})
)

app.use('/relationship', relationshipRoutes)
app.use('/recommendations', recommendationRoutes)

app.listen(PORT, () => {
	console.log(`Listening on https://localhost:${PORT}`)
})
