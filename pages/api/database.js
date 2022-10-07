const { MongoClient } = require('mongodb')
export default async (req, res) => {
    const client = new MongoClient(process.env.MONGODBURL)
    const database = await client.db('test')
    console.log('Chegou aqui 1')
    const collection = await database.collection('devices')
    console.log('Chegou aqui 2')
    const {method} = req

    console.log(collection)
    const response = await collection.find({}).toArray()
    console.log('Chegou aqui 3')
    res.send(response)
}    