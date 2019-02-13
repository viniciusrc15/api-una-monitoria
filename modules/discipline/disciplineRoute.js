const express  = require('express');
const router = express.Router();
const disciplineDAO = require('./disciplineDAO');
const { verifyToken } = require('../../utils/midwares');

router.post('/register/:idCurso', verifyToken, async (req, res) => {
    let idCurso = req.params.idCurso;
    try {
        disciplineDAO.postDiscipline(req.body, idCurso, function (error, results, field){
            if(error){
                return res.status(500).send(error);
            }
            res.status(200).send('Disciplina Cadastrada com sucesso!');
            
        });
    } catch (error) {
        res.status(500).json(e);        
    }
});

module.exports = router;
