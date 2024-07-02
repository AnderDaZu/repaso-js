
export const person = {
    firstName: 'Ander',
    lastName: 'Daz',
    age: 28,
    address: {
        city: 'New York',
        country: 'USA',
        zip: 51323,
        lat: 14.23232,
        lng: 34.2323
    },
    skills: ['HTML', 'CSS', 'JavaScript'],
    job: 'Developer',
    isMarried: false
} // as const;
// as const -> permite que no se pueda redefinir los valores de las propiedades del objeto, deja al objeto de solo lectura

/*
    todos los objetos en js se pasan por referencia, por ende si se redefine algún valor de x propiedad, 
    esta propiedad se actualiza en los objetos
*/
const person2 = person; // no es la forma 
person2.firstName = 'Ander2'

const person3 = { ...person, address: { ...person.address } }; // esta si pero es tediosa
person3.address.city = 'London';

const person4 = structuredClone(person); // esta es la forma ideal
person4.address.city = 'Paris';

console.log({ person, person2, person3, person4 })