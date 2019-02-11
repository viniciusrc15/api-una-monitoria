var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));

const monitoringRoute = require('./modules/monitoring/monitoringRoute');
const adminRoute = require('./modules/admin/adminRoute');
const courseRoute = require('./modules/course/courseRoute');
const disciplineRoute = require('./modules/discipline/disciplineRoute');
const monitorsRoute =  require('./modules/monitors/monitorsRoute');
const sendEmail = require('./modules/sendEmail/sendEmailRoute');

app.use(bodyParser.json());

app.use('/api/monitoring', monitoringRoute);
app.use('/api/monitors', monitorsRoute);
app.use('/api/admin', adminRoute);
app.use('/api/course', courseRoute);
app.use('/api/discipline', disciplineRoute);
app.use('/api/email', sendEmail);

app.get('/', function (req, res) {
  res.status(200).send('Una Monitoria!');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Servidor OK!! http://localhost:',port);
});
