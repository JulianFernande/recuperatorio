function mostrar() {
let nombre;
let carrera;
let sexo;

let cantidadDeMaterias;
let promedioAlumno;

let cantidadAlumnosFisica=0;
let cantidadAlumnosQuimica=0;
let cantidadAlumnosSistemas=0;

 let porcentajeEstudiantesFisica=0;
let porcentajeEstudiantesQuimica=0;
let porcentajeEstudianteSistemas=0;

let nombreMejorPromedio;
let edad;

let materias=0;
let edadMasJoven=0;
let nombreAlumnaMasJoven;

let flag=0;


  for (let i = 0; i <= 2; i++) {
    nombre= prompt("Nombre alumno").toLowerCase();
    carrera=prompt("Ingrese carrera. Fisica, quimica o sistemas").toLowerCase();
    while (!(carrera=="fisica" || carrera== "quimica" || carrera== "sistemas")) {
      carrera=prompt("Carrea INVALIDA. Ingrese carrera. Fisica, quimica o sistemas").toLowerCase();
    };

    sexo=prompt("Ingrese el sexo: Masculino, femenino o binario").toLowerCase();
    while (!(sexo== "masculino" || sexo== "femenino" || sexo== "binario")) {
      sexo=prompt("Sexo invalido. Ingrese el sexo: Masculino, femenino o binario").toLowerCase();
    };

    cantidadDeMaterias=parseInt( prompt("Introduzca cantidad de materias: entre 1 a 5"));
    while (!(cantidadDeMaterias >=1 && cantidadDeMaterias <=5)) {
      cantidadDeMaterias=parseInt( prompt("Cantidad Invalida. Introduzca cantidad de materias: entre 1 a 5"));
    };

    promedioAlumno=parseInt(prompt("Promedio de nota del alumno"));
    while (!(promedioAlumno >0 && promedioAlumno <=10)) {
      promedioAlumno=parseInt(prompt("PROMDIO INVALIDO. Promedio de nota del alumno"));
    };
    

    edad=parseInt(prompt("Ingrese su edad"));
    while (!(edad>=0)) {
      edad=parseInt(prompt("Dato invalido. Ingrese su edad"));
      
    };

    if (sexo=="femenino" || edadMasJoven< edad) {
      nombreAlumnaMasJoven=nombre;
    }
    if (carrera !="quimica"  ) {
      
    }

   switch (carrera) {
     case "fisica":
          if (flag==0 || promedioAlumno <promedioAlumnoFisica) {
            nombreMejorPromedio=nombre;
          }
          cantidadAlumnosFisica++
       break;
   
     case "quimica":

     cantidadAlumnosQuimica++
       break;

      case "sistemas":
      
      cantidadAlumnosSistemas++
      break;
   }

   
   
    
    
  };

  cantidadTotalDeAlumnos= cantidadAlumnosQuimica+ cantidadAlumnosSistemas+ cantidadAlumnosFisica;

  porcentajeEstudiantesFisica= cantidadAlumnosFisica*100/cantidadTotalDeAlumnos;
  porcentajeEstudiantesQuimica= cantidadAlumnosQuimica*100/cantidadTotalDeAlumnos;
porcentajeEstudianteSistemas= cantidadAlumnosSistemas*100/cantidadTotalDeAlumnos;



  alert("Nombre del mejor promedio de fisica es " + nombreMejorPromedio);

  alert("Porcentaje de cantidad alumnos de FISICA "+ porcentajeEstudiantesFisica +"%");
  alert("Porcentaje de cantidad alumnos de QUIMICA "+ porcentajeEstudiantesQuimica+ "%");
  alert("Porcentaje de cantidad alumnos de Sistemas" + porcentajeEstudianteSistemas +"%");
  


}
