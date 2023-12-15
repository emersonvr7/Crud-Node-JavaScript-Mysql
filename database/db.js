const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_empleados'
});

conexion.connect((error) => {
    if (error) {
        console.error('el error de conexión es: ' +error);
        return
    }
    console.log('¡Conenctado a la DB!');
});

module.exports = conexion;