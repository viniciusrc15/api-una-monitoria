const mySql = require('../../utils/dbHelp');

module.exports.postMonitors = async (monitor, callback) => {
    try {
        let con = mySql.Connection();
        con.connect (async (err) => {
            if (err){
                console.log(err);
                return err.message;
            }
            console.log(monitor);
            await con.query('insert into monitor set ?', monitor, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}

module.exports.getMonitors = async (callback) => {
    try {
        let con = mySql.Connection();

        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from monitor', callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}