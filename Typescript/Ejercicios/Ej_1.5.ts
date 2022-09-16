const secuencia: Array<number> = Array.from(Array(10).keys()); //También number[]
const animales: Array<string> = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa']; //También string[]
const cadenasYNumeros: Array<number | string> = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos: Array<number | string>[] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);