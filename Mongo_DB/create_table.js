// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb",{ useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));
