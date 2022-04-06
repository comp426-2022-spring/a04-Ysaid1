const database = require('better-sqlite3');

const db = new database('log.db')

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`)
let row = stmt.get();
if (row == undefined){
    console.log('Log database appears to be empty. Create log database...')
    const sq1Init = `
        CREATE TABLE access ( 
            id INTEGER PRIMARY KEY,
            remoteaddr TEXT,
            remoteuser TEXT,
            time TEXT,
            method TEXT,
            url TEXT,
            protocol TEXT,
            httpversion TEXT,
            secure TEXT,
            status TEXT,
            referer TEXT,
            useragent TEXT );
    `
    db.exec(sq1Init);
    console.log('Log Databse exists')
} else {
    console.log('Databse exists already')
}

module.exports = db;