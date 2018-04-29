const express  = require('express');
const router = express.Router();
const disciplineDAO = require('./disciplineDAO');

//Passar id curso TODO
router.post('/register/discipline', async (req, res) => {
    let idCurso = req.params.idCurso;
    try {
        disciplineDAO.postDiscipline(req.body, function (error, results, field){
            if(error) return error.message;
            res.status(200).send('Disciplina Cadastrada com sucesso!');
            
        });
    } catch (error) {
        res.status(500).json(e);        
    }
});

module.exports = router;
