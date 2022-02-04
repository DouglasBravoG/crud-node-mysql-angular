const mysql = require('mysql');

const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'db_basico'
});


conexion.connect((err)=>{
	if (err) {
		console.log('No conexion' + err);
	}else{
		console.log('Conexion exitosa');
	}
});


module.exports = conexion;