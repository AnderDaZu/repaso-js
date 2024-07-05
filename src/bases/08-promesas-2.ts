import type { Hero } from "../data/heroes";
import { getHeroById2 } from "./07-imp-exp";

const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById2(id);

            hero 
                ? resolve(hero) 
                : reject('No se encontró heroe...');

            // ☝️ es igual a 👇

            // if ( hero ) {
            //     return resolve(hero);
            // }
            // reject('No se encontró heroe...');

        }, 2000 );
    });
    // .then( (success) => console.log(success))
    // .catch( (error) => console.log(error));
    
}

getHeroByIdAsync(10)
.then( (hero) => console.log(hero))
// .catch( alert ); // es igual a -> .catch( (error) => alert(error) );
.catch( (error) => console.log(error));