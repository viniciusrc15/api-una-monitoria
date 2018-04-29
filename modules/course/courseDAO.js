const mySql = require('../../utils/dbHelp');
const hash = require('../../utils/hash');
const course = require('./course');

module.exports.getCourse = async (callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('select * from curso', callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}

module.exports.postCourse = async (course, callback) => {
    try {
        let con = mySql.Connection();
        con.connect(async (err) => {
            if (err) {
                console.error('error connecting: ' + err.message);
                return err.message;
            }
            await con.query('insert into curso set ?', course, callback);
            con.end();
        });
    } catch (e) {
        return e.message;
    }
}