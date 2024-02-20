import http from 'http'
import assert from 'assert/strict'

export function testStatusCode(callback) {
	const options = {
		hostname: 'localhost',
		port: 3000,
		path: '/',
		method: 'GET'
	}

	const req1 = http.request(options, (res) => {
		console.log(`Here are the options: ${options}`)
		console.log('inside req1')
		assert.strictEqual(res.statusCode, 200)
		console.log('test one passed')
		callback()
	})
	console.log(``)

	req1.end()
}
