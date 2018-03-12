var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
// var connectionString = 
//   "mongodb://sri9:Ep7IBZl4EaFkqm1EInhNiqcMq2JPQpqiG1W7hZamXJBDR5rZgvxykmOFxu5xqVoPJn4edSrmsT1lLfphWWfijw==@sri9.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
// mongoose.connect(connectionString);

mongoose.connect('mongodb://sri9:Ep7IBZl4EaFkqm1EInhNiqcMq2JPQpqiG1W7hZamXJBDR5rZgvxykmOFxu5xqVoPJn4edSrmsT1lLfphWWfijw%3D%3D@sri9.documents.azure.com:10255/?ssl=true');

module.exports = {
	mongoose: mongoose
};