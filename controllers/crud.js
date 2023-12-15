const conexion = require('../database/db');


require('../database/db');

exports.save = (req, res) =>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const documento = req.body.documento;
    const correo = req.body.correo;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    conexion.query('INSERT INTO usuarionatu SET ?',{nombre:nombre,apellido:apellido,documento:documento,correo:correo,direccion:direccion,telefono:telefono}, (error, result)=>{
        if(error){
            console.log(error);}
        
    })
};

exports.guardar = (req,res) => {
    const nombreEmpre = req.body.nombreEmpre;
    const documento = req.body.documento;
    const nombreRepre = req.body.nombreRepre; 
    const correo = req.body.correo; 
    const direccion = req.body.direccion;
    const celular = req.body.celular;
    conexion.query('INSERT INTO usuariojuri SET ?', {nombreEmpre:nombreEmpre, nombreRepre:nombreRepre , documento:documento, correo:correo , direccion:direccion, celular:celular}, (error, result) => {
        if (error) {
            console.log(error);
        }else{
            
        }
    });
};

exports.actualizar = (req, res) => {
    const id = req.body.id;
    const nombreEmpre = req.body.nombreEmpre;
    const documento = req.body.documento;
    const nombreRepre = req.body.nombreRepre;
    const correo = req.body.correo;
    const direccion = req.body.direccion;
    const celular = req.body.celular;

    conexion.query('UPDATE usuariojuri  SET ? WHERE id = ?',
        [{
            nombreEmpre: nombreEmpre,
            documento: documento,
            nombreRepre: nombreRepre,
            correo: correo,
            direccion: direccion,
            celular: celular
        }, id],
        (error, result) => {
            if (error) {
                console.log(error);
            }
        }
    );
};

exports.update = (req, res) =>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const documento = req.body.documento;
    const correo = req.body.correo;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;

    conexion.query('UPDATE usuarionatu SET ? WHERE id = ?',

    [{ nombre:nombre ,
         apellido:apellido ,
          documento:documento ,
           correo:correo ,
            direccion:direccion ,
             telefono:telefono }, id], 
    (error, result) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
};
