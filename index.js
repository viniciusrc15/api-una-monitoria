var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));

const monitorRoute = require('./modules/monitor/monitorRoute');

app.use(bodyParser.json());

app.use('/api', monitorRoute);

app.get('/', function (req, res) {
  res.status(200).send('Una Monitoria!');
});

app.listen(8100, function () {
  console.log('Servidor OK!! http://localhost:8100/ ');
});