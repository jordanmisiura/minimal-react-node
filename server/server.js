const express = require('express'); 
const app = express(); 
const path = require('path');

process.title = 'mayurApp';

const PORT = 9888;

app.use(express.static(path.resolve(__dirname, '../client', 'build')));

//defined paths first 
app.get('/test', function(req, res) { 
	console.log("test api has been hit");
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ test: "blah"}));
	res.end('test api response'); //+ req.params.flavor); 
});

app.get('/api/movieimage', function(req, res) {
	console.log("movie image api has been hit");
	//res.setHeader('Content-Type', 'application/json');
	res.json({ test: "image"});
	res.end('movie image api response');
});

//then catchall path for serving client 
app.get('*', (req, res) => { 
	res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')); 
});

function handleError(res, errcode, message) { 
	res.writeHead(errcode, { "Content-Type" : "application/json" }); 
	res.end(JSON.stringify({ error: errcode, message: message}) + "\n"); 
}

app.listen(PORT, function() { console.log("server started on port: "+PORT); });