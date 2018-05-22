const express = require('express')
const router = express.Router();
const course = require('./courseDAO');
const midware = require('../../utils/midwares');
//router.use('/register/course', midware.verifyToken);

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

router.post('/register/course', midware.verifyToken, async (req, res) => {
    try {
        console.log(req.body);
        course.postCourse(req.body, function (error, result, fields) {
            if (error) return error.message;
            res.status(200).send({
                'msg':'Curso cadastrado com sucesso',
                'result': result,
                'fields': fields
            });
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});

module.exports = router;