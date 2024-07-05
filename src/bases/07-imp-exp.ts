// Importaciones y exportaciones

// todo lo que vaya en {} quiere decir que fue por que se exporto de manera explicita -> import { owners } from 'ruta'
// si no esta en {} quiere decir que se exporto por defecto -> import herores from 'ruta'
// import heroes, { owners } from "../data/heroes";
import myHeroes, { owners, type Owner } from "../data/heroes"; // se puede asignar nombre cstm a la importación de exportación por defecto

const getHeroById = (id: number) => {
    return myHeroes.find( hero => hero.id === id );
}

export const getHeroById2 = (id: number) => (
    myHeroes.find( hero => hero.id === id )
)

export const getHeroesBayOwner = ( owner: Owner ) => {
    return myHeroes.filter( hero => hero.owner === owner ) ?? [];
}

// console.log( getHeroById(1) );
// console.log( getHeroById2(15) );
// console.log( getHeroesBayOwner('DC') );

// console.log({ owners });