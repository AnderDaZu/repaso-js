// Desestructuración de objetos

// interfaz
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
    dataHability?: {
        hability: string;
        level: number;
        skills: {
            fortaleza: string;
            habilidad: string;
        }
    };
    address?: {
        city: string;
        country: string;
        zip: number;
        lat: number;
        lng: number;
        coords: {
            lat: number;
            lng: number;
        }
    };
}

interface CreateHeroArgs {
    name: string;
    codeName: string;
    age: number;
    power?: string;
}

export const person: Hero = {
    name: 'Superman',
    age: 30,
    codeName: 'Clark',
    // power: 'Super fuerza',
    dataHability: {
        hability: 'Super velocidad',
        level: 100,
        skills: {
            fortaleza: 'Super fuerza',
            habilidad: 'Super velocidad'
        }
    },
    address: {
        city: 'New York',
        country: 'USA',
        zip: 51323,
        lat: 14.23232,
        lng: 34.2323,
        coords: {
            lat: 14.23232,
            lng: 34.2323
        }
    }
}

const { name, age, address, power = 'No tiene poder'  } = person;
const city2 = address?.city; // forma 1 para desestructurar el objeto en caso de marcarse como opcional en la interfaz
const city3 = person.address?.city; // forma 2 para desestructurar el objeto en caso de marcarse como opcional en la interfaz
let city: string | undefined;

if ( person.address ) { // forma 3 para desestructurar el objeto en caso se marcarse como opcional en la interfaz
    // Los paréntesis son necesarios aquí para que el intérprete no confunda la desestructuración con un bloque de código.
    ({ address: { city } } = person);
}

console.log({ name, age, city, city2, city3, power }); 

if (false) {
    const person2: Hero = {
        name: 'Robin',
        age: 40,
        codeName: 'Batman'
    }

    const { name, age } = person2;
    const city = person2.address?.city ?? 'No tiene ciudad';
    console.log({ name, age, city });
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({
// const createHero = (args: CreateHeroArgs) => ({
// const createHero = (args: any) => ({
    id: 'ABC-123',
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
    // name: args.name,
    // age: args.age,
    // codeName: args.codeName,
    // power: args.power ?? 'No tiene poder',
});

console.log(createHero(person));
console.log(createHero({
    name: 'Spiderman',
    age: 25,
    codeName: 'Punisher'
}));