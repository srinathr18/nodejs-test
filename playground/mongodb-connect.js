//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); // destructuring same as above

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if( err) {
		console.log('unable to connect to MongoDB server');
		return;
	}
	console.log('connected to MongoDB server');

	var db = client.db('TodoApp')
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if( err ) {
	// 		return console.log('unable to insert todo', err);
	// 	}
	// 	// ops has all documents
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// INSERT data ( collection will be creted if it does not exist )
	db.collection('Users').insertOne({
		name: 'Sri',
		age: 54,
		location: 'Mason OH'
	}, (err, result) => {
		if( err ) {
			return console.log('unable to insert user', err);
		}
		// ops has all documents
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	client.close();
});