console.log(document.querySelector('title').textContent)


function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length == str2.length) {
      return true;
    } else {
      return false;
    }
  }

  console.log(tienenMismaLongitud('hola123', 'hola122'));

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50) {return true;} else {return false;}
  };

  console.log(mayorQueCincuenta(65));

  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x % y;
  }
  console.log(obtenerResto(10, 9));

  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num%2 == 0) {return true} else {return false}
  }

  console.log(esPar(12));

  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num%2 != 0) {return true} else {return false}
  }
  console.log(esImpar(12));

  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return num**2;
  }
  console.log(elevarAlCuadrado(10));

  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return num**3;
  }
  console.log(elevarAlCubo(2));

  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return num**exponent;
  }
  console.log(elevar(2, 5));
  console.log(elevar(1, 4));
  console.log(elevar(3, 3));

  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.round(num);
  }
console.log(redondearNumero(1.459));
console.log(redondearNumero(1.51));


function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num);
  }
  console.log(redondearHaciaArriba(2.12));
  console.log(redondearHaciaArriba(0.9));

  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    const nums = [];
    const indices = [];

    for (let i = 0; i < 5; i++) {   
        indices.push(i);
        nums.push(Math.random());
    }
    //console.log (indices);
    return nums;
  }
  console.log(numeroRandom());

  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) {return 'Es positivo'} 
    else if (numero < 0) {return 'Es negativo'} 
    else if (numero == 0) {return false};
      
  }
  console.log(esPositivo(8));
  console.log(esPositivo(-8));
  console.log(esPositivo(0));


  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str + '! ';
  }
  console.log(agregarSimboloExclamacion('Hola Mundooo'));

  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    return nombre + ' ' + apellido;
  }
  console.log(combinarNombres('mauro', 'sommacal'));

  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    let saludo = 'Hola ';
    return saludo + nombre + '!.'
  }
  console.log(obtenerSaludo('Pedro'));

  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return alto*ancho;
  }
  console.log(obtenerAreaRectangulo(2, 3));

  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return (base*altura)/2;
  }
  console.log(areaDelTriangulo(1,4));

  function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí

    return 'El valor en Dolares es: ' + euro*1.2;
  }
console.log(deEuroAdolar(200));
console.log(deEuroAdolar(50));


function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
    if (letra.length == 1) {
        
      if (
          letra == 'a' || letra == 'A' || 
          letra == 'e' || letra == 'E' || 
          letra == 'i' || letra == 'I' || 
          letra == 'o' || letra == 'O' || 
          letra == 'u' || letra == 'U') 
      {return 'Es vocal!'} else {return 'NO es vocal!'}
    } else {return 'Dato incorrecto, tiene mas de una letra... Por favor ingrese una vocal'};
       
  }

  console.log('*******************')
  console.log('Prueba de vocal: ')
  console.log(esVocal('a'));
  console.log(esVocal('A'));
  console.log(esVocal('f'));
  console.log(esVocal('palabra'));



console.log('////////////////////////////////////')
console.log('HOME WORK 2')
console.log('////////////////////////////////////')
console.log('')


function foo () {
    console.log(arguments);
    console.log(arguments.length)
    console.log(arguments[2])
}

console.log(foo(1,10,20))
//console.log(arguments) // undefined, solo se ve dentro de la funcion

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if (x>y) {return x} else if (x==y) {return 'son iguales'} else {return y}
  }
  console.log(obtenerMayor(110,11));
  
  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    if (edad > 18) {return 'Allowed'} else {return 'Not Allowed'}
  }
