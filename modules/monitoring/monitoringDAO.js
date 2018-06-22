const mySql = require('../../utils/dbHelp');

module.exports.postMonitoring = async (monitoring, callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.log("error connecting" + err);
                return err.message;
            }
            await con.query('insert into monitoria set ?', monitoring, callback);
            con.end();
        });
    } catch (e) {
        return e.message; 
    }
}

module.exports.getMonitoring = async (callback) => {
    try{
        let con = mySql.Connection();
        con.connect(async (err) => {
            if(err) {
                console.error('erro connecting', + err.message);
                return err.message;
            }
            await con.query('SELECT id_disciplina, nome FROM disciplina', callback);
            con.end;
        });
    }catch (e){
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
            await con.query('SELECT mt.id_monitoria, mo.nome as monitor, dis.nome as disciplina, cu.nome as curso, mt.horario, mt.localizacao FROM  monitor AS mo inner join monitoria  as mt on mo.id_monitor = mt.monitor_id_monitor inner join disciplina as dis on mt.disciplina_id_disciplina = dis.id_disciplina inner join curso_has_disciplina as ch on dis.id_disciplina = ch.disciplina_id_disciplina inner join curso as cu on ch.curso_id_curso = cu.id_curso WHERE cu.id_curso = ? and ativo=1  order by id_monitoria desc', course, callback);
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
            await con.query('SELECT mt.id_monitoria, mo.nome as monitor, dis.nome as disciplina, cu.nome as curso, mt.horario, mt.localizacao FROM  monitor AS mo inner join monitoria  as mt on mo.id_monitor = mt.monitor_id_monitor inner join disciplina as dis on mt.disciplina_id_disciplina = dis.id_disciplina inner join curso_has_disciplina as ch on dis.id_disciplina = ch.disciplina_id_disciplina inner join curso as cu on ch.curso_id_curso = cu.id_curso WHERE cu.id_curso = ? and dis.nome like ? and ativo=1', [course, nameMonitoring], callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}

module.exports.deleteMonitoring = async (idMonitoring, callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('UPDATE monitoria SET ativo = 0 WHERE id_monitoria=?', idMonitoring, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}