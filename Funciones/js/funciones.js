/**Funciones en JavaScript
 * 
 * Las funciones son ampliamente utilizadas en los lenguajes de programacion
 * Hoy conoceremos su declaracion e invocacion dentro de JS
 * 
 * Se tratan de bloques de codigo que nos sirven para realizar una tarea
 * en especifico
 * 
 * Pueden recibir 0 o mas parametros, pero siempre devuelven un valor (return)
 * 
 * Son bastante utiles ya que podemos utilizar una misma funcion si la
 * declaramos de la manera correcta para resolver distintas situaciones
 * orientadas al planteamiento original de la funcion
 * 
 * Los nombres que le asignemos a una funcion deben de estar escritas
 * con la convencion camelCase, al igual que las variables
 * 
 * Las buenas practicas para asignar nombres a variables se mantienen para
 * la asignacion de nombres a funciones
 * 
 * Adicional a esto, tambien tenemos una palabra reservada para indicar
 * el comienzo de nuestra funcion, que es la palabra function
 * 
 * Seguido de la palabra reservada function, se le asigna un nombre a nuestra funcion,
 * despues se coloca un parentesis donde podremos colocar n cantidad de parametros, solo hay que
 * procurar no colocar demasiados
 * 
 * Por ultimo, se abren y cierran llaves {} que indican donde comienza({) y donde
 * termina (}) nuestro bloque de codigo
 * 
 * Para invocar o mandar a llamar una funcion y observar el resultado que se obtiene despues de
 * depurar el codigo, basta con seguir la siguiente regla de escritura
 * 
 * nombreDeMiFuncion();
 * 
 * Dependiendo de como sea declarada previamente, podemos utilizar el parentesis para colocar
 * los parametros con los que trabajara la funcion
 */

// Ejemplo de funcion que no devuelve ningun valor


function nuevaFuncion(){
    console.log("Mi nueva funcion");
}


/**Utilizando los parametros de la funcion
 * 
 * Como se mencionaba anteriormente, dentro del parentesis que va seguido del nombre de nuestra
 * funcion, podremos establecer n cantidad de parametros con los que se trabajan y a cambio obtenemos
 * un resultado
 * 
 * Vamos a realizar una funcion que calcule el area de un cuadrado
 * 
 * Como datos de entrada o parametros, necesitaremos la medida de uno solo de los lados,
 * ya que los lados de un cuadrado sabemos son todos iguales
 * 
 * La expresion matematica necesaria para realizar este calculo es la siguiente
 * perimetro = lado + lado + lado + lado
 * 
 * Esta expresion puede ser aun mas simplificada, de la siguiente manera
 * perimetro = lado*4
 * 
 * Esto es un ejemplo de refactorizacion de codigo, una importante buena practica dentro de la
 * programacion, ya que nos permite simplificar procesos y operaciones de manera que nuestro
 * codigo ocupe la menor cantidad de memoria posible, lo cual ayuda a optimizar su tiempo de 
 * carga
 * 
 * Conforme vayamos desarrollando codigo, va a ser mas sencillo entender como redactar y declarar procesos
 * de la manera mas simple posible
 */

function calcularPerimetro(l){
    p = l + l + l + l
    return p;
}

function perimetroSimplificado(l){
    p = l*4
    return p;
}

/**Mensajes en pantalla
 * 
 * Es importante valorar si, los procesos que realiza una funcion, son resultados que se espera
 * el usuario logre visualizar en pantalla, de ser asi, es necesario colocar mensajes que le
 * permitan entender al usuario que es el resultado que esta observando, para esto podemos realizarlo
 * de las siguientes maneras:
 * 
 * 1. Concatenando cadenas de texto
 * 2. Utilizando backtics ` `
 * 
 */


function mensajePerimetro(l){
    p = l*4
    return "El perimetro calculado es de: " + p + " metros";
}

function backticsPerimetro(l){
    let p = l*4
    return `El perimetro calculado es de: ${p} metros`;
}

/**Otras formas de usar una funcion
 * 
 * 
 * A diferencia de otras ramas de estudio, como las matematicas (Calculo) dentro de la
 * programacion, tambien se pueden recibir parametros como por ejemplo, cadenas de texto
 * 
 * Es importante entender que, la mayor parte de las funciones que implementemos en nuestra
 * aplicacion, van a manipular/trabajar con cadenas de texto que vengan, por ejemplo
 * de los inputs de nuestros formularios.
 */

function holaMundo(string){
    return string.toUpperCase();
}

function nuevoMensaje(mensaje){
    return mensaje.toLowerCase();
}

/**Funciones flecha | Fat arrow | Arrow function
 * 
 * Son similares a las funciones con nombre, solo que su sintaxis es mas concisa
 * 
 * Elimina el uso de la palabra reservada function, en su lugar, se declaran con las
 * palabras reservadas disponibles para la declaracion de una variable
 * 
 * En general, podemos observar que su sintaxis es mas concisa, esto es util para cuando
 * una funcion cuenta con una sola expresion, lo cual mejora su legibilidad
 * 
 * -var
 * -let
 * -const
 * 
 * Como buena practica, se declaran con la palabra reservada const para evitar que se le 
 * pueda redeclarar o reasignar su valor original y mantener su proposito original
 * 
 * 
 * Otras diferencias significativas en cuanto a las funciones normales o funciones con nombre
 * -Comportamiento del objeto .this
 * -Capacidad de usar una funcion como constructor (POO)
 */

//Sintaxis general
const funcionFlecha = (parametro) => parametro;

//Calcular perimetro en una sola linea con funciones flecha
const perimetroFlecha = (l) => "El perimetro claculado es: " + l*4 + " metros";

//Convertir texto a mayusculas
const mayusculasFlecha = (texto) => texto.toUpperCase();

//Convertir texto a minusculas
const minusculasFlecha = (texto) => texto.toLowerCase();


/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */
