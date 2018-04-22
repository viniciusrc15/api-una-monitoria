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

module.exports.getMonitoringByCurso = async (callback, course) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from monitoria as m inner join curso as c on m.idCurso=?', course, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}

module.exports.getByCursoAndMonitoring = async (callback, course, monitoring) => {
    let nameMonitoring = '%' + monitoring + '%';
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from monitoria as m inner join curso as c on m.idCurso=? and m.nome like ?', [course, nameMonitoring], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}