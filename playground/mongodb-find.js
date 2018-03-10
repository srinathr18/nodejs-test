//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); // destructuring same as above

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if( err) {
		console.log('unable to connect to MongoDB server');
		return;
	}
	console.log('connected to MongoDB server');

	var db = client.db('TodoApp')

// QUERY all
	// find with no arg - returns all as a cursor 
	// toArray return a promise with all the data in the collection
	// db.collection('Todos').find().toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// })
	// .catch((err) => {
	// 	console.log("Error", err);
	// });

// QUERY by field
	// db.collection('Todos').find({completed: false}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// })
	// .catch((err) => {
	// 	console.log("Error", err);
	// });

// Query by ID
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5aa440c01b1eaf306816a618')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// })
	// .catch((err) => {
	// 	console.log("Error", err);
	// });

// COUNT
	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos: ${count}`);
	// })
	// .catch((err) => {
	// 	console.log("Error", err);
	// });

// COUNT
	db.collection('Todos').find().forEach((doc) => {
	 	console.log('Todos');
	 	console.log(JSON.stringify(doc, undefined, 2));
	}, (err) => {
		console.log("Error", err);
	});
	// commenting close
	//client.close();
});