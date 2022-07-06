const mongoose = require('mongoose')
const Tweet = require('../models/tweet')

const URI = 'mongodb://localhost/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function () {
	const firstTweet = {
		title: 'This is a title',
		body: 'This is the body :)',
		author: 'Beth P',
	}
	Tweet.create(firstTweet)
		.then(console.log)
		.catch(console.error)
		.finally(() => db.close())
})
