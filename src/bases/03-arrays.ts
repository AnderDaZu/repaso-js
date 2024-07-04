
// (number)[] -> sirve para indicar los tipo de datos que pueden tener los elementos del array
const numberArray: (number)[] = [ 
    1, 2, 3, 4, 5
];
// ] as const; // para dejar de solo lectura el array

// agregar elemento al final del array
numberArray.push(6);

// eliminar ultimo elemento del array
numberArray.pop();

// (string|number)[] -> sirve para indicar los tipo de datos que pueden tener los elementos del array
const array2: (number|string)[] = [ ...numberArray ];
array2.push('6');
array2[0] = 10;

console.log({
    numberArray,
    array2
});


export { };