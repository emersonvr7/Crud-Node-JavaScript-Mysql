const express = require('express');
const router = express.Router();
const Swal = require('sweetalert2');
const path = require('path');

const conexion = require('./database/db');


router.get('/home', (req, res) => {
    res.render('Inicio/index.ejs')
;})



// Configurar el motor de plantillas EJS
router.get('/', (req, res) => {
    
    conexion.query('SELECT * FROM usuarionatu', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index.ejs', {results:results});
        }
    }) 
});

 
router.get('/user', (req, res) => {
    conexion.query('SELECT * FROM usuariojuri', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('Usuariosjuri/user.ejs', {results: results}); 
        }
    }) 
    
});

router.get('/editar/:id', (req,res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM usuariojuri WHERE id=?',[id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('Usuariosjuri/editar.ejs', {users:results[0]});
        }
    }) 
});




router.get('/data', (req, res) => {
    
    conexion.query('SELECT * FROM usuarionatu', (error, results) => {
        if (error) {
            throw error;
        } else {
            
            data = JSON.stringify(results)
            res.send(data);
        }
    }) 
});



router.get('/datos', (req, res) => {
    
    conexion.query('SELECT * FROM usuariojuri', (error, result) => {
        if (error) {
            throw error;
        } else {
            
            datos = JSON.stringify(result)
            res.send(datos);
        }
    }) 
});




//Ruta Crear
router.get('/create', (req, res) => {
    res.render('create.ejs')
;})



// Ruta Para Editar
router.get('/edit/:id', (req, res) => {
    const id =req.params.id;
    conexion.query('SELECT * FROM usuarionatu WHERE id=?',[id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit.ejs', {user:results[0]});
        }
    }) 
});
//Ruta Para eliminar segunda tabla
router.get('/eliminar/:id' , (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM usuariojuri WHERE id =?',[id],(error,result) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/user')
        }
    });
});


//Ruta Para eliminar
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM usuarionatu WHERE id = ?', [id], (error, result) =>{
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});


const crud = require('./controllers/crud'); 
router.post('/save', crud.save)
router.post('/guardar',crud.guardar)
router.post('/update', crud.update);
router.post('/actualizar', crud.actualizar);

module.exports = router;
