var express = require('express');
var bodyParser = require( 'body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();

// middleware - parses request before it goes below
app.use(bodyParser.json());

app.post('/todos',(req, res) =>{
	console.log(req.body);  // req.body is populated by bodyParser
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	})
	.catch((err) => {
		res.send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
})

//------------------------------------------------------------------------------------------------
// Playground code
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// var newTodo = new Todo({
// 	text: 'Eat cooked dinner',
// 	completed: false,
// 	completedAt: new Date().getMilliseconds()
// });
// var newTodo = new Todo({text: '   Some Text   '})
// newTodo.save()
// .then((doc) => {
// 	console.log('Saved todo', doc);
// })
// .catch((err) => {
// 	console.log(`Error saving ${err}`);
// });


// var newUser = new User({
// 	email: 'aaa@bbb.com'
// });
// newUser.save()
// .then((doc) => {
// 	console.log('Saved user', doc);
// })
// .catch((err) => {
// 	console.log(`Error saving ${err}`);
// });
