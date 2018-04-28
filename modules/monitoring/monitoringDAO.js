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
            await con.query('SELECT d.nome as nome_disciplina,mo.nome as nome_monitoria,c.nome as come_curso,m.horario,m.localizacao FROM monitoria AS m INNER JOIN curso_has_disciplina AS chas ON (m.disciplina_id_disciplina = chas.disciplina_id_disciplina) INNER JOIN disciplina AS d ON (m.disciplina_id_disciplina = d.id_disciplina) INNER JOIN monitor AS mo ON (m.monitor_id_monitor = mo.id_monitor) INNER JOIN curso AS c ON (chas.curso_id_curso=?)', course, callback);
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
            await con.query('SELECT d.nome as nome_disciplina,mo.nome as nome_monitoria,c.nome as come_curso,m.horario,m.localizacao FROM monitoria AS m INNER JOIN curso_has_disciplina AS chas ON (m.disciplina_id_disciplina = chas.disciplina_id_disciplina) INNER JOIN disciplina AS d ON (m.disciplina_id_disciplina = d.id_disciplina) INNER JOIN monitor AS mo ON (m.monitor_id_monitor = mo.id_monitor) INNER JOIN curso AS c ON (chas.curso_id_curso=?)  and d.nome like ?', [course, nameMonitoring], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}