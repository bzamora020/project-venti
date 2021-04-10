const mysql = require('mysql');
const db = mysql.createConnection({
    host     : process.env.VENTI_DB_HOST,
    user     : 'root',
    password : process.env.VENTI_DB_SECRET
});
  
db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});

module.exports = db;