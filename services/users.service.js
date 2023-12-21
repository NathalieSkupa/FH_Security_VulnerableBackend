const db = require('./database.service.js');


module.exports.getUsers = function(cb) {
    const database = db.connect();
    database.serialize(() => {
        database.all(`SELECT firstName, lastName from visits`, (err, row) => {
            if (err) console.error(err.message);
            console.log(row.firstName + "\t" + row.lastName);
            return cb(row);
        });
        db.close(database);
    });

}

module.exports.createUser = function(firstName, lastName) {
    const database = db.connect();
    database.serialize(() => {
        database.exec(`INSERT INTO visits (firstName, lastName) values ("${firstName}", "${lastName}")`, (err, row) => {
            if (err) console.error(err.message);
        });
        db.close(database);
    });

}