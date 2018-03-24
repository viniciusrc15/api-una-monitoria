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
    console.log(admin)
    admin.senha = hash.createHash(admin.senha);
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            var resp = await con.query('select * from administrador where usuario = ? and senha = ?', [admin.usuario, admin.senha], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }

}