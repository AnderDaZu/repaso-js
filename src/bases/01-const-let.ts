/*
let vs var vs const

     Ámbito
var: Función, reasignable, redeclarable, hoisted (inicializado como undefined).
let: Bloque, reasignable, no redeclarable, hoisted (no inicializado).
const: Bloque, no reasignable, no redeclarable, hoisted (no inicializado).
*/

const firstName = 'Ander';
const lastName = 'Garcia';

export const fullName = firstName + ' ' +lastName

console.log({
    firstName,
    lastName
});
