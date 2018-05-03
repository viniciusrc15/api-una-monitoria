const mySql = require('../../utils/dbHelp');

module.exports.postMonitoring = async (callback) => {
    try {
        con.connect(async (err) => {
            if (err) {
                console.log("error connecting" + err);
                return err.message;
            }
            await con.query('insert into monitoria', monitoria, callback);
            con.end;
        });
    } catch (e) {
        return e.message; 
    }
}

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
            await con.query('SELECT mo.nome as monitor, dis.nome as disciplina, cu.nome as curso, mt.horario, mt.localizacao FROM  monitor AS mo inner join monitoria  as mt on mo.id_monitor = mt.monitor_id_monitor inner join disciplina as dis on mt.disciplina_id_disciplina = dis.id_disciplina inner join curso_has_disciplina as ch on dis.id_disciplina = ch.disciplina_id_disciplina inner join curso as cu on ch.curso_id_curso = cu.id_curso WHERE cu.id_curso = ?', course, callback);
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
            await con.query('SELECT mo.nome as monitor, dis.nome as disciplina, cu.nome as curso, mt.horario, mt.localizacao FROM  monitor AS mo inner join monitoria  as mt on mo.id_monitor = mt.monitor_id_monitor inner join disciplina as dis on mt.disciplina_id_disciplina = dis.id_disciplina inner join curso_has_disciplina as ch on dis.id_disciplina = ch.disciplina_id_disciplina inner join curso as cu on ch.curso_id_curso = cu.id_curso WHERE cu.id_curso = ? and dis.nome like ?', [course, nameMonitoring], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}