console.log('Hola, Mundo')
//TIPOS DE DATOS:
//Esto es un comentario. tipos de datos en JS
//String es una cadena de caracteres(una frase, una palabra o incluso una sola letra).Tenemos que utilizar comillas simples '' o dobles ""
//booleans: true o false
//Null_ nulo_es un valor(por lo general hace referencia que una variable se encuentra vacia), pero esta definida y su valor es nulo)
//Number_Muy importante!!! Los numbers no utilizan comillas, si lo ves entre comillas es un string
//Undefined._una variable que no se encuentra definida
//Object=objeto, puede tener cualquier combinacion de los datos anteriores, son estructuras que nos permite agrupar todos tipos de datos de los anteriores

//Definicion Variables: var, let, const

//var_evita utilizarla

let miPrimeraVariable = "Mi primera variable" // mi variable let es un string. Let es una palabra reservada por js
//console.log(miPrimeraVariable); // Si queremos llamar la variable, en console no ponemos comillas, si las ponemos js piensa que llamamos al string.

//Reasignando valor a la variable:
miPrimeraVariable = 'esto ha cambiado' //Mi primera variable ha cambiado a un string, le hemos reasignado un valor.Esto se llama mutabilidad.
//console.log(miPrimeraVariable);

//Los booleans solo tienen valor true o false

let miprimerBoolean = true
let miSegundoBool = false

//Numbers. Las variables siempre empiezan por letras, importante hacer buena practica y el nombre de la variable debe estar acuerdo a lo que contiene

let miPrimerNumero = 0
let miNumero1 = 12
let miNumero2 = -258

console.log(miPrimeraVariable, miprimerBoolean, miPrimerNumero, miNumero2, miNumero1);

//UNDEFINED_si no le asignas valor a la variable, osea no le pones =

//let undef
//console.log(undef);

let nulo = null //Tiene asignado un valor nulo

//console.log(nulo);

//Null y undefined se comportan similar y siempre evaluan en falso

//console.log('nulo', 33, true, undef)

//OBJETO_agrupacion de datos

const miPrimerObjeto = {}//objeto vacio porque entre {} no contiene datos
//Los objetos tienen propriedades, no variables.
//Recuerda escribirla correctamente con , y :(mira el ejemplo)
//Si queremos imprimir solo parte del objeto recuerda utilizar "."(punto)

const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true, 

}
console.log(miObjeto);
console.log(miObjeto.unString);

//ARRAY
const arrVacio = []  //array vacio
const arr = [1, 2, 'Hola', 'miObjeto']
console.log(arrVacio, arr);
arr.push(5) //push agrega un elemento; si quieres agregar mas de un elemento hay que ir push por push
arrVacio.push(miPrimeraVariable);
//console.log(arr);
//console.log(miPrimeraVariable);


//Operaciones matematicas en js

const suma = 2 + 1
const resta = 5 - 3
const multiplicar = 2 * 3
const dividir = 6 / 2

//console.log ( suma, resta, multiplicar, dividir,);


//Modulo significa que me toma los dos valores, hace la operacion indicada y retorna el valor que sobra
//Para modulo se usa %

const modulo = 10 % 3
//console.log(modulo);

//Incrementar y decrementar numeros com ++ y --
//El valor de una constante no se puede cambiar
//let numero = 5
//numero++
//numero++
//numero++
//numero++
//numero++

//numero--
//numero--
//numero--
//console.log(numero);

//Operadores de asignacion_ asignamos en cuanto le queremos incrementar += ,decrementar -= , multoplicar *=, dividir /=, (mira el ejemplo de abajo)
let numero = 5
numero += 5
numero -= 5
numero *= 5
numero /= 5
//console.log(numero);

//Operadores de comparacion
//igualdad estricta
const resultado1 = 5 === 6
//igualdad no estricta
const resultado2 = 5 == '5'
//console.log(resultado1);
console.log(resultado2);
//Comparacion de menor y mayor

const resultado3 = 5 < 6
const resultado4 = 5 > 6
console.log(resultado3, resultado4);

// Comparacion menor igual <= o mayor >= es lo mismo que en ejemplo anterior
// Comparacion completamente desigual !== y != no es completamente desigual

