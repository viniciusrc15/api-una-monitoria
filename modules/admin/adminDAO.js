const mySql = require('../../utils/dbHelp');
const hash = require('../../utils/hash');
const adm = require('./admin');

module.exports.postAdminRegister = async (admin, callback) => {
    admin.senha = hash.createHash(admin.senha);
    try {
        let con = mySql.Connection();

        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('insert into administrador set ?', admin, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }

}

module.exports.postAdminLogin = async (admin,callback) => {
    admin.senha = hash.createHash(admin.senha);
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from administrador where usuario = ? and senha = ?', [admin.usuario, admin.senha], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }

}
// let verifyToken = function (req, res, next) {
//     console.log('verificando token...')

//     let token = req.query.token || req.body.token || req.headers.token

//     jwt.verify(token, config.segredo, function (err, decoded) {

//         if (err) {

//             throw new Error(err);
//         }       
// });