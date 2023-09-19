/**
 * 
 * Variables
 * 
 * 
 * Las variables son contenedores que tienen multiples usos
 * y aplicaciones dentro de la programacion
 * 
 * Su declaracion dentro de JS es bastante sencilla, basta con
 * colocar alguna de las siguientes palabras reservadas:
 * 
 * 
 * -var
 * -let
 * 
 * 
 * Seguido de la palabra reservada, hay que asignarle un nombre a nuestra variable
 * Los nombres que le asignamos a una variable tienen 2 restricciones
 * 
 * 1. Nombres UNICOS e IRREPETIBLES
 * 2. Sin palabras reservadas
 *      https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar
 * 
 * Es importante saber que una variable puede o no tener un valor asignado desde un principio
 * 
 *      var datoVacio;
 *      let nuevoNombre;
 * 
 * A estas variables se les llama por el nombre de variables indefinidas
 * u undefined
 * 
 * Para asignar un valor a una variable, se utiliza el caracter igual '='
 * Si una variable se declara sin ningun valor asignado, esto nos permite mas delante en
 * el codigo asignarle el valor que se necesite 
 * 
 * Buenas practicas
 * 
 * -Asignar nombres significativos que nos permitan entender para que sirve una variable
 * -Utilizar la convencion camelCase para nombres de variables
 * -Utilizar nombres cortos de entre 2 y 3 palabras maximo
 * -Declarar todas mis variables al inicio del codigo
 * 
 *      Ejemplo:
 * 
 *      var edadUsuario = 22;
 *      
 * 
 * Malas practicas
 * 
 * -Utilizar nombres genericos y nada intuitivos
 * -Declarar variables que empiecen por un numero o que contengan un .
 * -Utilizar convenciones de nombres diferentes a camelCase (snake_case, kebab-case, lowercase, UPPERCASE)
 * -Asignar nombres muy largos
 * 
 *      Ejemplo:
 * 
 *      var declarandoconmalaspracticasquenoseentienden = 'hola';
 */

////////////////////////////////////////////////////////////////////////////////

var datoVacio;
let nuevoNombre;

/**
 * 
 * Tipos de dato
 * 
 * 
 * Dentro de la programacion, los tipos de dato se refieren al valor que almacena una variable
 * 
 * Cada tipo de dato puede ayudarnos a resolver una tarea con mayor facilidad y precision
 * si se declara de manera adecuada
 * 
 * 
 * En JS, tenemos los siguientes tipos:
 * number: datos numericos, pueden ser enteros o reales
 * string: cadenas de texto, caracteres
 * boolean: datos binarios (true | false), sirven para realizar operaciones logicas
 * null: para declarar sentencias con valor nulo o vacio
 * array: matrices unidimensionales que almacenan multiples datos
 * objetos (prototipo): para creacion de objetos o recopilacion de datos (JSON)
 * 
 * typeof('variable') es una funcion de JS que nos permite identificar el tipo de dato
 * que almacena una variable
 */


// Declarando variables con la palabra reservada 'var'

var edadUsuario = 22; //Tipo de dato number
var nombreUsuario = "Fernando" //Tipo de dato string
var apellidoUsuario = "Aguilar" //Tipo de dato string
var personaReal = true //Tipo de dato booleano
var gustosUsuario = ["Programacion", "Ingenieria", "Musica"] //Tipo de dato array (array de strings)

var usuario = { //Tipo de dato objeto
        nombre: "Fernando Alberto",
        apellidos: "Aguilar Cano",
        edad: 22,
        humano: true
}


// Declarando variables con la palabra reservada 'let'

let edad = 22; //Tipo de dato numerico
let numeroTelefonico = "321654987";
let nombre = "Alberto" //Tipo de dato string
let apellido = "Cano" //Tipo de dato string
let vive = true //Tipo de dato booleano
let gustos = [] //Tipo de dato array (vacio)
let nuevoUsuario = {} //Tipo de dato objeto (vacio)

////////////////////////////////////////////////////////////////////////////////

