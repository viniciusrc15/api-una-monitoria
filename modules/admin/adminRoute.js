const express = require('express')
const router = express.Router();
const adminDAO = require('./adminDAO');


router.post('/admin/login', async (req, res) => {
  try {
    adminDAO.postAdminLogin(req.body, function (error, result, fields) {
      console.log(result);
      if(result.length > 0){
        res.status(200).send('Logado com sucesso');
      } else {
        res.status(403).send('Usuário ou senha incorreto');
      }
    });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post('/admin/register', async (req, res) => {
  try {
    adminDAO.postAdminRegister(req.body, function (error, result, fields) {
      res.status(201).send('Cadastro feito com sucesso!');
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
