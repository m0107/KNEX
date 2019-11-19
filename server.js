var express = require('express');
var bodyParser = require('body-parser')
var port = process.env.PORT  || 8000;
var knex = require('./db/knex');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false }));

/**
 * Get request - short hand
 */
app.get('/todos', function (req, res) {
	knex.select().from('todos')
		.then(function(todos) {
			res.send(todos);
		})
})

/**
 * Get request - ID
 */
app.get('/todos/:id', function (req, res) {
	knex.select()
		.from('todos')
		.where('id',req.params.id)
		.then(function(todos) {
			res.send(todos);
		})
})


/**
 * Post request - short hand
 */
app.post('/todos', function (req, res) {
	knex('todos').insert({
		title: req.body.title,
		user_id: req.body.user_id
	})
	.then(function() {
		knex.select().from('todos').where('user_id',1)
		.then(function(todos) {
			res.send(todos);
		})	
	})
})



app.listen(port, function() {
	console.log("Listening on port: ", port);
})