/**Scope y Hoisting
 * 
 * Scope y Hoisting son dos conceptos importantes dentro de JS, ambos se refieren al comportamiento que
 * tiene una variable dentro de nuestro codigo
 * 
 * El scope se refiere al alcance que tiene una variable dentro del codigo, en otras palabras, permite (o no)
 * que se pueda acceder a una variable invocandola o modificar su valor
 * 
 *  Tipos de scope o alcance de una variable:
 *     -global : se puede acceder a la variable desde cualquier parte del codigo
 *     -local : solo es posible acceder a la variable dentro del bloque de codigo en el que
 *              se encuentra declarada (funciones)
 * 
 * El hoisting (traducido literalmente como 'elevar') se refiere a la manera en que el motor del navegador encargado de interpetar
 *  codigo JS 'eleva' las variables, es decir, las manda al principio del contexto (no de manera visual ni literal)
 * 
 * Por ejemplo, gracias al Hoisting, podemos invocar o imprimir una variable incluso antes de declararla
 * 
 * Cabe destacar que el Hoisting solo aplica o se puede observar el comportamiento que toma una variable si es declarada
 *  con la palabra reservada var
 * 
 * 
 */

////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * var vs let
 * 
 * 
 * Actualmente, no es muy comun el uso de la palabra reservada 'var'
 * 
 * Esto es debido a una propiedad importante sobre las variables dentro del
 * lenguaje de programacion JS llamada 'scope'
 * 
 * Scope: hace referencia al tipo de alcance de una variable dentro del codigo
 * En otras palabras, nos permite (o no) acceder a una variable y modificar su valor dentro
 * del codigo, dependiendo de donde se encuentre declarada
 * 
 * Actualmente se evita utilizar var porque no es tan limitada ni
 * precisa/definida como lo es la palara reservada let (o como podria serlo const)
 * 
 * La mayoria de los navegadores actuales son compatibles con la plabra reservada let
 * 
 */


/**
 * 
 * Constantes
 * 
 * Al igual que las variables, las constantes son declaraciones de codigo al cual
 * se le pueden asignar valores de cualquier tipo
 * 
 * Se utilizan cuando necesitamos almacenar un valor que no pueda ser cambiado ni
 * reasignado en ninguna parte del codigo (por ejemplo, datos/info sensible o relacionadas
 * a un usuario
 * )
 * 
 * Utilizan por lo regular una convencion de escritura diferente al camelCase, siendo esta una
 * convencion similar al snake_case solo que en mayusculas
 * 
 * UPPER_SNAKE_CASE
 * 
 * ejemplo
 *      const NUMERO_PI = 3.141592
 */


const ID_USUARIO = '01';
const PHI_NUMBER = 1.61
const VALOR_INICIAL = 0;

////////////////////////////////////////////////////////////////////////////////


/** Conversion de datos
 * 
 * Dentro de JS podemos modificar dentro del codigo los tipos de dato de alguna variable
 * ya definida
 * 
 * Esto es esencialmente util, por ejemplo, cuando recibimos valores de un formulario
 * a traves de sus inputs, los cuales, por lo regular, se reciben como cadena de texto
 * por defecto
 */

let edadString = String (edad); //Conversion de number a string
let telefonoNumerico = Number (numeroTelefonico); //Conversion de string a number
let apellidoBooleano = Boolean (apellido); //Conversion a booleano

////////////////////////////////////////////////////////////////////////////////

/** Operador +
 * 
 * El operador '+' dentro de JS, nos permite, por ejemplo, realizar la suma de dos numeros
 * Sin embargo, tambien suele utilizarse para concatenar o unir cadenas de texto
 * 
 */

// Expected output "Fernando Alberto Aguilar Cano"
let nombreCompleto = nombreUsuario + " " + nombre + " " + apellidoUsuario +  " " + apellido;

// Expected output ?
let num1 = '1';
let num2 = '2';

// Que pasa si sumamos num1 + num2Number?
let num1Number = Number (num1);
let num2Number = Number(num2);


/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */