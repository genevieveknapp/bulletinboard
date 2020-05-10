const mongodb = require('mongodb')
const connectionString = 'mongodb+srv://todoAppUser:Bird-Man88@cluster001-rugsw.gcp.mongodb.net/Bulletinboard?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})