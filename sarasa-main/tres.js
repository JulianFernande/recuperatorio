function mostrar() {

  let consulta;
  let tipoDeJuguete;
  let origen;
  let precio;

  let cantidadPelota=0;
  let cantidadMuñeca=0;
  let cantidadRompecabezas=0;

  let cantidadJImportado=0;
  let promedioPreciosDeJImportados=0;
  let precioJImportados=0;

  let cantidad=0;

 do {
  tipoDeJuguete=prompt("Que tipo de juguete es: Muñeca, rompecabezas o pelota").toLowerCase();
  while (!(tipoDeJuguete=="muñeca" || tipoDeJuguete=="rompecabezas"|| tipoDeJuguete=="pelota")) {
    tipoDeJuguete=prompt("INVALIDO. Que tipo de juguete es: Muñeca, rompecabezas o pelota").toLowerCase();
  };

  origen=prompt("De origen nacional o importado").toLowerCase();
  while (!(origen=="nacional" || origen=="importado")) {
    origen=prompt("ORIGEN INVALIDO. De origen nacional o importado").toLowerCase();
  };

  precio=parseInt(prompt("Ingrese el precio entre 1000 y 5000"));
  while (!(precio>1000 && precio <5000)) {
    precio=parseInt(prompt("Ingrese el precio entre 1000 y 5000"));
    
  }
  if (origen=="importado") {
    cantidadJImportado++
    precioJImportados=precioJImportados+precio;
  }

   switch (tipoDeJuguete) {
     case "pelota":
       cantidadPelota++
       precioTotalPelotas= precio
       break;
   
     case "muñeca":

     cantidadMuñeca++
       break;

      case "rompecabezas":

      cantidadRompecabezas++
        break;
   }
   

  consulta=prompt("Desea seguir registrando si o no")
 } while (consulta=="si");


promedioPreciosDeJImportados= precioJImportados/cantidadJImportado;
alert("El promedio de precios de juguetes importados es " + precioJImportados);

if (cantidadPelota> cantidadMuñeca && cantidadPelota> cantidadRompecabezas) {
 alert("El jueguete mas vendido fue la pelota");
}else if(cantidadMuñeca> cantidadPelota && cantidadMuñeca> cantidadRompecabezas){
  alert("El jueguete mas vendido fue la muñeca")
}else{
  alert("El jugete mas vendido fue el rompezabezas")
}


}
