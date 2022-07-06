const mongoose = require('mongoose')
const Tweet = require('../models/tweet')

const URI = 'mongodb://localhost:27017/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function () {
	Tweet.find()
    .then(console.log)
    .catch(console.error)
    .finally(() => db.close())
})
