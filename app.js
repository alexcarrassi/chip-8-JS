
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

const app = express();
const http = require('http');
const server = http.createServer(app);

const appLocals = require("./app.locals");
app.locals = appLocals;

/**
 * Express configuration.
 */
app.set('host', '0.0.0.0');
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'assets'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));


/** Routing */
const pageController = require('./controllers/pageController');

app.get('/', pageController.home);

/** 
 * Start Express server.
 **/
server.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
  
module.exports = app;
  