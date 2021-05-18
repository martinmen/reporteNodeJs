const { time } = require("console");
const { text } = require("express");
var fs = require("fs");
const { callbackify } = require("util");
const mysqlConnection = require('./database');

function obtenerCantidad(){
  var contardorReal = 0;
  var contador = 0;
   // var archivo = fs.createReadStream('./itecban-connectors.log.2021-04-30');
     var archivo = fs.createReadStream('./texto.txt',{encoding:'utf-8', autoClose: true})
     archivo.on('error',e=>callback(e))
     archivo.on('data',function (chunk) {
        let contador = 0;

      //const start = archivo.read();
        const textoParcial = chunk.toString();
        var posicion = textoParcial.indexOf("texto");//("******CIERRO CONEXION TUXEDO********")
        console.log("primer aparicion: "+posicion);
    while(posicion >= 0){
        contador++;
        posicion = textoParcial.indexOf("texto",posicion+1); //("******CIERRO CONEXION TUXEDO********",posicion+1);
         //    console.log("posicion: "+posicion);
        }
        
        contardorReal= contador;
        console.log("Contador real: "+contardorReal)
        console.log("contador!!: "+contador);
        contardorReal=  ()=>{return contador};
    })
   archivo.on('end',()=>{return contador.valueOf});
//console.log("afuera: "+contador)
return contardorReal;
}

var cantidad = obtenerCantidad();
console.log("afuera: "+cantidad);
var log = "Prueba de generarReporte";
var instancia = "Numero de la instancia";

const query=`CALL insertar_reporte(?,?,?,?)`
mysqlConnection.query(query,[id_reporte=0,log,instancia,cantidad], (err,
rows, fields) => {
if(!err){
    console.log("dato"+log+" "+instancia+" "+ cantidad+" "+ "insertado");
    }else{
        console.log(err);
    }
});
