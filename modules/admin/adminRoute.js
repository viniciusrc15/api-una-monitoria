const express = require('express')
const router = express.Router();
const adminDAO = require('./adminDAO');
const jwt = require('jsonwebtoken');
const midware = require('../../utils/midwares');
router.use('/admin/login', midware.verifyToken);

router.post('/login', async (req, res) => {
    try {
      adminDAO.postAdminLogin(req.body, function (error, result, fields) {
        if(error){
          return res.status(500).send(error);
        }
        if (result.length > 0) {
          let token = jwt.sign({
            data: req.body.usuario
          }, 'secret', { expiresIn: '1h' });
          res.setHeader('Access-Token', token);
          res.setHeader('Access-Control-Expose-Headers', 'Access-Token');
          res.status(200).send('Logado com sucesso');
        } else {
          res.status(404).send('Usuário ou senha incorreto');
        }
      });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post('/admin/register', async (req, res) => {
  try {
    adminDAO.postAdminRegister(req.body, function (error, result, fields) {
      if(error){
        return res.status(500).send(error);
      }
      res.status(201).send('Cadastro feito com sucesso!');
    });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