//Operadores Logicos or, and y not
//or || evalua el primer valor que retorne true, le podemos encadenar varios or
//Con el or || los strings, objetos y numeros evaluan en positivo(true) y corta la cadena, a excepcion de numero 0 que evalua como false
const resultadoOr1 ='Hola' || false || true|| false|| true 
const resultadoOr = true || false
//console.log(resultadoOr1);

// and &&  nos retorna el primer false que encuentre, si no lo encuentra nos devuelve true, igual se le puede encadenar varias veces el and &&
// En caso de tener funciones que devuelvan el valor de true o false y que ademas hagan otras cosas si se van a ejecutar y si cortan la cadena
const resultandoAnd = true && true && false
//console.log(resultandoAnd);

//not ! nos devuelve el valor inverso, retorna el valor opuesto a lo que le indicamos

const resultadoNot = !true 
//console.log(resultadoNot);

//CONTROL DE FLUJO if y else

//if(){} y else{}
// A mi entender, al if le pongo las condiciones que necesito dentro de (), al else le pongo un consolelog por si no cumplen las condiciones

//const edad = 5
//if (edad > 5 && edad < 16) {
 //   console.log('El niño puede jugar');

//}else{
 //   console.log('El niño no puede jugar :(');
//}

//Control de flujo while, esto evalua en true hasta cuando encuentre un false no para
let x = 0;
while(x < 5) {
    console.log(x);
    x++
}
//console.log('terminando el loop');

//Control de flujo Switch, evalua una funcion o otra funcion. El ultimo caso que recibe, siempre es un difault(lo que se ejecuta por defecto)
//Los{} de los casos no son obligatorios
//Se añade break
//Switch depende de la variable que quieres que se ejecute.

//let = 2;
//switch (2) {
   // case 1: {
   //     console.log('yo soy caso 1');
   //     break;
  //  };
  //  case 2: {
  //      console.log('chanchito feliz');
  //      break;
  //  };
  //  case 3:{
  //      console.log('chanchito triste');
  //      break;
 //   };
  //  default:
  //      console.log('no hay chanchitos');
  //      break;
    
//}
//Control de flujo 'FOR', tiene 3 indicaciones: el valor inicial de nuestra variable, la condicion que debe cumplir nuestra variable, cual es la operacion que debe seguir cuando acabe nuestro loop


//for (let i = 0; i < 10; i++ ) {
  //  console.log(i);

//}

//Accediendo a los elementos de un array
//Recuerda que cuando empiezas a contar un array empieza desde 0, recuerda usar []
// Una de las propriedades de los array es length, esta propriedad nos permite obtener el largo de un arreglo, en mi ejemplo(5)
//Si yo quiero acceder por ejemplo a mi elemnto numero 3, en console debo indicar(mi constante[elemento3])
//Recuerda mirar las propriedades de los array. hay varias!

//const numeros = [1, 2, 'Hola', 4, 5]
//for (let i = 0; i < numeros.length; i++ ) {
     // console.log(i);
    // console.log(numeros[2]);
   // console.log(numeros[i]);
  
  //}

  //FUNCIONES
  //Para reutilizar codigos que hemos escrito , utilizamos funciones
  //Se escribe con la palabra function, seguido de la instruction que le queremos dar,()le damos los argumentos
  //Tengo que aprender a identar mi codigo= escribir de forma correcta, el codigo debe estar un espacio hacia la derecha dentro de la funcion
  //Para llamar la funcion la escribes directamente seguido de (), despues de acabar el codigo de la funcion
  //Los argumentos permiten modificar de manera dinamica lo que se encuentra dentro de la funcion
  //Cuando definimos una funcion, dentro de los parantesis se llaman argumentos
  //Cuando llamamos una funcion, lo que se encuentra dentro de las parantesis son parametros

  function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++ ) {
    console.log(arg1[i]);
  
  }

  }
  const numeros = [1, 2, 'Hola', 4, 5]
  const nombres = ['Irina', 'Karina', 'Chanchito feliz', 'Chanchito triste']
  iterar(numeros)
  iterar(nombres)












