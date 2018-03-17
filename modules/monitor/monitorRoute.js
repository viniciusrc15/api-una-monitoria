const express = require('express')
const router = express.Router();
const monitorDAO = require('./monitorDAO');

router.get('/monitors', (req, res) => {

  try {
    monitorDAO.getMonitors(function (error, result, fields) {
      if (error) return error.message;
      res.status(200).json(result);
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
