const express = require('express');
const router = express.Router();
const monitorsDAO = require('./monitorsDAO');
const midware = require('../../utils/midwares');

router.post('/monitors/register', midware.verifyToken, function (req, res) {
    try {
        monitorsDAO.postMonitors(function (error, result, fields) {
            if (error) {
                return error.message;
            }
            res.status(200).send('Monitor cadastrador com sucesso');
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;