import { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";


// al agregar async con vierte la función en una función que retorna una promesa
export const getImage = async () => {
    try {
        const resp = await giphyApi.get<GIFResponse>('/random2');
        
        return resp.data.data.images.downsized_medium.url;
        
    } catch (error) {
        
        throw "url no encontrada";
    }

    // return 'https://url-de-mi-sitio-web/image1.jpg';
}

// ☝️ = 👇
// export const getImagePromise = () => {
//     return new Promise( (resolve, reject) => {
//         resolve('https://url-de-mi-sitio-web/image2.jpg');
//         reject('Error...');
//     });
// }

getImage()
    .then( resp => console.log(resp))
    .catch( error => console.log(error) );

// console.log( getImage() );
// console.log( getImagePromise() );

