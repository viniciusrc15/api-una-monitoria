const express = require('express')
const router = express.Router();
const course = require('./courseDAO');
const jwt = require('jsonwebtoken');
const midware = require('../../utils/midwares');
router.use('/register/course', midware.verifyToken);

router.get('/course', async (req, res) => {
    try {
        course.getCourse(function (error, result, fields) {
            if (error) return error.message;
            res.status(200).json(result);
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});

router.post('/register/course', async (req, res) => {
    try {
        course.postCourse(req.body, function (error, result, fields) {
            if (error) return error.message;
            res.status(200).send('Curso cadastrado com sucesso');
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});