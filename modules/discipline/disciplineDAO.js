const mySql = require('../../utils/dbHelp');

module.exports.postDiscipline = async (discipline, callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            console.log(discipline)
            await con.query('insert into disciplina set ?', discipline, callback);
            //await con.query('insert into curso_has_disciplina(curso_id_curso) values(?)', idCurso, callback);
            con.end();
        });
    } catch (error) {
        return error.message;
    }
}