const mySql = require('../../utils/dbHelp');

module.exports.getMonitoring = async (callback) => {
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