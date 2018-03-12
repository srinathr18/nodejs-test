//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); // destructuring same as above

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if( err) {
		console.log('unable to connect to MongoDB server');
		return;
	}
	console.log('connected to MongoDB server');

	var db = client.db('TodoApp')

	// findOneAndUpdate
	db.collection('Todos').findOneAndUpdate({text: 'Walk the dog'}, 
		{
			$set: {text: 'Walk the cat', completed: true}
		}, {
			returnOriginal: false
		})
	.then((docs) => {
	 	console.log('Todos deleted');
	 	console.log(JSON.stringify(docs, undefined, 2));
	})
	.catch((err) => {
		console.log("Error!!")
	})

	// commenting close
	//client.close();
});