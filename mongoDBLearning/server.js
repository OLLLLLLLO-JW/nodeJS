const { MongoClient } = require('mongodb')
const uri = require('./atlas_url')

const client = new MongoClient(uri)
const dbname = 'sample_analytics'
// const searchValue = { products: { $elemMatch: { $eq: 'InvestmentFund' } } } // element match
// const searchValue = {
// 	transactions: {
// 		$elemMatch: { transaction_code: 'sell', amount: { $lt: 20 } }
// 	}
// } // sub array match

const searchValue = { limit: 9000 }

const sortOn = { account_id: -1 }
const collectionName = 'accounts'
const replaceString = { name: 'Laren Mike' }

const connectToDatabase = async () => {
	try {
		await client.connect()
		return client.db(dbname)
	} catch (err) {
		console.error(`Error connecting to DB ${err}`)
	}
}

const main = async () => {
	try {
		const db = await connectToDatabase()
		await findMethod(db, collectionName, searchValue)
		// await updateMethod(db, collectionName, searchValue, replaceString)
	} catch (err) {
		console.error(`Error calling connection ${err}`)
	} finally {
		console.log('Now Closing')
		await client.close()
	}
}

const updateMethod = async (dbClient, colName, searchFilter, replaceString) => {
	const collection = dbClient.collection(colName)
	const filter = searchFilter
	const options = ''
	try {
		const result = await collection.updateOne(filter, {
			$set: { name: ['Laren Mike', 'new name here'] }
		})
		console.log(result)
	} catch (err) {
		console.error(err)
	}
}

const findMethod = async (dbClient, colName, searchValue) => {
	const collection = dbClient.collection(colName)
	const projection = { products: 0, limit: 0 }
	const cursor = collection.findOne(searchValue, projection)
	const numberOfDocs = await collection.countDocuments(searchValue)
	console.log(`this is the count:: ${numberOfDocs} `)
	// const list = await cursor.toArray()
	console.log(cursor)
}

main()
