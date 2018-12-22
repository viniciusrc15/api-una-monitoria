const express = require('express')
const router = express.Router();
const course = require('./courseDAO');
const midware = require('../../utils/midwares');
//router.use('/register/course', midware.verifyToken);

router.get('/', async (req, res) => {
    try {
        course.getCourse(function (error, result, fields) {
            if(error){
                return res.status(500).send(error);
            }
            res.status(200).json(result);
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
});

router.post('/register', midware.verifyToken, async (req, res) => {
    try {
        course.postCourse(req.body, function (error, result, fields) {
            if(error){
                return res.status(500).send(error);
            }
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
