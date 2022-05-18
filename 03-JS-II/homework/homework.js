// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x>y) {return x} else if (x==y) {return 'son iguales'} else {return y}
}
//console.log(obtenerMayor(110,11));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad > 18) {return 'Allowed'} else {return 'Not Allowed'}
}
//console.log(mayoriaDeEdad(18));


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  switch (status) {
      case 1:
          return 'Online'
          break;
      case 2:
          return 'Away'
          break;
      default:
          return 'Offline'
          break;
  }
}
/* console.log(conection(1))
console.log(conection(2))
console.log(conection(0))
console.log(conection(10))
 */

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
      case 'aleman':
          return 'Guten Tag!'
          break;
      case 'ingles':
          return 'Hello!'
          break;
      case 'mandarin':
              return 'Ni Hao!'
              break;
      default: 
      return 'Hola!'
      break;
                  
  }
}
/* 
console.log(saludo('aleman'))
console.log(saludo('ingles'))
console.log(saludo('mandarin'))
console.log(saludo('undefined'))
console.log(saludo('otro idioma'))
 */
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
      case 'blue':
          return 'This is blue'
      case 'red':
          return 'This is red'
      case 'green':
          return 'This is green'
      case 'orange':
          return 'This is orange'
                                            
      default:
          return 'Color not found'
          break;
  }
}
//console.log(colors('blue'))

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero == 10 || numero == 5) {return true} else {return false}
}
/* console.log(esDiezOCinco(10))
console.log(esDiezOCinco(5))
console.log(esDiezOCinco(102))
 */

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {return true + 'es verdadero'} else {return false}
}
/* console.log(estaEnRango(35)) //true
console.log(estaEnRango(21)) // true
console.log(estaEnRango(51)) // false
 */
function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
//  console.log(Math.floor(numero), numero);
  if (Math.floor(numero) != numero) {return false} else {return true}
}
//console.log(esEntero(9.3))


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0) return 'fizz';
  if (numero % 5 === 0) return 'buzz';
  if (numero % 15 === 0) return 'fizzbuzz';
  return numero;

}

/* console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(33.121))
 */
function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 > num2 && num1 > num3 && num1 > 0) return 'Número 1 es mayor y positivo';
  if (num1 < 0 || num2 < 0 || num3 < 0) return 'Hay negativos';
  if (num3 > num1 && num3 > num2) return num3 + 1;
  if (num1 == 0 || num2 == 0 || num3 == 0) return 'Error';
  return false;
}

//console.log(operadoresLogicos(6,80,7));

//console.log('Numeros primos:')
function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i <= numero; i++) {
    if(numero % i === 0) {
      //console.log('ENTRE EN if del for: ! ', numero, ' % ', i, ':', numero%i)
      return false;
    }
//    console.log(numero, ' % ', i, ':', numero%i)
  }
  return true;
}

//console.log(esPrimo(15)) // NO ES
//console.log(esPrimo(1)) // 
//console.log(esPrimo(7)) // ES
//console.log(esPrimo(13)) // ES


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor == true) {return 'Soy verdadero'} else if (valor == false) {return 'Soy falso'}

}
/* console.log(esVerdadero(true)); 
console.log(esVerdadero(false));
 */

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    let resultado = i*6;
    arr.push(resultado);
  }
  return arr;
}
//console.log(tablaDelSeis());

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene  3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {return true} else {return false}
  
}
//console.log(tieneTresDigitos(123));

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let rep = 1;
  //let nums = [];
  do {
    rep++;
    numero += 5;
    //nums.push(numero);
  } while (rep < 9);
  //console.log(nums);
  return numero;
}
//console.log(doWhile(0));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
