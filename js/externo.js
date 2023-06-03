var puntaje = 0;
var intentos = 1;

const  correcto = ()  => {
  document.getElementById("imagen").src = "/img/pcolor.jpg";
  document.getElementById("texto").style.backgroundColor = "blue";
  document.getElementById("texto").style.fontFamily =
    " Times New Roman, Times, serif";
  document.getElementById("texto").innerHTML =
    "Felicitaciones, has seleccionado la opción correcta";
  document.getElementById("idIntentos").innerHTML = "1";
  document.getElementById("idPuntaje").innerHTML = "5";
}

// // correcto
// if (intentos == 1) {
//   puntaje = 5;
//   correcto();
// }

// if (intentos == 2) {
//   puntaje = 3;
//   correcto;
// }

// if (intentos == 3) {
//   puntaje = 1;
//   correcto;

// } else {
//   reiniciar;
// }

// if (intentos == 1) {
//   intentos = 2;
//   document.getElementById("imagen").src = "/img/pnegro.jpg";
//   document.getElementById("idIntentos").innerHTML = "1";
//   document.getElementById("texto").style.background = "blue solid";
//   document.getElementById("texto").innerHTML =
//     "Pokémon incorrecto, intentalo nuevamente";
// } else if (intentos == 2) {
//   intentos = intentos + 1;
// } else if (intentos == 3) {
//   intentos = intentos + 1;
// } else {
//   reiniciar;
// }

// const incorrecto = () => {
//   intentos = intentos +1;
//   document.getElementById("imagen").src = "/img/pnegro.jpg";
//   document.getElementById("idIntentos").innerHTML = "1";
//   document.getElementById("texto").style.background = "blue solid";
//   document.getElementById("texto").innerHTML =
//     "Pokémon incorrecto, intentalo nuevamente";
// };

const incorrecto = () => {
  if (intentos == 1) {
    intentos = intentos +1;
    document.getElementById("imagen").src = "/img/pnegro.jpg";
    document.getElementById("idIntentos").innerHTML = "1";
    document.getElementById("texto").style.background = "blue solid";
    document.getElementById("texto").innerHTML =
      "Pokémon incorrecto, intentalo nuevamente";
  } else if (intentos == 2) {
    intentos = intentos + 1;
  } else if (intentos == 3) {
    intentos = intentos + 1;
  } else {
    reiniciar;
  }
};

const reiniciar = () => {
  intentos = 1;
  puntaje = 0;
  document.getElementById("imagen").src = "/img/pnegro.jpg";
  document.getElementById("texto").innerHTML =
    "Seleccione el nombre del Pokemon Correcto";
  //   document.getElementById("texto").style.background = "black solid";
  document.getElementById("idPuntaje").innerHTML = "0";
  document.getElementById("idIntentos").innerHTML = "0";
  document.getElementById("texto").style.backgroundColor = "white";
};
