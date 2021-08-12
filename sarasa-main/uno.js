function mostrar() {

  let consulta;
  let nombre;
  let tipo;
  let sangre;

  let edad;
  let sexo;

  
  

  let promedioEdadReptiles=0;
  let cantidadDeReptiles=0;
  let acumuladorEdadDeReptiles=0;
  let flag=0;

  let mascotaMasJoven=0;
  let tipoMasJoven=0;
  let sexoMasJoven=0;

  let porcentajeDeAves=0;
  let cantidadAves=0;
  let cantidadMamiferos=0;

  let cantidadTotaldeMacostas=0;
  let mayorCantidadDeMascota;


  do {
    nombre=prompt("Ingrese nombre entre 3 y 8 caracteres").toLowerCase();
    while (!(nombre.length >3 && nombre.length <8)) {
      nombre=prompt("Ingrese nombre valido").toLowerCase();
    };

    tipo=prompt("Ingrese su tipo: Mamifero, ave o reptil").toLowerCase();
    while (!(tipo== "mamifero" || tipo== "ave" || tipo== "reptil")) {
      tipo=prompt("Tipo invalido.Ingrese su tipo : Mamifero, ave o reptil").toLowerCase();
    };

    if (tipo=="reptil") {
      alert("Si es reptil su animal es de sangre fria")
      sangre= "fria"
    }else{
    sangre=prompt("Indique su sangre: fria o calida").toLowerCase();
    while (!(sangre=="fria" || sangre== "calida")) {
      sangre=prompt("Tipo de sangre invalida. Indique su sangre: fria o calida").toLowerCase();
    }};

    edad=parseInt(prompt("Ingrese la edad"));

    while (!(edad>0)) {
      edad=parseInt(prompt("Ingrese una edad valida"))
    };

    

    if (tipo=="reptil") {
      cantidadDeReptiles++
      acumuladorEdadDeReptiles=acumuladorEdadDeReptiles+edad;
    }else if (tipo == "ave") {
      cantidadAves++
    }else(
      cantidadMamiferos++
    )
    
    

    sexo=prompt("Ingrese su sexo: M si es macho o H si es hembra").toLowerCase();
    while (!(sexo=="m" || sexo =="h")) {
      sexo=prompt("Ingrese un sexo valido. M o H").toLowerCase();
    }
    
    if (mascotaMasJoven < edad || flag==0) {
      sexoMasJoven=sexo;
      tipoMasJoven=tipo;
      mascotaMasJoven=edad;
      flag=1;
    }



  consulta=prompt("Desea seguir? Si o no").toLowerCase();
  } while (consulta== "si");

 //
 cantidadTotaldeMacostas= cantidadDeReptiles+ cantidadMamiferos+ cantidadAves;
 
 porcentajeDeAves=  cantidadAves*100/cantidadTotaldeMacostas;

  promedioEdadReptiles=acumuladorEdadDeReptiles/cantidadDeReptiles;
  alert("El promedio de edad de los reptiles es " + promedioEdadReptiles);

  alert("La mascota mas joven es de tipo " + tipoMasJoven + " y es de sexo "+ sexoMasJoven);

  alert("El procentaje de aves sobre la cantidad de mascotas es " + porcentajeDeAves);

  if (cantidadReptiles> cantidadAves && cantidadDeReptiles> cantidadMamiferos) {
    alert("La mayor cantidad de mascotas son Reptiles")
  }else if(cantidadAves> cantidadDeReptiles && cantidadAves> cantidadMamiferos)
alert("La mayor cantidad son de tipo ave")
else{
  alert("La mayor cantidad es de tipo mammifero")
}

}
