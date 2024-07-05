// Desestructuración de arreglos


const characters = [
    'Goku',
    'Vegeta',
    'Trunks',
    'Gohan',
    'Yamcha'
];

// La desestructuración de un arreglo es por posición
// si se agrega , quiere decir que se omite la desestructuración para el elemento que tiene la posición de la ,
const [ g, v, , g2, , g3 = 'otro' ] = characters;

console.log({ g, v, g2, g3  });

const returnArray = () => {
    return [ 123, 'ABC' ] as const;
    // se agrega as const para luego poder emplear métodos de acuerdo al tipo de dato de cada elemento del array
}

const [ numbers, letters ] = returnArray();

console.log( numbers.toLocaleString(), letters.toLocaleLowerCase());