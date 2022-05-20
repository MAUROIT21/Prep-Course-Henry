// No cambies los nombres de las funciones.

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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
