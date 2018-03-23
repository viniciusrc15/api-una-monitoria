const express = require('express')
const router = express.Router();
const adminDAO = require('./adminDAO');

router.post('/admin/login', async (req, res) => {
  try {
    adminDAO.getAdmin(function (error, result, fields) {
      
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.post('/admin/register', async (req, res) => {
  try {
    adminDAO.getAdmin(admin, function (error, result, fields) {
      
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
