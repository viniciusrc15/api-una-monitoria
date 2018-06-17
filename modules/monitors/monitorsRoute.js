const express = require('express');
const router = express.Router();
const monitorsDAO = require('./monitorsDAO');
const midware = require('../../utils/midwares');

router.post('/monitors/register', midware.verifyToken, function (req, res) {

    let monitor = req.body;
    //console.log(monitor);
    try {
        monitorsDAO.postMonitors(monitor, function (error, result, fields) {
            if (error) {
                return res.status(500).send(error);
            }
            res.status(200).send('Monitor cadastrador com sucesso');
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/monitors', async (req, res) => {
    try {
        monitorsDAO.getMonitors(function (error, result, fields) {
            if (error){
                return res.status(500).send(error);
            };
            res.status(200).json(result);
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});

router.get('/monitors/whithout', async (req, res) => {
    try {
        monitorsDAO.getMonitorsWhithout(function (error, result, fields) {
            if (error){
                return res.status(500).send(error);
            };
            res.status(200).json(result);
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});

module.exports = router;