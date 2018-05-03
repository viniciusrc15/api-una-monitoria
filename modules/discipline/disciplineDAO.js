const mySql = require('../../utils/dbHelp');

module.exports.postDiscipline = async (discipline, idCurso, callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            console.log(discipline)
            let id_disciplina;
            await con.query('insert into disciplina set ?', discipline, function (err, result) {
                if (err) throw err;
                console.log("result " + result.insertId);
                id_disciplina = result.insertId;
                console.log("teste " + id_disciplina);
                con.query('insert into curso_has_disciplina(curso_id_curso, disciplina_id_disciplina) values(?, ?)', [idCurso, id_disciplina], callback);
                con.end(); 
            });
        });
    } catch (error) {
        return error.message;
    }
}