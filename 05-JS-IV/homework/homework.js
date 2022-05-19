// No cambies los nombres de las funciones.


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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
