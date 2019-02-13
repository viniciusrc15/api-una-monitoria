const verifyAuth = (req, res, next) => {
    if (req.headers.auth === process.env.auth) {
        next();
    } else {
        res.status(401).send('Não autorizado');
    }
}

module.exports = { verifyAuth }