console.log(mayoriaDeEdad(18));


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
console.log(conection(1))
console.log(conection(2))
console.log(conection(0))
console.log(conection(10))

  
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
  console.log(saludo('aleman'))
  /* 
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
  console.log(colors('blue'))

  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero == 10 || numero == 5) {return true} else {return false}
  }
  console.log(esDiezOCinco(10))
  console.log(esDiezOCinco(5))
  console.log(esDiezOCinco(102))


  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero < 50 && numero > 20) {return true + 'es verdadero'} else {return false}
  }
  console.log(estaEnRango(35)) //true
  console.log(estaEnRango(21)) // true
  console.log(estaEnRango(51)) // false
  
  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    console.log(Math.floor(numero), numero);
    if (Math.floor(numero) != numero) {return false} else {return true}
  }
  console.log(esEntero(9.3))


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
  
  console.log(fizzBuzz(3))
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(33.121))

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

  console.log(operadoresLogicos(6,80,7));

  console.log('Numeros primos:')
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
        console.log('ENTRE EN if del for: ! ', numero, ' % ', i, ':', numero%i)
        return false;
      }
      console.log(numero, ' % ', i, ':', numero%i)
    }
    return true;
  }
  
  //console.log(esPrimo(15)) // NO ES
  //console.log(esPrimo(1)) // 
  console.log(esPrimo(7)) // ES
  //console.log(esPrimo(13)) // ES

  
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if (valor == true) {return 'Soy verdadero'} else if (valor == false) {return 'Soy falso'}
  
  }
  console.log(esVerdadero(true)); 
  console.log(esVerdadero(false));


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
  console.log(tablaDelSeis());

  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene  3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    if (numero > 99 && numero < 1000) {return true} else {return false}
    
  }
  console.log(tieneTresDigitos(123));

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
  console.log(doWhile(0));
  
console.log('////////////////////////////////////')
console.log('HOME WORK 3 - ')
console.log('////////////////////////////////////')
console.log('')


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}
console.log(devolverUltimoElemento([11,22,32]));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}
//console.log(incrementarPorUno([11,22,33,44,55]));

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray([10,11,12], 100));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray([11,22,33,44,55], 84))

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 let separadas = '';
  for (let i = 0; i < palabras.length; i++) {
    separadas += palabras[i] + ' '; 
 }
 return separadas;
}
console.log(dePalabrasAFrase(['Henry']));

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      flag = true;
    }
  }
  return flag;
}
console.log(arrayContiene(['Uno','Dos', '+++', 'Tres','Cuatro'], 'Dos'));
console.log(arrayContiene(['Uno','Dos', '+++', 'Tres','Cuatro'], 'Cinco'));

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
console.log(agregarNumeros([4,10,2,100]))

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  let promedio = suma / resultadosTest.length;
  return promedio;
}
console.log(promedioResultadosTest([4,10,2,100]))


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {mayor = numeros[i]}
  }
  return mayor;
}
console.log(numeroMasGrande([4,10,2,100]));


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicacion = 1;

  if (arguments.length == 0) {return 0};
  if (arguments.length == 1) {return arguments[0]};
  if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      multiplicacion *= arguments[i];
    }
  }
  
  return multiplicacion;
}
console.log(multiplicarArgumentos(2,3,10));

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayores = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      mayores++;
    }
  }
  return mayores;
}
console.log(cuentoElementos(20,32,10,18,19));


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {return 'Es fin de semana'} 
  else {return 'Es dia laboral'}
} 
console.log(diaDeLaSemana(1));


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false
}
console.log(empiezaConNueve(99987));

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  //cuando vea que uno no es igual ya sale
  for (let i = 0; i <= arreglo.length; i++) {
    if (arreglo[i] !== arreglo[i+1]) {return false}
  } 
  return true;
} 
console.log(todosIguales([2,2,2,2]));

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];

  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}
console.log(mesesDelAño(['Enero','Marzo','Agosto']));

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {nuevo.push(array[i])}
  }
  return nuevo;
}
console.log(mayorACien([50,100,101,200,150]))


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let contador = 0;
  let suma = numero;
  nuevoarr = [];
  
  for (var i = 0; i < 10; i++) { // aca con var = i permite que se vea luego fuera del for.
    suma += 2;
    if (suma == i) {break} else {
      nuevoarr.push(suma);
    }
  }
  if (i<10) {return 'Se interrumpio la ejecucion';} 
  else {return nuevoarr;}

}
console.log(breakStatement(-2))

/* console.log(breakStatement(1))
console.log(breakStatement(2))
console.log(breakStatement(-2))
 */

console.log('/////////////////////////////////////')
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let contador = 0;
  let suma = numero;
  nuevoarr = [];
  
  for (var i = 0; i < 10; i++) { // aca con var = i permite que se vea luego fuera del for.
    //console.log(i, suma);
    if (i == 4) {/* console.log('5ta iteracion, continue'); */ continue} else {
      suma += 2;
      nuevoarr.push(suma);
    }
  }
  return nuevoarr;

}
console.log(continueStatement(2))

console.log('////////////////////////////////////')
console.log('HOME WORK 4 - OBJETOS')
console.log('////////////////////////////////////')
console.log('')


function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {return 'Meow!'}
  }
//  console.log(gato.meow());
  return gato;

}
console.log(crearGato('Pinky', 12));
//console.log(crearGato)


function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  /* var objeto = {
    property: null
  } */
  objeto[property] = null;

  return objeto;
}
console.log(agregarPropiedad('perro', 'raza'));

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  
  objeto[metodo]();
}
//console.log(invocarMetodo('persona','saludar'))

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var objetoMisterioso = {
    numeroMisterioso: 4
  }
  return objetoMisterioso.numeroMisterioso * 5; 
}
console.log(multiplicarNumeroDesconocidoPorCinco())

  /* function eliminarPropiedad (objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    
    var objeto = {
      idMisterio: 1,
      name: 'Harry Potter',
      descripcion: 'Soy el misterio 1',
      soy: function () {return this}
    }
    console.log(objeto.soy());

    delete objeto[unaPropiedad];
    var muestroObjeto = objeto;

    return muestroObjeto;

  }
  console.log(eliminarPropiedad('MisteriosPeliculas', 'descripcion')) */

