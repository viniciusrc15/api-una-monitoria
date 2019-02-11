const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
})

router.post('/', (req, res) => {
    const { subject, text, from } = req.body;
    console.log('email');
    const mailOption = {
        from: 'rafaejfhsdjkfhl@gmail.com',
        to: 'vinicius1595@gmail.com',
        subject: `${from} - ${subject}`,
        text
    }

    transporter.sendMail(mailOption, (error) => {
        if (error) {
            res.status(500).json({
                message: `Erro ao encaminhar email, 
                se quiser efetivar o contato mande um email diretamentte para ${process.env.user}`,
                error
            })
        }
        res.status(200).json({ message: `Email enviado com sucesso para ${process.env.user}`})
    })
});

module.exports = router;