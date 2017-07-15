const Express = require('express');
const path    = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser')

const app = Express();

app.use(Express.static('dist'));
app.set('views', __dirname);

/**
 * Adding bodyParser so that post request data can be moved to req.body
 */
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

console.log('Hey name', __dirname);

// app.set('view engine', 'handlebars');
app.use('/api', routes);

app.get('/*', function(req, res) {
    res.sendFile(path.join(process.cwd(), '/dist/index.html'));
});


app.listen(8080);

console.log('Express app listening on ' + 8080);
