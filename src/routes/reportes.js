const express =  require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM reporte',(err,rows,field)=>{
        if(!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.get('/:id',(req,res)=>{
    const{id} = req.params;
    mysqlConnection.query('SELECT * from reporte where id_reporte= ?',[id], (err,
        rows, fields) => {
        if(!err){
            res.json(rows);
            //res.json(rows[0]);
        }else{
            console.log(err);
        }
    
    });
});


router.post ('/',(req,res)=>{
    
    const {id,log,instancia,cantidad= obtenerCantidad()} = req.body;
    const query=`CALL insertar_reporte(?,?,?,?);`
        mysqlConnection.query(query,[id,log,instancia,cantidad], (err,
        rows, fields) => {
        if(!err){
            res.json({Status:"reporte insertado"});
            //res.json(rows[0]);
        }else{
            console.log(err);
        }
    
    });
});

//obtener la cantidad 
const { text } = require("express");
var fs = require("fs");

function obtenerCantidad(){

    var archivo = fs.readFileSync('./texto.txt', 'utf-8')
    console.log('Contenido del archivo....');
    var posicion =archivo.indexOf("texto")
    var contador = 0;
   while(posicion >= 0){
    contador++;
    posicion = archivo.indexOf("texto",posicion+1);
    console.log("contador: "+contador);
   }
return contador;
}
module.exports = router;