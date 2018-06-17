const express = require('express')
const router = express.Router();
const monitoringDAO = require('./monitoringDAO');
const midware = require('../../utils/midwares');

router.post('/monitoring/register', midware.verifyToken, async (req, res) => {
  let monitoring = req.body;
  console.log(monitoring);
  monitoring.ativo = "1";
  console.log(monitoring);
  try {
    monitoringDAO.postMonitoring(monitoring, function (error, result, fields) {
      console.log('entrou no callback');
      if (error) {
        console.log(error.Error);
        return res.status(500).send(error)
        
      } else {
        res.status(200).send('Monitoria cadastrada com sucesso!');
      }
    });
  } catch (e) {
    res.status(500).status.json(e.message);
  }
});

router.get('/monitoring/', async (req, res) => {
    try{
    monitoringDAO.getMonitoring(function(error, result, fields){
      if(error){
        console.log(error);
        return error.message;
      }
      res.status(200).json(result);
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get('/monitoring/:course', async (req, res) => {
  try {
    let course = req.params.course;
    monitoringDAO.getMonitoringByCurso(function (error, result, fields) {
      if (error){
        console.log(error);
        return res.status(500).json(error);
      }
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
      if(error){
        return res.status(500).send(error);
      }
      res.status(200).json(result);
    }, course, monitoring);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete('/monitoring/delete/:id', midware.verifyToken, async (req, res) => {
  let idMonitoring = req.params.id;
  try {
    monitoringDAO.deleteMonitoring(idMonitoring, function (error, result, fields){
        if(error){
          return res.status(500).send(error);
        }
        res.status(200).send('Monitoria deletada com sucesso');
      });
  } catch (error) {
      res.status(400).json(e.message);
  }
});


module.exports = router;
