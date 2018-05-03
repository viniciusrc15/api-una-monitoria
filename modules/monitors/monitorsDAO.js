const mySql = require('../../utils/dbHelp');

module.exports.postMonitors = async (callback) => {
    try {
        let con = mySql.Connection();
        con.connect (async (err) => {
            if (err){
                console.log(err);
                return err.message;
            }
            await con.query('insert into monitor ?', monitor, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}