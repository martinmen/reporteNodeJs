const { time } = require("console");
const { text } = require("express");
var fs = require("fs");
const mysqlConnection = require('./database');

function obtenerCantidad(){
    var contador = 0;
    var archivo = fs.createReadStream('./itecban-connectors.log.2021-04-30');
    // var archivo = fs.createReadStream('./texto.txt');
    archivo.setEncoding('utf-8')
    archivo.on('data',function(data){
      // console.log(data.toString());

          var posicion = data.indexOf("******CIERRO CONEXION TUXEDO********")
         // console.log("primer aparicion: "+posicion);

      // if(-1 != data.indexOf("******CIERRO CONEXION TUXEDO********")){

        while(posicion >= 0){
            contador++;
              posicion = data.indexOf("******CIERRO CONEXION TUXEDO********",posicion+1);
             // console.log("posicion: "+posicion);
             }
      ////////////////
      /*
      if(-1 != data.indexOf("texto")){

        console.log("entro al if")
           contador++;
       }
    */
       //////////////////
    /*while(posicion >= 0){
        contador++;
          posicion = data.indexOf("****CIERRO CONEXION TUXEDO******",posicion+1);
          console.log("posicion: "+posicion);
         } */
        // console.log("contador: "+contador);
       //console.log(data.toString());
 
    });
  
console.log("afuera: "+contador)
  //  console.log('Contenido del archivo....');
   // var posicion =archivo.indexOf("******CIERRO CONEXION TUXEDO********")
   // var contador = 0;
  // while(posicion >= 0){
    //contador++;
  //  posicion = archivo.indexOf("******CIERRO CONEXION TUXEDO********",posicion+1);
    //console.log("contador: "+contador);
  // }
   

return contador;
}
var cantidad = obtenerCantidad();
console.log (cantidad);
var log = "Prueba de generarReporte";
var instancia = "Numero de la instancia";

const query=`CALL insertar_reporte(?,?,?,?)`
mysqlConnection.query(query,[id_reporte=0,log,instancia,cantidad], (err,
rows, fields) => {
if(!err){
    console.log("dato insertado");
    }else{
        console.log(err);
    }
});
