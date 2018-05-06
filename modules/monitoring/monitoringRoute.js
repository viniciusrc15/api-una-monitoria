const express = require('express')
const router = express.Router();
const monitoringDAO = require('./monitoringDAO');
const midware = require('../../utils/midwares');

router.post('/monitoring/register', midware.verifyToken, async (req, res) => {
  let monitoring = req.body;
  try {
    monitoringDAO.postMonitoring(monitoring, function (error, result, fields) {
      if (error) {
        return error.message;
      } else {
        res.status(200).send('Monitoria casdastrada com sucesso!');
      }
    });
  } catch (e) {
    res.status(500).status.json(e.message);
  }
});



router.get('/monitoring/:course', async (req, res) => {
  try {
    let course = req.params.course;
    monitoringDAO.getMonitoringByCurso(function (error, result, fields) {
      if (error) return error.message;
      res.status(200).json(result);
    }, course);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get('/monitoring/:course/:monitoring', async (req, res) => {
  try {
    let course = req.params.course;
    let monitoring = req.params.monitoring;
    monitoringDAO.getByCursoAndMonitoring(function (error, result, fields) {
      if (error) return error.message;
      res.status(200).json(result);
    }, course, monitoring);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
