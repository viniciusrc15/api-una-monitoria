const mySql = require('../../utils/dbHelp');

module.exports.getAdmin = async (callback) => {
    try {
        let con = mySql.Connection();

        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from admin', callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }

}

module.exports.postAdmin = async (admin,callback) => {
    try {
        let con = mySql.Connection();

        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('insert into admin set ?',admin, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }

}