function eliminarPropiedad (objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  }
  return usuario;

}      
console.log(nuevoUsuario('Mauro','mauro@gmail.com','123456'))

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  var usuario = {
    nombre: 'mauro',
    email: 'javascript@frontEnd.com',
    password: 'qwerty'
  }

  if (usuario['email']) {return true} else {return false}

}
console.log(tieneEmail('pepito'))

// ASIGNO NOMBRE AL OBJETO USUARIO PARA USARLO EN LAS SIGUIENTES FUNCIONES =>
var userTest = {
  nombre: 'mauro',
  email: 'javascript@frontEnd.com',
  password: 'qwerty',
  amigos: []
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  /* if(objeto[propiedad]) {
    return true;
  } else {
      return false;
} */

  if (objeto.hasOwnProperty(propiedad)) {return true} else {return false}
}

console.log(tienePropiedad(userTest, 'Password'));

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario['password'] === password;

}

console.log(verificarPassword(userTest, 'qwerty'));

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario['password'] = nuevaPassword;
  return usuario;
}

console.log(actualizarPassword(userTest, 'nuevaPassword'));

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

console.log(agregarAmigo(userTest, 'nuevoAmigo222'));

usuariosPremium = [
  {
    userId: 1,
    name: 'Pedrito',
    esPremium: false
  },
  {
    userId: 2,
    name: 'Juan',
    esPremium: false
  },
  {
    userId: 3,
    name: 'Romina',
    esPremium: false
  }
]

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}
console.log(pasarUsuarioAPremium(usuariosPremium))

// likes es usuarios
var likesUsuario = {
  posts: [
    {
      postId: 1,
      likes: 4
    },
    {
      postId: 2,
      likes: 24
    }
  ]
} 
//console.log(likesUsuario.posts.length);
//console.log('likesUsuario.length: ', likesUsuario.posts[0].likes + likesUsuario.posts[1].likes)
 
function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  var sumaLikes = 0;
  for (let i = 0; i < usuario.posts.length; i++) {
    sumaLikes += usuario.posts[i].likes; 
  }
  return sumaLikes;
}
console.log(sumarLikesDeUsuario(likesUsuario));


var productos = {
  precio: 100,
  porcentajeDeDescuento: .10,
  /* calcularPrecioDescuento: function() {
    return this.precio*this.porcentajeDeDescuento;
  } */
}
//console.log(productos.calcularPrecioDescuento());
console.log('')
console.log('///***///')

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function () {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
    //return 'Agregue una funcion/metodo'
  };
  //return producto.calcularPrecioDescuento();
  return producto;
}
console.log(agregarMetodoCalculoDescuento(productos));


console.log('////////////////////////////////////')
console.log('HOME WORK 5 - CLASES Y PROTOTIPOS')
console.log('////////////////////////////////////')
console.log('')

function crearUsuario(/* opciones */) {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


  class Usuario {
    
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;

    }
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + '!';
    }
  }

/*   var maurito = new Usuario (opciones);
  console.log(maurito); */

  return Usuario;
}

/* var unUsuario = {
  usuario: 'Mauro123',
  nombre: 'Mauro Sommacal',
  email: 'm.s@hotmail.com',
  password: '456123'
} */
console.log(crearUsuario(/* unUsuario */));


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  };
}
/* MI VERSION DEL EJERCICIO CON OTRA FUNCIONALIDAD. 
function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function (){return 'Hello World!'}

  return Constructor.prototype.ladrar();
}

class Mascotas {
  constructor () {
    this.tipo = 'raza pepe';
    this.raza = 'Labrador'
  } 
  ladrar() {return 'UAU UAU! RUF RUF!!!'}
}

console.log(agregarMetodoPrototype(Mascotas)); */

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
   var procesar= this
    .split('')
    .reverse()
    var final = procesar.join('')
    return final;
  }
}
agregarStringInvertida(); //Primero agrego el metodo al objeto String, ejecutando la funcion.
// Luego la utilizo para dos strings de ejemplo:
var mystr = 'Probando!!'
console.log(mystr.reverse());
var numerosalReves = '123456789'
console.log(numerosalReves.reverse());

/* solucion original de henry: 
function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}
agregarStringInvertida();

var mystr = 'Probando!!'
console.log(mystr.reverse()); */


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function () {
        return {
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
    }
    
  }


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const person = new Persona(nombre, apellido, edad, dir)
  return person;
}

//console.log(crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123"))
  

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function (){
    return this.nombre + ', ' + this.edad + ' años'
  }

}
agregarMetodo();

var integrante1 = crearInstanciaPersona('Pepito', 'Pepon', 45, 'Rivadavia 1500');
console.log(integrante1);
console.log(integrante1.datos())
console.log(integrante1.detalle())