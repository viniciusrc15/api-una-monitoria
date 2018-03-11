const mySql = require('../../utils/dbHelp');

module.exports.getMonitors = async () => {

    try {
        let con = mySql.Teste();

        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            var x = await con.query('select * from monitor', async (error, results, fields) => {
                if (error) return error.message;
                console.log('resultado', results);
                con.end();
                return results;
            });
        });
    } catch (e) {
        return e.message;
    }

}