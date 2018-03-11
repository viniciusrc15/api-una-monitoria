const express = require('express')
const router = express.Router();
const monitorDAO = require('./monitorDAO');

router.get('/monitors', async (req, res) => {

  try {
    let monitors = await monitorDAO.getMonitors();
    res.status(200).send(monitors);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
