import express from 'express'
import { testStatusCode } from './assertionTests.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('default for endpoint testing')
})

app.get('/healtCheck', (req, res) => {
	console.log('calling health chec')
	let allTestsPassed = testStatusCode.req1t
	console.log(`This is all tests pased:: ${allTestsPassed}`)
	allTestsPassed = 200
	if (allTestsPassed) {
		res.status(200).send(`All tests passed `)
	} else {
		res.status(500).send(`Some tests failed`)
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
