const mongoose = require('mongoose')
const Tweet = require('../models/tweet')

const URI = 'mongodb://localhost/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function () {
    const filter = {
        _id: '62c48ed5dd564268b99a850e'
    }

	const updateParams = {
		title: 'Updated Title'
	}
	Tweet.updateOne(filter, updateParams)
		.then(console.log)
		.catch(console.error)
		.finally(() => db.close())
})
