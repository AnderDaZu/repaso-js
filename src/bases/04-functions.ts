
function greetPerson( name: string) {
    return `Hello, ${name}`;
}

console.log(greetPerson('Ander'));

const greetPerson2 = (name: string): string => `Hi there, ${name}`;

const getUser = (uid: string): {} => {
    return {
        uid: uid,
        username: 'Ander002'

    }
}
// la función flecha de arriba es la misma de la de abajo
const getUser2 = (uid: string) => ({
    uid,
    username: 'Ander004'
});

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza'
    }
];

// find -> devuelve el primer elemento que coincida con el termino de busqueda
const hero = heroes.find( (h) => h.id === 1 );

console.log(greetPerson2('Ander2'));
console.log(getUser('XYZ-456'));
console.log(getUser2('WXY-567'));

// ? -> nullcheck: permite acceder a propiedades profundamente anidadas sin tener que verificar cada nivel de existencia.
// si encuentra que la propuedad no esta definida devuelve un undefinded
console.log(hero?.power?.toUpperCase());

