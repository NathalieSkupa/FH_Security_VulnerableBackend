const sqlite3 = require('sqlite3').verbose();

var db;

module.exports.connect = function() {
    db = new sqlite3.Database('./test.db');
    return db;
}

module.exports.close = function(db) {
    db.close();
}

module.exports.setup = function() {
    db = this.connect();
    console.log('database initialized')
    db.serialize(() => {
        console.log('checking if table exists')
        db.exec(`CREATE TABLE IF NOT EXISTS visits (firstName varchar(64), lastName varchar(64));`, (err, row) => {
            console.log(row);
            if (err) console.error(err.message);
            console.log('created visits table successfully');
        });
    });
    db.close();
}

module.exports.db = db;