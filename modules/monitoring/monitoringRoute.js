const express = require('express')
const router = express.Router();
const monitoringDAO = require('./monitoringDAO');

router.get('/monitoring', async (req, res) => {

  try {
    monitoringDAO.getMonitoring(function (error, result, fields) {
      if (error) return error.message;
      res.status(200).json(result);
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
