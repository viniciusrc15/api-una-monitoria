const jwt = require('jsonwebtoken')

let timeLog = (req, res, next) => {
    console.log('Tempo: ', new Date(Date.now()))
    next()
}

let infRoute = (options) => {
    return function (req, res, next) {
        console.log("Rota: " + options.nameRoute)
        next()
    }
}

let verifyToken = (req, res, next) => {
    console.log('verificando token...')

    let token = req.query.token || req.body.token || req.headers.token

    jwt.verify(token, 'secret', function (err, decoded) {
        if (err) {
            throw new Error(err);
        }
    });
    next()
}

module.exports = { timeLog, infRoute, verifyToken }