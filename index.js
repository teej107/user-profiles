var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');

var profile = require('./controllers/profileCtrl');
var user = require('./controllers/userCtrl');

var port = 3000;
var corsOptions = {
    origin: 'http://localhost:' + port
};

var app = express();
app.use(express.static('./public'));
app.use(cors(corsOptions));
app.use(session(require('./config')));
app.use(bodyParser.json());

app.listen(port, function ()
{
   console.log('Listening now on port', port);
});

app.post('/api/login', user.login);
app.get('/api/profiles', profile.getFriendsProfiles);
