var mysql=require('mysql')
var con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nivi',
    database: 'zoho'
})

// con.connect(function(err) {
//     if (err) {
//       console.error('Error connecting to database: ' + err.stack);
//       return;
//     }
  
//     console.log('Connected to database ');
//   });

  module.exports = con;